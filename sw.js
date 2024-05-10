// Para empezar a configurar el service Worker
// console.log("Registrado");
const CACHE_ELEMENTS = [
  // se declara con mayusculas por que es el nombre del cache que se usara
  // Ademas de colocar los corchetes, por que es un arreglo lo que se va a mandar
  "./", // El ./ es por que se esta cacheando toda la pagina de la aplicacion
  // Las rutas deben estar completas para evitar errores y que todo truene, jejeje
  "https://unpkg.com/react@18/umd/react.production.min.js",
  "https://unpkg.com/react-dom@18/umd/react-dom.production.min.js",
  "https://unpkg.com/@babel/standalone/babel.min.js",
  "./style.css",
  "./components/Contador.js",
  "./index.js", // dejo pendiente el ./register.js
];

const CACHE_NAME = "v3_cache_contador_react";

// primer evento del service worker

self.addEventListener("install", (e) => {
  // console.log(e);
  e.waitUntil(
    caches.open(CACHE_NAME).then((Cache) => {
      Cache.addAll(CACHE_ELEMENTS)
        .then(() => {
          self.skipWaiting();
        })
        .catch(console.log);
    })
  );
});

// vamos en video 9

self.addEventListener("activate", (e) => {
  const cacheWhitelist = [CACHE_NAME];
  e.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        //console.log(cacheNames);
        return Promise.all(
          cacheNames.map((cacheName) => {
            return (
              cacheWhitelist.indexOf(cacheName) === -1 &&
              caches.delete(cacheName)
            );
          })
        );
      })
      .then(() => {
        self.clients.claim();
      })
  );
});

// video 10

self.addEventListener("fetch", (e) => {
  // va a buscar nuevos elementos actualizados de cache
  // console.log(e.request);
  e.respondWith(
    // console.log(e.request);
    caches.match(e.request).then((res) => {
      if (res) {
        return res;
      }
      return fetch(e.request);
    })
  );
});

// video 11

// empezar a trabajar con el archivo de manifiesto de json
