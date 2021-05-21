import Image from "next/image";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";
import { selectItems } from "../slices/basketSlice";

const Checkout = () => {
	const items = useSelector(selectItems);
	return (
		<div className="bg-gray-100">
			<Header />
			<main className="lg:flex max-w-screen-2xl ms-auto">
				{/*left*/}
				<div className="flex-grow m5 shadow-sm">
					<Image
						src="https://links.papareact.com/ikj"
						height={250}
						width={1020}
						objectFit="contain"
					/>
				</div>
				{/*right*/}

				<div className="flex flex-col p-5 space-y-10 bg-white">
					<h1 className="text-3xl border-b pb-4">
						{items.length === 0
							? "Your Amazon Basket is empty"
							: "Shopping Basket"}
						<h1>
							{items.map((item, i) => {
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
						</h1>
					</h1>
				</div>
			</main>
		</div>
	);
};

export default Checkout;
