// components/InvoicePDF.tsx
import { Document } from "@react-pdf/renderer";
import InvoicePage from "./InvoicePage";
import type { FC } from "react";
import type { InvoiceData } from "../../Types";

const ITEMS_PER_PAGE = 14;

interface InvoicePDFProps {
  invoiceData: InvoiceData;
}

const InvoicePDF: FC<InvoicePDFProps> = ({ invoiceData }) => {
  const pages = [];
  const items = invoiceData.items || [];

  for (let i = 0; i < items.length; i += ITEMS_PER_PAGE) {
    const pageItems = items.slice(i, i + ITEMS_PER_PAGE);
    const isLastPage = i + ITEMS_PER_PAGE >= items.length;
    const isFirstPage = 1;

    pages.push(
      <InvoicePage
        key={i}
        data={{ ...invoiceData, isLastPage, isFirstPage }}
        pageItems={pageItems}
      />
    );
  }

  return <Document>{pages}</Document>;
};

export default InvoicePDF;
