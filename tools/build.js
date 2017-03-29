({
    appDir: '../app',
    mainConfigFile: '../app/require.config.js',
    dir: '../build',
    optimize: 'uglify',
    baseUrl: 'resouce/lib',
    paths: {
        common: '../common-script',
        templates:'../../templates',
        data:'../../data',
        component:'../../component'
    },
    modules: [
        {
            name:"../../require.config",
            include: [

                'domReady',
                'doT.min',
                'json',
                'test',
                'text',

                'common/baseClass',
                'common/test',

            ]
            // ,
            // exclude: ['../../../require.config']
        },


    ]
})
