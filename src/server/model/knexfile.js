// gcloud sql instances describe [YOUR_INSTANCE_NAME]
// ./cloud_sql_proxy -instances="[YOUR_INSTANCE_CONNECTION_NAME]"=tcp:3306
// mysql --host 127.0.0.1 --user root --password

// const mysql = require('mysql');

const connection = {
    //socketPath     :  `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`,
    user     :  process.env.MYSQL_USER,
    password :  process.env.MYSQL_PASSWORD,
    database :  process.env.MYSQL_DATABASE,
    charset  : 'utf8'
}

// const connection = mysql.createConnection(options);

const development = {
    client: 'mysql',
    connection,
}
module.exports = {
    development,
}