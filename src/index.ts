/**To take a enviroment variables */
import "@fnd/external_interfaces/env";
/**Authkey use case */
import logger from "@fnd/external_interfaces/logger";
/**Create DB connections */
import { connect as redisConnect } from "@fnd/storage/redis/client/client";

const Logger = logger(__filename);

const main = async () => {
    try {
        createCacheConnection();
        startWebApp();
    } catch (err) {
        Logger.error(`ERROR : ${err.message} STACK : ${err.stack}`)
    }
}

const createCacheConnection = () => {
    try {
        const REDIS_CLIENT = process.env.REDIS_CLIENT || "client"
        const REDIS_PORT = parseInt(process.env.REDIS_PORT || "6379")
        const REDIS_HOST = process.env.REDIS_HOST || "localhost"
        const REDIS_PASSWORD = process.env.REDIS_PASSWORD || undefined
        redisConnect(REDIS_CLIENT, REDIS_PORT, REDIS_HOST, REDIS_PASSWORD);
    } catch (err) {
        throw err;
    }
}

const startWebApp = async () => {
    try {
        /**Express server */
        const { Server } = await import('@fnd/web/server');
        const server = new Server()
        server.start();
    } catch (err) {        
        throw err;
    }
}

main();


