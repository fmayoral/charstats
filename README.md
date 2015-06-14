# Rolepack



###Habilidades

/lib/[bundle_id]/habilidad_id.js
```javascript
Habilidades.[bundle_id].[habilidad_id] = {
  key: habilidad_id,
  bundle: bundle_id,
  name: nombre_de_la_habilidad,
  desc: descripcion,
  pasive: true/false,
  condiciones: []
  efectos: []
}

Rolepack.efectos.[efecto_id] = function (pj, bonus) {
 (... modificar pj ...)
 return pj;
}

Rolepack.condiciones.[condicion_id] = function (pj, value) {
  return true/false;
}
```
### Variables de Sesion
`active-pj` = Personaje activo / null

`selected_char_id` = id del personaje seleccionado

###Funciones
```javascript
Rolepack.funciones.aplicarFeat = function (pj, feat)
```
**return** (pj modificado)

Aplica el efecto determinado por `feat.type` a `pj`

---
```javascript
Rolepack.funciones.checkCondicion = function (pj, condicion)
```
**return** (true/false)

Verifica que `pj` cumpla con la condicion

---
```javascript
Rolepack.funciones.getWeaponInUse = function (pj)
```
**return** (weapon/false)

Devuelve el arma que esta marcada como `inUse` o `false` en caso de no tener ninguna seleccionada

---
```javascript
Rolepack.funciones.setActiveWeapon = function (pj, weaponId)
```
**return** (pj modificado)

Marca el arma indicada por `weaponId` como `inUse`

---
```javascript
Rolepack.funciones.setDistanceToTarget = function (pj, distance)
```
**return** (pj modificado)

Setea la disntancia de `pj` al objetivo

---
```javascript
Rolepack.funciones.toggleFeat = function (pj, featId)
```
**return** (pj modificado)

Activa/desactiva la feat indicada en `featId`

---
```javascript
Rolepack.funciones.verificarCondiciones = function (pj, habilidad)
```
**return** (true/false)

Verifica que `pj` cumpla con todas las condiciones necesarias para utilizar `habilidad`

---
```javascript
Rolepack.funciones.modHealth = function (pj, damage)
```
**return** (pj modificado)

Agrega el daño indicado por `damage` a la salud de `pj`

---
```javascript
Rolepack.funciones.modExperience = function (pj, modValue)
```
**return** (pj modificado)

Agrega el valor indicado en `modValue` a la experiencia de `pj`

---
```javascript
Rolepack.funciones.modRoundType = function (pj, roundType)
```
**return** (pj modificado)

Setea el tipo de round indicado en `roundType`

---
```javascript
Rolepack.funciones.modifyCharForDisplay = function (pj)
```
**return** (pj modificado)

Toma el `pj` de la base de datos y ejecuta todos los comandos necesarios para mostrar la hoja de personaje.
Una vez modificado, el personaje es setado como activo en la variable de sesion correspondiente.
