import express from "express";
import Customer from "../models/customerModel";
import { getCustomers, getCustomer, createCustomer, updateCustomer, deleteCustomer } from "../controller/customerController";

const router = express.Router();

router.get("/", getCustomers);

router.get("/:id", getCustomer);

router.post("/", createCustomer);

router.put("/:id", updateCustomer);

router.delete("/:id", deleteCustomer);

export default router;
