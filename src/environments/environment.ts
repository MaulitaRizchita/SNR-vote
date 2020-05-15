// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

export const firebaseConfig = {
  apiKey: "AIzaSyCRjF96qP06OD8eonbxwbAH0pju6idZ-OM",
  authDomain: "snr-e-vote-polbat-6c33e.firebaseapp.com",
  databaseURL: "https://snr-e-vote-polbat-6c33e.firebaseio.com",
  projectId: "snr-e-vote-polbat-6c33e",
  storageBucket: "snr-e-vote-polbat-6c33e.appspot.com",
  messagingSenderId: "90846431094",
  appId: "1:90846431094:web:a2dccbbc31e0a1e3619c57",
  measurementId: "G-2CPKS3HBQ6"
};

export const snapshotToArray= snapshot => {
  let returnarr =[]
  snapshot.forEach(element => {
    let item = element.val();
    let key = element.key;
    returnarr.push(item);
  });
  return returnarr;
}

export default firebaseConfig
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
