// utility/services/request.ts
import apiservice from "./config";
export const getRequest = async <T>(url: string): Promise<{data:T;status:number}> => {
  const response = await apiservice.get<T>(url);
  return {data:response.data,status:response.status};
}

export const postRequest = async <T, U>(url: string, data: U): Promise<{data:T;status:number}> => {
  const response = await apiservice.post<T>(url, data);
  return {data:response.data,status:response.status};
};

export const putRequest = async <T, U>(url: string, data: U): Promise<{data:T;status:number}> => {
  const response = await apiservice.put<T>(url, data);
  return {data:response.data,status:response.status};
};

export const deleteRequest = async <T>(url: string): Promise<{data:T;status:number}> => {
  const response = await apiservice.delete<T>(url);
  return {data:response.data,status:response.status};
}
