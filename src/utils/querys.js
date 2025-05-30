// --------------------------------------------motores--------------------------------------------------------------

INSERT INTO "fijacion_salida" ("codigo", "tamanio", "precio", "tipo", "createdAt", "updatedAt")
VALUES
  (0,0,0,"carcasa", NOW(), NOW())
  (17675993, 30, 11.0, 'brazo', NOW(), NOW()),
  (17675994, 40, 12.3, 'brazo', NOW(), NOW()),
  (17675995, 50, 14.7, 'brazo',  NOW(), NOW()),
  (17675997, 63, 16.7, 'brazo',  NOW(), NOW()),
  (17676028, 75, 24.3, 'brazo',  NOW(), NOW()),
  (17676029, 90, 26.7, 'brazo', NOW(), NOW()),
  (17675988, 110, 33.6, 'brazo', NOW(), NOW()),


  (17676082, 30, 18.4, 'brida',  NOW(), NOW()),
  (17676084, 40, 20.4, 'brida',  NOW(), NOW()),
  (17676050, 50, 23.3, 'brida',  NOW(), NOW()),
  (17676118, 63, 25.0, 'brida',  NOW(), NOW()),
  (17676119, 75, 26.7, 'brida',  NOW(), NOW()),
  (17676120, 90, 29.9, 'brida',  NOW(), NOW()),
  (17676079, 110, 54.9, 'brida', NOW(), NOW());

//---------- eje de salida ---------------------

INSERT INTO public.eje_salida
(codigo, tipo, tamanio, precio, "createdAt", "updatedAt")
VALUES

  (0, 'hueco', 0, 0, NOW(), NOW()),


  (17676052, 'macizo simple', 30, 14.1, NOW(), NOW()),
  (17676053, 'macizo simple', 40, 17.4, NOW(), NOW()),
  (17676054, 'macizo simple', 50, 19.7, NOW(), NOW()),
  (17676056, 'macizo simple', 63, 21.3, NOW(), NOW()),
  (17676057, 'macizo simple', 75, 23.7, NOW(), NOW()),
  (17676090, 'macizo simple', 90, 27.3, NOW(), NOW()),
  (17676049, 'macizo simple', 110, 43.3, NOW(), NOW()),


  (17676033, 'macizo doble', 30, 17.0, NOW(), NOW()),
  (17676034, 'macizo doble', 40, 20.0, NOW(), NOW()),
  (17676035, 'macizo doble', 50, 22.0, NOW(), NOW()),
  (17676036, 'macizo doble', 63, 23.3, NOW(), NOW()),
  (17676037, 'macizo doble', 75, 28.7, NOW(), NOW()),
  (17676048, 'macizo doble', 90, 33.3, NOW(), NOW()),
  (17676039, 'macizo doble', 110, 51.6, NOW(), NOW());

//---------- TIPO DE ENTRADA ---------------------

INSERT INTO public.tipo_entrada(
    tipo, "createdAt", "updatedAt")
   VALUES ( 'Brida C Din', NOW(), NOW()), ( 'Brida FF', NOW(), NOW())


// ----------------Motores------------------------------------------   
INSERT INTO public.motor(
  linea, eficiencia, material_carcasa, potencia_cv, potencia_kw, cuerpo, codigo, precio, 
  velocidad, polos, diametro_eje, diametro_brida, forma_constructiva, tension, marca, 
  descuento_porcentaje, "createdAt", "updatedAt", user_id, tipo, grado_ip, out_of_stock
)
VALUES
-- W22 IE1 Hierro - 2 polos (3000 rpm)
('W22', 'IE1', 'Hierro', 0.25, 0.18, '63', '11439112', 152.00, 3000, 2, 11.0, 140.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 0.33, 0.25, '63', '11439113', 155.00, 3000, 2, 11.0, 140.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 0.50, 0.37, '71', '11439114', 166.00, 3000, 2, 14.0, 160.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 0.75, 0.55, '71', '11418407', 177.00, 3000, 2, 14.0, 160.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 1.00, 0.75, '80', '11395815', 203.00, 3000, 2, 19.0, 200.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 1.50, 1.10, '80', '11469683', 230.00, 3000, 2, 19.0, 200.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 2.00, 1.50, '90S', '11545138', 267.00, 3000, 2, 24.0, 200.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 3.00, 2.20, '90L', '11477924', 305.00, 3000, 2, 24.0, 200.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 4.00, 3.00, '100L', '11439191', 391.00, 3000, 2, 28.0, 250.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 5.50, 4.00, '112M', '11439192', 471.00, 3000, 2, 28.0, 250.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 7.50, 5.50, '112M', '11399872', 596.00, 3000, 2, 28.0, 250.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 10.00, 7.50, '132S', '11422574', 732.00, 3000, 2, 38.0, 300.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 12.50, 9.20, '132M', '11426000', 928.00, 3000, 2, 38.0, 300.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 15.00, 11.00, '160M', '11439195', 1220.00, 3000, 2, 42.0, 350.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 20.00, 15.00, '160M', '11439196', 1355.00, 3000, 2, 42.0, 350.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 25.00, 18.50, '160L', '11414024', 1607.00, 3000, 2, 42.0, 350.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 30.00, 22.00, '180M', '11424144', 2074.00, 3000, 2, 48.0, 350.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 40.00, 30.00, '200L', '11424142', 2963.00, 3000, 2, 55.0, 400.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 50.00, 37.00, '200L', '11429536', 3216.00, 3000, 2, 55.0, 400.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 60.00, 45.00, '225S/M', '11235363', 4609.00, 3000, 2, 55.0, 450.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 75.00, 55.00, '250S/M', '11125755', 5832.00, 3000, 2, 60.0, 550.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 100.00, 75.00, '280S/M', '11163561', 7990.00, 3000, 2, 65.0, 550.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 125.00, 90.00, '280S/M', '11125753', 8764.00, 3000, 2, 65.0, 550.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 150.00, 110.00, '315S/M', '11168659', 10077.00, 3000, 2, 65.0, 660.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 175.00, 132.00, '315S/M', '14273798', 11227.00, 3000, 2, 65.0, 660.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 200.00, 150.00, '315S/M', '11356348', 13569.00, 3000, 2, 65.0, 660.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 220.00, 160.00, '315S/M', '11169088', 14729.00, 3000, 2, 65.0, 660.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),

-- W22 IE1 Hierro - 4 polos (1500 rpm)
('W22', 'IE1', 'Hierro', 0.25, 0.18, '63', '11439220', 152.00, 1500, 4, 11.0, 140.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 0.33, 0.25, '71', '11439221', 168.00, 1500, 4, 14.0, 160.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 0.50, 0.37, '71', '11589124', 175.00, 1500, 4, 14.0, 160.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 0.75, 0.55, '80', '11465952', 201.00, 1500, 4, 19.0, 200.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 1.00, 0.75, '80', '11486710', 211.00, 1500, 4, 19.0, 200.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 1.50, 1.10, '90S', '11472163', 250.00, 1500, 4, 24.0, 200.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 2.00, 1.50, '90L', '11411555', 302.00, 1500, 4, 24.0, 200.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 3.00, 2.20, '100L', '11455206', 356.00, 1500, 4, 28.0, 250.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 4.00, 3.00, '100L', '11777946', 408.00, 1500, 4, 28.0, 250.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 5.50, 4.00, '112M', '11439222', 511.00, 1500, 4, 28.0, 250.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 7.50, 5.50, '132S', '11397052', 707.00, 1500, 4, 38.0, 300.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 10.00, 7.50, '132M', '11426819', 792.00, 1500, 4, 38.0, 300.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 12.50, 9.20, '132M', '11734700', 1006.00, 1500, 4, 38.0, 300.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 15.00, 11.00, '160M', '11405520', 1307.00, 1500, 4, 42.0, 350.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 20.00, 15.00, '160L', '11423331', 1443.00, 1500, 4, 42.0, 350.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 25.00, 18.50, '180M', '11424160', 2069.00, 1500, 4, 48.0, 350.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 30.00, 22.00, '180L', '11424159', 2252.00, 1500, 4, 48.0, 350.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 40.00, 30.00, '200L', '11429533', 3011.00, 1500, 4, 55.0, 400.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 50.00, 37.00, '225S/M', '11212960', 4403.00, 1500, 4, 60.0, 450.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 60.00, 45.00, '225S/M', '11183944', 4718.00, 1500, 4, 60.0, 450.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 75.00, 55.00, '250S/M', '11278018', 5927.00, 1500, 4, 65.0, 550.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 100.00, 75.00, '280S/M', '11168658', 8124.00, 1500, 4, 75.0, 550.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 125.00, 90.00, '280S/M', '11188860', 8786.00, 1500, 4, 75.0, 550.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 150.00, 110.00, '315S/M', '11150569', 10551.00, 1500, 4, 80.0, 660.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 175.00, 132.00, '315S/M', '13030235', 11938.00, 1500, 4, 80.0, 660.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 200.00, 150.00, '315S/M', '11153871', 12645.00, 1500, 4, 80.0, 660.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 220.00, 160.00, '315S/M', '13030299', 13058.00, 1500, 4, 80.0, 660.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),

-- W22 IE1 Hierro - 6 polos (1000 rpm)
('W22', 'IE1', 'Hierro', 0.25, 0.18, '71', '11795890', 202.00, 1000, 6, 14.0, 160.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 0.33, 0.25, '71', '11436118', 218.00, 1000, 6, 14.0, 160.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 0.50, 0.37, '80', '11504733', 234.00, 1000, 6, 19.0, 200.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 0.75, 0.55, '80', '11379419', 241.00, 1000, 6, 19.0, 200.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 1.00, 0.75, '90S', '11541346', 290.00, 1000, 6, 24.0, 200.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 1.50, 1.10, '90L', '11382255', 309.00, 1000, 6, 24.0, 200.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 2.00, 1.50, '100L', '11556495', 381.00, 1000, 6, 28.0, 250.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 3.00, 2.20, '112M', '11512717', 504.00, 1000, 6, 28.0, 250.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 4.00, 3.00, '132S', '11465060', 665.00, 1000, 6, 38.0, 300.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 5.50, 4.00, '132M', '11436124', 751.00, 1000, 6, 38.0, 300.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 7.50, 5.50, '132M', '11405521', 907.00, 1000, 6, 38.0, 300.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 10.00, 7.50, '160M', '11436127', 1325.00, 1000, 6, 42.0, 350.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 12.50, 9.20, '160L', NULL, 1698.00, 1000, 6, 42.0, 350.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 15.00, 11.00, '160L', '11436158', 1711.00, 1000, 6, 42.0, 350.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 20.00, 15.00, '180L', '11424163', 2230.00, 1000, 6, 48.0, 350.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 25.00, 18.50, '200L', '11445913', 2986.00, 1000, 6, 55.0, 400.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 30.00, 22.00, '200L', '11421431', 3183.00, 1000, 6, 55.0, 400.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 40.00, 30.00, '225S/M', '11176283', 4686.00, 1000, 6, 60.0, 450.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 50.00, 37.00, '250S/M', '11125754', 5517.00, 1000, 6, 65.0, 550.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 60.00, 45.00, '280S/M', '11150568', 8288.00, 1000, 6, 75.0, 550.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 75.00, 55.00, '280S/M', '11199493', 8809.00, 1000, 6, 75.0, 550.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 100.00, 75.00, '315S/M', '11225950', 11222.00, 1000, 6, 80.0, 660.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 125.00, 90.00, '315S/M', '11356407', 12446.00, 1000, 6, 80.0, 660.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 150.00, 110.00, '315S/M', '11356418', 15096.00, 1000, 6, 80.0, 660.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),

-- W22 IE1 Hierro - 8 polos (750 rpm)
('W22', 'IE1', 'Hierro', 0.25, 0.18, '80', '11865515', 231.00, 750, 8, 19.0, 200.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 0.33, 0.25, '80', '11795893', 259.00, 750, 8, 19.0, 200.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 0.50, 0.37, '90S', '11435820', 307.00, 750, 8, 24.0, 200.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 0.75, 0.55, '90L', '11435823', 330.00, 750, 8, 24.0, 200.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 1.00, 0.75, '100L', '11435825', 425.00, 750, 8, 28.0, 250.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 1.50, 1.10, '100L', '11435878', 448.00, 750, 8, 28.0, 250.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 2.00, 1.50, '112M', '11578034', 618.00, 750, 8, 28.0, 250.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 3.00, 2.20, '132S', '11665495', 831.00, 750, 8, 38.0, 300.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 4.00, 3.00, '132M', '11435886', 1001.00, 750, 8, 38.0, 300.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 5.50, 4.00, '160M', '11435887', 1487.00, 750, 8, 42.0, 350.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 7.50, 5.50, '160M', '11435888', 1805.00, 750, 8, 42.0, 350.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 10.00, 7.50, '160L', '11435890', 1888.00, 750, 8, 42.0, 350.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 12.50, 9.20, '180M', NULL, 2376.00, 750, 8, 48.0, 350.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 15.00, 11.00, '180L', '12166964', 2544.00, 750, 8, 48.0, 350.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 20.00, 15.00, '200L', '11424162', 3183.00, 750, 8, 55.0, 400.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 25.00, 18.50, '225S/M', '11356422', 5093.00, 750, 8, 60.0, 450.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 30.00, 22.00, '225S/M', '13030394', 6261.00, 750, 8, 60.0, 450.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 40.00, 30.00, '250S/M', '11356423', 7428.00, 750, 8, 65.0, 550.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 50.00, 37.00, '280S/M', '11356424', 10187.00, 750, 8, 75.0, 550.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 60.00, 45.00, '280S/M', '13802155', 11032.00, 750, 8, 75.0, 550.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 75.00, 55.00, '315S/M', '13030397', 11628.00, 750, 8, 80.0, 660.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 100.00, 75.00, '315S/M', '11492721', 13058.00, 750, 8, 80.0, 660.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 125.00, 90.00, '315S/M', '11356427', 14995.00, 750, 8, 80.0, 660.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),

-- W22 IE3 Hierro - 2 polos (3000 rpm)
('W22', 'IE3', 'Hierro', 0.25, 0.18, '63', '14283840', 191.00, 3000, 2, 11.0, 140.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 0.33, 0.25, '63', '14283846', 195.00, 3000, 2, 11.0, 140.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 0.50, 0.37, '71', '14226739', 209.00, 3000, 2, 14.0, 160.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 0.75, 0.55, '71', '14226740', 223.00, 3000, 2, 14.0, 160.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 1.00, 0.75, '80', '14226741', 256.00, 3000, 2, 19.0, 200.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 1.50, 1.10, '80', '12404572', 290.00, 3000, 2, 19.0, 200.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 2.00, 1.50, '90S', '14226744', 336.00, 3000, 2, 24.0, 200.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 3.00, 2.20, '90L', '12053277', 384.00, 3000, 2, 24.0, 200.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 4.00, 3.00, '100L', '11923984', 492.00, 3000, 2, 28.0, 250.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 5.50, 4.00, '112M', '11757757', 593.00, 3000, 2, 28.0, 250.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 7.50, 5.50, '112M', '12506468', 751.00, 3000, 2, 28.0, 250.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 10.00, 7.50, '132S', '12038535', 922.00, 3000, 2, 38.0, 300.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 12.50, 9.20, '132M', '11893152', 1170.00, 3000, 2, 38.0, 300.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 15.00, 11.00, '160M', '12271849', 1537.00, 3000, 2, 42.0, 350.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 20.00, 15.00, '160M', '11999802', 1707.00, 3000, 2, 42.0, 350.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 25.00, 18.50, '160L', '11895308', 2024.00, 3000, 2, 42.0, 350.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 30.00, 22.00, '180M', '11923793', 2613.00, 3000, 2, 48.0, 350.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 40.00, 30.00, '200L', '12102253', 3734.00, 3000, 2, 55.0, 400.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 50.00, 37.00, '200L', '12443470', 4052.00, 3000, 2, 55.0, 400.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 60.00, 45.00, '225S/M', '11932464', 5808.00, 3000, 2, 55.0, 450.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 75.00, 55.00, '250S/M', '11783408', 7348.00, 3000, 2, 60.0, 550.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 100.00, 75.00, '280S/M', '12082605', 9648.00, 3000, 2, 65.0, 550.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 125.00, 90.00, '280S/M', '12112509', 10583.00, 3000, 2, 65.0, 550.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 150.00, 110.00, '315S/M', '14283946', 12168.00, 3000, 2, 65.0, 660.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 175.00, 132.00, '315S/M', '14283989', 13556.00, 3000, 2, 65.0, 660.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 200.00, 150.00, '315S/M', '14283991', 16384.00, 3000, 2, 65.0, 660.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 220.00, 160.00, '315S/M', '14283995', 17784.00, 3000, 2, 65.0, 660.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),

