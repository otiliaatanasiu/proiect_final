import { useState, useEffect } from "react";
import { Spinner, Input, Row, Button, Badge } from "reactstrap";
import ProductComponent from "../components/ProductComponent";
import "./Product.style.css";

function Product() {
	const [productList, setProductList] = useState(null);
	const [categoryList, setCategoryList] = useState(null);

	// VARIABILE de stare pentru filtrari
	const [textInput, setTextInput] = useState("");
	const [selectedCategory, setSelectedCategory] = useState(null);

	// Pasul de adaugare de date din API
	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((res) => res.json())
			.then((productListAPI) => setProductList(productListAPI));

		fetch("https://fakestoreapi.com/products/categories")
			.then((res) => res.json())
			.then((categoryListAPI) => setCategoryList(categoryListAPI));
	}, []);

	return (
		<>
			{productList && categoryList ? (
				<div className='d-flex flex-sm-column flex-lg-row'>
					<div className='category_list m-4 d-flex flex-column '>
						<h2>Category List</h2>
						{categoryList.map((category, index) => {
							return (
								<Badge
									pill
									className='mt-2'
									key={"category_" + index}
									color={
										category === selectedCategory ? "info" : "secondary"
									}
									onClick={() => {
										setSelectedCategory(category);
									}}>
									{category}
								</Badge>
							);
						})}
						<Button
							color='danger'
							size='sm'
							onClick={() => {
								setSelectedCategory(null);
							}}>
							Clear Filter!
						</Button>
					</div>
					<div className='product_list'>
						<h2>Search</h2>
						<Input
							className='w-25'
							value={textInput}
							onChange={(event) => {
								setTextInput(event.target.value);
							}}
						/>
						<Row xs='1' lg='5'>
							{productList
								.filter((product) => {
									return (
										selectedCategory === null ||
										selectedCategory === product.category
									);
								})
								.filter((product) => {
									return (
										product.description.includes(textInput) ||
										product.title.includes(textInput)
									);
								})
								.map((product, index) => {
									return (
										<ProductComponent
											product={product}
											key={"product_" + index}
										/>
									);
								})}
						</Row>
					</div>
				</div>
			) : (
				<Spinner>Loading...</Spinner>
			)}
		</>
	);
}

export default Product;
