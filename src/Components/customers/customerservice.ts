import {type Customer } from "../../Types";
import { deleteRequest, getRequest, postRequest, putRequest } from "../../utility/services/service";
const BASE_URL='/customer';
export const fetchCustomers=(tenantId:string)=>getRequest<Customer[]>(`${BASE_URL}?tenantId=${tenantId}`);
export const fetchCustomerById=(id:string)=>getRequest<Customer>(`${BASE_URL}/${id}`);
export const createCustomer=(data:Customer)=>postRequest<Customer,Customer>(BASE_URL,data);
export const updateCustomer=(id:string,data:Customer)=>putRequest<Customer,Customer>(`${BASE_URL}/${id}`,data);
export const deleteCustomer=(id:string)=>deleteRequest(`${BASE_URL}/${id}`)
