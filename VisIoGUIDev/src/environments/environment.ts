// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url_interface : 'http://192.168.20.19:5000/',
  url_spark : 'http://192.168.20.19:5001/',
  url_sampling : 'http://192.168.20.19:5002/',
  url_add : 'http://192.168.20.19:5007/',
  url_dft : 'http://192.168.20.19:5004/',
  url_pca : 'http://192.168.20.19:5005/',
  url_umap : 'http://192.168.20.19:5003/',
  url_sma : 'http://192.168.20.19:5006/',

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
