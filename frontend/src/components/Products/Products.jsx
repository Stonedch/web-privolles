import React, { useState, useEffect } from 'react';
import styles from './Products.module.scss';

const Products = () => {
    const { REACT_APP_API_URL } = process.env;
    const [products, setProducts] = useState(null);

    const endpoint = REACT_APP_API_URL + 'products/';

    useEffect(() => {
        fetch(endpoint)
            .then((response) => response.json())
            .then((response) => setProducts(response.results));
    });

    return (
        <div className={`${styles.products} ${styles.screen}`}>
            <div className={styles.content}>
                {products
                    ? products.map((product) => {
                          return (
                              <div className={styles.item}>
                                  <div className={styles.image}>
                                      <img
                                          src={product.picture}
                                          alt={product.title}
                                      />
                                  </div>
                                  <div className={styles.body}>
                                      <h3 className={styles.title}>
                                          {product.title}
                                      </h3>
                                      <div className={styles.row}>
                                          <p className={styles.subtitle}>
                                              {product.subtitle}
                                          </p>
                                          <p className={styles.price}>
                                              {product.price
                                                  ? product.price
                                                  : 0}
                                              р.
                                          </p>
                                      </div>
                                  </div>
                              </div>
                          );
                      })
                    : null}
            </div>
        </div>
    );
};

export { Products };
