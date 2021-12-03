import axios from 'axios';
import Rating from '../components/Rating.js';
const HomeScreen = {
	render: async () => {
/* Código para obtener datos backend en la parte frontend*/
const response = await axios({
	url:'http://localhost:5000/api/products',
			headers: {
				'Content-Type': 'application/json',
			},
		});
		if (!response || response.statusText !== 'OK'){
			return `<div>Error in getting data</div>`;
		}
	const products = response.data;
/* las lineas anteriores son para el nodejs server */
		return `
		<ul class = "products">
		${products.map (
			(product) =>
			`
			<li>
				<div class="product">
					<a href="/#/product/${product._id}">
						<img src="${product.image}" alt="${product.name}"/>
					</a>
		 			<div class="product-name">
						<a href="/#/product/1">
						${product.name}
						</a>
					</div>
					<div class="pruduct-rating">
					${Rating.render({value: product.rating, 
						text: `${product.numReviews} reviews`,
						})}
					</div>
						<div class="product-brand">
						${product.brand}
						</div>
						<div class="product-countinStock">
						${product.countinStock}
						</div>	
							<div class="product-price">
							${product.price}
							</div>
							<div class= "product-size">
							${product.size}
							</div>
				</div>
			</li>
			`
				)
				.join('')}
		</ul>`;
	},
};


export default HomeScreen;