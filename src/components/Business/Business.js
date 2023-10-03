import React from 'react';
import styles from './Business.module.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

class Business extends React.Component {
    render() {
        return (
            <Container className={styles.BusinessCard}>
            <Card className='m-3'>
                <div>
                    <img src={this.props.imageSrc} className="card-img-top img-thumbnail" alt='' />
                </div>
                <div className="card-body">
                    <h2 className="Card-title">{this.props.name}</h2>
                    <p className="card-text p-0 m-0">{this.props.address}</p>
                    <p className="card-text">{this.props.city}, {`${this.props.state} ${this.props.zipCode}`}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{this.props.category}</li>
                        <li className="list-group-item">{`${this.props.rating} stars`}</li>
                        <li className="list-group-item">{`${this.props.reviewCount} reviews`}</li>
                    </ul>
            </Card>
            </Container>
        );
    }
    
};

export default Business;