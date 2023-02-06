// Refer to the online docs for more details:
// https://nightwatchjs.org/gettingstarted/configuration/
//

//  _   _  _         _      _                     _          _
// | \ | |(_)       | |    | |                   | |        | |
// |  \| | _   __ _ | |__  | |_ __      __  __ _ | |_   ___ | |__
// | . ` || | / _` || '_ \ | __|\ \ /\ / / / _` || __| / __|| '_ \
// | |\  || || (_| || | | || |_  \ V  V / | (_| || |_ | (__ | | | |
// \_| \_/|_| \__, ||_| |_| \__|  \_/\_/   \__,_| \__| \___||_| |_|
//             __/ |
//            |___/

module.exports = {
  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.
  src_folders: ['test','nightwatch/examples'],

  // See https://nightwatchjs.org/guide/concepts/page-object-model.html
  page_objects_path: ['nightwatch/page-objects'],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-commands.html
  custom_commands_path: ['nightwatch/custom-commands'],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-assertions.html
  custom_assertions_path: ['nightwatch/custom-assertions'],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-plugins.html
  // plugins: [],
  
  // See https://nightwatchjs.org/guide/concepts/test-globals.html
  globals_path: '',

  webdriver: {},

  test_workers: {
    enabled: true
  },

  test_settings: {
    default: {
      disable_error_log: false,
      launch_url: 'http://localhost',

      screenshots: {
        enabled: false,
        path: 'screens',
        on_failure: true
      },

      desiredCapabilities: {
        browserName: 'safari'
      },
      
      webdriver: {
        start_process: true,
        server_path: ''
      },
      
    },
    
    safari: {
      desiredCapabilities: {
        browserName: 'safari',
        alwaysMatch: {
          acceptInsecureCerts: false
        }
      },
      webdriver: {
        start_process: true,
        server_path: ''
      }
    },
    
    'ios.real.safari': {
      desiredCapabilities: {
        browserName: 'safari',
        platformName: 'iOS',
        // add the device UDID to run tests on (necessary)
        // Run command: `xcrun simctl list devices`
        // 'safari:deviceUDID': '00008030-00024C2C3453402E',
      },
    
      webdriver: {
        start_process: true,
        server_path: '',
        cli_args: [
          // --verbose
        ]
      }
    },
    
    'ios.simulator.safari': {
      desiredCapabilities: {
        browserName: 'safari',
        platformName: 'iOS',
        'safari:useSimulator': true,
        // change the deviceName, platformVersion accordingly to run tests on 
        // Run command: `xcrun simctl list devices`
        // 'safari:platformVersion': '15.0',
        'safari:deviceName': 'iPhone 13'
      },
    
      webdriver: {
        start_process: true,
        server_path: '',
        host: '127.0.0.1',
        port: 7777,
        cli_args: [
          // very verbose geckodriver logs
          // '-vv'
        ]
      }
    },
    
  },
  
  usage_analytics: {
    enabled: true,
    log_path: './logs/analytics',
    client_id: 'a268a660-190f-48f9-95e7-a7c6cb9fd100'
  }
  
};
