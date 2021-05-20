import React from "react";
import Product from "./Product";

const ProductFeed = ({ products }) => {
	return (
		<div className="grid grid-flow-row-dense md:grid-cols-3 ls:grid-cols-4 md:-ml-52">
			{products
				.slice(0, 4)
				.map((id, title, price, description, category, image) => (
					<Product
						key={id}
						id={id}
						title={title}
						price={price}
						description={description}
						category={category}
						image={image}
					/>
				))}
			<img
				className="md:col-span-full"
				src="https://links.papareact.com/dyz"
				alt="banner"
			/>
			<div className="md:col-span-2">
				{products
					.slice(4, 5)
					.map((id, title, price, description, category, image) => (
						<Product
							key={id}
							id={id}
							title={title}
							price={price}
							description={description}
							category={category}
							image={image}
						/>
					))}
				{products
					.slice(5, products.length)
					.map((id, title, price, description, category, image) => (
						<Product
							key={id}
							id={id}
							title={title}
							price={price}
							description={description}
							category={category}
							image={image}
						/>
					))}
			</div>
		</div>
	);
};

export default ProductFeed;
