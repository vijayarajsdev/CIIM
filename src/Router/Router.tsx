import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/layout/Layout";
import Customers from "../Components/customers/Customers";
import Invoices from "../Components/invoices/Invoices";
import Products from "../Components/inventory/Products";
import Dashboard from "../Components/dashboard/Dashboard";
import ProductForm from "../Components/inventory/ProductForm";
import CustomerForm from "../Components/customers/CustomerForm";
import InvoiceTemplate from "../Components/invoices/InvoiceTemplate";

export const Router = createBrowserRouter([
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
        path: "inventory",
        element: <Products />,
        errorElement: <div>Inventory Error Page</div>,
      },
      {
        path: "addproduct",
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
    ],
  },
]);
