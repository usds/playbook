## La guía de datos abiertos
Los datos abiertos del gobierno son un activo público usable y reutilizable por cualquier sector, que contribuyen a impulsar el crecimiento económico, fortalecer la competitividad y promover la innovación, incrementar la transparencia y rendición de cuentas, fomentar la participación ciudadana, así como detonar una mayor eficiencia gubernamental y mejora de los servicios públicos, en apoyo a los objetivos de desarrollo, buena gobernanza y generación de conocimiento.

[Ésta es una guía](http://mxabierto.github.io/playbook/) en constante evolución para abrir datos en México. Plantea principios básicos y tareas a realizar para guiar a las iniciativas de datos abiertos.

¡Cualquier sugerencia y comentario son bienvenidos!

## Sugerencias
Te invitamos a que nos retroalimentes sobre esta propuesta. Para comentarios utilizamos [GitHub Issues](https://github.com/mxabierto/playbook/issues), para propuestas y sugerencias envíanos un [pull request](https://help.github.com/articles/creating-a-pull-request "More Information on Submitting Pull Requests").

No se requiere software para sugerir cambios. Para proponer cambios desde tu navegador, [selecciona un paso en el directorio `_plays`](https://github.com/mxabierto/playbook/tree/gh-pages/_plays "Liga a los markdowns de los pasos"). Puedes utilizar el editor web de Github para editar archivos y enviar un "pull request" para sugerir cambios y abrir un canal de discusión. 

## Detalles técnicos

El sitio de la Guía de Datos Abiertos está basado en el [Playbook de Servicios Digitales de EEUU](https://github.com/WhiteHouse/playbook), el cual utiliza archivos [Markdown](https://help.github.com/articles/github-flavored-markdown "Link to More Information About Markdown") y [Jekyll](https://github.com/jekyll/jekyll "Link to More Information about Jekyll") para compilar y construir el sitio.

### Correr el sitio localmente

Para ejecutar el proyecto localmente se requiere Ruby y Bundler, te recomendamos seguir [las instrucciones para instalar Jekyll](https://help.github.com/articles/using-jekyll-with-pages#installing-jekyll "Installation instructions for Jekyll").

Siguiente, [copia el repositorio](http://help.github.com/fork-a-repo/ "Instructions for Forking Your Repository") y clónalo a tu computadora.

Dentro del directorio ejecuta en la terminal:

`$ bundle install`  
`$ rake`

Visita  `http://localhost:4000/` para ver el sitio en tu navegador.

### Para editar el estilo

El proyecto utiliza [Sass](http://sass-lang.com/ "Link to Learn More About Sass"). Para hacer cambios basta con editar `styles.css.scss` y compilar `styles.css` ejecutando: `$ sass --watch assets/sass/styles.css.scss:assets/css/styles.css`. O ejecutar `rake`.

## Licencia

Se respeta la licencia original del proyecto [Playbook de Servicios Digitales de EEUU](https://github.com/WhiteHouse/playbook), equivalente a [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
