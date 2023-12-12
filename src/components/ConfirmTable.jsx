import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Major', headerName: 'Major', width: 70 },
  { field: 'Course', headerName: 'Course', width: 100 },
  { field: 'AbsentSlots', headerName: 'Absent Slots', width: 100 },
  { field: 'AverageScore', headerName: 'Average Score', width: 120, type: 'number' },
  { field: 'CourseStatus', headerName: 'Course Status', width: 120 },
  { field: 'FailedCourses', headerName: 'Failed Courses', width: 120 },
  { field: 'Club', headerName: 'Club', width: 70 },
  { field: 'ParttimeJob', headerName: 'Part-time Job', width: 120 },
  { field: 'Scholarship', headerName: 'Scholarship', width: 120 },
  { field: 'LearningMethod', headerName: 'Learning Method', width: 150 },
];


const rows = [
  {
    id: '001',
    Major: 'AI',
    Course: 'MAE101',
    AbsentSlots: 0,
    AverageScore: 9.1,
    CourseStatus: 'Pass',
    FailedCourses: 0,
    Club: 'No',
    ParttimeJob: 'No',
    Scholarship: '100%',
    LearningMethod: 'Self-learning',
  },
  {
    id: '002',
    Major: 'AI',
    Course: 'CSD203',
    AbsentSlots: 1,
    AverageScore: 8.5,
    CourseStatus: 'Pass',
    FailedCourses: 1,
    Club: 'Yes',
    ParttimeJob: 'Yes',
    Scholarship: '50%',
    LearningMethod: 'Group-study'
  },
  {
    id: '003',
    Major: 'SE',
    Course: 'MAD101',
    AbsentSlots: 2,
    AverageScore: 7.0,
    CourseStatus: 'Not Pass',
    FailedCourses: 2,
    Club: 'No',
    ParttimeJob: 'No',
    Scholarship: '0%',
    LearningMethod: 'Self-learning'
  }
];

export default function DataTable() {
  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 4 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}