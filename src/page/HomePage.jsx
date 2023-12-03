import React from 'react'
import HomeNav from '../components/HomeNav'
import Container from 'react-bootstrap/esm/Container'
import DateTable from '../components/DateTable'

function HomePage() {
  return (
    <>
        <HomeNav />

        <Container>
            <div style={{textAlign:'center'}}>
                <h1>Ngày lễ nè</h1>
            </div>
            <DateTable />

        </Container>
    </>

  )
}

export default HomePage