import { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";
import WishList from "../components/WishList";
import "./WishList.style.css";

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
		<div className="m-4 p-5">
			<WishList />
			<h4 className='title'>My Wish List </h4>

			<Table >
				<thead className='table_container'>
					<tr>
						<th>Product Name</th>
						<th>Unit Price</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody className='table_border'>
					{wishlistProducts.map((product, index) => {
						return (

							<tr key={"product_" + index} className='mt-2'>
								<td>
									{product.title}
								</td>
								<td>
								{product.price}
								</td>
								<td>
									<Button
										color='danger'
										onClick={() => {
											onDelete(product.id);
										}}>
										Delete
									</Button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
		</div>
	);
}

export default Wishlist;
