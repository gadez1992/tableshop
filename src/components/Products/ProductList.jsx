// import React from 'react';
import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';

import Product from './Product/Product';
import useStyles from './styles';
import Loading from "./Loading";

const ProductList = ({ products, onAddToCart, loading}) => {
  const classes = useStyles();
  return (
    
    <main className={classes.content}>
    {loading && <Loading />}
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default ProductList;

