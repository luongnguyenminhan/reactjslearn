import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

function DateTable() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHolidays();
  }, []);

  const fetchHolidays = async () => {
    try {
      const res = await axios.get("https://corej2.com/api/holidays");
      setData(res.data.data);
      console.log('check data', res.data.data);
      
    } catch (error) {
      console.error("Error fetching package:", error);
    }
  };


  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>STT</th>
          <th>Ngày lễ</th>
          <th>Tên ngày lễ</th>
          <th>Ghi chú</th>
          <th>Chi tiết</th>
        </tr>
      </thead>
      <tbody>
      {data?.map((date, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{date.date}</td>
            <td>{date.name}</td>
            <td>{date.categoryName}</td>
            <td>Xem chi tiết こんにちは</td>
          </tr>
        ))}
        
      </tbody>
    </Table>
  );
}

export default DateTable;