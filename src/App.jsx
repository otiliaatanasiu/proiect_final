import HomePage from "./pages/HomePage";
import Product from "./pages/Product";
import WishList from "./pages/WishList";
import NavBar from "./components/NavBar"
import Footer from "./components/Footer";

import { Routes, Route } from "react-router-dom";


function App() {
	return (


		
		<div>

			<NavBar/>
	
		
			<Routes>
				<Route path='Homepage' element={<HomePage />} />
				<Route path='Product' element={<Product />} />
				<Route path='WishList' element={<WishList />} />
				<Route path='/*' element={<h1>Not Found!</h1>} />
			</Routes>


			<Footer/>

		</div>

		
	);
}

export default App;
