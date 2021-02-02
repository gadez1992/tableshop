import React from "react";
import {
	Button,
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Typography,
	Icon,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

import useStyles from "./styles";

const Product = ({ product, onAddToCart }) => {
	const classes = useStyles();

	const handleAddToCart = () => onAddToCart(product.id, 1);

	return (
		<Card className={classes.root}>
			<CardMedia
				className={classes.media}
				image={product.media.source}
				title={product.name}
			/>
			<CardContent>
				<div className={classes.cardContent}>
					<Typography gutterBottom variant="h5" component="h2">
						{product.name}
					</Typography>
					<Typography gutterBottom variant="h5" component="h2">
						${product.price.formatted}
					</Typography>
				</div>
				<Typography
					dangerouslySetInnerHTML={{ __html: product.description }}
					className={classes.productDescription}
					variant="body2"
					color="textSecondary"
					component="p"
				/>
			</CardContent>
			<CardActions disableSpacing className={classes.cardActions}>
				<Button className={classes.addToCartButton} variant='contained'  onClick={handleAddToCart}>
					 Add to Cart  
           <AddShoppingCart className={classes.cartIcon}/>
				</Button>
			</CardActions>
		</Card>
	);
};

export default Product;
