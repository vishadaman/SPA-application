import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Favorites from './Favorites';
import { Col, Container, Row } from 'react-bootstrap';
import style from '../mainStyle.module.scss';
interface DashboardProps {
    favorites: number[];
  }
const Dashboard: React.FC<DashboardProps> = ({ favorites }) => {
    useEffect(() => {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);
  return (
    <section>
    <Container>
      <Row className={`${style.centerBlock}`}>
        <Col lg={12} className='text-center'>
          <h1 className='mb-1'>Dashboard Page</h1>
          <Link to="/list">
            <button className="btn btn-primary">Go to List</button>
          </Link>
        </Col>
        <Col lg={12}>
            <Favorites favorites={favorites} />
        </Col>
        
      </Row>
    </Container>
  </section>
  );
};

export default Dashboard;
