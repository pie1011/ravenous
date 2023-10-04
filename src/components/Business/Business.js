import React from 'react';
import styles from './Business.module.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

class Business extends React.Component {
    render() {
        return (
            <Container className={styles.BusinessCard}>
                <Card className="m-3 p-2">
                    <div>
                        <img src={this.props.business.imageSrc} className="card-img-top img-thumbnail" alt='' />
                    </div>
                        <div className="card-body">
                            <h3 className="card-title">{this.props.business.name}</h3>
                            <p className="card-text p-0 m-0">{this.props.business.address}</p>
                            <p className="card-text p-0 m-0"> {this.props.business.city}</p>
                            <p className="card-text">{`${this.props.business.state} ${this.props.business.zipCode}`}</p>
                        </div>
                        <div className="list-group list-group-flush">
                            <li className="list-group-item">{this.props.business.category.toUpperCase()}</li>
                            <li className="list-group-item">{`${this.props.business.rating} stars`}</li>
                            <li className="list-group-item">{`${this.props.business.reviewCount} reviews`}</li>
                        </div>
                </Card>
            </Container>
        );
    }
};

export default Business;
