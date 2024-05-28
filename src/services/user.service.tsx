import axios from "axios";

interface LoginResponse {
  success: boolean;
  data?: {
    body: {
      token: string;
    };
  };
  error?: string;
}

const login = async (
  email: string,
  password: string
): Promise<LoginResponse | undefined> => {
  try {
    const response = await axios.post(
      `http://localhost:3001/api/v1/user/login`,
      {
        email: email,
        password: password,
      }
    );
    const data = response.data;
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

export default { login };
