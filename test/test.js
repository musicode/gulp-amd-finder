
var amdDeploy = require('../index');

amdDeploy({
    path: '/Users/zhujl/github/www-fe/src/pay/pay.js',
    callback: function (code) {
        //console.log(code);
    },
    config: {
        baseUrl: '/Users/zhujl/github/www-fe/src',
        paths: {
            cobble: '../dep/cobble/0.3.19/src/',
            ab: './common'
        },
        combine: {
            exclude: [
                'cobble',
                'cobble/**/*',
                'echarts',
                'echarts/**/*',
                'moment',
                'underscore',
                'imageCrop',
                'audioPlayer',
                'TextClipboard'
            ],
            modules: {
                'ab/service': 1,
                'pay/course': 1
            }
        },
        replace: function (requireId, resourcePath) {
            return requireId;
        },
        packages: [
            {
                "name": "cobble",
                "location": "../dep/cobble/0.3.19/src/",
                "main": "main"
            },
            {
                "name": "moment",
                "location": "../dep/moment/2.7.0/src",
                "main": "moment"
            },
            {
                "name": "imageCrop",
                "location": "../dep/imageCrop/0.0.1/src",
                "main": "imageCrop"
            },
            {
                "name": "underscore",
                "location": "../dep/underscore/1.6.0/src",
                "main": "underscore"
            },
            {
                "name": "audioPlayer",
                "location": "../dep/audioPlayer/0.0.1/src",
                "main": "audioPlayer"
            },
            {
                "name": "TextClipboard",
                "location": "../dep/TextClipboard/0.0.2/src",
                "main": "TextClipboard"
            }
        ]
    }
});