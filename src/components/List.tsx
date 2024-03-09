import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Col, Container, Row } from 'react-bootstrap';
import style  from './list.module.scss';
import PhotoList from './PhotoList';
const List: React.FC = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
  
    useEffect(() => {
      return () => {
        localStorage.setItem('listScrollPosition', JSON.stringify(scrollPosition));
      };
    }, [scrollPosition]);
  
    useEffect(() => {
      const savedScrollPosition = localStorage.getItem('listScrollPosition');
      if (savedScrollPosition) {
        setScrollPosition(JSON.parse(savedScrollPosition));
      }
    }, []);
  
  return (
    <section>
        <Container>
            <Row>
                <Col>
                    <div className={`${style.header}`}>
                    <div className={`${style.headerTitle}`}>
                        <h1>List Page</h1>
                    </div>
                    <div>
                    <Link to="/" className="btn btn-light">Go Back</Link>
                    </div>
                    </div>
                    <div className={`${style.contentBlock}`}>
                    <PhotoList setScrollPosition={setScrollPosition} />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  );
};

export default List;
