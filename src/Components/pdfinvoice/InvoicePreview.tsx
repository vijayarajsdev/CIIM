// components/InvoicePreview.tsx
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import InvoicePDF from "./InvoicePDF";
import type { FC } from "react";
import type { InvoiceData } from "../../Types";

interface InvoicePreviewProps {
  invoiceData: InvoiceData;
}

const InvoicePreview: FC<InvoicePreviewProps> = ({ invoiceData }) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3>Invoice Preview</h3>
        <PDFDownloadLink
          document={<InvoicePDF invoiceData={invoiceData} />}
          fileName={`invoice_${invoiceData.invoiceNumber}.pdf`}
        >
          {({ loading }) => (loading ? "Generating PDF..." : "Download PDF")}
        </PDFDownloadLink>
      </div>
      <PDFViewer width="100%" height="600">
        <InvoicePDF invoiceData={invoiceData} />
      </PDFViewer>

      <br />
    </div>
  );
};

export default InvoicePreview;
