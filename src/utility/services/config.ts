import axios from "axios";
const baseURL=import.meta.env.VITE_BASE_URL;
 const apiservice = axios.create({
  baseURL: baseURL, // You can override this per request
  headers: {
    "Content-Type": "application/json",
  },
});
apiservice.interceptors.request.use((config)=>{
    const token=localStorage.getItem("authToken");
    if(token&&config.headers){
      config.headers.Authorization=`Bearer ${token}`
  } else {
    console.warn("No token found in localStorage");
  }
    return config;
})
export default apiservice;