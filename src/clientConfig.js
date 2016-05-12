'use strict';

let clientConfig = {
    constants: {
      ANALYTICS: {
        name: 'tracker',
        tracker: 'UA-77127830-1',
        trackEvent: true
      },
      LOGGING: {
        //https://docs.angularjs.org/api/ng/service/$log
        levels: {
          debug: process.env.MM_CORE_ANGULAR_DEBUG || 'false',
          info: process.env.MM_CORE_ANGULAR_INFO || 'true',
          warn: process.env.MM_CORE_ANGULAR_WARN || 'true',
          error: process.env.MM_CORE_ANGULAR_ERROR || 'true'
        }
      },
    },
    values: {
      PAGE: {
        title: 'MODERN-MEAN'
      },
      NAVIGATION: {
        left: {
          heading: 'Left Navigation',
          backdrop: true,
          locked: {
            always: false,
            media: 'gt-sm'
          }
        },
        right: {
          locked: {
            always: false
          }
        }
      }
    }
  };

export { clientConfig };
