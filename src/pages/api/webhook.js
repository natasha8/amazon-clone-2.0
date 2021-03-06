import { buffer } from "micro";
import * as admin from "firebase-admin";

const serviceAccount = require("../../../permission.json");

const app = !admin.apps.length
	? admin.initializeApp({
			credential: admin.credential.cert(serviceAccount),
	  })
	: admin.app();

//connect to stripe
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

//firebase
const fullFillOrder = async (session) => {
	console.log("FIREBASE fullFillOrder: ", session);

	const images = JSON.parse(session.metadata.images).map((image) =>
		JSON.stringify(image)
	);

	return app
		.firestore()
		.collection("users")
		.doc(session.metadata.email)
		.collection("orders")
		.doc(session.id)
		.set({
			amount: session.amount_total / 100,
			amount_shipping: session.total_details.amount_shipping / 100,
			images: images,
			timestamp: admin.firestore.FieldValue.serverTimestamp(),
		})
		.then(() => {
			console.log(
				`SUCCESS: Order ${session.id} has been added to the database`
			);
		})
		.catch((error) => console.log("ERROR ADDING ITEMS TO FIREBASE", error));
};

export default async (req, res) => {
	if (req.method === "POST") {
		const requestBuffer = await buffer(req);
		const payload = requestBuffer.toString();
		const sig = req.headers["stripe-signature"];
		let event;
		//verify came from stripe
		try {
			event = stripe.webhooks.constructEvent(
				payload,
				sig,
				endpointSecret
			);
		} catch (err) {
			console.error("STRIPE verify err", err.message);
			return res.status(400).send(`Webhook error: ${err.message}`);
		}

		if (event.type === "checkout.session.completed") {
			const session = event.data.object;

			//FullFill firebase
			return fullFillOrder(session)
				.then(() => res.status(200))
				.catch((err) =>
					res.status(400).send(`Webhook error: ${err.message}`)
				);
		}
	}
};

export const config = {
	api: {
		bodyParser: false,
		externalResolver: true,
	},
};
