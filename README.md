# charstats



###Habilidades

/lib/[bundle_id]/habilidad_id.js
```javascript
Habilidades.[bundle_id].[habilidad_id] = {
  id: habilidad_id,
  bundle: bundle_id,
  name: nombre_de_la_habilidad,
  desc: descripcion,
  pasive: true/false,
  condiciones: []
  efectos: []
}

CharStats.efectos.[efecto_id] = function (pj, bonus) {
 (... modificar pj ...)
 return pj;
}

CharStats.condiciones.[condicion_id] = function (pj, value) {
  return true/false;
}
```
