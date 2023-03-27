import { Link } from "react-router-dom";
import "./NavBar.style.css";

function NavBar() {
	return (
		<div className='navbar_products'>
			<Link to='/HomePage'>Home </Link>
			<Link to='/Product'>Products </Link>
			

			<img
				src='https://i.pinimg.com/originals/85/c8/3d/85c83d242b73d3c52b8c4c2e7df27db7.jpg'
				className='app_logo'
				alt='logo'
			/>

            <Link
				to='/Wishlist'>Wishlist{" "}
			</Link>
		</div>
	);
}

export default NavBar;
