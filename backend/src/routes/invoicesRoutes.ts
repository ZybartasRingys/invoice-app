import express from "express";
import * as InvoiceControllers from "../controllers/invoicesControllers";
const router = express.Router();

//Get all invoices route
router.get("/", InvoiceControllers.getInvoices);
//Get one invoice route
router.get("/:invoiceId", InvoiceControllers.getInvoice);
//Create invoice route
router.post("/", InvoiceControllers.createInvoice);

export default router;
