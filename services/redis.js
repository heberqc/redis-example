const redis = require('redis')

let redisClient

exports.redisConnection = uri => {
  redisClient = redis.createClient(uri)
} 

// obtener un valor de tipo sring
exports.redisGET = key => new Promise((resolve, reject) => {
  redisClient.GET(key, (err, respuesta) => {
    if (err) reject(err)
    else resolve(respuesta)
  })
})

// agregar agregar miembros a una agrupacion
exports.redisSADD = (key, ...members) => new Promise((resolve, reject) => {
  redisClient.SADD(key, ...members, (err, respuesta) => {
    if (err) reject(err)
    else resolve(respuesta)
  })
})

// listas todos los miembros de una agrupacion
exports.redisSMEMBERS = key => new Promise((resolve, reject) => {
  redisClient.SMEMBERS(key, (err, respuesta) => {
    if (err) reject(err)
    else resolve(respuesta)
  })
})

// verificar si un miembro es parte de una agrupacion
exports.redisSISMEMBER = (key, member) => new Promise((resolve, reject) => {
  redisClient.SISMEMBER(key, member, (err, respuesta) => {
    if (err) reject(err)
    else resolve(respuesta)
  })
})

exports.redisDiconnection = () => {
  redisClient.quit()
}
