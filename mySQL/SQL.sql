/* Comentario */
/* SQL Permite:
		(Manipulación de datos)
		DDL
		consultas
		modificaciones
			
		(Manipulación de sistema)
		DML
		modificar tablas
*/

/*
	RELACIONALES
	>
	<
	<>
	>=
	<=
*/

/* 
LÖGICOS
AND
OR 
NOT
*/

/*
FUNCIONES
CONT = Cuenta
AVG = Promedio
MAX = Máximo
MIN = Mínimo
*/

/* Crear una tabla */
CREATE TABLE users(
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	username VARCHAR(50) NOT NULL,
	PASSWORD VARCHAR(100) NOT NULL	
);

/* Renombrar un campo */
ALTER TABLE users
RENAME COLUMN PASSWORD TO PASSWORD;

/* Agregar un campo */
ALTER TABLE users
ADD COLUMN activo INT NOT NULL;

/* Eliminar un campo de una tabla */
ALTER TABLE users
DROP COLUMN activo;

/* Añadir un constraint sobre el campo username. UNIQUE */
ALTER TABLE users
ADD CONSTRAINT UNIQUE (username);

/* Modificar la tabla socios, agregando un campo users_id */
ALTER TABLE socios
ADD COLUMN users_id INT NOT NULL;

/* Agregar un FK en socio.users_id con la tabla users.id */
ALTER TABLE socios
ADD CONSTRAINT FK_socio_users
FOREIGN KEY (users_id)
REFERENCES users(id);

/* Eliminar FK */
ALTER TABLE socios
DROP FOREIGN KEY FK_socio_users;

/* Eliminar índice de FK */
ALTER TABLE socios
DROP INDEX FK_socio_users;

/* Crear una tabla, pero no dar PK al principio */
CREATE TABLE categoria (
	id INT NOT NULL, 
	descripcion VARCHAR(100) NOT NULL 
);

/* Crear PK despues de crear la tabla */
ALTER TABLE categoria
ADD PRIMARY KEY (id);

/* Modificar el campo id para que sea auto_increment */
ALTER TABLE categoria
MODIFY COLUMN id INT AUTO_INCREMENT NOT NULL;

/* Crear una CHECK sobre pedido.monto_total, para ser >= 0 */
ALTER TABLE pedido
ADD CHECK (monto_total >= 0);

/* Crear un campo adicional habilitado */
ALTER TABLE categoria
ADD COLUMN habilitado INT NOT NULL DEFAULT 1;

CREATE TABLE VENTAS (
	id INT PRIMARY KEY AUTO_INCREMENT,
	socios_id INT NOT NULL,
	fecha_venta DATE NOT NULL, /* Default */
	monto FLOAT NOT NULL
);

/* 
D.D.L
	SELECT
	INSERT
	UPDATE
	DELETE
	
	ORDER BY
	GROUP¨BY
	HAVING	
*/

/* Select * */
 SELECT * FROM socios;

/* Cargar un registro en la tabla ventas */
INSERT INTO ventas (socios_id, fecha_venta, monto) VALUES(1, CURDATE(), 1500);

/* Como veo los datos de la tabla ventas */
SELECT * FROM ventas;

/* Actualizar un dato de la tabla ventas */
UPDATE ventas 
SET monto=2500
WHERE id=1

/* Cargar un registro MÁS */
INSERT INTO ventas (socios_id, fecha_venta, monto) VALUES(2, CURDATE(), 5500);
INSERT INTO ventas (socios_id, fecha_venta, monto) VALUES(15, CURDATE(), 5500);

SELECT * FROM ventas;

/* Eliminar registro de ventas */
DELETE FROM ventas WHERE id=3

/* Creando una FK en ventas sobre el campo socios_id */
ALTER TABLE ventas
ADD CONSTRAINT FK_ventas_socios_id
FOREIGN KEY (socios_id)
REFERENCES vendedor(id);

SELECT * FROM users

