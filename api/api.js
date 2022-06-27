import axios from "axios";

const instance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
});

export const paymentsAPI = {
  postUser(payload) {
    return instance.post(`/api/payments`, payload );
  },
};