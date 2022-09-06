import { getLogger, Logger as Log4js } from "log4js";
import chalk from "chalk";
import { NextFunction, Request } from "express";

export interface OptionalParameters {
    data?: any;
    sessionId?: string;
}

export class Logger {

    private logger: Log4js;
    private repeatSign = 35;

    constructor(component: string) {
        this.logger = getLogger(component);
        this.logger.level = "debug";
    }

    public info(message: string, optionalParameters?: OptionalParameters): void {
        this.logger.info(this.formatMessage("blue", message, optionalParameters));
        this.logData(optionalParameters);
    }

    public debug(message: string, optionalParameters?: OptionalParameters): void {
        this.logger.debug(this.formatMessage("green", message, optionalParameters));
        this.logData(optionalParameters);
    }

    public warn(message: string, optionalParameters?: OptionalParameters): void {
        this.logger.warn(this.formatMessage("yellow", message, optionalParameters));
        this.logData(optionalParameters);
    }

    public error(message: string, optionalParameters?: OptionalParameters): void {
        this.logger.error(this.formatMessage("red", message, optionalParameters));
        this.logData(optionalParameters);
    }

    public fatal(message: string, optionalParameters?: OptionalParameters): void {
        this.logger.fatal(this.formatMessage("magenta", message, optionalParameters));
        this.logData(optionalParameters);
    }

    private logData(optionalParameters: OptionalParameters): void {
        if (optionalParameters?.data) console.log(optionalParameters.data);
    }

    public logRoute(request: Request, response: Response, next: NextFunction) {
        let route = chalk.cyan(`\n${"#".repeat(55)} ${request.originalUrl}`) + " - ";

        const date = new Date();
        const dateString = `${date.toDateString()} - ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

        if (request.originalUrl.includes('verifyStep') || request.originalUrl.includes('repeatStep')) {
            route += `${chalk.yellow(request.body.stepType)} - ${dateString}`
        } else {
            route += dateString;
        }

        console.log(route);
        next();
    }

    private formatMessage(color: string, message: any, optionalParameters: OptionalParameters): string {
        console.log();
        const sessionId = optionalParameters?.sessionId ? `- ${optionalParameters?.sessionId}` : "";
        return `${chalk[color]("#".repeat(this.repeatSign))} ${message.toUpperCase()} ${sessionId}`;
    }



}