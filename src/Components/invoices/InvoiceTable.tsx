import type React from "react";
export interface invoicedataObj {
  invoiceNumber: string;
  customerName: string;
  date: string;
  amount: number;
  status: string;
}
interface invoiceTableProps {
  invoicesdata: Array<invoicedataObj>;
}
const InvoiceTable: React.FC<invoiceTableProps> = ({ invoicesdata }) => {
  const theader = ["No", "Name", "Date", "Amount", "Status"];
  return (
    <div>
      <div>InvoiceTable</div>
      <table>
        <tr>
          {theader.map((thead) => (
            <th key={thead} style={{ fontFamily: "Poppins"}}>{thead}</th>
          ))}
        </tr>
        <tbody>
          {invoicesdata.map((data) => (
            <tr>
              <td style={{ fontFamily: "Poppins"}}>{data.invoiceNumber}</td>
              <td style={{ fontFamily: "Poppins"}}>{data.customerName}</td>
              <td style={{ fontFamily: "Poppins"}}>{data.date}</td>
              <td style={{ fontFamily: "Poppins"}}>{data.amount}</td>
              <td style={{ fontFamily: "Poppins"}}>{data.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvoiceTable;
