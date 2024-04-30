import axios from "axios";
export const host = axios.create({
  baseURL: "http://localhost:5506/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const user = axios.create({
  baseURL: "http://localhost:5506/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const hostImage = axios.create({
  baseURL: "http://localhost:5506/api",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export const listings = axios.create({
  baseURL: "http://localhost:5506/api/listings",
  headers: {
    "Content-Type": "application/json",
  },
});
export const A_booking = axios.create({
  baseURL: "http://localhost:5506/api/bookings",
  headers: {
    "Content-Type": "application/json",
  },
});
