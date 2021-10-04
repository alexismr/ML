

  ## Ambiente DEV  

   Ejecutar los siguiente comando en la raiz de cada proyecto 
  
  ```sh
       $ npm install 
   ```

   Configuracion proyecto  react
    Run  -> http://localhost:9000/
   ```sh
       $ npm run start 
   ```


   Configuraciones proyecto  nodejs -> http://localhost:5000/
     
   ```sh
       $ npm run build 
   ```
  ```sh
       $ npm run start 
   ```
 * NOTA: se ejecutan primero (build) esto debido que la script (start) ejecuta nodemon y esta 
          escuchando un index.js
   <img src="https://github.com/alexismr/ML/blob/main/doc/img/build1.gif" width="400" height="200" />
   <img src="https://github.com/alexismr/ML/blob/main/doc/img/build2.gif" width="400" height="200" />
   
  ## Documentación API con  swagger
  - Abrir el navegador en la siguiente ruta  http://localhost:5000/api-docs/swagger/
 
   ## Ejecución de test
 * Ejecutar pruebas   (npm run test)  
 * Configuración de ambientes con webpack  y typescript  
      
   <img src="https://github.com/alexismr/ML/blob/main/doc/img/test.gif" />
   <img src="https://github.com/alexismr/ML/blob/main/doc/img/webpackconfig.gif" width="400" height="200" />
  
  ## Evidencia de la prueba: Frontend
  
  * En base a los diseños dados, construir las siguientes tres vistas:
      * Caja de búsqueda
      * Resultados de la búsqueda
      * Detalle del producto
          
  * Las vistas son navegables de manera independiente y cuentan con su propia url:
      * Caja de Búsqueda: “/”
      * Resultados de la búsqueda:“/items?search=”
      * Detalle del producto: “/items/:id
     <img src="https://github.com/alexismr/ML/blob/main/doc/img/rutas.gif" width="900" height="400" />

 * En la vista de caja de búsqueda, debería poder ingresar el producto a buscar y al enviar el
    formulario navegar a la vista de Resultados de búsqueda, visualizando solo 4 productos. Luego,
    al hacer click sobre uno de ellos, debería navegar a la vista de Detalle de Producto.
    
   <img src="https://github.com/alexismr/ML/blob/main/doc/img/evidence1.gif" width="400" height="200" /> 
   <img src="https://github.com/alexismr/ML/blob/main/doc/img/evidence2.gif" width="400" height="200" />
