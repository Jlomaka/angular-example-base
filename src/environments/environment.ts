// production: flag if this production build
// identityServerUrl: identity server url
// identityRedirectUrl: redirect link when identity success action
// identityClientId: client identify name from identity server
// identityShowWarning: show error from identity server
// apiUrl: your api url, if same leave as is

export const environment = {
  production: false,
  identityServerUrl: 'http://example.com',
  identityRedirectUrl: 'http://example.com/',
  identityClientId: 'example-com',
  identityShowWarning: true,

  apiUrl: ''
};
