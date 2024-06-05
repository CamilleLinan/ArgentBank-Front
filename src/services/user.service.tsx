import axios from "axios";
import { User } from "../models/user.model";

interface LoginResponse {
  success: boolean;
  data?: {
    body: {
      token: string;
    };
  };
  error?: string;
}

interface ProfileResponse {
  success: boolean;
  data?: User;
  error?: string;
}

interface UpdateResponse {
  success: boolean;
  data?: { body: User };
  error?: string;
}

const clientHTTP = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

const login = async (
  email: string,
  password: string
): Promise<LoginResponse | undefined> => {
  try {
    const response = await clientHTTP.post(`/api/v1/user/login`, {
      email: email,
      password: password,
    });
    const data = response.data;
    if (data.body && data.body.token) {
      clientHTTP.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${data.body.token}`;
    }
    return { success: true, data };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 400) {
        return {
          success: false,
          error: "L'email ou le mot de passe est incorrect",
        };
      } else {
        return {
          success: false,
          error: "Une erreur interne est survenue",
        };
      }
    }
  }
};

const getUserProfile = async (): Promise<ProfileResponse> => {
  try {
    const response = await clientHTTP.post(`/api/v1/user/profile`);
    const data = response.data.body;
    return { success: true, data };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        return {
          success: false,
          error: "User not found",
        };
      } else {
        return {
          success: false,
          error: "An internal error occurred",
        };
      }
    }
    return {
      success: false,
      error: "An unexpected error occurred",
    };
  }
};

const updateUserProfile = async (
  firstName: string,
  lastName: string
): Promise<UpdateResponse> => {
  try {
    const response = await clientHTTP.put("/api/v1/user/profile", {
      firstName,
      lastName,
    });
    const data = response.data;
    return { success: true, data };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        return {
          success: false,
          error: "User not found",
        };
      } else {
        return {
          success: false,
          error: "An internal error occurred",
        };
      }
    }
    return {
      success: false,
      error: "An unexpected error occurred",
    };
  }
};

export default { login, getUserProfile, updateUserProfile };
