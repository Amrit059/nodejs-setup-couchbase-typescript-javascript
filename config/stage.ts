import { Config } from "./types";

const defaultConfig: Config = {
    hostConfig: {
        port: 6000
    },
    dbConfig: {
        url: "http://localhost:8091",
        bucketName: "test1",
        sslPassword: "<ssl pasword of bucket>" 
    }
};

export default defaultConfig;