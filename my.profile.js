var profile = {

    basePath: "./",
    releaseDir: "./dist",
    mini: true,
    optimize: 'closure',
    layerOptimize: 'closure',
    cssOptimize: 'comments',
    stripConsole: 'all',
    selectorEngine: 'lite',

    packages:[
        {
            name: "dojo",
            location: "./bower_components/dojo"
        },
        {
            name: "my",
            location: "./js"
        }
    ],

    layers: {
        'dojo/dojo' : {
            customBase: true,
            boot: true,
            include: ['my/main']
        }
    },

    staticHasFeatures: {
        'dojo-trace-api': 0,
        'dojo-log-api': 0,
        'dojo-publish-privates': 0,
        'dojo-sync-loader': 0,
        'dojo-xhr-factory': 0,
        'dojo-test-sniff': 0
    }
};
