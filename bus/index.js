const kafka = require('./kafka')
const rabbitmq = require('./rabbitmq')
// make sure that any driver you use implement similar interface

module.exports = {
    kafka, rabbitmq
}