import Eje_salida from './ejeSalida.model.js';
import Fijacion_salida from './fijacionSalida.model.js';
import Motor from './motores.model.js';
import Reductor from './reductores.model.js';
import Tipo_entrada from './tipoEntrada.model.js';
import Usuario from './usuarios.model.js';
import Orden from './orden.model.js';
import Convertidor from './convertidores.models.js';
import ArranqueSuave from './arranquesuave.model.js';

// ======================
//   Relaciones
// ======================

// -- Reductor <-> Eje_salida (N:1)
Reductor.belongsTo(Eje_salida, {
  foreignKey: 'eje_salida_id',
  as: 'eje_salida'
});
Eje_salida.hasMany(Reductor, {
  foreignKey: 'eje_salida_id',
  as: 'reductores_eje'
});

// -- Reductor <-> Fijacion_salida (N:1)
Reductor.belongsTo(Fijacion_salida, {
  foreignKey: 'fijacion_salida_id',
  as: 'fijacion_salida'
});
Fijacion_salida.hasMany(Reductor, {
  foreignKey: 'fijacion_salida_id',
  as: 'reductores_fijacion'
});

// -- Reductor <-> Tipo_entrada (N:1)
Reductor.belongsTo(Tipo_entrada, {
  foreignKey: 'tipo_entrada_id',
  as: 'tipo_entrada'
});
Tipo_entrada.hasMany(Reductor, {
  foreignKey: 'tipo_entrada_id',
  as: 'reductores_entrada'
});

Usuario.hasMany(Orden, {
  foreignKey: "user_id",
  as: "ordenes"
});

// ======================
//   Relaciones con Users
// ======================

// -- Usuario <-> Motor (1:N)
Usuario.hasMany(Motor, {
  foreignKey: 'user_id',
  as: 'motores'
});
Motor.belongsTo(Usuario, {
  foreignKey: 'user_id',
  as: 'usuario'
});

// -- Usuario <-> Reductor (1:N)
Usuario.hasMany(Reductor, {
  foreignKey: 'user_id',
  as: 'reductores'
});
Reductor.belongsTo(Usuario, {
  foreignKey: 'user_id',
  as: 'usuario'
});
Orden.belongsTo(Usuario, {
  foreignKey: "user_id",
  as: "usuario"  
});

// Nota: según lo indicado, Motor no se relaciona con estos modelos

// ======================
//   Exportar modelos
// ======================
export {
  Eje_salida,
  Fijacion_salida,
  Motor,
  Reductor,
  Tipo_entrada,
  Usuario,
  Orden,
  Convertidor,
  ArranqueSuave
};