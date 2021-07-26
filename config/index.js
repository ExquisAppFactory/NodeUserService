const db = require('../drivers')
const bus = require('../bus')

module.exports = {
    'bus': bus.rabbitmq,
    'db': db.mongo,
    'port': 9090,
    'jwt_secret': '#*(sdf8fh9432iruh938$%%$Ffqwer#$F)ADFA_$#R#$_F_fkw0feawieof34i34'
}