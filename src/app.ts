import express from "express";
import { json } from "body-parser";
import * as routers from "./router/router"
import { validateRequestPayload } from "./utils/validation/validator";
import { sendInvalidMethodResponse } from "./utils/wrappers/response-wrapper";
import { Logger } from "./utils/other/Logger";

const logger = new Logger("express");

const app: express.Application = express();

app.use(json({ limit: "50mb", type: "application/json" }));

app.use(validateRequestPayload);

app.use(logger.logRoute.bind(logger));

app.use('/v1', routers.TransportRouter);

app.use(sendInvalidMethodResponse);

export default app;
