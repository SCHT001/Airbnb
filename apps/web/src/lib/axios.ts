import axios from "axios";
export const host = axios.create({
  baseURL: "https://airbnb-s9n4.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const user = axios.create({
  baseURL: "https://airbnb-s9n4.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const hostImage = axios.create({
  baseURL: "https://airbnb-s9n4.onrender.com/api",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export const listings = axios.create({
  baseURL: "https://airbnb-s9n4.onrender.com/api/listings",
  headers: {
    "Content-Type": "application/json",
  },
});
export const A_booking = axios.create({
  baseURL: "https://airbnb-s9n4.onrender.com/api/bookings",
  headers: {
    "Content-Type": "application/json",
  },
});
