// components/InvoicePage.tsx
import { Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import type { InvoiceItem, InvoiceData } from "../../Types";

const styles = StyleSheet.create({
  page: { padding: 10, fontSize: 10 },
  customersection: {
    padding: 10,
    flexDirection: "column",
    justifyContent: "space-between",
    borderBottom: "1px solid black",
  },
  containerBox: {
    paddingVertical: 20,
    height: "100%",
    border: "1 solid black",
  },
  row: {
    flexDirection: "row",
    borderBottom: "1px",
    width:"100%"
  },
  cell: { flex: 1, borderRight: "1 solid #ccc" },
  firstcell: { borderLeft: "1 solid #ccc" },
  lastCell: { borderRight: "none" },
  col1: { width: "5%", fontSize: 10, padding: 2 },
  col2: { width: "30%", fontSize: 10, padding: 2, flexGrow: "1" },
  col3: { width: "10%", fontSize: 10, padding: 2 },
  col4: { width: "10%", fontSize: 10, padding: 2 },
  col5: { width: "10%", fontSize: 10, padding: 2 },
  col6: { width: "15%", fontSize: 10, padding: 2 },
  col7: { width: "10%", fontSize: 10, padding: 2 },
  col8: { width: "15%", fontSize: 10, padding: 2 },
  headerwrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 80,
    alignItems: "flex-start",
    borderBottom: "1px solid #ccc",
  },
  header: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "right",
  },
  tableHeader: {
    backgroundColor: "#f0f0f0", // Optional table header background
    fontWeight: "bold",
    height: "25px",
  },
  logo: { width: 80, height: 60, paddingTop: 10 },
  infoBox: { width: "48%", flexDirection: "row" },
  infoboxlabel: { fontWeight: "bold", marginBottom: 2, width: "100px" },
});

interface InvoicePageProps {
  data: InvoiceData & { isLastPage: boolean } & { isFirstPage: number };
  pageItems: InvoiceItem[];
}
const useIGST = false;
const InvoicePage = ({ data, pageItems }: InvoicePageProps) => (
  <Page size="A4" style={styles.page}>
    <View style={styles.containerBox}>
      <View style={styles.headerwrapper}>
        <View style={styles.headerwrapper}>
          {data.logo && <Image src={data.logo} style={styles.logo} />}
          <View>
            <Text style={styles.header}>SVN METALSS</Text>
            <Text>149E,KRISHNA NAGAR,MARAKKANAM ROAD,</Text>
            <Text>TINDIVANAM</Text>
            <Text>GST:33BMYPV6470J1Z2</Text>
            <Text>1234567890</Text>
            <Text>svnmetalss@gmail.com</Text>
          </View>
        </View>
        <View>
          <Text style={styles.header}>TAX INVOICE</Text>
          <Text>Invoice {data.invoiceNumber}</Text>
        </View>
      </View>
      <View style={styles.customersection}>
        <View style={{ marginBottom: 6 }}>
          <Text>Bill To: {data.customerName}</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 4,
          }}
        >
          <View style={styles.infoBox}>
            <Text style={styles.infoboxlabel}>Invoice Date:</Text>
            <Text>{data.invoiceDate}</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoboxlabel}>Due Date:</Text>
            <Text>{data.dueDate}</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={styles.infoBox}>
            <Text style={styles.infoboxlabel}>GSTIN:</Text>
            <Text>{data.customerGSTIN}</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoboxlabel}>Place of Supply:</Text>
            <Text>Tamil Nadu (33)</Text>
          </View>
        </View>
      </View>

      <View style={[styles.row, styles.tableHeader]}>
        <Text style={[styles.cell, { flex: 0.3 }, styles.col1]}>S.No</Text>
        <Text style={[styles.cell, styles.col2]}>Item</Text>
        <Text style={[styles.cell, styles.col3]}>HSN</Text>
        <Text style={[styles.cell, styles.col4]}>Qty</Text>
        <Text style={[styles.cell, styles.col5]}>Rate</Text>
        {/* <Text style={styles.cell}>GST</Text> */}
        {useIGST ? (
          <>
            <Text style={[styles.cell, styles.col7]}>IGST%</Text>
          </>
        ) : (
          <>
            <Text style={[styles.cell, styles.col7]}>CGST</Text>
            <Text style={[styles.cell, styles.col7]}>SGST</Text>
          </>
        )}
        <Text style={[styles.cell, styles.lastCell, styles.col8]}>Amount</Text>
      </View>

      {pageItems.map((item, index) => (
        <View key={index} style={styles.row}>
          <Text style={[styles.cell, { flex: 0.3 }, styles.col1]}>
            {item.serial}
          </Text>
          <Text style={[styles.cell, styles.col2]}>{item.name}</Text>
          <Text style={[styles.cell, styles.col3]}>{item.hsn}</Text>
          <Text style={[styles.cell, styles.col4]}>{item.qty}</Text>
          <Text style={[styles.cell, styles.col5]}>{item.rate}</Text>
          {/* <Text style={styles.cell}>{item.gst}%</Text> */}
          {useIGST ? (
            <>
              <Text style={[styles.cell, styles.col7]}>IGST: {item.gst}%</Text>
            </>
          ) : (
            <>
              <Text style={[styles.cell, styles.col7]}>
                {" "}
                {(item.gst / 2).toFixed(2)}
              </Text>
              {/* <Text style={styles.cell}> {(item.gst / 2).toFixed(2)}</Text> */}
              <Text style={[styles.cell, styles.col7]}>
                {" "}
                {(item.gst / 2).toFixed(2)}
              </Text>
              {/* <Text style={styles.cell}> {(item.gst / 2).toFixed(2)}</Text> */}
            </>
          )}
          <Text style={[styles.cell, styles.lastCell, styles.col8]}>
            {item.amount}
          </Text>
        </View>
      ))}

      {data.isLastPage && (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            borderBottom: "1px solid black",
          }}
        >
          <View
            style={{
              borderRight: "1px solid black",
              paddingRight: "5px",
              paddingTop: "10px",
            }}
          >
            <Text>In Words: {data.totalInWords}</Text>
            <Text>Bank: {data.bankName}</Text>
            <Text>Account No: {data.bankAccount}</Text>
          </View>
          <View style={{ margin: "10px" }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ width: "80px" }}>Sub Total</Text>
              <Text>1000</Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text>CGST</Text>
              <Text>90</Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text>SGST</Text>
              <Text>90</Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text>RoundOff</Text>
              <Text>0</Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text>Total</Text>
              <Text>1180</Text>
            </View>
          </View>
        </View>
      )}
    </View>
  </Page>
);

export default InvoicePage;
