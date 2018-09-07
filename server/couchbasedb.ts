import * as config from 'config';
import * as couchbase from 'couchbase';

let dbConfig: any = config.get('dbConfig');
let cluster: couchbase.Cluster;
let bucket: couchbase.Bucket
let N1qlQuery: couchbase.N1qlQuery;

cluster = new couchbase.Cluster(dbConfig.url);
bucket = cluster.openBucket(dbConfig.bucketName, dbConfig.sslPassword);
bucket.operationTimeout = 12000000 * 1000;
N1qlQuery = couchbase.N1qlQuery;
console.log("connection is created")

bucket.upsert('testdoc', { name: 'Frank' }, (err, result) => {
    if (err) throw err;
    bucket.get('testdoc', function (err: any, result: any) {
        if (err) throw err;
        console.log(result.value);
    });
});

export const couchbaseRef = { bucket, N1qlQuery };

console.log("new bucket is created ", couchbaseRef)
