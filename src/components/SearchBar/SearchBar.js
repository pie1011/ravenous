import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = () => {
    return (
        <div className={styles.SearchBar}>
            <h2>Find Businesses</h2>
            <form className={styles.form}>
                <input className={styles.input} placeholder="Search Businesses" />
                <input className={styles.input} placeholder="Where?" />
                <button className={styles.input}>Let's Go</button>
            </form>
        </div>
    );
};

export default SearchBar;