-- W22 IE3 Hierro - 4 polos (1500 rpm)
('W22', 'IE3', 'Hierro', 0.25, 0.18, '63', '14284127', 191.00, 1500, 4, 11.0, 140.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 0.33, 0.25, '71', '14284169', 212.00, 1500, 4, 14.0, 160.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 0.50, 0.37, '71', '13429684', 221.00, 1500, 4, 14.0, 160.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 0.75, 0.55, '80', '12194555', 253.00, 1500, 4, 19.0, 200.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 1.00, 0.75, '80', '11847018', 266.00, 1500, 4, 19.0, 200.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 1.50, 1.10, '90S', '11847015', 315.00, 1500, 4, 24.0, 200.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 2.00, 1.50, '90L', '11923979', 380.00, 1500, 4, 24.0, 200.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 3.00, 2.20, '100L', '11858171', 448.00, 1500, 4, 28.0, 250.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 4.00, 3.00, '100L', '14313548', 515.00, 1500, 4, 28.0, 250.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 5.50, 4.00, '112M', '12038681', 644.00, 1500, 4, 28.0, 250.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 7.50, 5.50, '132S', '12477432', 890.00, 1500, 4, 38.0, 300.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 10.00, 7.50, '132M', '11971150', 998.00, 1500, 4, 38.0, 300.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 12.50, 9.20, '132M', '12277106', 1267.00, 1500, 4, 38.0, 300.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 15.00, 11.00, '160M', '11757755', 1646.00, 1500, 4, 42.0, 350.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 20.00, 15.00, '160L', '11902315', 1819.00, 1500, 4, 42.0, 350.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 25.00, 18.50, '180M', '11984515', 2607.00, 1500, 4, 48.0, 350.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 30.00, 22.00, '180L', '12099269', 2837.00, 1500, 4, 48.0, 350.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 40.00, 30.00, '200L', '11846738', 3794.00, 1500, 4, 55.0, 400.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 50.00, 37.00, '225S/M', '11834860', 5548.00, 1500, 4, 60.0, 450.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 60.00, 45.00, '225S/M', '11758032', 5945.00, 1500, 4, 60.0, 450.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 75.00, 55.00, '250S/M', '12277104', 7468.00, 1500, 4, 65.0, 550.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 100.00, 75.00, '280S/M', '12158713', 9810.00, 1500, 4, 75.0, 550.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 125.00, 90.00, '280S/M', '14213792', 10609.00, 1500, 4, 75.0, 550.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 150.00, 110.00, '315S/M', '12076736', 12740.00, 1500, 4, 80.0, 660.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 175.00, 132.00, '315S/M', '13031334', 14415.00, 1500, 4, 80.0, 660.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 200.00, 150.00, '315S/M', NULL, 15269.00, 1500, 4, 80.0, 660.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 220.00, 160.00, '315S/M', '14213793', 15768.00, 1500, 4, 80.0, 660.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),

-- W22 IE3 Hierro - 6 polos (1000 rpm)
('W22', 'IE3', 'Hierro', 0.25, 0.18, '71', '14287822', 254.00, 1000, 6, 14.0, 160.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 0.33, 0.25, '80', NULL, 275.00, 1000, 6, 19.0, 200.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 0.50, 0.37, '80', '14228027', 295.00, 1000, 6, 19.0, 200.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 0.75, 0.55, '80', '14228078', 303.00, 1000, 6, 19.0, 200.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 1.00, 0.75, '90S', '12238408', 365.00, 1000, 6, 24.0, 200.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 1.50, 1.10, '90L', '14116214', 390.00, 1000, 6, 24.0, 200.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 2.00, 1.50, '100L', '11974721', 480.00, 1000, 6, 28.0, 250.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 3.00, 2.20, '112M', '13966387', 635.00, 1000, 6, 28.0, 250.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 4.00, 3.00, '132S', '14183002', 838.00, 1000, 6, 38.0, 300.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 5.50, 4.00, '132M', '12594945', 946.00, 1000, 6, 38.0, 300.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 7.50, 5.50, '132M', '12061038', 1142.00, 1000, 6, 38.0, 300.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 10.00, 7.50, '160M', '12689804', 1670.00, 1000, 6, 42.0, 350.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 12.50, 9.20, '160L', NULL, 2140.00, 1000, 6, 42.0, 350.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 15.00, 11.00, '160L', '11997782', 2156.00, 1000, 6, 42.0, 350.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 20.00, 15.00, '180L', '14228136', 2810.00, 1000, 6, 48.0, 350.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 25.00, 18.50, '200L', '14228137', 3762.00, 1000, 6, 55.0, 400.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 30.00, 22.00, '200L', '16062286', 4011.00, 1000, 6, 55.0, 400.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 40.00, 30.00, '225S/M', '12060977', 5904.00, 1000, 6, 60.0, 450.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 50.00, 37.00, '250S/M', '11784996', 6951.00, 1000, 6, 65.0, 550.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 60.00, 45.00, '280S/M', '14287997', 10008.00, 1000, 6, 75.0, 550.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 75.00, 55.00, '280S/M', '14288069', 10637.00, 1000, 6, 75.0, 550.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 100.00, 75.00, '315S/M', '14288073', 13551.00, 1000, 6, 80.0, 660.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 125.00, 90.00, '315S/M', '14288076', 15029.00, 1000, 6, 80.0, 660.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 150.00, 110.00, '315S/M', '14288149', 18228.00, 1000, 6, 80.0, 660.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),

-- W22 IE3 Hierro - 8 polos (750 rpm)
('W22', 'IE3', 'Hierro', 0.25, 0.18, '80', NULL, 291.00, 750, 8, 19.0, 200.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 0.33, 0.25, '80', NULL, 327.00, 750, 8, 19.0, 200.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 0.50, 0.37, '90S', NULL, 386.00, 750, 8, 24.0, 200.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 0.75, 0.55, '90L', NULL, 416.00, 750, 8, 24.0, 200.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 1.00, 0.75, '100L', NULL, 536.00, 750, 8, 28.0, 250.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 1.50, 1.10, '100L', NULL, 565.00, 750, 8, 28.0, 250.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 2.00, 1.50, '112M', NULL, 779.00, 750, 8, 28.0, 250.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 3.00, 2.20, '132S', NULL, 1047.00, 750, 8, 38.0, 300.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 4.00, 3.00, '132M', NULL, 1261.00, 750, 8, 38.0, 300.0, 'B3', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 5.50, 4.00, '160M', NULL, 1873.00, 750, 8, 42.0, 350.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 7.50, 5.50, '160M', NULL, 2274.00, 750, 8, 42.0, 350.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 10.00, 7.50, '160L', NULL, 2379.00, 750, 8, 42.0, 350.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 12.50, 9.20, '180M', NULL, 2994.00, 750, 8, 48.0, 350.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 15.00, 11.00, '180L', NULL, 3206.00, 750, 8, 48.0, 350.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 20.00, 15.00, '200L', NULL, 4011.00, 750, 8, 55.0, 400.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 25.00, 18.50, '225S/M', NULL, 6418.00, 750, 8, 60.0, 450.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 30.00, 22.00, '225S/M', NULL, 7889.00, 750, 8, 60.0, 450.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 40.00, 30.00, '250S/M', NULL, 9360.00, 750, 8, 65.0, 550.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 50.00, 37.00, '280S/M', NULL, 12301.00, 750, 8, 75.0, 550.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 60.00, 45.00, '280S/M', NULL, 13321.00, 750, 8, 75.0, 550.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 75.00, 55.00, '315S/M', NULL, 14041.00, 750, 8, 80.0, 660.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 100.00, 75.00, '315S/M', NULL, 15768.00, 750, 8, 80.0, 660.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 125.00, 90.00, '315S/M', NULL, 18107.00, 750, 8, 80.0, 660.0, 'B3', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),

