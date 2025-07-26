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
            <th key={thead}>{thead}</th>
          ))}
        </tr>
        <tbody>
          {invoicesdata.map((data) => (
            <tr>
              <td>{data.invoiceNumber}</td>
              <td>{data.customerName}</td>
              <td>{data.date}</td>
              <td>{data.amount}</td>
              <td>{data.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvoiceTable;
