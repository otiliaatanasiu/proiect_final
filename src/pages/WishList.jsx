import { useEffect, useState } from "react";
import { Button } from "reactstrap";
import WishList from "../components/WishList";

function Wishlist() {
	//Pasul 2 - se creaza o variabila de stare pentru datele noastre
	const [wishlistProducts, setWishlistProducts] = useState([]);

	//Pasul 1 - preluare date din localStorage
	useEffect(() => {
		const ProductsString = localStorage.getItem("produse");
		if (ProductsString !== null) {
			const Products = JSON.parse(ProductsString);
			setWishlistProducts(Products);
		}
	}, []);

	const onDelete = (productId) => {
		const filteredProducts = wishlistProducts.filter(
			(product) => product.id !== productId
		);
		localStorage.setItem("produse", JSON.stringify(filteredProducts));
		setWishlistProducts(filteredProducts);
	};

	return (
		<>
			<WishList />
			<h4>My Wish List </h4>

			<ul>
				{wishlistProducts.map((product, index) => {
					return (
						<li key={"product_" + index} className='mt-2'>
							{product.title}
							<Button
								color='danger'
								onClick={() => {
									onDelete(product.id);
								}}>
								Delete
							</Button>
						</li>
					);
				})}
			</ul>
		</>
	);
}

export default Wishlist;
