import { config } from "dotenv";
config();

import { createConnection } from "typeorm";
import { createServer } from "http";

import { env } from "./src/utils/wrappers/env-wrapper";
import app from "./src/app";

(async function main(): Promise<void> {

    try {
        await createConnection();

        createServer(app).listen(env.port);
        console.log('Server started on port:', env.port);

    } catch (error) {
        console.log(error)
        process.exit(-1);
    }

})();

