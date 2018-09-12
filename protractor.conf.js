const
    // glob = require('glob'),
    // protractor = require.resolve('protractor'),
    // node_modules = protractor.substring(0, protractor.lastIndexOf('node_modules') + 'node_modules'.length),
    // seleniumJar = glob.sync(`${node_modules}/protractor/**/selenium-server-standalone-*.jar`).pop(),
    crew = require('serenity-js/lib/stage_crew');

exports.config = {

    // baseUrl: '',

    //seleniumServerJar: seleniumJar,

    // https://github.com/angular/protractor/blob/master/docs/timeouts.md
    allScriptsTimeout: 700000,
    //disableChecks: true,

    // https://github.com/protractor-cucumber-framework/protractor-cucumber-framework#uncaught-exceptions
    ignoreUncaughtExceptions: true,

    framework: 'custom',
    frameworkPath: require.resolve('serenity-js'),

    serenity: {
        dialect: 'cucumber',
        stageCueTimeout: 30 * 1000,
        crew: [
            crew.serenityBDDReporter(),
            crew.consoleReporter(),
            crew.Photographer.who(_ => _
                .takesPhotosOf(_.Tasks_and_Interactions)
                .takesPhotosWhen(_.Activity_Finishes)
            )
        ]
    },

    specs: ['features/*.feature'],
    cucumberOpts: {
        require: ['steps/*.ts'], //load step definitions
        format: 'pretty',               //enable console output
        compiler: 'ts:ts-node/register', //interpret step defintions as TypeScript
    },

    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: [
                '--disable-infobars'
            ]
        },
        // execute tests using 2 browsers running in parallel
        //shardTestFiles: true,
        //maxInstances: 2
    },

    restartBrowserBetweenTests: true
}