import { setupConfiguration } from '@packages/common';
import { FCM, FcmOptions } from 'fcm-cloudflare-workers';

setupConfiguration();


// Init FCM with options (minimal example)
const fcmOptions = new FcmOptions({
    // Pass in your service account JSON private key file (https://console.firebase.google.com/u/0/project/_/settings/serviceaccounts/adminsdk)
    serviceAccount: JSON.parse(env.FIREBASE_SERVICE_ACCOUNT_JSON),
});

// Or, init FCM with access token caching using KV (optional but recommended for performance)
// const fcmOptions = new FcmOptions({
//     serviceAccount: JSON.parse(env.FIREBASE_SERVICE_ACCOUNT_JSON),
//     // Specify a KV namespace
//     kvStore: env.MY_KV_NAMESPACE,
//     // Specify a key to use for caching the access token
//     kvCacheKey: 'fcm_access_token',
// });

export const fcm = new FCM(fcmOptions);