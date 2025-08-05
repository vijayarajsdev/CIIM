// services/auth.ts
import { postRequest } from "./service";
import { type LoginPayload,type LoginResponse } from "../../Types";

const AUTH_URL = "/auth";

export const loginUser = (payload: LoginPayload) => {
  return postRequest<LoginResponse, LoginPayload>(`${AUTH_URL}/login`, payload);
};
