import Carousel from "react-bootstrap/Carousel";
import { Row, Col } from "reactstrap";
import "./HomeCarousel.style.css";


function HomeCarousel() {
	return (
	
		<Carousel >

			<Carousel.Item>
				
				<Row
					className='d-flex align-items-center'

					style={{
						height: "700px",
					}}>
					<Col>
						<h2 className='Text' style={{ fontWeight: "bold",marginLeft: "10px" }}>
							The big GQ guide to Spring/Summer 2023 menswear trends
						</h2>
						<p className='description' style={{ marginLeft: "10px" }}>
							The best-dressed guys are the guys who get ahead. And with
							Spring/Summer 2023 on the horizon (thank God), those guys have
							already started incorporating the main trends from Paris, Milan,
							London and New York into their wardrobes. And with all those big
							runway drops trickling into stores as speak, now is the perfect
							time. From going shirtless under your office wear, sleeveless in
							the summer sun to the ever-increasing expanse of baggier,
							billowing jeans and sexed-up short shorts, we’ve got you covered
							(well, apart from your arms, but that's Spring/Summer baby!)
						</p>
					</Col>
					<Col>
						{" "}
						<img
							className='d-block w-100' 
							src='https://cdn.stocksnap.io/img-thumbs/960w/clothes-jackets_72V88M4FAC.jpg'
							alt='Second slide'
						/>
					</Col>
				</Row>
			</Carousel.Item>
			<Carousel.Item>
				<Row
					className='d-flex align-items-center'
					style={{
						height: "700px",
					}}>
					<Col>
						<h2 className='Text' style={{ fontWeight: "bold",marginLeft: "10px" }}>
							Fashion trends 2023: New season styles revealed
						</h2>
						<p className='description' style={{ marginLeft: "10px" }}>
							It's time to get your spring capsule wardrobe in order, and while
							it will largely be filled with staple pieces, adding in items that
							correlate with the spring/summer fashion 2023 will ensure your
							outfits feel timely. We have trawled through the spring/summer
							fashion shows and collated the spring fashion trends to look out
							for this year, and while designers stayed true to their own
							personal style signatures, there were some common key ideas that
							we expect will trickle down through straight-to-market
							collections, and into our wardrobes.{" "}
						</p>
					</Col>
					<Col>
						{" "}
						<img
							className='d-block w-100' 
							src='https://cdn.stocksnap.io/img-thumbs/960w/clothing-top_TEFSYENORD.jpg'
							alt='Second slide'
						/>
					</Col>
				</Row>
			</Carousel.Item>
			<Carousel.Item>
				<Row
					className='d-flex align-items-center'
					style={{
						height: "700px",
					}}>
					<Col>
						<h2 className='Text' style={{ fontWeight: "bold",marginLeft: "10px" }}>
							Electronics
						</h2>
						<p className='description' style={{ marginLeft: "10px" }}>
							Consumer electronics encompass a range of products we use every
							day, from televisions and cell phones, to computers and kitchen
							appliances and many more. And each of these products have unique
							design, performance and safety elements. A wide variety of
							chemistry materials, from fluoropolymers and flame retardants, to
							silicones, polycarbonate plastics, phthalates and more, are used
							in the manufacture of electronics products, to help make them
							lightweight, durable and functional to meet the technology needs
							of today’s consumers. For example, plastic components are
							essential to advances in weight reduction and miniaturization in
							many electronic products, helping to make electronics strong and
							durable, protecting vital technological components while also
							using less material in production. In addition, plastics can be
							engineered to meet very specific performance requirements, often
							helping to achieve greater energy efficiency over the course of a
							product’s life.
						</p>
					</Col>
					<Col>
						{" "}
						<img
							className='d-block w-100' 
							src='https://cdn.stocksnap.io/img-thumbs/960w/top-workspace_ILQA1VXXOJ.jpg'
							alt='Second slide'
						/>
					</Col>
				</Row>
			</Carousel.Item>
			<Carousel.Item>
				<Row
					className='d-flex align-items-center'
					style={{
						height: "700px",
					}}>
					<Col>
						<h2
							className='Text'
							style={{ fontWeight: "bold", marginLeft: "10px" }}>
							Jewelry
						</h2>
						<p className='description' style={{ marginLeft: "10px" }}>
							Create timeless pieces with our fine selection of gold and silver
							jewelry
						</p>
					</Col>
					<Col>
						{" "}
						<img
							className='d-block w-100'
							src='https://cdn.stocksnap.io/img-thumbs/960w/hand-jewelry_VHIX76K7EH.jpg'
							alt='Second slide'
						/>
					</Col>
				</Row>
			</Carousel.Item>
		</Carousel>
	
	);
}

export default HomeCarousel;
