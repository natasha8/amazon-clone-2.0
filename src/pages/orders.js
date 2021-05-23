import moment from "moment";
import Head from "next/head";
import { getSession, useSession } from "next-auth/client";
import { db } from "../../firebase";
import Header from "../components/Header";
import Order from "../components/Order";
import { useRouter } from "next/router";

const Orders = ({ orders }) => {
	const [session] = useSession();
	const router = useRouter();
	console.log("orders", orders);
	return (
		<div>
			<Head>
				<title>Amazon - My Order</title>
			</Head>
			<Header />
			<main className="max-w-screen-lg mx-auto p-10">
				<h1 className="text-3xl border-b mb-2 pb-1 border-yellow-400">
					{orders.length}Your Order
				</h1>
				{session ? (
					<h2>
						{orders.length > 0 ? (
							<>
								{orders.length} Order{orders.length > 1 && "s"}
							</>
						) : (
							<>
								No orders yet!
								<button
									className="link text-yellow-400 underline "
									onClick={() => router.push("/")}
								>
									Start Shopping{" "}
								</button>
							</>
						)}
					</h2>
				) : (
					<h2>Please sign in to see your orders </h2>
				)}
				<div className="mt-5 space-y-4">
					{orders?.map((order) => (
						<Order
							key={order.id}
							id={order.id}
							amount={order.amount}
							amountShipping={order.amountShipping}
							items={order.items}
							timestamp={order.timestamp}
							images={order.images}
						/>
					))}
				</div>
			</main>
		</div>
	);
};

export default Orders;

export async function getServerSideProps(context) {
	const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

	//Get user credential

	const session = await getSession(context);
	if (!session) {
		return { props: {} };
	}

	//firebase db
	const stripeOrder = await db
		.collection("users")
		.doc(session.user.email)
		.collection("orders")
		.orderBy("timestamp", "desc")
		.get();

	//stripe orders
	const orders = await Promise.all(
		stripeOrder.docs.map(async (order) => ({
			id: order.id,
			amount: order.data().amount,
			amountShipping: order.data().amount_shipping,
			images: order.data().images,
			timestamp: moment(order.data().timestamp.toDate()).unix(),
			items: (
				await stripe.checkout.sessions.listLineItems(order.id, {
					limit: 100,
				})
			).data,
		}))
	);
	console.log("ORDERS FROM STRIPE:", orders);
	return {
		props: { orders },
	};
}
