import { useContext } from "react";
import {AuthContext} from '../Router/auth-context'
export const useAuth=()=>useContext(AuthContext);