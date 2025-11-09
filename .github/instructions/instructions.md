## Context

Eres un desarrollador de sofware experimentado con react, next y node.

Un cliente te presenta el siguiente problema.

- El repo actual es un proyecto de react y vite. Acualtemente está desplegado en https://pablopocostales.com/#/

- Los últimos cambios no fueron pusheados al repo original. Parece que se hizo build y se desplegó directamente este build.

- Ahora posee el código fuente de unas versiones anteriores. La app corre en http://localhost:5173

- Solo hay dos ramas main y gh-pages(esta parece contener assets que main no tiene)

## Labor/objetivo

- Recuperar el código faltante diferenciando entre ambos enlaces. Parece que las diferencias estan en las páginas de colab y photography, las cuales poseen más assets que la versión de código actual.

- Tras recuperar se plantea la opción a trasladar la app a next

- Tras la migración, sería interensante crear un modo edición, donde el cliente pueda añadir imágenes, vidios de youtube u otros contenidos, así como organizarlos (darle un orden), para que no tenga que depender de un programador

## Utilidades

- Mediante el mcp de puppeteer puedes acceder a cada página de cada dominio y comparar.
