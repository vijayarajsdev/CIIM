import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/layout/Layout";
import Customers from "../Components/customers/Customers";
import Invoices from "../Components/invoices/Invoices";
import Products from "../Components/inventory/Products";
import Dashboard from "../Components/dashboard/Dashboard";
import ProductForm from "../Components/inventory/ProductForm";
import CustomerForm from "../Components/customers/CustomerForm";
import InvoiceTemplate from "../Components/invoices/InvoiceTemplate";
import Login from "../Components/login/Login";
import type { InvoiceData } from "../Types";
import svnicon from "../assets/svnicon.png";
import InvoicePreview from "../Components/pdfinvoice/InvoicePreview";
import { ProtectedRoute } from "./ProtectedRoute";
const dummyData: InvoiceData = {
  invoiceNumber: "24-25/000001",
  invoiceDate: "15/04/2024",
  dueDate: "15/04/2024",
  customerName: "Keerthika and Co",
  customerGSTIN: "29XXXXX",
  logo: svnicon,
  items: [
    {
      serial: 1,
      name: "Hydraulic Hose",
      hsn: "40091200",
      qty: "1.00 pcs",
      rate: "3136",
      gst: 18,
      amount: "3136",
      useIgst: false,
    },
  ],
  total: "3700",
  totalInWords: "Indian Rupee Three Thousand Seven Hundred Only",
  bankName: "HDFC",
  bankAccount: "xxxxxx62",
};
export const Router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "preview",
    element: <InvoicePreview invoiceData={dummyData} />,
    errorElement: <div>Invoice preview error</div>,
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <Layout />,
        errorElement: <div>Error Page</div>,
        children: [
          {
            path: "/",
            element: <Dashboard />,
            errorElement: <div>Dashboard Error Page</div>,
          },
          {
            path: "customers",
            element: <Customers />,
            errorElement: <div>Customers Error Page</div>,
          },
          {
            path: "addcustomer",
            element: <CustomerForm />,
          },
          {
            path: "editcustomer/:id",
            element: <CustomerForm />,
          },
          {
            path: "inventory",
            element: <Products />,
            errorElement: <div>Inventory Error Page</div>,
          },

          {
            path: "addproduct",
            element: <ProductForm />,
          },
          {
            path: "editproduct/:id",
            element: <ProductForm />,
          },
          {
            path: "invoices",
            element: <Invoices />,
            errorElement: <div>Invoices Error Page</div>,
          },
          {
            path: "invoice",
            element: <InvoiceTemplate />,
            errorElement: <div>Oops Technical Error</div>,
          },
          {
            path: "preview",
            element: <InvoicePreview invoiceData={dummyData} />,
            errorElement: <div>Invoice preview error</div>,
          },
        ],
      },
    ],
  },
]);
