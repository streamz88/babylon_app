import angular from 'angular';

import mocks from 'angular-mocks';

let context = require.context('./client/app', true, /\.spec\.js/);

//requires all the spec files in the app dirs
context.keys().forEach(context);
