# Práctica para curso avanzado de Angular

Para esta práctica se han cubierto los requisitos mínimos y la mayor parte del plus (quedando pendiente ser traducible)

## Requerimientos funcionales

Explorar la información abierta y disponible en el [API del Banco Mundial](https://datahelpdesk.worldbank.org/knowledgebase/articles/898581-api-basic-call-structures).

Se realizan todos los requisitos funcionales dentro de la aplicación, permitiendo una navegación entre continentes y países, mostrando información como la capital de cada país y su nivel económico.

Además, para poder realizar requisitos no funcionales, se ha añadido la capacidad de poder añadir un listado de países favoritos visitados.

## Requerimientos NO funcionales

## Mínimo

- Mono repositorio generado con las herramientas de [Nx.dev](https://nx.dev/angular)

La aplicación esta creada mediante las herramientas de Nx.dew

- AL menos una aplicación y una librería

Creada la aplicación "world-bank" y una librería de componentes compartidos - titulo principal y navbar.

- Testing unitario de al menos un componente y un servicio

Realizado un test de los componentes RegionsComponent y HomeComponent y del Servicio GetInfoService, comprobando que se crean correctamente.

- Testing _e2e_ de una página

Realizado un test completo con cypress, testando la existencia de un header común a la aplicación, un h2 y una tabla con los resultados de la API.

- Uso de la estrategia de detección de cambios **_OnPush_**.

Realizada la estrategia de cambios onPush a la hora de agregar países favoritos en la aplicación. Cada vez que se agrega un país favorito, el valor del número de favoritos totales (que aparece en el componente común "favorites-mark") se actualiza dinámicamente.

- Uso del patrón _Container Presenter_.

Toda la aplicación está basada en el patrón "container presenter". Las vistas muestran componentes comunes, tales como los headers, cards, p... creados en librerías externas o en carpetas de componentes denominadas "shared".

Estos componentes son: card-component, favorites-mark-component, navbar-component y title-component.

Las vistas que los renderizan son: home, regions, countries y favorites.

## Plus

- Almacén centralizado del estado mediante **_NgRx_**.

Se ha creado un estado común a toda la aplicación, el cual "guarda" un listado de países favoritos, que el usuario puede almacenar haciendo click.

Este listado de países favoritos lo mostramos en la vista favorites.

Para poder realizar esta funcionalidad, he creado una carpeta store con la funcionalidad de ngrx: actions, models, reducers, selectors, effects y su servicio "fachada".

- Características **_PWA_**

La aplicación está configurada como PWA, según la información proporcionada por el curso, pudiendo guardar / limpiar caché y actualizar a la última versión, entre otros.

- Traducible

## Extra

- Una landing page _SEO friendly_ generada con **_SSR_** que muestre la lista de continentes.

- Un _**WebComponent**_ con datos de un según su código. `<wbde-country id="ESP"></wbde-country>`

- Una aplicación web estándar (sin Angular) que use el anterior componente.

