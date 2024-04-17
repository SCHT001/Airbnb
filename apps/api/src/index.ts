import dotenv from "dotenv";
import { SetupServer } from "./express/server";
import api from "./routes/api";
dotenv.config();

const PORT = process.env.PORT || 5000;
const Main = () => {
	try {
		const expressApp = SetupServer();
		expressApp.use("/api", api);
		expressApp.listen(PORT, () => {
			console.log(`Server running at port ${PORT}`);
		});
	} catch (err) {
		console.error(err);
	}
};
Main();
