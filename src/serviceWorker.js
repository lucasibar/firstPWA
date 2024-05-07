/* eslint-disable no-restricted-globals */

// serviceWorker.js

const CACHE_NAME = 'my-react-app-cache'; // Nombre del caché
const urlsToCache = [
  '/', // Cachea la página principal
  '/index.html', // También puede cachear otros archivos estáticos como CSS, JS, etc.
];

self.addEventListener('install', event => {
  // Perform install steps
  console.log("hasta aca llegue sin problema")
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});


/* eslint-enable no-restricted-globals */








// const isLocalhost = Boolean(
//     window.location.hostname === 'localhost' ||
//     window.location.hostname === '[::1]' ||
//     window.location.hostname.match(
//         /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
//     )
// );

// export function register(config){
//     if(process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator){
//         const publicUrl= new URL(process.env.PUBLIC_URL, window.location.href);
//         if (publicUrl.origin !== window.location.origin){
//             return
//         }
        
//         window.addEventListener('load', ()=>{
//             const swUrl= `${process.env.PUBLIC_URL}/service-worker.js`;

//             if(isLocalhost){
//                 checkValidServiceWorker(swUrl, config);

//                 navigator.serviceWorker.ready.then(()=>{
//                     console.log('esta aplicacion tiene servidor primero en la cache por un service-worker una pagina que puedo consultar si rompe todo es http://bit.ly/CRA-PWA')
//                 })
//             }else{
//                 registerValidSW(swUrl, config)
//             }
//         })
    
//     }
// }