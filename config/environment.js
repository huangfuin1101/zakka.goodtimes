const port = process.env.PORT || 4000;
const env = process.env.NODE_ENV || 'dev';
const dbURI = process.env.MONGODB_URI || `mongodb://localhost/zakka${env}`;
const secret = process.env.SECRET || 'zakka';

module.exports = { port, env, dbURI, secret};
