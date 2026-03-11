import Express, { Request, Response } from "express";
import { AppError } from "./errors/AppError";
import { errorHandler } from "./middlewares/errorHandler";


const startServer = async () => {
    try {
        const app = Express();
        app.use(Express.json());
        const PORT = process.env.PORT ?? 3000;

        app.get("/test", (req: Request, res: Response) => {
            throw new AppError("Erro de teste", 400)
        })

        app.use(errorHandler);

        app.listen(PORT, () => {
            console.log("Server running http://localhost:"+PORT)
        })
    } catch(e) {
        console.log(e);
        process.exit(1);
    }
}

startServer();