-- MAT IE1 Aluminio - 2 polos (3000 rpm)
('MAT', 'IE1', 'Aluminio', 0.25, 0.18, '63', '14065802', 149.00, 3000, 2, 11.0, 140.0, 'B3', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 0.33, 0.25, '63', '14009695', 152.00, 3000, 2, 11.0, 140.0, 'B3', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 0.50, 0.37, '71', '14011714', 163.00, 3000, 2, 14.0, 160.0, 'B3', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 0.75, 0.55, '71', '14089466', 174.00, 3000, 2, 14.0, 160.0, 'B3', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 1.00, 0.75, '80', '13984744', 202.00, 3000, 2, 19.0, 200.0, 'B3', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 1.50, 1.10, '80', '13984968', 221.00, 3000, 2, 19.0, 200.0, 'B3', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 2.00, 1.50, '90S', '14013699', 259.00, 3000, 2, 24.0, 200.0, 'B3', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 3.00, 2.20, '90L', '13984954', 296.00, 3000, 2, 24.0, 200.0, 'B3', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 4.00, 3.00, '100L', '14016239', 380.00, 3000, 2, 28.0, 250.0, 'B3', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 5.50, 4.00, '112M', '13985927', 457.00, 3000, 2, 28.0, 250.0, 'B3', '380/660V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 10.00, 7.50, '132M', '13985130', 712.00, 3000, 2, 38.0, 300.0, 'B3', '380/660V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 12.50, 9.20, '132M', '14016181', 899.00, 3000, 2, 38.0, 300.0, 'B3', '380/660V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),

-- MAT IE1 Aluminio - 4 polos (1500 rpm)
('MAT', 'IE1', 'Aluminio', 0.25, 0.18, '63', '13984495', 149.00, 1500, 4, 11.0, 140.0, 'B3', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 0.33, 0.25, '71', '13984497', 164.00, 1500, 4, 14.0, 160.0, 'B3', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 0.50, 0.37, '71', '14009696', 169.00, 1500, 4, 14.0, 160.0, 'B3', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 0.75, 0.55, '80', '13984739', 198.00, 1500, 4, 19.0, 200.0, 'B3', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 1.00, 0.75, '80', '14010153', 206.00, 1500, 4, 19.0, 200.0, 'B3', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 1.50, 1.10, '90S', '13984817', 246.00, 1500, 4, 24.0, 200.0, 'B3', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 2.00, 1.50, '90L', '13984952', 295.00, 1500, 4, 24.0, 200.0, 'B3', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 3.00, 2.20, '100L', '13985266', 347.00, 1500, 4, 28.0, 250.0, 'B3', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 4.00, 3.00, '100L', '13985855', 396.00, 1500, 4, 28.0, 250.0, 'B3', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 5.50, 4.00, '112M', '13985922', 502.00, 1500, 4, 28.0, 250.0, 'B3', '380/660V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 7.50, 5.50, '132S', '13985949', 686.00, 1500, 4, 38.0, 300.0, 'B3', '380/660V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 10.00, 7.50, '132M', '13984957', 772.00, 1500, 4, 38.0, 300.0, 'B3', '380/660V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 12.50, 9.20, '132M', '13985134', 902.00, 1500, 4, 38.0, 300.0, 'B3', '380/660V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),

-- MAT IE1 Aluminio - 6 polos (1000 rpm)
('MAT', 'IE1', 'Aluminio', 0.33, 0.25, '71', '14066173', 212.00, 1000, 6, 14.0, 160.0, 'B3', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 0.50, 0.37, '80', '14089464', 225.00, 1000, 6, 19.0, 200.0, 'B3', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 0.75, 0.55, '80', '14065807', 237.00, 1000, 6, 19.0, 200.0, 'B3', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 1.00, 0.75, '90S', '14010067', 282.00, 1000, 6, 24.0, 200.0, 'B3', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 1.50, 1.10, '90L', '14013800', 300.00, 1000, 6, 24.0, 200.0, 'B3', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 2.00, 1.50, '100L', '13985136', 372.00, 1000, 6, 28.0, 250.0, 'B3', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 3.00, 2.20, '112M', '13985260', 499.00, 1000, 6, 28.0, 250.0, 'B3', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 4.00, 3.00, '132S', '14066171', 645.00, 1000, 6, 38.0, 300.0, 'B3', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 5.50, 4.00, '132M', '13985918', 725.00, 1000, 6, 38.0, 300.0, 'B3', '380/660V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),

-- Motores monofásicos
-- MON 3000 rpm (IP21)
('MON', '-', 'Chapa', 0.25, NULL, 'B48', '15470376', 0.00, 3000, 2, 12.7, NULL, 'B3', '220V', 'MON', NULL, NOW(), NOW(), NULL, 'Monofasico', 'IP21', false),
('MON', '-', 'Chapa', 0.33, NULL, 'C48', '10084722', 0.00, 3000, 2, 12.7, NULL, 'B3', '220V', 'MON', NULL, NOW(), NOW(), NULL, 'Monofasico', 'IP21', false),
('MON', '-', 'Chapa', 0.50, NULL, 'C48', '10021818', 0.00, 3000, 2, 12.7, NULL, 'B3', '220V', 'MON', NULL, NOW(), NOW(), NULL, 'Monofasico', 'IP21', false),
('MON', '-', 'Chapa', 0.75, NULL, 'B56', '10021835', 0.00, 3000, 2, 15.9, NULL, 'B3', '220V', 'MON', NULL, NOW(), NOW(), NULL, 'Monofasico', 'IP21', false),
('MON', '-', 'Chapa', 1.00, NULL, 'D56', '15629095', 0.00, 3000, 2, 19.1, NULL, 'B3', '220V', 'MON', NULL, NOW(), NOW(), NULL, 'Monofasico', 'IP21', false),
('MON', '-', 'Chapa', 1.50, NULL, 'D56', '15629096', 0.00, 3000, 2, 19.1, NULL, 'B3', '220V', 'MON', NULL, NOW(), NOW(), NULL, 'Monofasico', 'IP21', false),
('MON', '-', 'Chapa', 2.00, NULL, 'F56H', '10021825', 0.00, 3000, 2, 19.1, NULL, 'B3', '220V', 'MON', NULL, NOW(), NOW(), NULL, 'Monofasico', 'IP21', false),

-- MON 1500 rpm (IP21)
('MON', '-', 'Chapa', 0.25, NULL, 'B48', '10021813', 0.00, 1500, 4, 12.7, NULL, 'B3', '220V', 'MON', NULL, NOW(), NOW(), NULL, 'Monofasico', 'IP21', false),
('MON', '-', 'Chapa', 0.33, NULL, 'C48', '11072268', 0.00, 1500, 4, 12.7, NULL, 'B3', '220V', 'MON', NULL, NOW(), NOW(), NULL, 'Monofasico', 'IP21', false),
('MON', '-', 'Chapa', 0.50, NULL, 'C48', '10021817', 0.00, 1500, 4, 12.7, NULL, 'B3', '220V', 'MON', NULL, NOW(), NOW(), NULL, 'Monofasico', 'IP21', false),
('MON', '-', 'Chapa', 0.75, NULL, 'D56', '10021820', 0.00, 1500, 4, 19.1, NULL, 'B3', '220V', 'MON', NULL, NOW(), NOW(), NULL, 'Monofasico', 'IP21', false),
('MON', '-', 'Chapa', 1.00, NULL, 'D56', '10021821', 0.00, 1500, 4, 19.1, NULL, 'B3', '220V', 'MON', NULL, NOW(), NOW(), NULL, 'Monofasico', 'IP21', false),
('MON', '-', 'Chapa', 1.50, NULL, 'G56H', '10021823', 0.00, 1500, 4, 19.1, NULL, 'B3', '220V', 'MON', NULL, NOW(), NOW(), NULL, 'Monofasico', 'IP21', false),
('MON', '-', 'Chapa', 2.00, NULL, 'G56H', '10021822', 0.00, 1500, 4, 19.1, NULL, 'B3', '220V', 'MON', NULL, NOW(), NOW(), NULL, 'Monofasico', 'IP21', false),

-- MTE 3000 rpm (IP55)
('MTE', '-', 'Chapa', 0.33, NULL, 'B56', '11508944', 0.00, 3000, 2, 15.9, NULL, 'B3', '220V', 'MTE', NULL, NOW(), NOW(), NULL, 'Monofasico', 'IP55', false),
('MTE', '-', 'Chapa', 0.50, NULL, 'B56', '10082963', 0.00, 3000, 2, 15.9, NULL, 'B3', '220V', 'MTE', NULL, NOW(), NOW(), NULL, 'Monofasico', 'IP55', false),
('MTE', '-', 'Chapa', 0.75, NULL, 'B56', '10021852', 0.00, 3000, 2, 15.9, NULL, 'B3', '220V', 'MTE', NULL, NOW(), NOW(), NULL, 'Monofasico', 'IP55', false),
('MTE', '-', 'Chapa', 1.00, NULL, 'D56', '10084874', 0.00, 3000, 2, 19.1, NULL, 'B3', '220V', 'MTE', NULL, NOW(), NOW(), NULL, 'Monofasico', 'IP55', false),
('MTE', '-', 'Chapa', 1.50, NULL, 'D56', '10741748', 0.00, 3000, 2, 19.1, NULL, 'B3', '220V', 'MTE', NULL, NOW(), NOW(), NULL, 'Monofasico', 'IP55', false),
('MTE', '-', 'Chapa', 2.00, NULL, 'F56H', '10021812', 0.00, 3000, 2, 19.1, NULL, 'B3', '220V', 'MTE', NULL, NOW(), NOW(), NULL, 'Monofasico', 'IP55', false),
('MTE', '-', 'Chapa', 3.00, NULL, 'G56H', '10035489', 0.00, 3000, 2, 15.9, NULL, 'B3', '220V', 'MTE', NULL, NOW(), NOW(), NULL, 'Monofasico', 'IP55', false),

-- MTE 1500 rpm (IP55)
('MTE', '-', 'Chapa', 0.33, NULL, 'B56', '11508941', 0.00, 1500, 4, 15.9, NULL, 'B3', '220V', 'MTE', NULL, NOW(), NOW(), NULL, 'Monofasico', 'IP55', false),
('MTE', '-', 'Chapa', 0.50, NULL, 'B56', '10714699', 0.00, 1500, 4, 15.9, NULL, 'B3', '220V', 'MTE', NULL, NOW(), NOW(), NULL, 'Monofasico', 'IP55', false),
('MTE', '-', 'Chapa', 0.75, NULL, 'D56', '10322369', 0.00, 1500, 4, 19.1, NULL, 'B3', '220V', 'MTE', NULL, NOW(), NOW(), NULL, 'Monofasico', 'IP55', false),
('MTE', '-', 'Chapa', 1.00, NULL, 'D56', '10371276', 0.00, 1500, 4, 19.1, NULL, 'B3', '220V', 'MTE', NULL, NOW(), NOW(), NULL, 'Monofasico', 'IP55', false),
('MTE', '-', 'Chapa', 1.50, NULL, 'G56H', '10360462', 0.00, 1500, 4, 19.1, NULL, 'B3', '220V', 'MTE', NULL, NOW(), NOW(), NULL, 'Monofasico', 'IP55', false),
('MTE', '-', 'Chapa', 2.00, NULL, 'G56H', '10016212', 0.00, 1500, 4, 15.9, NULL, 'B3', '220V', 'MTE', NULL, NOW(), NOW(), NULL, 'Monofasico', 'IP55', false),

-- MME (1500 rpm, "no" en IP)
('MME', '-', 'Chapa', 3.00, NULL, '100L', '14009690', 0.00, 1500, 4, 28.0, NULL, 'B3', '220V', 'MME', NULL, NOW(), NOW(), NULL, 'Monofasico', 'no', false),
('MME', '-', 'Chapa', 4.00, NULL, '112M', '14275042', 0.00, 1500, 4, 28.0, NULL, 'B3', '220V', 'MME', NULL, NOW(), NOW(), NULL, 'Monofasico', 'no', false),
('MME', '-', 'Chapa', 5.00, NULL, '112M', '13897690', 0.00, 1500, 4, 28.0, NULL, 'B3', '220V', 'MME', NULL, NOW(), NOW(), NULL, 'Monofasico', 'no', false),

-- W22 IE1 Hierro - B35 - 2 polos (3000 rpm)
('W22', 'IE1', 'Hierro', 0.25, 0.18, '63', '11439112-B35', 152.00, 3000, 2, 11.0, 140.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 0.33, 0.25, '63', '13036167', 155.00, 3000, 2, 11.0, 140.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 0.50, 0.37, '71', '11788163', 166.00, 3000, 2, 14.0, 160.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 0.75, 0.55, '71', '11788166', 177.00, 3000, 2, 14.0, 160.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 1.00, 0.75, '80', '11814854', 203.00, 3000, 2, 19.0, 200.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 1.50, 1.10, '80', '11788212', 230.00, 3000, 2, 19.0, 200.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 2.00, 1.50, '90S', '11775344', 267.00, 3000, 2, 24.0, 200.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 3.00, 2.20, '90L', '11775345', 305.00, 3000, 2, 24.0, 200.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 4.00, 3.00, '100L', '11653933', 391.00, 3000, 2, 28.0, 250.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 5.50, 4.00, '112M', '11775079', 471.00, 3000, 2, 28.0, 250.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 7.50, 5.50, '112M', '11855658', 596.00, 3000, 2, 28.0, 250.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 10.00, 7.50, '132S', '11777758', 732.00, 3000, 2, 38.0, 300.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 12.50, 9.20, '132M', '11739272', 928.00, 3000, 2, 38.0, 300.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 15.00, 11.00, '160M', '11734703', 1220.00, 3000, 2, 42.0, 350.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 20.00, 15.00, '160M', '11734431', 1355.00, 3000, 2, 42.0, 350.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 25.00, 18.50, '160L', '11735015', 1607.00, 3000, 2, 42.0, 350.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 30.00, 22.00, '180M', '11739191', 2074.00, 3000, 2, 48.0, 350.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 40.00, 30.00, '200L', '11424145', 2963.00, 3000, 2, 55.0, 400.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 50.00, 37.00, '200L', '11445914', 3216.00, 3000, 2, 55.0, 400.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 60.00, 45.00, '225S/M', '11429570', 4609.00, 3000, 2, 55.0, 450.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 75.00, 55.00, '250S/M', '13036348', 5832.00, 3000, 2, 60.0, 550.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 100.00, 75.00, '280S/M', '11163561-B35', 7990.00, 3000, 2, 65.0, 550.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 125.00, 90.00, '280S/M', '11125753-B35', 8764.00, 3000, 2, 65.0, 550.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 150.00, 110.00, '315S/M', '17168745', 10077.00, 3000, 2, 65.0, 660.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 175.00, 132.00, '315S/M', '13036428', 11227.00, 3000, 2, 65.0, 660.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 200.00, 150.00, '315S/M', '11356348-B35', 13569.00, 3000, 2, 65.0, 660.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 220.00, 160.00, '315S/M', '11169088-B35', 14729.00, 3000, 2, 65.0, 660.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
-- W22 IE1 Hierro - B35 - 4 polos (1500 rpm)
('W22', 'IE1', 'Hierro', 0.25, 0.18, '63', '11774855', 152.00, 1500, 4, 11.0, 140.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 0.33, 0.25, '71', '11774856', 168.00, 1500, 4, 14.0, 160.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 0.50, 0.37, '71', '11774857', 175.00, 1500, 4, 14.0, 160.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 0.75, 0.55, '80', '11774942', 201.00, 1500, 4, 19.0, 200.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 1.00, 0.75, '80', '11775317', 211.00, 1500, 4, 19.0, 200.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 1.50, 1.10, '90S', '11775341', 250.00, 1500, 4, 24.0, 200.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 2.00, 1.50, '90L', '11775342', 302.00, 1500, 4, 24.0, 200.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 3.00, 2.20, '100L', '11419866', 356.00, 1500, 4, 28.0, 250.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 4.00, 3.00, '100L', '11777995', 408.00, 1500, 4, 28.0, 250.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 5.50, 4.00, '112M', '11775078', 511.00, 1500, 4, 28.0, 250.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 7.50, 5.50, '132S', '11734743', 707.00, 1500, 4, 38.0, 300.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 10.00, 7.50, '132M', '11734664', 792.00, 1500, 4, 38.0, 300.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 12.50, 9.20, '132M', '11734702', 1006.00, 1500, 4, 38.0, 300.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 15.00, 11.00, '160M', '11734428', 1307.00, 1500, 4, 42.0, 350.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 20.00, 15.00, '160L', '11734433', 1443.00, 1500, 4, 42.0, 350.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 25.00, 18.50, '180M', '11434725', 2069.00, 1500, 4, 48.0, 350.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 30.00, 22.00, '180L', '11424147', 2252.00, 1500, 4, 48.0, 350.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 40.00, 30.00, '200L', '11429534', 3011.00, 1500, 4, 55.0, 400.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 50.00, 37.00, '225S/M', '11168917', 4403.00, 1500, 4, 60.0, 450.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 60.00, 45.00, '225S/M', '11435514', 4718.00, 1500, 4, 60.0, 450.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 75.00, 55.00, '250S/M', '11438073', 5927.00, 1500, 4, 65.0, 550.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 100.00, 75.00, '280S/M', '16632538', 8124.00, 1500, 4, 75.0, 550.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 125.00, 90.00, '280S/M', '13037195', 8786.00, 1500, 4, 75.0, 550.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 150.00, 110.00, '315S/M', '12715772', 10551.00, 1500, 4, 80.0, 660.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 175.00, 132.00, '315S/M', '13037547', 11938.00, 1500, 4, 80.0, 660.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 200.00, 150.00, '315S/M', '11153871-B35', 12645.00, 1500, 4, 80.0, 660.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 220.00, 160.00, '315S/M', '13030299-B35', 13058.00, 1500, 4, 80.0, 660.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),

-- W22 IE1 Hierro - B35 - 6 polos (1000 rpm)
('W22', 'IE1', 'Hierro', 0.25, 0.18, '71', '12595930', 202.00, 1000, 6, 14.0, 160.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 0.33, 0.25, '71', '12470235', 218.00, 1000, 6, 14.0, 160.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 0.50, 0.37, '80', '11829778', 234.00, 1000, 6, 19.0, 200.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 0.75, 0.55, '80', '11855667', 241.00, 1000, 6, 19.0, 200.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 1.00, 0.75, '90S', '13037042', 290.00, 1000, 6, 24.0, 200.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 1.50, 1.10, '90L', '11795897', 309.00, 1000, 6, 24.0, 200.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 2.00, 1.50, '100L', '11780209', 381.00, 1000, 6, 28.0, 250.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 3.00, 2.20, '112M', '11775040', 504.00, 1000, 6, 28.0, 250.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 4.00, 3.00, '132S', '11781930', 665.00, 1000, 6, 38.0, 300.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 5.50, 4.00, '132M', '11776694', 751.00, 1000, 6, 38.0, 300.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 7.50, 5.50, '132M', '11405521-B35', 907.00, 1000, 6, 38.0, 300.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 10.00, 7.50, '160M', '11734742', 1325.00, 1000, 6, 42.0, 350.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 12.50, 9.20, '160L', '11744335', 1698.00, 1000, 6, 42.0, 350.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 15.00, 11.00, '160L', '11436158-B35', 1711.00, 1000, 6, 42.0, 350.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 20.00, 15.00, '180L', '11734346', 2230.00, 1000, 6, 48.0, 350.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 25.00, 18.50, '200L', '13075807', 2986.00, 1000, 6, 55.0, 400.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 30.00, 22.00, '200L', '13037191', 3183.00, 1000, 6, 55.0, 400.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 40.00, 30.00, '225S/M', '16498741', 4686.00, 1000, 6, 60.0, 450.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 50.00, 37.00, '250S/M', '13037197', 5517.00, 1000, 6, 65.0, 550.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 60.00, 45.00, '280S/M', '13037220', 8288.00, 1000, 6, 75.0, 550.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 75.00, 55.00, '280S/M', '11199493-B35', 8809.00, 1000, 6, 75.0, 550.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 100.00, 75.00, '315S/M', '13037610', 11222.00, 1000, 6, 80.0, 660.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 125.00, 90.00, '315S/M', '13889585', 12446.00, 1000, 6, 80.0, 660.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 150.00, 110.00, '315S/M', '11356418-B35', 15096.00, 1000, 6, 80.0, 660.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),

-- W22 IE1 Hierro - B35 - 8 polos (750 rpm)
('W22', 'IE1', 'Hierro', 0.25, 0.18, '80', '13037167', 231.00, 750, 8, 19.0, 200.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 0.33, 0.25, '80', '13037190', 259.00, 750, 8, 19.0, 200.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 0.50, 0.37, '90S', '17077771', 307.00, 750, 8, 24.0, 200.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 0.75, 0.55, '90L', '13037196', 330.00, 750, 8, 24.0, 200.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 1.00, 0.75, '100L', '17928378', 425.00, 750, 8, 28.0, 250.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 1.50, 1.10, '100L', '11865425', 448.00, 750, 8, 28.0, 250.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 2.00, 1.50, '112M', '11578034-B35', 618.00, 750, 8, 28.0, 250.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 3.00, 2.20, '132S', '11765519', 831.00, 750, 8, 38.0, 300.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 4.00, 3.00, '132M', '13037639', 1001.00, 750, 8, 38.0, 300.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 5.50, 4.00, '160M', '11739192', 1487.00, 750, 8, 42.0, 350.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 7.50, 5.50, '160M', '11435888-B35', 1805.00, 750, 8, 42.0, 350.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 10.00, 7.50, '160L', '13037662', 1888.00, 750, 8, 42.0, 350.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 12.50, 9.20, '180M', '13037689', 2376.00, 750, 8, 48.0, 350.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 15.00, 11.00, '180L', '12166964-B35', 2544.00, 750, 8, 48.0, 350.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 20.00, 15.00, '200L', '13037701', 3183.00, 750, 8, 55.0, 400.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 25.00, 18.50, '225S/M', '11356422-B35', 5093.00, 750, 8, 60.0, 450.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 30.00, 22.00, '225S/M', '13030394-B35', 6261.00, 750, 8, 60.0, 450.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 40.00, 30.00, '250S/M', '11356423-B35', 7428.00, 750, 8, 65.0, 550.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 50.00, 37.00, '280S/M', '11356424-B35', 10187.00, 750, 8, 75.0, 550.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 60.00, 45.00, '280S/M', '13802155-B35', 11032.00, 750, 8, 75.0, 550.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 75.00, 55.00, '315S/M', '11461060', 11628.00, 750, 8, 80.0, 660.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 100.00, 75.00, '315S/M', '11492721-B35', 13058.00, 750, 8, 80.0, 660.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 125.00, 90.00, '315S/M', '16520865-B35', 14995.00, 750, 8, 80.0, 660.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),

-- W22 IE3 Hierro - B35 - 2 polos (3000 rpm)
('W22', 'IE3', 'Hierro', 0.25, 0.18, '63', '14283840-B35', 191.00, 3000, 2, 11.0, 140.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 0.33, 0.25, '63', '14283941', 195.00, 3000, 2, 11.0, 140.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 0.50, 0.37, '71', '14284171', 209.00, 3000, 2, 14.0, 160.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 0.75, 0.55, '71', '14284172', 223.00, 3000, 2, 14.0, 160.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 1.00, 0.75, '80', '14226742', 256.00, 3000, 2, 19.0, 200.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 1.50, 1.10, '80', '14226743', 290.00, 3000, 2, 19.0, 200.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 2.00, 1.50, '90S', '14226745', 336.00, 3000, 2, 24.0, 200.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 3.00, 2.20, '90L', '13284119', 384.00, 3000, 2, 24.0, 200.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 4.00, 3.00, '100L', '13665638', 492.00, 3000, 2, 28.0, 250.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 5.50, 4.00, '112M', '14226746', 593.00, 3000, 2, 28.0, 250.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 7.50, 5.50, '112M', '14196709', 751.00, 3000, 2, 28.0, 250.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 10.00, 7.50, '132S', '14226747', 922.00, 3000, 2, 38.0, 300.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 12.50, 9.20, '132M', '14226838', 1170.00, 3000, 2, 38.0, 300.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 15.00, 11.00, '160M', '14226839', 1537.00, 3000, 2, 42.0, 350.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 20.00, 15.00, '160M', '14228023', 1707.00, 3000, 2, 42.0, 350.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 25.00, 18.50, '160L', '13938154', 2024.00, 3000, 2, 42.0, 350.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 30.00, 22.00, '180M', '14228025', 2613.00, 3000, 2, 48.0, 350.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 40.00, 30.00, '200L', '14228026', 3734.00, 3000, 2, 55.0, 400.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 50.00, 37.00, '200L', '14284173', 4052.00, 3000, 2, 55.0, 400.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 60.00, 45.00, '225S/M', '14284174', 5808.00, 3000, 2, 55.0, 450.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 75.00, 55.00, '250S/M', '14284175', 7348.00, 3000, 2, 60.0, 550.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 100.00, 75.00, '280S/M', '12082605-B35', 9648.00, 3000, 2, 65.0, 550.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 125.00, 90.00, '280S/M', '12112509-B35', 10583.00, 3000, 2, 65.0, 550.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 150.00, 110.00, '315S/M', '14283988', 12168.00, 3000, 2, 65.0, 660.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 175.00, 132.00, '315S/M', '14283989-B35', 13556.00, 3000, 2, 65.0, 660.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 200.00, 150.00, '315S/M', '14283991-B35', 16384.00, 3000, 2, 65.0, 660.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 220.00, 160.00, '315S/M', '14283995-B35', 17784.00, 3000, 2, 65.0, 660.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),

-- W22 IE3 Hierro - B35 - 4 polos (1500 rpm)
('W22', 'IE3', 'Hierro', 0.25, 0.18, '63', '14284168', 191.00, 1500, 4, 11.0, 140.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 0.33, 0.25, '71', '14284170', 212.00, 1500, 4, 14.0, 160.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 0.50, 0.37, '71', '12336630', 221.00, 1500, 4, 14.0, 160.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 0.75, 0.55, '80', '11984550', 253.00, 1500, 4, 19.0, 200.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 1.00, 0.75, '80', '11847010', 266.00, 1500, 4, 19.0, 200.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 1.50, 1.10, '90S', '13096587', 315.00, 1500, 4, 24.0, 200.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 2.00, 1.50, '90L', '12264054', 380.00, 1500, 4, 24.0, 200.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 3.00, 2.20, '100L', '13096718', 448.00, 1500, 4, 28.0, 250.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 4.00, 3.00, '100L', '13096719', 515.00, 1500, 4, 28.0, 250.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 5.50, 4.00, '112M', '11958016', 644.00, 1500, 4, 28.0, 250.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 7.50, 5.50, '132S', '12888059', 890.00, 1500, 4, 38.0, 300.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 10.00, 7.50, '132M', '11895360', 998.00, 1500, 4, 38.0, 300.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 12.50, 9.20, '132M', '12238286', 1267.00, 1500, 4, 38.0, 300.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 15.00, 11.00, '160M', '13096720', 1646.00, 1500, 4, 42.0, 350.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 20.00, 15.00, '160L', '12628979', 1819.00, 1500, 4, 42.0, 350.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 25.00, 18.50, '180M', '13330439', 2607.00, 1500, 4, 48.0, 350.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 30.00, 22.00, '180L', '12124986', 2837.00, 1500, 4, 48.0, 350.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 40.00, 30.00, '200L', '11992022', 3794.00, 1500, 4, 55.0, 400.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 50.00, 37.00, '225S/M', '11834860-B35', 5548.00, 1500, 4, 60.0, 450.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 60.00, 45.00, '225S/M', '14284176', 5945.00, 1500, 4, 60.0, 450.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 75.00, 55.00, '250S/M', '16931305', 7468.00, 1500, 4, 65.0, 550.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 100.00, 75.00, '280S/M', '14284177', 9810.00, 1500, 4, 75.0, 550.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 125.00, 90.00, '280S/M', '17102342', 10609.00, 1500, 4, 75.0, 550.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 150.00, 110.00, '315S/M', '14284218', 12740.00, 1500, 4, 80.0, 660.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 175.00, 132.00, '315S/M', '13031334-B35', 14415.00, 1500, 4, 80.0, 660.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 200.00, 150.00, '315S/M', 'IE3trifH001-B35', 15269.00, 1500, 4, 80.0, 660.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 220.00, 160.00, '315S/M', '14213793-B35', 15768.00, 1500, 4, 80.0, 660.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),

-- W22 IE3 Hierro - B35 - 6 polos (1000 rpm)
('W22', 'IE3', 'Hierro', 0.25, 0.18, '71', '14287824', 254.00, 1000, 6, 14.0, 160.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 0.33, 0.25, '80', 'IE3trifH002-B35', 275.00, 1000, 6, 19.0, 200.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 0.50, 0.37, '80', '14288155', 295.00, 1000, 6, 19.0, 200.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 0.75, 0.55, '80', '14228080', 303.00, 1000, 6, 19.0, 200.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 1.00, 0.75, '90S', '14288157', 365.00, 1000, 6, 24.0, 200.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 1.50, 1.10, '90L', '13885219', 390.00, 1000, 6, 24.0, 200.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 2.00, 1.50, '100L', '12430553', 480.00, 1000, 6, 28.0, 250.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 3.00, 2.20, '112M', '14228133', 635.00, 1000, 6, 28.0, 250.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 4.00, 3.00, '132S', '14478008', 838.00, 1000, 6, 38.0, 300.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 5.50, 4.00, '132M', '15503400', 946.00, 1000, 6, 38.0, 300.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 7.50, 5.50, '132M', '12696699', 1142.00, 1000, 6, 38.0, 300.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 10.00, 7.50, '160M', '16499083', 1670.00, 1000, 6, 42.0, 350.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 12.50, 9.20, '160L', 'IE3trifH003-B35', 2140.00, 1000, 6, 42.0, 350.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 15.00, 11.00, '160L', '14228135', 2156.00, 1000, 6, 42.0, 350.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 20.00, 15.00, '180L', '16219596', 2810.00, 1000, 6, 48.0, 350.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 25.00, 18.50, '200L', '17046693', 3762.00, 1000, 6, 55.0, 400.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 30.00, 22.00, '200L', '17167990', 4011.00, 1000, 6, 55.0, 400.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 40.00, 30.00, '225S/M', '12060977-B35', 5904.00, 1000, 6, 60.0, 450.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 50.00, 37.00, '250S/M', '11784996-B35', 6951.00, 1000, 6, 65.0, 550.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 60.00, 45.00, '280S/M', '14287997-B35', 10008.00, 1000, 6, 75.0, 550.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 75.00, 55.00, '280S/M', '14288069-B35', 10637.00, 1000, 6, 75.0, 550.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 100.00, 75.00, '315S/M', '14288073-B35', 13551.00, 1000, 6, 80.0, 660.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 125.00, 90.00, '315S/M', '14288076-B35', 15029.00, 1000, 6, 80.0, 660.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 150.00, 110.00, '315S/M', '14288149-B35', 18228.00, 1000, 6, 80.0, 660.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),

-- W22 IE3 Hierro - B35 - 8 polos (750 rpm)
('W22', 'IE3', 'Hierro', 0.25, 0.18, '80', 'IE3trifH004-B35', 291.00, 750, 8, 19.0, 200.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 0.33, 0.25, '80', 'IE3trifH005-B35', 327.00, 750, 8, 19.0, 200.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 0.50, 0.37, '90S', '16095915', 386.00, 750, 8, 24.0, 200.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 0.75, 0.55, '90L', 'IE3trifH007-B35', 416.00, 750, 8, 24.0, 200.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 1.00, 0.75, '100L', 'IE3trifH008-B35', 536.00, 750, 8, 28.0, 250.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 1.50, 1.10, '100L', 'IE3trifH009-B35', 565.00, 750, 8, 28.0, 250.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 2.00, 1.50, '112M', '15453062', 779.00, 750, 8, 28.0, 250.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 3.00, 2.20, '132S', 'IE3trifH011-B35', 1047.00, 750, 8, 38.0, 300.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 4.00, 3.00, '132M', '16662557', 1261.00, 750, 8, 38.0, 300.0, 'B35', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 5.50, 4.00, '160M', 'IE3trifH013-B35', 1873.00, 750, 8, 42.0, 350.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 7.50, 5.50, '160M', 'IE3trifH014-B35', 2274.00, 750, 8, 42.0, 350.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 10.00, 7.50, '160L', 'IE3trifH015-B35', 2379.00, 750, 8, 42.0, 350.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 12.50, 9.20, '180M', 'IE3trifH016-B35', 2994.00, 750, 8, 48.0, 350.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 15.00, 11.00, '180L', 'IE3trifH017-B35', 3206.00, 750, 8, 48.0, 350.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 20.00, 15.00, '200L', 'IE3trifH018-B35', 4011.00, 750, 8, 55.0, 400.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 25.00, 18.50, '225S/M', 'IE3trifH019-B35', 6418.00, 750, 8, 60.0, 450.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 30.00, 22.00, '225S/M', 'IE3trifH020-B35', 7889.00, 750, 8, 60.0, 450.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 40.00, 30.00, '250S/M', 'IE3trifH021-B35', 9360.00, 750, 8, 65.0, 550.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 50.00, 37.00, '280S/M', 'IE3trifH022-B35', 12301.00, 750, 8, 75.0, 550.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 60.00, 45.00, '280S/M', 'IE3trifH023-B35', 13321.00, 750, 8, 75.0, 550.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 75.00, 55.00, '315S/M', 'IE3trifH024-B35', 14041.00, 750, 8, 80.0, 660.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 100.00, 75.00, '315S/M', 'IE3trifH025-B35', 15768.00, 750, 8, 80.0, 660.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 125.00, 90.00, '315S/M', 'IE3trifH026-B35', 18107.00, 750, 8, 80.0, 660.0, 'B35', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),

-- MAT IE1 Aluminio - B35 - 2 polos (3000 rpm)
('MAT', 'IE1', 'Aluminio', 0.25, 0.18, '63', '14158890', 149.00, 3000, 2, 11.0, 140.0, 'B35', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 0.33, 0.25, '63', '14139342', 152.00, 3000, 2, 11.0, 140.0, 'B35', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 0.50, 0.37, '71', '14009820', 163.00, 3000, 2, 14.0, 160.0, 'B35', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 0.75, 0.55, '71', '14013627', 174.00, 3000, 2, 14.0, 160.0, 'B35', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 1.00, 0.75, '80', '13984746', 202.00, 3000, 2, 19.0, 200.0, 'B35', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 1.50, 1.10, '80', '13984955', 221.00, 3000, 2, 19.0, 200.0, 'B35', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 2.00, 1.50, '90S', '10156445', 259.00, 3000, 2, 24.0, 200.0, 'B35', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 3.00, 2.20, '90L', '13984953', 296.00, 3000, 2, 24.0, 200.0, 'B35', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 4.00, 3.00, '100L', '14013625', 380.00, 3000, 2, 28.0, 250.0, 'B35', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 5.50, 4.00, '112M', '13985924', 457.00, 3000, 2, 28.0, 250.0, 'B35', '380/660V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 10.00, 7.50, '132M', '13983645', 712.00, 3000, 2, 38.0, 300.0, 'B35', '380/660V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 12.50, 9.20, '132M', '14123055', 899.00, 3000, 2, 38.0, 300.0, 'B35', '380/660V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),

-- MAT IE1 Aluminio - B35 - 4 polos (1500 rpm)
('MAT', 'IE1', 'Aluminio', 0.25, 0.18, '63', '13984496', 149.00, 1500, 4, 11.0, 140.0, 'B35', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 0.33, 0.25, '71', '13984738', 164.00, 1500, 4, 14.0, 160.0, 'B35', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 0.50, 0.37, '71', '14009819', 169.00, 1500, 4, 14.0, 160.0, 'B35', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 0.75, 0.55, '80', '13984740', 198.00, 1500, 4, 19.0, 200.0, 'B35', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 1.00, 0.75, '80', '13984741', 206.00, 1500, 4, 19.0, 200.0, 'B35', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 1.50, 1.10, '90S', '13984815', 246.00, 1500, 4, 24.0, 200.0, 'B35', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 2.00, 1.50, '90L', '13984951', 295.00, 1500, 4, 24.0, 200.0, 'B35', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 3.00, 2.20, '100L', '13985263', 347.00, 1500, 4, 28.0, 250.0, 'B35', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 4.00, 3.00, '100L', '13985320', 396.00, 1500, 4, 28.0, 250.0, 'B35', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 5.50, 4.00, '112M', '13985919', 502.00, 1500, 4, 28.0, 250.0, 'B35', '380/660V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 7.50, 5.50, '132S', '13993678', 686.00, 1500, 4, 38.0, 300.0, 'B35', '380/660V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 10.00, 7.50, '132M', '13993644', 772.00, 1500, 4, 38.0, 300.0, 'B35', '380/660V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 12.50, 9.20, '132M', '13985133', 902.00, 1500, 4, 38.0, 300.0, 'B35', '380/660V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),

-- MAT IE1 Aluminio - B35 - 6 polos (1000 rpm)
('MAT', 'IE1', 'Aluminio', 0.33, 0.25, '71', '14089462', 212.00, 1000, 6, 14.0, 160.0, 'B35', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 0.50, 0.37, '80', '14186411', 225.00, 1000, 6, 19.0, 200.0, 'B35', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 0.75, 0.55, '80', '14066175', 237.00, 1000, 6, 19.0, 200.0, 'B35', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 1.00, 0.75, '90S', '10360500', 282.00, 1000, 6, 24.0, 200.0, 'B35', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 1.50, 1.10, '90L', '14074341', 300.00, 1000, 6, 24.0, 200.0, 'B35', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 2.00, 1.50, '100L', '14065850', 372.00, 1000, 6, 28.0, 250.0, 'B35', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 3.00, 2.20, '112M', '13985258', 499.00, 1000, 6, 28.0, 250.0, 'B35', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 4.00, 3.00, '132S', '14938090', 645.00, 1000, 6, 38.0, 300.0, 'B35', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 5.50, 4.00, '132M', '13987395', 725.00, 1000, 6, 38.0, 300.0, 'B35', '380/660V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),

-- W22 IE1 Hierro - B34 - 2 polos (3000 rpm)
('W22', 'IE1', 'Hierro', 0.25, 0.18, '63', '13040685', 152.00, 3000, 2, 11.0, 90.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 0.33, 0.25, '63', '12505122', 155.00, 3000, 2, 11.0, 90.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 0.50, 0.37, '71', '13040728', 166.00, 3000, 2, 14.0, 105.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 0.75, 0.55, '71', '12938457', 177.00, 3000, 2, 14.0, 105.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 1.00, 0.75, '80', '13040733', 203.00, 3000, 2, 19.0, 120.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 1.50, 1.10, '80', '12938678', 230.00, 3000, 2, 19.0, 120.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 2.00, 1.50, '90S', '12938679', 267.00, 3000, 2, 24.0, 140.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 3.00, 2.20, '90L', '12938680', 305.00, 3000, 2, 24.0, 140.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 4.00, 3.00, '100L', '16519878', 391.00, 3000, 2, 28.0, 160.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 5.50, 4.00, '112M', '15616641', 471.00, 3000, 2, 28.0, 160.0, 'B34', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 7.50, 5.50, '112M', '12983472', 596.00, 3000, 2, 28.0, 160.0, 'B34', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 10.00, 7.50, '132S', '13040895', 732.00, 3000, 2, 38.0, 200.0, 'B34', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 12.50, 9.20, '132M', '13040958', 928.00, 3000, 2, 38.0, 200.0, 'B34', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),

-- W22 IE1 Hierro - B34 - 4 polos (1500 rpm)
('W22', 'IE1', 'Hierro', 0.25, 0.18, '63', '13040963', 152.00, 1500, 4, 11.0, 90.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 0.33, 0.25, '71', '13040966', 168.00, 1500, 4, 14.0, 105.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 0.50, 0.37, '71', '12521794', 175.00, 1500, 4, 14.0, 105.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 0.75, 0.55, '80', '13041010', 201.00, 1500, 4, 19.0, 120.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 1.00, 0.75, '80', '13041013', 211.00, 1500, 4, 19.0, 120.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 1.50, 1.10, '90S', '13041015', 250.00, 1500, 4, 24.0, 140.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 2.00, 1.50, '90L', '13041016', 302.00, 1500, 4, 24.0, 140.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 3.00, 2.20, '100L', '13041017', 356.00, 1500, 4, 28.0, 160.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 4.00, 3.00, '100L', '13041099', 408.00, 1500, 4, 28.0, 160.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 5.50, 4.00, '112M', '13041100', 511.00, 1500, 4, 28.0, 160.0, 'B34', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 7.50, 5.50, '132S', '13041102', 707.00, 1500, 4, 38.0, 200.0, 'B34', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 10.00, 7.50, '132M', '18317325', 792.00, 1500, 4, 38.0, 200.0, 'B34', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 12.50, 9.20, '132M', '16582218', 1006.00, 1500, 4, 38.0, 200.0, 'B34', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),

-- W22 IE1 Hierro - B34 - 6 polos (1000 rpm)
('W22', 'IE1', 'Hierro', 0.25, 0.18, '71', '13041221', 202.00, 1000, 6, 14.0, 105.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 0.33, 0.25, '71', '13041223', 218.00, 1000, 6, 14.0, 105.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 0.50, 0.37, '80', '11504733-B34', 234.00, 1000, 6, 19.0, 120.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 0.75, 0.55, '80', '11379419-B34', 241.00, 1000, 6, 19.0, 120.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 1.00, 0.75, '90S', '11541346-B34', 290.00, 1000, 6, 24.0, 140.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 1.50, 1.10, '90L', '13041317', 309.00, 1000, 6, 24.0, 140.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 2.00, 1.50, '100L', '13041386', 381.00, 1000, 6, 28.0, 160.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 3.00, 2.20, '112M', '16931582', 504.00, 1000, 6, 28.0, 160.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 4.00, 3.00, '132S', '11465060-B34', 665.00, 1000, 6, 38.0, 200.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 5.50, 4.00, '132M', '13041466', 751.00, 1000, 6, 38.0, 200.0, 'B34', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 7.50, 5.50, '132M', '11405521-B34', 907.00, 1000, 6, 38.0, 200.0, 'B34', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 10.00, 7.50, '160M', '11436127-B34', 1325.00, 1000, 6, 42.0, 249.0, 'B34', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 12.50, 9.20, '160L', 'W22ie11251000-B34', 1698.00, 1000, 6, 42.0, 249.0, 'B34', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),

-- W22 IE1 Hierro - B34 - 8 polos (750 rpm)
('W22', 'IE1', 'Hierro', 0.25, 0.18, '80', '11865515-B34', 231.00, 750, 8, 19.0, 120.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 0.33, 0.25, '80', '13040962', 259.00, 750, 8, 19.0, 120.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 0.50, 0.37, '90S', '11435820-B34', 307.00, 750, 8, 24.0, 140.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 0.75, 0.55, '90L', '11435823-B34', 330.00, 750, 8, 24.0, 140.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 1.00, 0.75, '100L', '11435825-B34', 425.00, 750, 8, 28.0, 160.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 1.50, 1.10, '100L', '11435878-B34', 448.00, 750, 8, 28.0, 160.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 2.00, 1.50, '112M', '11578034-B34', 618.00, 750, 8, 28.0, 160.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 3.00, 2.20, '132S', '11665495-B34', 831.00, 750, 8, 38.0, 200.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 4.00, 3.00, '132M', '11435886-B34', 1001.00, 750, 8, 38.0, 200.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 5.50, 4.00, '160M', '11435887-B34', 1487.00, 750, 8, 42.0, 249.0, 'B34', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 7.50, 5.50, '160M', '11435888-B34', 1805.00, 750, 8, 42.0, 249.0, 'B34', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE1', 'Hierro', 10.00, 7.50, '160L', '11435890-B34', 1888.00, 750, 8, 42.0, 249.0, 'B34', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),

-- W22 IE3 Hierro - B34 - 2 polos (3000 rpm)
('W22', 'IE3', 'Hierro', 0.25, 0.18, '63', '16626900', 191.00, 3000, 2, 11.0, 90.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 0.33, 0.25, '63', '16874535', 195.00, 3000, 2, 11.0, 90.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 0.50, 0.37, '71', '16768294', 209.00, 3000, 2, 14.0, 105.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 0.75, 0.55, '71', '16559067', 223.00, 3000, 2, 14.0, 105.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 1.00, 0.75, '80', '14226741-B34', 256.00, 3000, 2, 19.0, 120.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 1.50, 1.10, '80', '18086560', 290.00, 3000, 2, 19.0, 120.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 2.00, 1.50, '90S', '16559064', 336.00, 3000, 2, 24.0, 140.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 3.00, 2.20, '90L', '17495977', 384.00, 3000, 2, 24.0, 140.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 4.00, 3.00, '100L', '16910596', 492.00, 3000, 2, 28.0, 160.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 5.50, 4.00, '112M', '16989933', 593.00, 3000, 2, 28.0, 160.0, 'B34', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 7.50, 5.50, '112M', '17549990', 751.00, 3000, 2, 28.0, 160.0, 'B34', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 10.00, 7.50, '132S', '15642625', 922.00, 3000, 2, 38.0, 200.0, 'B34', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 12.50, 9.20, '132M', '11893152-B34', 1170.00, 3000, 2, 38.0, 200.0, 'B34', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),

-- W22 IE3 Hierro - B34 - 4 polos (1500 rpm)
('W22', 'IE3', 'Hierro', 0.25, 0.18, '63', '16199270', 191.00, 1500, 4, 11.0, 90.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 0.33, 0.25, '71', '16580403', 212.00, 1500, 4, 14.0, 105.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 0.50, 0.37, '71', '16512322', 221.00, 1500, 4, 14.0, 105.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 0.75, 0.55, '80', '16520033', 253.00, 1500, 4, 19.0, 120.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 1.00, 0.75, '80', '15642678', 266.00, 1500, 4, 19.0, 120.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 1.50, 1.10, '90S', '16512302', 315.00, 1500, 4, 24.0, 140.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 2.00, 1.50, '90L', '16499085', 380.00, 1500, 4, 24.0, 140.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 3.00, 2.20, '100L', '16708363', 448.00, 1500, 4, 28.0, 160.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 4.00, 3.00, '100L', '14313548-B34', 515.00, 1500, 4, 28.0, 160.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 5.50, 4.00, '112M', '12038681-B34', 644.00, 1500, 4, 28.0, 160.0, 'B34', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 7.50, 5.50, '132S', '17364314', 890.00, 1500, 4, 38.0, 200.0, 'B34', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 10.00, 7.50, '132M', '11971150-B34', 998.00, 1500, 4, 38.0, 200.0, 'B34', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 12.50, 9.20, '132M', '12277106-B34', 1267.00, 1500, 4, 38.0, 200.0, 'B34', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),

-- W22 IE3 Hierro - B34 - 6 polos (1000 rpm)
('W22', 'IE3', 'Hierro', 0.25, 0.18, '71', '14287822-B34', 254.00, 1000, 6, 14.0, 105.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 0.33, 0.25, '80', 'IE3trifH002-B34', 275.00, 1000, 6, 19.0, 120.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 0.50, 0.37, '80', '14228027-B34', 295.00, 1000, 6, 19.0, 120.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 0.75, 0.55, '80', '14228078-B34', 303.00, 1000, 6, 19.0, 120.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 1.00, 0.75, '90S', '12238408-B34', 365.00, 1000, 6, 24.0, 140.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 1.50, 1.10, '90L', '14116214-B34', 390.00, 1000, 6, 24.0, 140.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 2.00, 1.50, '100L', '11974721-B34', 480.00, 1000, 6, 28.0, 160.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 3.00, 2.20, '112M', '13966387-B34', 635.00, 1000, 6, 28.0, 160.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 4.00, 3.00, '132S', '17586315', 838.00, 1000, 6, 38.0, 200.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 5.50, 4.00, '132M', '12594945-B34', 946.00, 1000, 6, 38.0, 200.0, 'B34', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 7.50, 5.50, '132M', '12061038-B34', 1142.00, 1000, 6, 38.0, 200.0, 'B34', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 10.00, 7.50, '160M', '12689804-B34', 1670.00, 1000, 6, 42.0, 249.0, 'B34', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 12.50, 9.20, '160L', 'IE3trifH003-B34', 2140.00, 1000, 6, 42.0, 249.0, 'B34', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),

-- W22 IE3 Hierro - B34 - 8 polos (750 rpm)
('W22', 'IE3', 'Hierro', 0.25, 0.18, '80', 'IE3trifH004-B34', 291.00, 750, 8, 19.0, 120.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 0.33, 0.25, '80', 'IE3trifH005-B34', 327.00, 750, 8, 19.0, 120.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 0.50, 0.37, '90S', 'IE3trifH006-B34', 386.00, 750, 8, 24.0, 140.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 0.75, 0.55, '90L', 'IE3trifH007-B34', 416.00, 750, 8, 24.0, 140.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 1.00, 0.75, '100L', 'IE3trifH008-B34', 536.00, 750, 8, 28.0, 160.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 1.50, 1.10, '100L', 'IE3trifH009-B34', 565.00, 750, 8, 28.0, 160.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 2.00, 1.50, '112M', 'IE3trifH010-B34', 779.00, 750, 8, 28.0, 160.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 3.00, 2.20, '132S', 'IE3trifH011-B34', 1047.00, 750, 8, 38.0, 200.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 4.00, 3.00, '132M', 'IE3trifH012-B34', 1261.00, 750, 8, 38.0, 200.0, 'B34', '230/380V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 5.50, 4.00, '160M', 'IE3trifH013-B34', 1873.00, 750, 8, 42.0, 249.0, 'B34', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 7.50, 5.50, '160M', 'IE3trifH014-B34', 2274.00, 750, 8, 42.0, 249.0, 'B34', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('W22', 'IE3', 'Hierro', 10.00, 7.50, '160L', 'IE3trifH015-B34', 2379.00, 750, 8, 42.0, 249.0, 'B34', '380/660V', 'WEG', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),

-- MAT IE1 Aluminio - B34 - 2 polos (3000 rpm)
('MAT', 'IE1', 'Aluminio', 0.25, 0.18, '63', '15851061', 149.00, 3000, 2, 11.0, 90.0, 'B34', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 0.33, 0.25, '63', '15851063', 152.00, 3000, 2, 11.0, 90.0, 'B34', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 0.50, 0.37, '71', '14086672', 163.00, 3000, 2, 14.0, 105.0, 'B34', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 0.75, 0.55, '71', '14086673', 174.00, 3000, 2, 14.0, 105.0, 'B34', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 1.00, 0.75, '80', '14259057', 202.00, 3000, 2, 19.0, 120.0, 'B34', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 1.50, 1.10, '80', '14259259', 221.00, 3000, 2, 19.0, 120.0, 'B34', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 2.00, 1.50, '90S', '15503691', 259.00, 3000, 2, 24.0, 140.0, 'B34', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 3.00, 2.20, '90L', '14066176', 296.00, 3000, 2, 24.0, 140.0, 'B34', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 4.00, 3.00, '100L', '16611193', 380.00, 3000, 2, 28.0, 160.0, 'B34', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 5.50, 4.00, '112M', '16557551', 457.00, 3000, 2, 28.0, 160.0, 'B34', '380/660V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 10.00, 7.50, '132M', '16876610', 712.00, 3000, 2, 38.0, 200.0, 'B34', '380/660V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 12.50, 9.20, '132M', '16620000', 899.00, 3000, 2, 38.0, 200.0, 'B34', '380/660V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),

-- MAT IE1 Aluminio - B34 - 4 polos (1500 rpm)
('MAT', 'IE1', 'Aluminio', 0.25, 0.18, '63', '14086523', 149.00, 1500, 4, 11.0, 140.0, 'B34', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 0.33, 0.25, '71', '14007434', 164.00, 1500, 4, 14.0, 160.0, 'B34', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 0.50, 0.37, '71', '14086525', 169.00, 1500, 4, 14.0, 160.0, 'B34', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 0.75, 0.55, '80', '14203085', 198.00, 1500, 4, 19.0, 200.0, 'B34', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 1.00, 0.75, '80', '13972006', 206.00, 1500, 4, 19.0, 200.0, 'B34', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 1.50, 1.10, '90S', '14086527', 246.00, 1500, 4, 24.0, 200.0, 'B34', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 2.00, 1.50, '90L', '14086668', 295.00, 1500, 4, 24.0, 200.0, 'B34', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 3.00,  2.20, '100L', '14086671', 347.00, 1500, 4, 28.0, 250.0, 'B34', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 4.00, 3.00, '100L', '16520035', 396.00, 1500, 4, 28.0, 250.0, 'B34', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 5.50, 4.00, '112M', '14259262', 502.00, 1500, 4, 28.0, 250.0, 'B34', '380/660V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 7.50, 5.50, '132S', '16631959', 686.00, 1500, 4, 38.0, 300.0, 'B34', '380/660V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 10.00, 7.50, '132M', '16580399', 772.00, 1500, 4, 38.0, 300.0, 'B34', '380/660V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 12.50, 9.20, '132M', '13985134-B34', 902.00, 1500, 4, 38.0, 300.0, 'B34', '380/660V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),

-- MAT IE1 Aluminio - B34 - 6 polos (1000 rpm)
('MAT', 'IE1', 'Aluminio', 0.33, 0.25, '71', '14089462', 212.00, 1000, 6, 14.0, 160.0, 'B34', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 0.50, 0.37, '80', '14186411', 225.00, 1000, 6, 19.0, 200.0, 'B34', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 0.75, 0.55, '80', '14066175', 237.00, 1000, 6, 19.0, 200.0, 'B34', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 1.00, 0.75, '90S', '10360500', 282.00, 1000, 6, 24.0, 200.0, 'B34', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 1.50, 1.10, '90L', '14074341', 300.00, 1000, 6, 24.0, 200.0, 'B34', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 2.00, 1.50, '100L', '14065850', 372.00, 1000, 6, 28.0, 250.0, 'B34', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 3.00, 2.20, '112M', '13985258', 499.00, 1000, 6, 28.0, 250.0, 'B34', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 4.00, 3.00, '132S', '14938090', 645.00, 1000, 6, 38.0, 300.0, 'B34', '230/380V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),
('MAT', 'IE1', 'Aluminio', 5.50, 4.00, '132M', '13987395', 725.00, 1000, 6, 38.0, 300.0, 'B34', '380/660V', 'Motive', NULL, NOW(), NOW(), NULL, 'Trifasico', '55', false),

-- Motores monofásicos
-- MON 3000 rpm (IP21)
('MON', '-', 'Chapa', 0.25, NULL, 'B48', '15470376', 0.00, 3000, 2, 12.7, NULL, 'B3', '220V', 'MON', NULL, NOW(), NOW(), NULL, 'Monofasico', 'IP21', false),
('MON', '-', 'Chapa', 0.33, NULL, 'C48', '10084722', 0.00, 3000, 2, 12.7, NULL, 'B3', '220V', 'MON', NULL, NOW(), NOW(), NULL, 'Monofasico', 'IP21', false),
('MON', '-', 'Chapa', 0.50, NULL, 'C48', '10021818', 0.00, 3000, 2, 12.7, NULL, 'B3', '220V', 'MON', NULL, NOW(), NOW(), NULL, 'Monofasico', 'IP21', false),
('MON', '-', 'Chapa', 0.75, NULL, 'B56', '10021835', 0.00, 3000, 2, 15.9, NULL, 'B3', '220V', 'MON', NULL, NOW(), NOW(), NULL, 'Monofasico', 'IP21', false),
('MON', '-', 'Chapa', 1.00, NULL, 'D56', '15629095', 0.00, 3000, 2, 19.1, NULL, 'B3', '220V', 'MON', NULL, NOW(), NOW(), NULL, 'Monofasico', 'IP21', false),
('MON', '-', 'Chapa', 1.50, NULL, 'D56', '15629096', 0.00, 3000, 2, 19.1, NULL, 'B3', '220V', 'MON', NULL, NOW(), NOW(), NULL, 'Monofasico', 'IP21', false),
('MON', '-', 'Chapa', 2.00, NULL, 'F56H', '10021825', 0.00, 3000, 2, 19.1, NULL, 'B3', '220V', 'MON', NULL, NOW(), NOW(), NULL, 'Monofasico', 'IP21', false),

-- MON 1500 rpm (IP21)
('MON', '-', 'Chapa', 0.25, NULL, 'B48', '10021813', 0.00, 1500, 4, 12.7, NULL, 'B3', '220V', 'MON', NULL, NOW(), NOW(), NULL, 'Monofasico', 'IP21', false),
('MON', '-', 'Chapa', 0.33, NULL, 'C48', '11072268', 0.00, 1500, 4, 12.7, NULL, 'B3', '220V', 'MON', NULL, NOW(), NOW(), NULL, 'Monofasico', 'IP21', false),
('MON', '-', 'Chapa', 0.50, NULL, 'C48', '10021817', 0.00, 1500, 4, 12.7, NULL, 'B3', '220V', 'MON', NULL, NOW(), NOW(), NULL, 'Monofasico', 'IP21', false),
('MON', '-', 'Chapa', 0.75, NULL, 'D56', '10021820', 0.00, 1500, 4, 19.1, NULL, 'B3', '220V', 'MON', NULL, NOW(), NOW(), NULL, 'Monofasico', 'IP21', false),
('MON', '-', 'Chapa', 1.00, NULL, 'D56', '10021821', 0.00, 1500, 4, 19.1, NULL, 'B3', '220V', 'MON', NULL, NOW(), NOW(), NULL, 'Monofasico', 'IP21', false),
('MON', '-', 'Chapa', 1.50, NULL, 'G56H', '10021823', 0.00, 1500, 4, 19.1, NULL, 'B3', '220V', 'MON', NULL, NOW(), NOW(), NULL, 'Monofasico', 'IP21', false),
('MON', '-', 'Chapa', 2.00, NULL, 'G56H', '10021822', 0.00, 1500, 4, 19.1, NULL, 'B3', '220V', 'MON', NULL, NOW(), NOW(), NULL, 'Monofasico', 'IP21', false),

-- MTE 3000 rpm (IP55)
('MTE', '-', 'Chapa', 0.33, NULL, 'B56', '11508944', 0.00, 3000, 2, 15.9, NULL, 'B3', '220V', 'MTE', NULL, NOW(), NOW(), NULL, 'Monofasico', 'IP55', false),
('MTE', '-', 'Chapa', 0.50, NULL, 'B56', '10082963', 0.00, 3000, 2, 15.9, NULL, 'B3', '220V', 'MTE', NULL, NOW(), NOW(), NULL, 'Monofasico', 'IP55', false),
('MTE', '-', 'Chapa', 0.75, NULL, 'B56', '10021852', 0.00, 3000, 2, 15.9, NULL, 'B3', '220V', 'MTE', NULL, NOW(), NOW(), NULL, 'Monofasico', 'IP55', false),
('MTE', '-', 'Chapa', 1.00, NULL, 'D56', '10084874', 0.00, 3000, 2, 19.1, NULL, 'B3', '220V', 'MTE', NULL, NOW(), NOW(), NULL, 'Monofasico', 'IP55', false),
('MTE', '-', 'Chapa', 1.50, NULL, 'D56', '10741748', 0.00, 3000, 2, 19.1, NULL, 'B3', '220V', 'MTE', NULL, NOW(), NOW(), NULL, 'Monofasico', 'IP55', false),
('MTE', '-', 'Chapa', 2.00, NULL, 'F56H', '10021812', 0.00, 3000, 2, 19.1, NULL, 'B3', '220V', 'MTE', NULL, NOW(), NOW(), NULL, 'Monofasico', 'IP55', false),
('MTE', '-', 'Chapa', 3.00, NULL, 'G56H', '10035489', 0.00, 3000, 2, 15.9, NULL, 'B3', '220V', 'MTE', NULL, NOW(), NOW(), NULL, 'Monofasico', 'IP55', false),

-- MTE 1500 rpm (IP55)
('MTE', '-', 'Chapa', 0.33, NULL, 'B56', '11508941', 0.00, 1500, 4, 15.9, NULL, 'B3', '220V', 'MTE', NULL, NOW(), NOW(), NULL, 'Monofasico', 'IP55', false),
('MTE', '-', 'Chapa', 0.50, NULL, 'B56', '10714699', 0.00, 1500, 4, 15.9, NULL, 'B3', '220V', 'MTE', NULL, NOW(), NOW(), NULL, 'Monofasico', 'IP55', false),
('MTE', '-', 'Chapa', 0.75, NULL, 'D56', '10322369', 0.00, 1500, 4, 19.1, NULL, 'B3', '220V', 'MTE', NULL, NOW(), NOW(), NULL, 'Monofasico', 'IP55', false),
('MTE', '-', 'Chapa', 1.00, NULL, 'D56', '10371276', 0.00, 1500, 4, 19.1, NULL, 'B3', '220V', 'MTE', NULL, NOW(), NOW(), NULL, 'Monofasico', 'IP55', false),
('MTE', '-', 'Chapa', 1.50, NULL, 'G56H', '10360462', 0.00, 1500, 4, 19.1, NULL, 'B3', '220V', 'MTE', NULL, NOW(), NOW(), NULL, 'Monofasico', 'IP55', false),
('MTE', '-', 'Chapa', 2.00, NULL, 'G56H', '10016212', 0.00, 1500, 4, 15.9, NULL, 'B3', '220V', 'MTE', NULL, NOW(), NOW(), NULL, 'Monofasico', 'IP55', false),

-- MME (1500 rpm, "no" en IP)
('MME', '-', 'Chapa', 3.00, NULL, '100L', '14009690', 0.00, 1500, 4, 28.0, NULL, 'B3', '220V', 'MME', NULL, NOW(), NOW(), NULL, 'Monofasico', 'no', false),
('MME', '-', 'Chapa', 4.00, NULL, '112M', '14275042', 0.00, 1500, 4, 28.0, NULL, 'B3', '220V', 'MME', NULL, NOW(), NOW(), NULL, 'Monofasico', 'no', false),
('MME', '-', 'Chapa', 5.00, NULL, '112M', '13897690', 0.00, 1500, 4, 28.0, NULL, 'B3', '220V', 'MME', NULL, NOW(), NOW(), NULL, 'Monofasico', 'no', false);

// -------------------------------------------reductores----------------------------------------------------------------------

INSERT INTO public.reductor
(codigo, tamanio, reduccion, carcasa, motor, fs,
 fijacion_salida_id, eje_salida_id, tipo_entrada_id,
 precio, diametro_eje, descuento_porcentaje,
 potencia_maxima, factor_servicio, "createdAt", "updatedAt")
VALUES
(17646503, 30, 7.5, 63, NULL, NULL, 1, 1, 1, 68.80, NULL, NULL, 0.6, 1, now(), now()),
(17677232, 30, 10.0, 63, NULL, NULL, 1, 1, 1, 68.80, NULL, NULL, 0.5, 1, now(), now()),
(17677234, 30, 15.0, 63, NULL, NULL, 1, 1, 1, 68.80, NULL, NULL, 0.3, 1, now(), now()),
(17677236, 30, 20.0, 63, NULL, NULL, 1, 1, 1, 68.80, NULL, NULL, 0.2, 1, now(), now()),
(17677237, 30, 25.0, 63, NULL, NULL, 1, 1, 1, 68.80, NULL, NULL, 0.2, 1, now(), now()),
(17677358, 30, 30.0, 63, NULL, NULL, 1, 1, 1, 68.80, NULL, NULL, 0.2, 1, now(), now()),
(17677359, 30, 40.0, 63, NULL, NULL, 1, 1, 1, 68.80, NULL, NULL, 0.1, 1, now(), now()),
(17677360, 30, 50.0, 63, NULL, NULL, 1, 1, 1, 68.80, NULL, NULL, 0.1, 1, now(), now()),
(17677362, 30, 60.0, 63, NULL, NULL, 1, 1, 1, 68.80, NULL, NULL, 0.1, 1, now(), now()),
(18216051, 30, 80.0, 63, NULL, NULL, 1, 1, 1, 68.80, NULL, NULL, 0.1, 1, now(), now()),
(17691300, 40, 7.5, 71, NULL, NULL, 1, 1, 1, 93.00, NULL, NULL, 1.2, 1, now(), now()),
(17691370, 40, 7.5, 71, NULL, NULL, 1, 1, 2, 93.00, NULL, NULL, 1.2, 1, now(), now()),
(17691301, 40, 10.0, 71, NULL, NULL, 1, 1, 1, 93.00, NULL, NULL, 1.0, 1, now(), now()),
(17691371, 40, 10.0, 71, NULL, NULL, 1, 1, 2, 93.00, NULL, NULL, 1.0, 1, now(), now()),
(17691302, 40, 15.0, 71, NULL, NULL, 1, 1, 1, 93.00, NULL, NULL, 0.7, 1, now(), now()),
(17691372, 40, 15.0, 71, NULL, NULL, 1, 1, 2, 93.00, NULL, NULL, 0.7, 1, now(), now()),
(17691303, 40, 20.0, 71, NULL, NULL, 1, 1, 1, 93.00, NULL, NULL, 0.5, 1, now(), now()),
(17691374, 40, 20.0, 71, NULL, NULL, 1, 1, 2, 93.00, NULL, NULL, 0.5, 1, now(), now()),
(17691304, 40, 25.0, 71, NULL, NULL, 1, 1, 1, 93.00, NULL, NULL, 0.4, 1, now(), now()),
(17691375, 40, 25.0, 71, NULL, NULL, 1, 1, 2, 93.00, NULL, NULL, 0.4, 1, now(), now()),
(17691305, 40, 30.0, 71, NULL, NULL, 1, 1, 1, 93.00, NULL, NULL, 0.4, 1, now(), now()),
(17691376, 40, 30.0, 71, NULL, NULL, 1, 1, 2, 93.00, NULL, NULL, 0.4, 1, now(), now()),
(17677315, 40, 40.0, 63, NULL, NULL, 1, 1, 1, 93.00, NULL, NULL, 0.3, 1, now(), now()),
(17677834, 40, 40.0, 63, NULL, NULL, 1, 1, 2, 93.00, NULL, NULL, 0.3, 1, now(), now()),
(17691306, 40, 40.0, 71, NULL, NULL, 1, 1, 1, 93.00, NULL, NULL, 0.3, 1, now(), now()),
(17691377, 40, 40.0, 71, NULL, NULL, 1, 1, 2, 93.00, NULL, NULL, 0.2, 1, now(), now()),
(17677316, 40, 50.0, 63, NULL, NULL, 1, 1, 1, 93.00, NULL, NULL, 0.2, 1, now(), now()),
(17677835, 40, 50.0, 63, NULL, NULL, 1, 1, 2, 93.00, NULL, NULL, 0.2, 1, now(), now()),
(17691307, 40, 50.0, 71, NULL, NULL, 1, 1, 1, 93.00, NULL, NULL, 0.2, 1, now(), now()),
(17691378, 40, 50.0, 71, NULL, NULL, 1, 1, 2, 93.00, NULL, NULL, 0.2, 1, now(), now()),
(17677317, 40, 60.0, 63, NULL, NULL, 1, 1, 1, 93.00, NULL, NULL, 0.2, 1, now(), now()),
(17677836, 40, 60.0, 63, NULL, NULL, 1, 1, 2, 93.00, NULL, NULL, 0.2, 1, now(), now()),
(17691368, 40, 60.0, 71, NULL, NULL, 1, 1, 1, 93.00, NULL, NULL, 0.2, 1, now(), now()),
(17691379, 40, 60.0, 71, NULL, NULL, 1, 1, 2, 93.00, NULL, NULL, 0.2, 1, now(), now()),
(17677828, 40, 80.0, 63, NULL, NULL, 1, 1, 1, 93.00, NULL, NULL, 0.2, 1, now(), now()),
(17677837, 40, 80.0, 63, NULL, NULL, 1, 1, 2, 93.00, NULL, NULL, 0.2, 1, now(), now()),
(17691369, 40, 80.0, 71, NULL, NULL, 1, 1, 1, 93.00, NULL, NULL, 0.2, 1, now(), now()),
(17692931, 40, 80.0, 71, NULL, NULL, 1, 1, 2, 93.00, NULL, NULL, 0.2, 1, now(), now()),
(18216053, 40,100.0, 63, NULL, NULL, 1, 1, 1, 93.00, NULL, NULL, 0.1, 1, now(), now()),
(18216055, 40,100.0, 63, NULL, NULL, 1, 1, 2, 93.00, NULL, NULL, 0.1, 1, now(), now()),
(18216054, 40,100.0, 71, NULL, NULL, 1, 1, 1, 93.00, NULL, NULL, 0.1, 1, now(), now()),
(18216056, 40,100.0, 71, NULL, NULL, 1, 1, 2, 93.00, NULL, NULL, 0.1, 1, now(), now()),
(17693388, 50, 7.5, 80, NULL, NULL, 1, 1, 1, 128.70, NULL, NULL, 2.1, 1, now(), now()),
(17693395, 50, 7.5, 80, NULL, NULL, 1, 1, 2, 128.70, NULL, NULL, 2.1, 1, now(), now()),
(17693389, 50, 10.0, 80, NULL, NULL, 1, 1, 1, 128.70, NULL, NULL, 1.6, 1, now(), now()),
(17693396, 50, 10.0, 80, NULL, NULL, 1, 1, 2, 128.70, NULL, NULL, 1.6, 1, now(), now()),
(17677940, 50, 15.0, 71, NULL, NULL, 1, 1, 1, 128.70, NULL, NULL, 1.2, 1, now(), now()),
(17677960, 50, 15.0, 71, NULL, NULL, 1, 1, 2, 128.70, NULL, NULL, 1.2, 1, now(), now()),
(17693390, 50, 15.0, 80, NULL, NULL, 1, 1, 1, 128.70, NULL, NULL, 1.2, 1, now(), now()),
(17693397, 50, 15.0, 80, NULL, NULL, 1, 1, 2, 128.70, NULL, NULL, 1.2, 1, now(), now()),
(17693391, 50, 20.0, 80, NULL, NULL, 1, 1, 1, 128.70, NULL, NULL, 0.9, 1, now(), now()),
(17693399, 50, 20.0, 80, NULL, NULL, 1, 1, 2, 128.70, NULL, NULL, 0.9, 1, now(), now()),
(17677942, 50, 25.0, 71, NULL, NULL, 1, 1, 1, 128.70, NULL, NULL, 0.8, 1, now(), now()),
(17677962, 50, 25.0, 71, NULL, NULL, 1, 1, 2, 128.70, NULL, NULL, 0.8, 1, now(), now()),
(17677943, 50, 30.0, 71, NULL, NULL, 1, 1, 1, 128.70, NULL, NULL, 0.8, 1, now(), now()),
(17677963, 50, 30.0, 71, NULL, NULL, 1, 1, 2, 128.70, NULL, NULL, 0.8, 1, now(), now()),
(17693393, 50, 30.0, 80, NULL, NULL, 1, 1, 1, 128.70, NULL, NULL, 0.8, 1, now(), now()),
(17693401, 50, 30.0, 80, NULL, NULL, 1, 1, 2, 128.70, NULL, NULL, 0.8, 1, now(), now()),
(17677944, 50, 40.0, 71, NULL, NULL, 1, 1, 1, 128.70, NULL, NULL, 0.6, 1, now(), now()),
(17677964, 50, 40.0, 71, NULL, NULL, 1, 1, 2, 128.70, NULL, NULL, 0.6, 1, now(), now()),
(17677945, 50, 50.0, 71, NULL, NULL, 1, 1, 1, 128.70, NULL, NULL, 0.5, 1, now(), now()),
(17677965, 50, 50.0, 71, NULL, NULL, 1, 1, 2, 128.70, NULL, NULL, 0.5, 1, now(), now()),
(17677946, 50, 60.0, 71, NULL, NULL, 1, 1, 1, 128.70, NULL, NULL, 0.4, 1, now(), now()),
(17677966, 50, 60.0, 71, NULL, NULL, 1, 1, 2, 128.70, NULL, NULL, 0.4, 1, now(), now()),
(17677947, 50, 80.0, 71, NULL, NULL, 1, 1, 1, 128.70, NULL, NULL, 0.3, 1, now(), now()),
(17677967, 50, 80.0, 71, NULL, NULL, 1, 1, 2, 128.70, NULL, NULL, 0.3, 1, now(), now()),
(17677958, 50,100.0, 71, NULL, NULL, 1, 1, 1, 128.70, NULL, NULL, 0.2, 1, now(), now()),
(17677998, 50,100.0, 71, NULL, NULL, 1, 1, 2, 128.70, NULL, NULL, 0.2, 1, now(), now()),
(17693061, 63, 7.5, 90, NULL, NULL, 1, 1, 1, 165.60, NULL, NULL, 3.8, 1, now(), now()),
(17693089, 63, 7.5, 90, NULL, NULL, 1, 1, 2, 165.60, NULL, NULL, 3.8, 1, now(), now()),
(17693062, 63, 10.0, 90, NULL, NULL, 1, 1, 1, 165.60, NULL, NULL, 3.0, 1, now(), now()),
(17693090, 63, 10.0, 90, NULL, NULL, 1, 1, 2, 165.60, NULL, NULL, 3.0, 1, now(), now()),
(17693063, 63, 15.0, 90, NULL, NULL, 1, 1, 1, 165.60, NULL, NULL, 2.2, 1, now(), now()),
(17693091, 63, 15.0, 90, NULL, NULL, 1, 1, 2, 165.60, NULL, NULL, 2.2, 1, now(), now()),
(17693064, 63, 20.0, 90, NULL, NULL, 1, 1, 1, 165.60, NULL, NULL, 1.7, 1, now(), now()),
(17693092, 63, 20.0, 90, NULL, NULL, 1, 1, 2, 165.60, NULL, NULL, 1.7, 1, now(), now()),
(17693065, 63, 25.0, 90, NULL, NULL, 1, 1, 1, 165.60, NULL, NULL, 1.3, 1, now(), now()),
(17693093, 63, 25.0, 90, NULL, NULL, 1, 1, 2, 165.60, NULL, NULL, 1.3, 1, now(), now()),
(17692971, 63, 30.0, 80, NULL, NULL, 1, 1, 1, 165.60, NULL, NULL, 1.5, 1, now(), now()),
(17693001, 63, 30.0, 80, NULL, NULL, 1, 1, 2, 165.60, NULL, NULL, 1.5, 1, now(), now()),
(17693066, 63, 30.0, 90, NULL, NULL, 1, 1, 1, 165.60, NULL, NULL, 1.5, 1, now(), now()),
(17693094, 63, 30.0, 90, NULL, NULL, 1, 1, 2, 165.60, NULL, NULL, 1.5, 1, now(), now()),
(17692972, 63, 40.0, 80, NULL, NULL, 1, 1, 1, 165.60, NULL, NULL, 1.1, 1, now(), now()),
(17693002, 63, 40.0, 80, NULL, NULL, 1, 1, 2, 165.60, NULL, NULL, 1.1, 1, now(), now()),
(17692973, 63, 50.0, 80, NULL, NULL, 1, 1, 1, 165.60, NULL, NULL, 0.8, 1, now(), now()),
(17693003, 63, 50.0, 80, NULL, NULL, 1, 1, 2, 165.60, NULL, NULL, 0.8, 1, now(), now()),
(17692974, 63, 60.0, 80, NULL, NULL, 1, 1, 1, 165.60, NULL, NULL, 0.7, 1, now(), now()),
(17693004, 63, 60.0, 80, NULL, NULL, 1, 1, 2, 165.60, NULL, NULL, 0.7, 1, now(), now()),
(17678048, 63, 60.0, 71, NULL, NULL, 1, 1, 1, 165.60, NULL, NULL, 0.7, 1, now(), now()),
(17678055, 63, 60.0, 71, NULL, NULL, 1, 1, 2, 165.60, NULL, NULL, 0.7, 1, now(), now()),
(17678049, 63, 80.0, 71, NULL, NULL, 1, 1, 1, 165.60, NULL, NULL, 0.6, 1, now(), now()),
(17678056, 63, 80.0, 71, NULL, NULL, 1, 1, 2, 165.60, NULL, NULL, 0.6, 1, now(), now()),
(17678050, 63,100.0, 71, NULL, NULL, 1, 1, 1, 165.60, NULL, NULL, 0.5, 1, now(), now()),
(17678057, 63,100.0, 71, NULL, NULL, 1, 1, 2, 165.60, NULL, NULL, 0.5, 1, now(), now()),
(17694788, 75, 7.5, 100, NULL, NULL, 1, 1, 2, 226.70, NULL, NULL, 5.6, 1, now(), now()),
(17693404, 75, 10.0, 100, NULL, NULL, 1, 1, 1, 226.70, NULL, NULL, 4.4, 1, now(), now()),
(17694711, 75, 10.0, 100, NULL, NULL, 1, 1, 2, 226.70, NULL, NULL, 4.4, 1, now(), now()),
(17693405, 75, 15.0, 100, NULL, NULL, 1, 1, 1, 226.70, NULL, NULL, 3.0, 1, now(), now()),
(17694712, 75, 15.0, 100, NULL, NULL, 1, 1, 2, 226.70, NULL, NULL, 3.0, 1, now(), now()),
(17693406, 75, 20.0, 100, NULL, NULL, 1, 1, 1, 226.70, NULL, NULL, 2.6, 1, now(), now()),
(17694713, 75, 20.0, 100, NULL, NULL, 1, 1, 2, 226.70, NULL, NULL, 2.6, 1, now(), now()),
(17693081, 75, 25.0, 90, NULL, NULL, 1, 1, 1, 226.70, NULL, NULL, 2.0, 1, now(), now()),
(17693100, 75, 25.0, 90, NULL, NULL, 1, 1, 2, 226.70, NULL, NULL, 2.0, 1, now(), now()),
(17693082, 75, 30.0, 90, NULL, NULL, 1, 1, 1, 226.70, NULL, NULL, 2.1, 1, now(), now()),
(17693101, 75, 30.0, 90, NULL, NULL, 1, 1, 2, 226.70, NULL, NULL, 2.1, 1, now(), now()),
(17694789, 75, 30.0, 100, NULL, NULL, 1, 1, 2, 226.70, NULL, NULL, 2.1, 1, now(), now()),
(17677286, 75, 40.0, 80, NULL, NULL, 1, 1, 1, 226.70, NULL, NULL, 1.3, 1, now(), now()),
(17678082, 75, 40.0, 80, NULL, NULL, 1, 1, 2, 226.70, NULL, NULL, 1.3, 1, now(), now()),
(17693083, 75, 40.0, 90, NULL, NULL, 1, 1, 1, 226.70, NULL, NULL, 1.3, 1, now(), now()),
(17693102, 75, 40.0, 90, NULL, NULL, 1, 1, 2, 226.70, NULL, NULL, 1.3, 1, now(), now()),
(17677287, 75, 50.0, 80, NULL, NULL, 1, 1, 1, 226.70, NULL, NULL, 1.2, 1, now(), now()),
(17678083, 75, 50.0, 80, NULL, NULL, 1, 1, 2, 226.70, NULL, NULL, 1.2, 1, now(), now()),
(17693084, 75, 50.0, 90, NULL, NULL, 1, 1, 1, 226.70, NULL, NULL, 1.2, 1, now(), now()),
(17693103, 75, 50.0, 90, NULL, NULL, 1, 1, 2, 226.70, NULL, NULL, 1.2, 1, now(), now()),
(17678078, 75, 60.0, 80, NULL, NULL, 1, 1, 1, 226.70, NULL, NULL, 1.1, 1, now(), now()),
(17678084, 75, 60.0, 80, NULL, NULL, 1, 1, 2, 226.70, NULL, NULL, 1.1, 1, now(), now()),
(17678079, 75, 80.0, 80, NULL, NULL, 1, 1, 1, 226.70, NULL, NULL, 0.8, 1, now(), now()),
(17678085, 75, 80.0, 80, NULL, NULL, 1, 1, 2, 226.70, NULL, NULL, 0.8, 1, now(), now()),
(17678080, 75,100.0, 80, NULL, NULL, 1, 1, 1, 226.70, NULL, NULL, 0.7, 1, now(), now()),
(17678086, 75,100.0, 80, NULL, NULL, 1, 1, 2, 226.70, NULL, NULL, 0.7, 1, now(), now()),
(17693449, 90, 7.5, 100, NULL, NULL, 1, 1, 2, 322.30, NULL, NULL, 8.8, 1, now(), now()),
(18216231, 90, 7.5, 100, NULL, NULL, 1, 1, 1, 322.30, NULL, NULL, 8.8, 1, now(), now()),
(17693167, 90, 10.0, 100, NULL, NULL, 1, 1, 1, 322.30, NULL, NULL, 7.2, 1, now(), now()),
(17693450, 90, 10.0, 100, NULL, NULL, 1, 1, 2, 322.30, NULL, NULL, 7.2, 1, now(), now()),
(17693438, 90, 15.0, 100, NULL, NULL, 1, 1, 1, 322.30, NULL, NULL, 5.5, 1, now(), now()),
(17693451, 90, 15.0, 100, NULL, NULL, 1, 1, 2, 322.30, NULL, NULL, 5.5, 1, now(), now()),
(17693439, 90, 20.0, 100, NULL, NULL, 1, 1, 1, 322.30, NULL, NULL, 4.0, 1, now(), now()),
(17693452, 90, 20.0, 100, NULL, NULL, 1, 1, 2, 322.30, NULL, NULL, 4.0, 1, now(), now()),
(17693440, 90, 25.0, 100, NULL, NULL, 1, 1, 1, 322.30, NULL, NULL, 3.3, 1, now(), now()),
(17693453, 90, 25.0, 100, NULL, NULL, 1, 1, 2, 322.30, NULL, NULL, 3.3, 1, now(), now()),
(17693185, 90, 30.0, 90, NULL, NULL, 1, 1, 1, 322.30, NULL, NULL, 3.6, 1, now(), now()),
(17693178, 90, 30.0, 90, NULL, NULL, 1, 1, 2, 322.30, NULL, NULL, 3.6, 1, now(), now()),
(17693441, 90, 30.0, 100, NULL, NULL, 1, 1, 1, 322.30, NULL, NULL, 3.6, 1, now(), now()),
(17693454, 90, 30.0, 100, NULL, NULL, 1, 1, 2, 322.30, NULL, NULL, 3.6, 1, now(), now()),
(17693186, 90, 40.0, 90, NULL, NULL, 1, 1, 1, 322.30, NULL, NULL, 2.4, 1, now(), now()),
(17693203, 90, 40.0, 90, NULL, NULL, 1, 1, 2, 322.30, NULL, NULL, 2.4, 1, now(), now()),
(17693442, 90, 40.0, 100, NULL, NULL, 1, 1, 1, 322.30, NULL, NULL, 2.4, 1, now(), now()),
(17693455, 90, 40.0, 100, NULL, NULL, 1, 1, 2, 322.30, NULL, NULL, 2.4, 1, now(), now()),
(17693187, 90, 50.0, 90, NULL, NULL, 1, 1, 1, 322.30, NULL, NULL, 2.0, 1, now(), now()),
(17693204, 90, 50.0, 90, NULL, NULL, 1, 1, 2, 322.30, NULL, NULL, 2.0, 1, now(), now()),
(17693198, 90, 60.0, 90, NULL, NULL, 1, 1, 1, 322.30, NULL, NULL, 1.5, 1, now(), now()),
(17693205, 90, 60.0, 90, NULL, NULL, 1, 1, 2, 322.30, NULL, NULL, 1.5, 1, now(), now()),
(18259878, 90, 60.0, 100, NULL, NULL, 1, 1, 2, 322.30, NULL, NULL, 1.5, 1, now(), now()),
(17678100, 90, 80.0, 80, NULL, NULL, 1, 1, 1, 322.30, NULL, NULL, 1.1, 1, now(), now()),
(17678103, 90, 80.0, 80, NULL, NULL, 1, 1, 2, 322.30, NULL, NULL, 1.1, 1, now(), now()),
(18259880, 90, 80.0, 100, NULL, NULL, 1, 1, 2, 322.30, NULL, NULL, 1.1, 1, now(), now()),
(18216050, 90, 100.0, 90, NULL, NULL, 1, 1, 2, 322.30, NULL, NULL, 0.9, 1, now(), now()),
(18216230, 90, 100.0, 90, NULL, NULL, 1, 1, 1, 322.30, NULL, NULL, 0.9, 1, now(), now()),
(17693322, 110, 7.5, 132, NULL, NULL, 1, 1, 2, 597.30, NULL, NULL, 16.0, 1, now(), now()),
(17693323, 110, 10.0, 132, NULL, NULL, 1, 1, 2, 597.30, NULL, NULL, 13.0, 1, now(), now()),
(17693291, 110, 15.0, 100, NULL, NULL, 1, 1, 2, 597.30, NULL, NULL, 10.5, 1, now(), now()),
(17693324, 110, 15.0, 132, NULL, NULL, 1, 1, 2, 597.30, NULL, NULL, 10.5, 1, now(), now()),
(17693292, 110, 20.0, 100, NULL, NULL, 1, 1, 2, 597.30, NULL, NULL, 7.5, 1, now(), now()),
(17693325, 110, 20.0, 132, NULL, NULL, 1, 1, 2, 597.30, NULL, NULL, 7.5, 1, now(), now()),
(17693293, 110, 25.0, 100, NULL, NULL, 1, 1, 2, 597.30, NULL, NULL, 6.0, 1, now(), now()),
(17693295, 110, 30.0, 100, NULL, NULL, 1, 1, 2, 597.30, NULL, NULL, 5.5, 1, now(), now()),
(17693289, 110, 40.0, 100, NULL, NULL, 1, 1, 2, 597.30, NULL, NULL, 4.4, 1, now(), now()),
(17693290, 110, 50.0, 100, NULL, NULL, 1, 1, 2, 597.30, NULL, NULL, 3.6, 1, now(), now()),
(17693273, 110, 60.0, 90, NULL, NULL, 1, 1, 2, 597.30, NULL, NULL, 2.8, 1, now(), now()),
(17693275, 110, 80.0, 90, NULL, NULL, 1, 1, 2, 597.30, NULL, NULL, 2.0, 1, now(), now()),
(18216232, 110, 100.0, 90, NULL, NULL, 1, 1, 2, 597.30, NULL, NULL, 1.5, 1, now(), now()),
(18140551, 110, 100.0, 100, NULL, NULL, 1, 1, 2, 597.30, NULL, NULL, 1.5, 1, now(), now());

//arranque suave

-- =====================================
-- ==========  SSW05  ==================
-- =====================================
INSERT INTO public.arranquesuaves
("codigo","referencia","alimentacion","tension","corriente","potencia","tamaño","modelo","control","createdAt","updatedAt")
VALUES 
(10413826, 'SSW05 0003 T 2246 SPZ', 'Alimentación Trifásica 220-460Vca', '220-460Vca', '3A', '1,5/1,1 (hp/kW)', 1, 'SSW05', 2, NOW(), NOW());

INSERT INTO public.arranquesuaves
("codigo","referencia","alimentacion","tension","corriente","potencia","tamaño","modelo","control","createdAt","updatedAt")
VALUES
(10413820, 'SSW05 0010 T 2246 SPZ', 'Alimentación Trifásica 220-460Vca', '220-460Vca', '10A', '5,5/4 (hp/kW)', 1, 'SSW05', 2, NOW(), NOW());

INSERT INTO public.arranquesuaves
("codigo","referencia","alimentacion","tension","corriente","potencia","tamaño","modelo","control","createdAt","updatedAt")
VALUES
(10413821, 'SSW05 0016 T 2246 SPZ', 'Alimentación Trifásica 220-460Vca', '220-460Vca', '16A', '10/5,5 (hp/kW)', 1, 'SSW05', 2, NOW(), NOW());

INSERT INTO public.arranquesuaves
("codigo","referencia","alimentacion","tension","corriente","potencia","tamaño","modelo","control","createdAt","updatedAt")
VALUES
(10413822, 'SSW05 0023 T 2246 SPZ', 'Alimentación Trifásica 220-460Vca', '220-460Vca', '23A', '15/11 (hp/kW)', 1, 'SSW05', 2, NOW(), NOW());

INSERT INTO public.arranquesuaves
("codigo","referencia","alimentacion","tension","corriente","potencia","tamaño","modelo","control","createdAt","updatedAt")
VALUES
(10413823, 'SSW05 0030 T 2246 SPZ', 'Alimentación Trifásica 220-460Vca', '220-460Vca', '30A', '20/15 (hp/kW)', 1, 'SSW05', 2, NOW(), NOW());

INSERT INTO public.arranquesuaves
("codigo","referencia","alimentacion","tension","corriente","potencia","tamaño","modelo","control","createdAt","updatedAt")
VALUES
(10413824, 'SSW05 0045 T 2246 SPZ', 'Alimentación Trifásica 220-460Vca', '220-460Vca', '45A', '30/22 (hp/kW)', 2, 'SSW05', 2, NOW(), NOW());

INSERT INTO public.arranquesuaves
("codigo","referencia","alimentacion","tension","corriente","potencia","tamaño","modelo","control","createdAt","updatedAt")
VALUES
(10328761, 'SSW05 0060 T 2246 SPZ', 'Alimentación Trifásica 220-460Vca', '220-460Vca', '60A', '40/30 (hp/kW)', 2, 'SSW05', 2, NOW(), NOW());

INSERT INTO public.arranquesuaves
("codigo","referencia","alimentacion","tension","corriente","potencia","tamaño","modelo","control","createdAt","updatedAt")
VALUES
(10413825, 'SSW05 0085 T 2246 SPZ', 'Alimentación Trifásica 220-460Vca', '220-460Vca', '85A', '60/45 (hp/kW)', 2, 'SSW05', 2, NOW(), NOW());

-- =====================================
-- ==========  SSW07  ==================
-- =====================================
INSERT INTO public.arranquesuaves
("codigo","referencia","alimentacion","tension","corriente","potencia","tamaño","modelo","control","createdAt","updatedAt")
VALUES
(10194170, 'EX SSW07 0017 T5 5Z', 'Alimentación Trifásica 220-575Vca', '220-575Vca', '17A', '10/7.5 (hp/kW)', 1, 'SSW07', 2, NOW(), NOW());

INSERT INTO public.arranquesuaves
("codigo","referencia","alimentacion","tension","corriente","potencia","tamaño","modelo","control","createdAt","updatedAt")
VALUES
(10194171, 'EX SSW07 0024 T5 5Z', 'Alimentación Trifásica 220-575Vca', '220-575Vca', '24A', '15/11 (hp/kW)', 1, 'SSW07', 2, NOW(), NOW());

INSERT INTO public.arranquesuaves
("codigo","referencia","alimentacion","tension","corriente","potencia","tamaño","modelo","control","createdAt","updatedAt")
VALUES
(10194172, 'EX SSW07 0030 T5 5Z', 'Alimentación Trifásica 220-575Vca', '220-575Vca', '30A', '20/15 (hp/kW)', 1, 'SSW07', 2, NOW(), NOW());

INSERT INTO public.arranquesuaves
("codigo","referencia","alimentacion","tension","corriente","potencia","tamaño","modelo","control","createdAt","updatedAt")
VALUES
(10194173, 'EX SSW07 0045 T5 5Z', 'Alimentación Trifásica 220-575Vca', '220-575Vca', '45A', '30/20 (hp/kW)', 2, 'SSW07', 2, NOW(), NOW());

INSERT INTO public.arranquesuaves
("codigo","referencia","alimentacion","tension","corriente","potencia","tamaño","modelo","control","createdAt","updatedAt")
VALUES
(10194174, 'EX SSW07 0061 T5 5Z', 'Alimentación Trifásica 220-575Vca', '220-575Vca', '61A', '40/30 (hp/kW)', 2, 'SSW07', 2, NOW(), NOW());

INSERT INTO public.arranquesuaves
("codigo","referencia","alimentacion","tension","corriente","potencia","tamaño","modelo","control","createdAt","updatedAt")
VALUES
(10194175, 'EX SSW07 0085 T5 5Z', 'Alimentación Trifásica 220-575Vca', '220-575Vca', '85A', '60/45 (hp/kW)', 2, 'SSW07', 2, NOW(), NOW());

INSERT INTO public.arranquesuaves
("codigo","referencia","alimentacion","tension","corriente","potencia","tamaño","modelo","control","createdAt","updatedAt")
VALUES
(10194176, 'EX SSW07 0130 T5 5Z', 'Alimentación Trifásica 220-575Vca', '220-575Vca', '130A', '75/55 (hp/kW)', 3, 'SSW07', 2, NOW(), NOW());

INSERT INTO public.arranquesuaves
("codigo","referencia","alimentacion","tension","corriente","potencia","tamaño","modelo","control","createdAt","updatedAt")
VALUES
(10194177, 'EX SSW07 0170 T5 5Z', 'Alimentación Trifásica 220-575Vca', '220-575Vca', '170A', '125/90 (hp/kW)', 3, 'SSW07', 2, NOW(), NOW());

INSERT INTO public.arranquesuaves
("codigo","referencia","alimentacion","tension","corriente","potencia","tamaño","modelo","control","createdAt","updatedAt")
VALUES
(10233130, 'EX SSW07 0200 T5 5Z', 'Alimentación Trifásica 220-575Vca', '220-575Vca', '200A', '150/110 (hp/kW)', 3, 'SSW07', 2, NOW(), NOW());

INSERT INTO public.arranquesuaves
("codigo","referencia","alimentacion","tension","corriente","potencia","tamaño","modelo","control","createdAt","updatedAt")
VALUES
(10233131, 'EX SSW07 0255 T5 5HZ', 'Alimentación Trifásica 220-575Vca', '220-575Vca', '255A', '175/132 (hp/kW)', 4, 'SSW07', 2, NOW(), NOW());

INSERT INTO public.arranquesuaves
("codigo","referencia","alimentacion","tension","corriente","potencia","tamaño","modelo","control","createdAt","updatedAt")
VALUES
(10433537, 'EX SSW07 0312 T5 5HZ', 'Alimentación Trifásica 220-575Vca', '220-575Vca', '312A', '200/150 (hp/kW)', 4, 'SSW07', 2, NOW(), NOW());

INSERT INTO public.arranquesuaves
("codigo","referencia","alimentacion","tension","corriente","potencia","tamaño","modelo","control","createdAt","updatedAt")
VALUES
(11044369, 'EX SSW07 0365 T5 5HZ', 'Alimentación Trifásica 220-575Vca', '220-575Vca', '365A', '250/185 (hp/kW)', 4, 'SSW07', 2, NOW(), NOW());

INSERT INTO public.arranquesuaves
("codigo","referencia","alimentacion","tension","corriente","potencia","tamaño","modelo","control","createdAt","updatedAt")
VALUES
(11043731, 'EX SSW07 0412 T5 5HZ', 'Alimentación Trifásica 220-575Vca', '220-575Vca', '412A', '300/225 (hp/kW)', 4, 'SSW07', 2, NOW(), NOW());

-- =====================================
-- ==========  SSW900  =================
-- =====================================
-- Para “tamaño” mapeamos B→2, C→3, D→4, E→5, F→6, etc.
INSERT INTO public.arranquesuaves
("codigo","referencia","alimentacion","tension","corriente","potencia","tamaño","modelo","control","createdAt","updatedAt")
VALUES
(12956628, 'SSW900 B 0085 T5 E2', 'Alimentación Trifásica 220-575Vca', '220-575Vca', '85A', '60/45 (hp/kW)', 2, 'SSW900', 2, NOW(), NOW());

INSERT INTO public.arranquesuaves
("codigo","referencia","alimentacion","tension","corriente","potencia","tamaño","modelo","control","createdAt","updatedAt")
VALUES
(12956625, 'SSW900 B 0105 T5 E2', 'Alimentación Trifásica 220-575Vca', '220-575Vca', '105A', '75/55 (hp/kW)', 2, 'SSW900', 2, NOW(), NOW());

INSERT INTO public.arranquesuaves
("codigo","referencia","alimentacion","tension","corriente","potencia","tamaño","modelo","control","createdAt","updatedAt")
VALUES
(12956521, 'SSW900 C 0130 T5 E2', 'Alimentación Trifásica 220-575Vca', '220-575Vca', '130A', '100/75 (hp/kW)', 3, 'SSW900', 2, NOW(), NOW());

INSERT INTO public.arranquesuaves
("codigo","referencia","alimentacion","tension","corriente","potencia","tamaño","modelo","control","createdAt","updatedAt")
VALUES
(12956589, 'SSW900 C 0170 T5 E2', 'Alimentación Trifásica 220-575Vca', '220-575Vca', '170A', '125/90 (hp/kW)', 3, 'SSW900', 2, NOW(), NOW());

INSERT INTO public.arranquesuaves
("codigo","referencia","alimentacion","tension","corriente","potencia","tamaño","modelo","control","createdAt","updatedAt")
VALUES
(12960999, 'SSW900 C 0200 T5 E2', 'Alimentación Trifásica 220-575Vca', '220-575Vca', '205A', '150/110 (hp/kW)', 3, 'SSW900', 2, NOW(), NOW());

INSERT INTO public.arranquesuaves
("codigo","referencia","alimentacion","tension","corriente","potencia","tamaño","modelo","control","createdAt","updatedAt")
VALUES
(13256760, 'SSW900 D 0255 T5 E2', 'Alimentación Trifásica 220-575Vca', '220-575Vca', '255A', '175/132 (hp/kW)', 4, 'SSW900', 2, NOW(), NOW());

INSERT INTO public.arranquesuaves
("codigo","referencia","alimentacion","tension","corriente","potencia","tamaño","modelo","control","createdAt","updatedAt")
VALUES
(13256763, 'SSW900 D 0312 T5 E2', 'Alimentación Trifásica 220-575Vca', '220-575Vca', '312A', '200/150 (hp/kW)', 4, 'SSW900', 2, NOW(), NOW());

INSERT INTO public.arranquesuaves
("codigo","referencia","alimentacion","tension","corriente","potencia","tamaño","modelo","control","createdAt","updatedAt")
VALUES
(13256770, 'SSW900 D 0365 T5 E2', 'Alimentación Trifásica 220-575Vca', '220-575Vca', '365A', '250/185 (hp/kW)', 4, 'SSW900', 2, NOW(), NOW());

INSERT INTO public.arranquesuaves
("codigo","referencia","alimentacion","tension","corriente","potencia","tamaño","modelo","control","createdAt","updatedAt")
VALUES
(13256776, 'SSW900 D 0412 T5 E2', 'Alimentación Trifásica 220-575Vca', '220-575Vca', '412A', '300/225 (hp/kW)', 4, 'SSW900', 2, NOW(), NOW());

INSERT INTO public.arranquesuaves
("codigo","referencia","alimentacion","tension","corriente","potencia","tamaño","modelo","control","createdAt","updatedAt")
VALUES
(14411913, 'SSW900 E 0604 T5 E2', 'Alimentación Trifásica 220-575Vca', '220-575Vca', '604A', '450/330 (hp/kW)', 5, 'SSW900', 2, NOW(), NOW());

INSERT INTO public.arranquesuaves
("codigo","referencia","alimentacion","tension","corriente","potencia","tamaño","modelo","control","createdAt","updatedAt")
VALUES
(14418885, 'SSW900 E 0820 T5 E2', 'Alimentación Trifásica 220-575Vca', '220-575Vca', '820A', '550/370 (hp/kW)', 5, 'SSW900', 2, NOW(), NOW());

INSERT INTO public.arranquesuaves
("codigo","referencia","alimentacion","tension","corriente","potencia","tamaño","modelo","control","createdAt","updatedAt")
VALUES
(14419091, 'SSW900 F 0950 T5 E4', 'Alimentación Trifásica 220-575Vca', '220-575Vca', '950A', '700/550 (hp/kW)', 6, 'SSW900', 2, NOW(), NOW());

INSERT INTO public.arranquesuaves
("codigo","referencia","alimentacion","tension","corriente","potencia","tamaño","modelo","control","createdAt","updatedAt")
VALUES
(14419096, 'SSW900 G 1100 T5 E4', 'Alimentación Trifásica 220-575Vca', '220-575Vca', '1100A', '800/600 (hp/kW)', 6, 'SSW900', 2, NOW(), NOW());

INSERT INTO public.arranquesuaves
("codigo","referencia","alimentacion","tension","corriente","potencia","tamaño","modelo","control","createdAt","updatedAt")
VALUES
(14419099, 'SSW900 G 1250 T5 E4', 'Alimentación Trifásica 220-575Vca', '220-575Vca', '1250A', '900/700 (hp/kW)', 6, 'SSW900', 2, NOW(), NOW());

INSERT INTO public.arranquesuaves
("codigo","referencia","alimentacion","tension","corriente","potencia","tamaño","modelo","control","createdAt","updatedAt")
VALUES
(14419109, 'SSW900 G 1400 T5 E4', 'Alimentación Trifásica 220-575Vca', '220-575Vca', '1400A', '1000/750 (hp/kW)', 6, 'SSW900', 2, NOW(), NOW());


//---------------------------------- convertidores ------------------

INSERT INTO public.convertidors(
  referencia, alimentacion, tension, corriente, potencia, modelo,
  "createdAt", "updatedAt", codigo, frenado_incluido, "tamaño"
)
VALUES
('CFW300 A 02P6 NBS220',
 'Monofásica','200-240 Vca','2.6A','0.5hp','CFW300',
  NOW(),NOW(),13059320,false,'A');

INSERT INTO public.convertidors(
  referencia, alimentacion, tension, corriente, potencia, modelo,
  "createdAt", "updatedAt", codigo, frenado_incluido, "tamaño"
)
VALUES
('CFW300 A 04P2 NBS220',
 'Monofásica','200-240 Vca','4A','1hp','CFW300',
  NOW(),NOW(),13059321,false,'A');

INSERT INTO public.convertidors(
  referencia, alimentacion, tension, corriente, potencia, modelo,
  "createdAt", "updatedAt", codigo, frenado_incluido, "tamaño"
)
VALUES
('CFW300 A 07P3 NBS220',
 'Monofásica','200-240 Vca','7.3A','2hp','CFW300',
  NOW(),NOW(),13059418,false,'A');

INSERT INTO public.convertidors(
  referencia, alimentacion, tension, corriente, potencia, modelo,
  "createdAt", "updatedAt", codigo, frenado_incluido, "tamaño"
)
VALUES
('CFW300 B 10P0 B2D2B0',
 'Monofásica','200-240 Vca','10A','3hp','CFW300',
  NOW(),NOW(),13059419,false,'B');
  INSERT INTO public.convertidors(
    referencia, alimentacion, tension, corriente, potencia, modelo,
    "createdAt", "updatedAt", codigo, frenado_incluido, "tamaño"
  )
  VALUES
  ('CFW300 A 01P1 T4 NB20',
   'Trifásica','380-480 Vca','1.1A','0.5hp','CFW300',
    NOW(),NOW(),14146770,false,'A');
  
  INSERT INTO public.convertidors(
    referencia, alimentacion, tension, corriente, potencia, modelo,
    "createdAt", "updatedAt", codigo, frenado_incluido, "tamaño"
  )
  VALUES
  ('CFW300 A 02P6 T4 NB20',
   'Trifásica','380-480 Vca','2.6A','1hp','CFW300',
    NOW(),NOW(),14146822,false,'A');
  
  INSERT INTO public.convertidors(
    referencia, alimentacion, tension, corriente, potencia, modelo,
    "createdAt", "updatedAt", codigo, frenado_incluido, "tamaño"
  )
  VALUES
  ('CFW300 A 04P8 T4 NB20',
   'Trifásica','380-480 Vca','4.8A','2hp','CFW300',
    NOW(),NOW(),14146882,false,'A');
  
  INSERT INTO public.convertidors(
    referencia, alimentacion, tension, corriente, potencia, modelo,
    "createdAt", "updatedAt", codigo, frenado_incluido, "tamaño"
  )
  VALUES
  ('CFW300 B 06P5 T4 DB20',
   'Trifásica','380-480 Vca','6.5A','3hp','CFW300',
    NOW(),NOW(),14148361,true,'B');
  
  INSERT INTO public.convertidors(
    referencia, alimentacion, tension, corriente, potencia, modelo,
    "createdAt", "updatedAt", codigo, frenado_incluido, "tamaño"
  )
  VALUES
  ('CFW300 C 10P0 T4 DB20',
   'Trifásica','380-480 Vca','10A','5.5hp','CFW300',
    NOW(),NOW(),14148365,true,'C');
  
  INSERT INTO public.convertidors(
    referencia, alimentacion, tension, corriente, potencia, modelo,
    "createdAt", "updatedAt", codigo, frenado_incluido, "tamaño"
  )
  VALUES
  ('CFW300 C 12P0 T4 DB20',
   'Trifásica','380-480 Vca','12A','7.5hp','CFW300',
    NOW(),NOW(),14148366,true,'C');
  
  INSERT INTO public.convertidors(
    referencia, alimentacion, tension, corriente, potencia, modelo,
    "createdAt", "updatedAt", codigo, frenado_incluido, "tamaño"
  )
  VALUES
  ('CFW300 C 15P0 T4 DB20',
   'Trifásica','380-480 Vca','16A','10hp','CFW300',
    NOW(),NOW(),14148367,true,'C');
    INSERT INTO public.convertidors(
      referencia, alimentacion, tension, corriente, potencia, modelo,
      "createdAt", "updatedAt", codigo, frenado_incluido, "tamaño"
    )
    VALUES
    ('CFW500 A 02P6 S2 NB20 G2',
     'Monofásica','200-240 Vca','2.6A','0.5hp','CFW500',
      NOW(),NOW(),15571943,false,'A');
    
    INSERT INTO public.convertidors(
      referencia, alimentacion, tension, corriente, potencia, modelo,
      "createdAt", "updatedAt", codigo, frenado_incluido, "tamaño"
    )
    VALUES
    ('CFW500 A 04P3 S2 NB20 G2',
     'Monofásica','200-240 Vca','4.3A','1hp','CFW500',
      NOW(),NOW(),15571953,false,'A');
    
    INSERT INTO public.convertidors(
      referencia, alimentacion, tension, corriente, potencia, modelo,
      "createdAt", "updatedAt", codigo, frenado_incluido, "tamaño"
    )
    VALUES
    ('CFW500 A 07P0 S2 NB20 G2',
     'Monofásica','200-240 Vca','7A','2hp','CFW500',
      NOW(),NOW(),15572017,false,'A');
    
    INSERT INTO public.convertidors(
      referencia, alimentacion, tension, corriente, potencia, modelo,
      "createdAt", "updatedAt", codigo, frenado_incluido, "tamaño"
    )
    VALUES
    ('CFW500 B 10P0 B2 NB20 G2',
     'Monofásica','200-240 Vca','10A','3hp','CFW500',
      NOW(),NOW(),15572056,true,'B');
      INSERT INTO public.convertidors(
        referencia, alimentacion, tension, corriente, potencia, modelo,
        "createdAt", "updatedAt", codigo, frenado_incluido, "tamaño"
      )
      VALUES
      ('CFW500 A 02P6 T4 NB20 G2',
       'Trifásica','380-480 Vca','2.6A','1hp','CFW500',
        NOW(),NOW(),15573719,false,'A');
      
      INSERT INTO public.convertidors(
        referencia, alimentacion, tension, corriente, potencia, modelo,
        "createdAt", "updatedAt", codigo, frenado_incluido, "tamaño"
      )
      VALUES
      ('CFW500 B 06P5 T4 NB20 G2',
       'Trifásica','380-480 Vca','6.5A','3hp','CFW500',
        NOW(),NOW(),15577021,false,'B');
      
      INSERT INTO public.convertidors(
        referencia, alimentacion, tension, corriente, potencia, modelo,
        "createdAt", "updatedAt", codigo, frenado_incluido, "tamaño"
      )
      VALUES
      ('CFW500 B 06P5 T4 DB20 G2',
       'Trifásica','380-480 Vca','6.5A','3hp','CFW500',
        NOW(),NOW(),15575665,true,'B');
      
      INSERT INTO public.convertidors(
        referencia, alimentacion, tension, corriente, potencia, modelo,
        "createdAt", "updatedAt", codigo, frenado_incluido, "tamaño"
      )
      VALUES
      ('CFW500 C 10P0 T4 DB20 G2',
       'Trifásica','380-480 Vca','10A','5hp','CFW500',
        NOW(),NOW(),15575701,true,'C');
            