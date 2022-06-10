CREATE TABLE Empleados(
	DNI VARCHAR(13) NOT NULL,
	Nombre VARCHAR(50) NOT NULL,
	Apellido VARCHAR(50) NOT NULL,
	Numero_departamento INT NOT NULL,
	Nombre_departamento VARCHAR(100) NOT NULL,
	Presupuesto INT NOT NULL
)

ALTER TABLE Empleados
ADD CONSTRAINT UNIQUE(DNI)

INSERT INTO empleados (DNI, Nombre, Apellido, Numero_departamento, Nombre_departamento, Presupuesto) VALUES ('31096678', 'Juan', 'Lopez', 14, 'Informática', 80000);
INSERT INTO empleados (DNI, Nombre, Apellido, Numero_departamento, Nombre_departamento, Presupuesto) VALUES ('31096675', 'Martin', 'Zarabia', 77, 'Investigación', 40000);
INSERT INTO empleados (DNI, Nombre, Apellido, Numero_departamento, Nombre_departamento, Presupuesto) VALUES ('34269854', 'Jose', 'Velez', 77, 'Investigación', 40000);
INSERT INTO empleados (DNI, Nombre, Apellido, Numero_departamento, Nombre_departamento, Presupuesto) VALUES ('41369852', 'Paula', 'Madariaga', 77, 'Investigación', 40000);
INSERT INTO empleados (DNI, Nombre, Apellido, Numero_departamento, Nombre_departamento, Presupuesto) VALUES ('33698521', 'Pedro', 'Perez', 14, 'Informática', 80000);
INSERT INTO empleados (DNI, Nombre, Apellido, Numero_departamento, Nombre_departamento, Presupuesto) VALUES ('32698547', 'Mariana', 'Lopez', 15, 'Gestión', 95000);
INSERT INTO empleados (DNI, Nombre, Apellido, Numero_departamento, Nombre_departamento, Presupuesto) VALUES ('42369854', 'Abril', 'Sanchez', 37, 'Desarrollo', 65000);
INSERT INTO empleados (DNI, Nombre, Apellido, Numero_departamento, Nombre_departamento, Presupuesto) VALUES ('36125896', 'Marti', 'Julia', 14, 'Informática', 80000);
INSERT INTO empleados (DNI, Nombre, Apellido, Numero_departamento, Nombre_departamento, Presupuesto) VALUES ('36985471', 'Omar', 'Diaz', 15, 'Gestión', 95000);
INSERT INTO empleados (DNI, Nombre, Apellido, Numero_departamento, Nombre_departamento, Presupuesto) VALUES ('32145698', 'Guadalupe', 'Perez', 77, 'Investigación', 40000);
INSERT INTO empleados (DNI, Nombre, Apellido, Numero_departamento, Nombre_departamento, Presupuesto) VALUES ('32369854', 'Bernardo', 'Pantera', 37, 'Desarrollo', 65000);
INSERT INTO empleados (DNI, Nombre, Apellido, Numero_departamento, Nombre_departamento, Presupuesto) VALUES ('36125965', 'Lucia', 'Pesaro', 14, 'Informática', 80000);
INSERT INTO empleados (DNI, Nombre, Apellido, Numero_departamento, Nombre_departamento, Presupuesto) VALUES ('31236985', 'Maria', 'Diamante', 14, 'Informática', 80000);
INSERT INTO empleados (DNI, Nombre, Apellido, Numero_departamento, Nombre_departamento, Presupuesto) VALUES ('32698547', 'Carmen', 'Barbieri', 16, 'Comunicación', 75000);

/* Obtener apellidos */
SELECT Apellido FROM empleados;

/* Obtener apellidos sin repeticiones */
?

/* Obtener empleados con apellido Lopez */
SELECT * FROM empleados WHERE Apellido = 'Lopez';

/* Obtener empleados con apellido Lopez y Perez */
SELECT * FROM empleados WHERE Apellido = 'Lopez' OR Apellido = 'Perez';

/* Obtener empleados con departamento 14 */
SELECT * FROM empleados WHERE Numero_departamento = '14';

/* Obtener empleados con departamento 37 y 77 */
SELECT * FROM empleados WHERE Numero_departamento = '37' OR Numero_departamento = '77';

/* Obtener empleados con apellido que empiecen con P */
SELECT * FROM empleados WHERE Apellido LIKE'P%';

/* Obtener el presupuesto total de todos los departamentos */
SELECT SUM(Presupuesto) FROM empleados;

/*  Obtener un listado completo de empleados, incluyendo por cada empleado los datos del empleado 
y de su departamento */
SELECT * FROM empleados;

/*  Obtener un listado completo de empleados, incluyendo el nombre y apellido del empleado junto 
al nombre y presupuesto de su departamento */
SELECT Nombre, Apellido, Nombre_departamento, Presupuesto FROM empleados;

/*  Obtener los nombres y apellidos de los empleados que trabajen en departamentos cuyo 
presupuesto sea mayor de 60000 */
SELECT Nombre, Apellido FROM empleados WHERE Presupuesto > 60000;

/*  Añadir un nuevo departamento: Calidad con un presupuesto de 40000 y código 11, añadir un 
empleado vinculado al departamento recién creado: Esther Vazquez, DNI 89267109 */
INSERT INTO empleados (DNI, Nombre, Apellido, Numero_departamento, Nombre_departamento, Presupuesto) VALUES ('89267109', 'Esther', 'Vazquez', 11, 'Calidad', 40000);

/* Despedir a los empleados del departamento de informática (código 14) */
DELETE * FROM empleados WHERE Numero_departamento = '14';

/*  Despedir a los empleados que trabajen en departamentos con un presupuesto superior a 90000 */
DELETE * FROM empleados WHERE Presupuesto > 90000;

/*  Aplicar un recorte presupuestario del 10% a todos los departamentos */
?

/*  Reasignar a los empleados del departamento de investigación (código 77) al departamento de 
informática (código 14) */
?

SELECT * FROM Empleados