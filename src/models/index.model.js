import Eje_salida from './ejeSalida.model.js';
import Fijacion_salida from './fijacionSalida.model.js';
import Motor from './motores.model.js';
import Reductor from './reductores.model.js';
import Tipo_entrada from './tipoEntrada.model.js';
import Usuario from './usuarios.model.js';
import Orden from './orden.model.js';
import OrderProduct from './orderProducts.model.js'; // Modelo para la relación de orden con productos
import Convertidor from './convertidores.models.js';
import ArranqueSuave from './arranquesuave.model.js';

// ======================
//      Relaciones
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

// -- Usuario <-> Orden (1:N)
Usuario.hasMany(Orden, {
  foreignKey: "user_id",
  as: "ordenes"
});
Orden.belongsTo(Usuario, {
  foreignKey: "user_id",
  as: "usuario"
});

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

// ======================
// Relaciones de Orden con OrderProducts
// ======================

// Una orden puede tener muchos items asociados en order_products
Orden.hasMany(OrderProduct, {
  foreignKey: 'order_id',
  as: 'order_products'
});

// Cada registro en order_products pertenece a una orden
OrderProduct.belongsTo(Orden, {
  foreignKey: 'order_id',
  as: 'orden'
});

// ======================
//      Exportar modelos
// ======================
export {
  Eje_salida,
  Fijacion_salida,
  Motor,
  Reductor,
  Tipo_entrada,
  Usuario,
  Orden,
  OrderProduct,
  Convertidor,
  ArranqueSuave
};
