import React from 'react';
import styles from './Business.module.css';

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
        <div className={styles.business}>
            <div className={styles.imageContainer}>
                <img src={business.imageSrc} alt='' />
            </div>
            <h2>{business.name}</h2>
            <div className={styles.businessInformation}>
                <div className={styles.businessAddress}>
                    <p>{business.address}</p>
                    <p>{business.city}</p>
                    <p>{`${business.state} ${business.zipCode}`}</p>
                </div>
                <div className={styles.businessReviews}>
                    <h3>{business.category}</h3>
                    <h3 className={styles.rating}>{`${business.rating} stars`}</h3>
                    <p>{`${business.reviewCount} reviews`}</p>
                </div>
            </div>
        </div>
    );
};

export default Business;