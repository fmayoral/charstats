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
