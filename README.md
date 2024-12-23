<<<<<<< HEAD
# global-assist-test
Esto es un test para una entrevista tecnica.
=======
# Explicación del Código de la Aplicación React

## 1. Importaciones y Estado Inicial

La aplicación importa useState de React para gestionar el estado de los filtros y la paginación. Además, se importa un archivo JSON (data.json) que contiene los datos que se van a mostrar.

### Estado de la aplicación:

filters: Mantiene los valores actuales de los filtros de búsqueda (nombre, apellido, email, género, dirección IP y país).
currentPage: Indica la página actual de la tabla para la paginación.
rowsPerPage: Define el número de filas que se mostrarán por página (10 en este caso).


## 2. Filtrado de Datos
La función filteredData filtra los datos basándose en los valores de los filtros. Utiliza Object.keys(filters) para iterar sobre los filtros, y para cada filtro, verifica si el valor de la propiedad coincide con los datos.

El resultado de la filtración es luego ordenado, priorizando las coincidencias exactas (es decir, si el valor de un filtro coincide exactamente con un valor de la propiedad).
## 3. Paginación
La paginación se maneja mediante las variables startIndex y endIndex, que se calculan según la página actual. La función paginatedData obtiene solo los elementos que pertenecen a la página actual.

## 4. Manejo de Filtros
Los filtros se actualizan mediante la función handleFilterChange, que actualiza el estado de los filtros. Además, restablece la página actual a la página 1 cuando se aplica un filtro nuevo.

## 5. Renderizado de la Tabla
La aplicación muestra una tabla con los datos filtrados y paginados. Los usuarios pueden filtrar las columnas usando campos de texto. Los filtros se aplican en tiempo real a medida que el usuario escribe en cada campo.


# Despliegue (Deploy)

La aplicacion esta desplegada en Vercel. Aun asi, si desea desplegarla por su cuenta, aqui estan los pasos a seguir

## 1. Preparar la Aplicación React
Antes de desplegar la aplicación en Vercel, asegúrate de que tu proyecto de React esté listo para la producción.

### Subir el código a un repositorio: Asegúrate de subir tu proyecto a un repositorio en GitHub, GitLab, o Bitbucket. Esto es necesario para conectarlo a Vercel.

## 2. Desplegar la Aplicación en Vercel

Pasos para desplegar en Vercel:
1- Iniciar sesión en Vercel: Ve a Vercel e inicia sesión con tu cuenta de GitHub, GitLab o Bitbucket.

2- Crear un nuevo proyecto: En el panel de control de Vercel, haz clic en "New Project".

3- Conectar el repositorio: Selecciona el repositorio que contiene tu aplicación React.

4- Configurar el proyecto: Vercel detectará automáticamente que se trata de una aplicación React y configurará el comando de construcción como npm run build.

5- Desplegar la aplicación: Haz clic en "Deploy" y espera a que el proceso termine. Al finalizar, recibirás una URL donde podrás ver tu aplicación en línea.

