export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  category: string;
  Hsn: number;
}
export interface Customer {
  id: number;
  name: string;
  organisation: string;
  gstRegistered: boolean;
  address: string;
  mobile: string | number;
  gst: string | null;
}
