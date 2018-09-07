export interface Config {
    hostConfig? : {
        port?: number
    },
    dbConfig?: {
        url?: string,
        bucketName?: string,
        sslPassword?: string
    }
  };
