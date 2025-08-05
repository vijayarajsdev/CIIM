export interface Product {
  id?: string;
  name: string;
  description: string | null;
  price: number | "";
  category: string;
  hsnCode: string;
  gst: string;
  stock: number;
  unit: string;
  tenantId: string | null;
}
export interface Customer {
  id?: number;
  name: string;
  phone: string;
  email: string;
  companyname: string;
  gstno?: string;
  isGstRegistered?: string;
  address: string;
  tenantId?: string | "";
  tenant?: string | "";
}
// types.ts

export interface InvoiceItem {
  serial: number;
  name: string;
  hsn: string;
  qty: string;
  rate: string;
  gst: number;
  useIgst: boolean;
  amount: string;
}

export interface InvoiceData {
  invoiceNumber: string;
  invoiceDate: string;
  dueDate: string;
  customerName: string;
  customerGSTIN: string;
  logo?: string | null;
  items: InvoiceItem[];
  total: string;
  totalInWords: string;
  bankName: string;
  bankAccount: string;
}

//auth
export interface LoginPayload {
  email: string;
  password: string;
}
export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  tenantId: string;
}
export interface LoginResponse {
  message: string;
  token: string;
  user: User;
}
export interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (payload: LoginPayload) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
  error: string | null;
}
