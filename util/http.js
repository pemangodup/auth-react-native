import axios from "axios";

const API_KEY = "AIzaSyCmXP9-7k5q-rqec_MgGB7ztL8nXIld-3I";

export async function createUser(email, password) {
  const response = await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY,
    {
      email,
      password,
      returnSecureToken: true,
    }
  );
}
