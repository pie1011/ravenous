import React from 'react';
import styles from './Business.module.css';
import Card from 'react-bootstrap/Card';

const business = {
    imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
};

const Business = () => {
    return (
        <Card className={styles.BusinessCard}>
            <div>
                <img src={business.imageSrc} className="card-img-top" alt='' />
            </div>
            <div className="card-body">
                <h2 className="Card-title">{business.name}</h2>
                <p className="card-text p-0 m-0">{business.address}</p>
                <p className="card-text">{business.city}, {`${business.state} ${business.zipCode}`}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{business.category}</li>
                    <li className="list-group-item">{`${business.rating} stars`}</li>
                    <li className="list-group-item">{`${business.reviewCount} reviews`}</li>
                </ul>
        </Card>
    );
};

export default Business;