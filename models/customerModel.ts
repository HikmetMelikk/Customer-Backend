import * as mongoose from "mongoose";

const customerSchema = new mongoose.Schema(
	{
		customerName: {
			type: String,
			required: [true, "Please enter a customer name!"],
		},
		customerPhone: {
			type: String,
			required: true,
		},
		customerAddress: {
			type: String,
			required: false,
		},
		customerEmail: {
			type: String,
			required: true,
		},
		orderName: {
			type: String,
			required: [true, "Order name can't be empty"],
		},
		orderId: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Customer = mongoose.model("Customer", customerSchema);
export default Customer;
