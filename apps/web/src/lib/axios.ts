import axios from "axios";
export const host = axios.create({
	baseURL: "http://localhost:5505/api",
	headers: {
		"Content-Type": "application/json",
	},
});

export const user = axios.create({
	baseURL: "http://localhost:5505/api",
	headers: {
		"Content-Type": "application/json",
	},
});

export const hostImage = axios.create({
	baseURL: "http://localhost:5505/api",
	headers: {
		"Content-Type": "multipart/form-data",
	},
});
