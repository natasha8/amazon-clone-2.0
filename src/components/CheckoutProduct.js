import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useDispatch } from "react-redux";

const CheckoutProduct = ({
	id,
	title,
	description,
	category,
	image,
	price,
	hasPrime,
	rating,
}) => {
	return (
		<div className="grid grid-cols-5 ">
			<Image src={image} height={200} width={200} objectFit="contain" />
			<div className="col-span-3 mx-5">
				<p>{title}</p>
				{Array(rating)
					.fill()
					.map((_, i) => (
						<StarIcon key={i} className="h-5 text-yellow-500" />
					))}

				<p className="text-xs mt-2 my-2 line-clamp-3">{description}</p>
				<Currency quantity={price} currency="EUR" />
				{hasPrime && (
					<div className="flex items-center space-x">
						<img src="https://link.papareact.com/fdw" alt="logo" />
						<p className="text-xs text-gray-500">
							FREE Next-day Delivery
						</p>
					</div>
				)}
			</div>
			<div className="flex flex-col space-y-2 my-auto justify-self-end">
				<button onClick={addItemToBasket}>Add to Basket</button>
				<button>Remove from Basket</button>
			</div>
		</div>
	);
};

export default CheckoutProduct;
