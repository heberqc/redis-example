const redis_uri = 'redis://127.0.0.1:6379'

const {
  redisConnection,
  redisGET,
  redisSMEMBERS,
  redisSADD,
  redisSISMEMBER,
} = require('./services/redis')

redisConnection(redis_uri)

redisGET('name')
.then((name) => {
  console.log('name:', name)
})

.then(() => redisSMEMBERS('agrupacion'))
.then((agrupacion) => {
  console.log('agrupacion:', agrupacion)
})

.then(() => redisSADD('prueba', 'uno', 'dos', 'tres', 'cuatro', 'cinco'))
.then(agregaMiembros => {
  console.log('agregaMiembros:', agregaMiembros)
})

.then(() => redisSMEMBERS('prueba'))
.then(miembros => {
  console.log('miembros:', miembros)
})

.then(() => redisSISMEMBER('prueba', 'dos'))
.then(esMiembro => {
  console.log('esMiembro:', esMiembro)
})
