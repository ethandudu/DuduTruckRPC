// VIRTUAL TRUCKER RICH PRESENCE

const packageInfo = require('./package.json');

module.exports = {
    applications: {
        ets2: '851934093247643708',
        ats: '851948844555698226',
    },
    version: `DuduTruckRPC ${packageInfo.version}`,
    kmToMilesConversion: 0.62,
    mpCheckerIntervalMilliseconds: 5 * 60 * 1000,
    locationCheckerIntervalMilliseconds: 2.5 * 60 * 1000,
    kmString: 'KM',
    milesString: 'Mi',
    kphString: 'km/h',
    mphString: 'mph',
    constants: {
        km: 'km',
        miles: 'm',
        ets2: 'ets2',
        ats: 'ats',
        brandPrefix: 'brand_',
        brandGenericKey: 'brand_generic',
        modelPrefix: 'model_',
        modelGenericKey: 'model_generic',
        ets2LargeImagePrefix: 'model_',
        atsLargeImagePrefix: 'atsrpc_',
        promodsLargeImagePrefix: 'promods_',
        largeImageKeys: {
            idle: 'idle',
            active: 'active',
        },
        speedMultiplierValue: 3.6
    },
    supportedBrands: [
        'daf',
        'freightliner',
        'international',
        'intnational',
        'iveco',
        //'kamaz',
        'kenworth',
        'mack',
        'man',
        'mercedes',
        'peterbilt',
        'renault',
        'scania',
        //'skoda',
        'volvo'//,
        //'tesla'
    ],
    supportedModels: [
        //ETS2

        //DAF
        'xf',
        'xf105',
        '2021', //XG

        //Iveco
        'stralis',
        
        //MAN
        'tgx',
        'tgx_euro_6',

        //Mercedes
        'actros',
        'new_actros',

        //Scania
        'r',
        'r_2009',
        's',
        'streamline',

        //Volvo
        'fh',
        'fh_classic',

        //Renault
        't',
        'premium',
        'magnum',

    ],

    latestReleaseAPIUrl: 'https://api.github.com/repos/ethandudu/DuduTruckRPC/releases/latest',
    latestReleasePage: 'https://github.com/ethandudu/DuduTruckRPC/releases/latest'
}