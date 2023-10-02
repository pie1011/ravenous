import React from 'react';
import styles from './Business.module.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';


const Business = (props) => {
    return (
        <Container className={styles.BusinessCard}>
        <Card className='m-3'>
            <div>
                <img src={props.imageSrc} className="card-img-top img-thumbnail" alt='' />
            </div>
            <div className="card-body">
                <h2 className="Card-title">{props.name}</h2>
                <p className="card-text p-0 m-0">{props.address}</p>
                <p className="card-text">{props.city}, {`${props.state} ${props.zipCode}`}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{props.category}</li>
                    <li className="list-group-item">{`${props.rating} stars`}</li>
                    <li className="list-group-item">{`${props.reviewCount} reviews`}</li>
                </ul>
        </Card>
        </Container>
    );
};

export default Business;