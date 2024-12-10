import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDsuQRhAnegHLD0bbbKpZQJyfM3OUJa1w0",
  authDomain: "projeto-12cfb.firebaseapp.com",
  databaseURL: "https://projeto-12cfb-default-rtdb.firebaseio.com",
  projectId: "projeto-12cfb",
  storageBucket: "projeto-12cfb.appspot.com",
  messagingSenderId: "533825973727",
  appId: "1:533825973727:web:5c2a10a56665d45927e86a",
  measurementId: "G-7T8GZEDJL1"
};

initializeApp(firebaseConfig);

export const environment = {
  production: false,
  firebaseConfig: firebaseConfig,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
