import {
	Card,
	CardBody,
	CardTitle,
	CardText,
	Button,
	Col,
	CardFooter,
	CardSubtitle,
	CardImg,
} from "reactstrap";

function ProductComponent({ product }) {
	// function to add a product to the local storage as favourite
	const addToWishlist = () => {
		const productsString = localStorage.getItem("produse");

		if (productsString !== null) {
			// check if there are any products in the local storage
			const products = JSON.parse(productsString);

			// if the product already exists in the local storage, do nothing
			const existNr = products.find((productElement) => {
				return productElement.id === product.id;
			});

			if (existNr === undefined) {
				// if the product does not exist in the local storage, add it
				products.push(product);
			}

			localStorage.setItem("produse", JSON.stringify(products)); // update the local storage
		} else {
			// if there are no products in the local storage, add the first one
			const newProducts = [];
			newProducts.push(product);
			localStorage.setItem("produse", JSON.stringify(newProducts));
		}
	};

	return (
		<Col className='mt-4'>
		<Card className='d-flex justify-content-between align-items-center' >
			<img
			    top width='100%'
				alt='Sample'
				className='img-fluid w-100 p-3'
				style={{ height: "200px", objectFit: "contain" }}
				src={product.image}
			/>
			<CardBody>
				<CardTitle tag='h5'>{product.title}</CardTitle>
				<CardText className='text-muted'>{product.description}</CardText>
				<h4>{product.userId}</h4>
			</CardBody>
			<CardFooter className='button' variant="primary" >
				<p className='m-0'>{product.price}</p>
				<Button
					onClick={() => {
						addToWishlist();
					}}>
					Add to favourite!
				</Button>
			</CardFooter>
		</Card>
		</Col>
	);
}

export default ProductComponent; // export the component for use in other parts of the application

{/* <Card className='d-flex justify-content-between align-items-center'>
  <CardImg top width='100%' src={product.image} alt={product.name} />
  <CardBody>
    <CardTitle tag='h5'>{product.name}</CardTitle>
    <CardSubtitle>{product.category}</CardSubtitle>
    <CardText>{product.description}</CardText>
    <Button onClick={() => addToCart()}>Add to cart</Button>
  </CardBody>
  <CardFooter className='button d-flex justify-content-between'>
    <p className='m-0'>{product.price}</p>
    <Button onClick={() => addToWishlist()}>Add to favourite!</Button>
  </CardFooter>
</Card> */}