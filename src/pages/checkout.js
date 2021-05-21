import Head from "next/head";
import Image from "next/image";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";
import { selectItems } from "../slices/basketSlice";

const Checkout = () => {
	const items = useSelector(selectItems);
	console.log(items);
	return (
		<div className="bg-gray-100">
			<Head>
				<title>Amazon Checkout</title>
			</Head>
			<Header />
			<main className="lg:flex max-w-screen-2xl mx-auto">
				{/*left*/}
				<div className="flex-grow m-5 shadow-sm">
					<Image
						src="https://links.papareact.com/ikj"
						width={1020}
						height={250}
						objectFit="contain"
					/>
				</div>

				<div className="flex flex-col p-5 space-y-10 bg-white">
					<h1 className="text-2xl border-b pb-4">
						{items.length === 0
							? "Your Amazon Basket is empty"
							: "Shopping Basket"}
					</h1>
					{items.map((item, i) => {
						{
							console.log("bucchin", item);
						}
						<CheckoutProduct
							key={i}
							id={item.id}
							title={item.title}
							price={item.price}
							description={item.description}
							category={item.category}
							image={item.image}
							hasPrime={item.hasPrime}
							rating={item.rating}
						/>;
					})}
				</div>
				{/*right*/}
				<div></div>
			</main>
		</div>
	);
};

export default Checkout;
