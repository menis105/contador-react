// Para progressive web apps, primero debemos saber si esta el serviceWorker

// 1er forma de saber, es mas comun esta primera
// if ("serviceWorker" in navigator) {
//   console.log("si existe");
// }

// 2a forma de saber
if (navigator.serviceWorker) {
  // console.log("Si existe");
  navigator.serviceWorker.register("./sw.js");
}