/* Creamos vendedor */
CREATE TABLE vendedor (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nombre VARCHAR(100) NOT NULL,
	apellido VARCHAR(100) NOT NULL,
	documento VARCHAR(13) NOT NULL 
)

/* Agregar dos vendedores  */
INSERT INTO vendedor(nombre, apellido , documento) VALUES('JUAN', 'MARTINEZ', '123456789');

SELECT * FROM vendedor

/* Quiero ver las ventas de todos los vendedores */

SELECT * FROM ventas 
	INNER JOIN vendedor
		ON ventas.socios_id = vendedor.id 
		
/* ALIAS */
SELECT id, nombre FROM vendedor;

SELECT id AS CODIGO, nombre AS NAME FROM vendedor; /* Cambio el nombre de las columnas */

SELECT * FROM ventas a 
	INNER JOIN vendedor b 
		ON a.socios_id = b.id
		
/* Quiero el id de socio, el monto y el apellido */
SELECT a.socios_id, a.monto,
		b.apellido
FROM ventas a 
	INNER JOIN vendedor b
		ON a.socios_id = b.id 
		
INSERT INTO vendedor(nombre, apellido , documento) VALUES('NICOLÁS', 'DA SILVA', '123434589');
INSERT INTO vendedor(nombre, apellido , documento) VALUES('NATALIA', 'REACLT', '634567346');
INSERT INTO vendedor(nombre, apellido , documento) VALUES('SANTI', 'FARYNA', '87923843');

SELECT * FROM vendedor

SELECT * FROM ventas

/* Ver a los vendedores sin ventas */

SELECT a.socios_id, a.monto,
		b.apellido
FROM ventas a 
	RIGHT JOIN vendedor b
		ON a.socios_id = b.id 
		
/* Venta de mayor valor */
SELECT MAX(monto) FROM ventas;

/* FUNCIONES */
SELECT MIN(monto) FROM ventas;
SELECT AVG(monto) FROM ventas;
SELECT SUM(monto) FROM ventas;

/* Vendedores */
/* Seleccionar vendedor por su id */
SELECT * FROM vendedor WHERE id = 1;

/* Seleccionar un vendedor por la inicial de su nombre */
SELECT * FROM vendedor WHERE nombre LIKE 'C%';

/* Seleccionar los vendedores que contengan la letra 'O' */
SELECT * FROM vendedor WHERE nombre LIKE '%O%';

/* Seleccionar los vendedores que terminen con la letra 'S' */
SELECT * FROM vendedor WHERE nombre LIKE '%S';

/* Combinaciones */
/* Seleccionar los vendedores que su nombre contenga 'O' y su apellido termine en 'Z' */
SELECT * FROM vendedor WHERE nombre LIKE '%O%' AND apellido LIKE '%Z'; 

/* Seleccionar los vendedores que tengan un ID mayor que 2 */
SELECT * FROM vendedor WHERE id > 2; 

/* Combinación */
/* Seleccionar los vendedores que tengan un ID distinto de 2 y su nombre comience con 'S' */
SELECT * FROM vendedor 
	WHERE id <> 2
	AND nombre LIKE 'S%'

/* Seleccionar vendedores que tengan su ID entre 2 y 4 */
SELECT * FROM vendedor 
WHERE id > 2 AND id < 4;

/* IN(VAL1, VAL2, VAL N) */
SELECT * FROM vendedor
WHERE id IN(2,3,4); /* Rango */

/* BETWEEN VAL1 AND VAL2 */
SELECT * FROM vendedor
WHERE id BETWEEN 2 AND 4;

/* Eliminar un registro */
DELETE FROM vendedor
WHERE id = 2 /* No se puede eliminar por la FK, es decir, que está relacionado a otra table a través de la FK */

DELETE FROM vendedor
WHERE id = 4

/* CONTAR LAS VENTAS */
SELECT COUNT(id) FROM ventas;

/* ORDENAR */
SELECT * FROM ventas
ORDER BY id DESC;
	
/* Seleccionar todos los vendedores */
SELECT * FROM vendedor;

		