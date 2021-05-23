import { CheckCircleIcon } from "@heroicons/react/solid";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header";

const success = () => {
	const router = useRouter();
	return (
		<div className="bg-yellow-100 h-screen">
			<Head>
				<title>Amazon - Success</title>
			</Head>
			<Header />
			<main className="max-w-screen-lg mx-auto">
				<div className="flex flex-col p-10 bg-white">
					<div className="flex items-center space-x-2 mb-5">
						<CheckCircleIcon className="text-green-500 h-10" />
						<h1 className="text-3xl">
							Your order is been confirmed!
						</h1>
					</div>
					<p>
						Thank you for shopping with us, We'll send a
						confirmation once your item has shipped, if you like to
						check the status of you order(s) please press the link
						below
					</p>
					<button
						onClick={() => router.push("/orders")}
						className="button mt-8"
					>
						Go to my orders
					</button>
				</div>
			</main>
		</div>
	);
};

export default success;
