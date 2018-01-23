const hoy = new Date()
undefined
hoy
Wed Jan 17 2018 22:20:08 GMT-0700 (Hora estándar Montañas (México))
hoy.get
undefined
hoy.getD
undefined
hoy.getDate()
17
hoy.getFullYear()
2018
hoy.getMonth()
0
hoy.getMonth()
0
var nacimiento = new Date(1991,11,11)
undefined
var transcurrido = hoy - nacimi
VM484:1 Uncaught ReferenceError: nacimi is not defined
    at <anonymous>:1:26
(anonymous) @ VM484:1
var transcurrido = hoy - nacimiento
undefined
transcurrido
823818008960
transcurrido = new Date()
Wed Jan 17 2018 22:37:30 GMT-0700 (Hora estándar Montañas (México))
transcurrido = date (hoy - nacimiento )
VM573:1 Uncaught ReferenceError: date is not defined
    at <anonymous>:1:1
(anonymous) @ VM573:1
transcurrido = Date(hoy - nacimiento )
"Wed Jan 17 2018 22:38:09 GMT-0700 (Hora estándar Montañas (México))"
transcurrido = hoy - nacimiento
823818008960
transcurrido
823818008960
transcurrido / 1000 / 60 / 60
228838.33582222223
transcurrido / 1000 / 60 / 60
228838.33582222223
transcurrido / 1000
823818008.96
transcurrido / 60
13730300149.333334
transcurrido / 60
13730300149.333334
transcurrido /= 1000
823818008.96
transcurrido /= 60
13730300.149333334
transcurrido /= 60
228838.33582222223
transcurrido /= 12
19069.86131851852
transcurrido = hoy - nacimiento
823818008960
transcurrido /= 1000
823818008.96
transcurrido /= 60
13730300.149333334
transcurrido /= 60
228838.33582222223
transcurrido /= 12
19069.86131851852
transcurrido /= 365
52.246195393201425
transcurrido = hoy - nacimiento
823818008960
hoy
Wed Jan 17 2018 22:20:08 GMT-0700 (Hora estándar Montañas (México))
nacimiento
Wed Dec 11 1991 00:00:00 GMT-0700 (Hora estándar Montañas (México))
nacimiento = new Date(1991,10,11)
Mon Nov 11 1991 00:00:00 GMT-0700 (Hora estándar Montañas (México))
transcurrido
823818008960
var segundos = transcurrido / 1000
undefined
segundos
823818008.96
const minutos = segundos /60
undefined
horas = minutos / 60
228838.33582222223
horas
228838.33582222223
dias = horas / 12
19069.86131851852
meses = dias /30
635.6620439506173
años = meses / 12
52.97183699588478
años = meses /360
1.7657278998628259
transcurrido 
823818008960
transcurrido /1000 /60 /60 /60 /12
 
317.83102197530866
transcurrido /1000 /60 /60 /60 /12 /360
 
0.8828639499314129
transcurrido /1000 /60 /60 /60 /12 /12
 
26.48591849794239