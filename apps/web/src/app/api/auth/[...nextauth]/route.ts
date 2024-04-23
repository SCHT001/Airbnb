import { user } from "@/lib/axios";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
const handler = NextAuth({
	providers: [
		Credentials({
			name: "Credentials",
			credentials: {
				phone: {
					label: "phone",
					type: "number",
					placeholder: "Enter your phone number",
				},
				countryCode: {
					label: "country code",
					type: "number",
					placeholder: "Enter country code",
				},
			},

			async authorize(credentials, req) {
				console.log("here");
				const res = await user.post("/auth/phone", credentials);
				return res.data;
			},
		}),

		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_SECRET_KEY!,
		}),
	],
});

export { handler as GET, handler as POST };
