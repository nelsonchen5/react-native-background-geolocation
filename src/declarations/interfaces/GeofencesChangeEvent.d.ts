/// <reference path="./Geofence.d.ts" />
///
declare module "react-native-background-geolocation" {
  /**
  * The event-object provided to [[BackgroundGeolocation.onGeofencesChange]].
  *
  * The [[GeofencesChangeEvent]] provides only the *changed* geofences, those which just activated or de-activated.
  *
  * @example
  * ```typescript
  * BackgroundGeolocation.onGeofencesChange(geofencesChangeEvent => {
  *   console.log('[geofenceschange] ', geofencesChangeEvent.on, geofencesChangeEvent.off);
  * });
  * ```
  */
  interface GeofencesChangeEvent {
    on: Array<Geofence>;
    off: Array<string>;
  }
}
