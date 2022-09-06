class EnvWrapper {

    private getProperty(property: string): string {
        return process.env[property.toUpperCase()] || process.env[property.toLowerCase()] || "";
    }

    private toNumber(value: string): number {
        return +value;
    }

    private toBoolean(value: string): boolean {
        return value.toLowerCase() === "true";
    }

    public port = this.getProperty("port");
    public env_type = this.getProperty("env_type");

    public pg = {
        host: this.getProperty("pg_host"),
        port: this.toNumber(this.getProperty("pg_port")),
        username: this.getProperty("pg_username"),
        password: this.getProperty("pg_password"),
        database: this.getProperty("pg_db_name"),
    }

    public orm = {
        synchronize: this.toBoolean(this.getProperty("orm_synchronize")),
        logging: this.toBoolean(this.getProperty("orm_logging"))
    }

    public transport_api_url = this.getProperty("transport_api_url")

}

export const env = new EnvWrapper();
