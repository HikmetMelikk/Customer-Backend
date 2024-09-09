import { Request, Response } from 'express';
import Customer from "../models/customerModel";
import asyncHandler from "express-async-handler";


//! Get All Customers

const getCustomers = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  try {
    const customer = await Customer.find({});
    res.status(200).json(customer);
  } catch (error: any) {
    res.status(500);
    throw new Error((error.message));
  }
});


//! Get Single Customer

const getCustomer = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const customer = await Customer.findById(id);
    res.status(200).json(customer);
  } catch (error) {
    res.status(500);
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('An unknown error occurred');
    }
  }
});

//! Create a Customer

const createCustomer = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  try {
    const customer = await Customer.create(req.body);
    res.status(200).json(customer);
  } catch (error) {
    res.status(500);
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('An unknown error occurred');
    }
  }
});

//! Updating a Customer

const updateCustomer = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const customer = await Customer.findByIdAndUpdate(id, req.body);
    if (!customer) {
      res.status(404).json({ message: `cannot find a customer with ID ${id}` });
      return;
    }
    const updatedCustomer = await Customer.findById(id);
    res.status(200).json(updatedCustomer);
  } catch (error) {
    res.status(500);
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('An unknown error occurred');
    }
  }
});

//! Delete a Customer

const deleteCustomer = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const customer = await Customer.findByIdAndDelete(id);
    if (!customer) {
      res.status(404).json({ message: `cannot find a customer with ID ${id}` });
      return;
    }
    res.status(200).json(customer);
  } catch (error) {
    res.status(500);
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('An unknown error occurred');
    }
  }
});

export { getCustomers ,getCustomer, createCustomer, updateCustomer, deleteCustomer };