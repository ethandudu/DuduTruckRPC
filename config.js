// VIRTUAL TRUCKER RICH PRESENCE 2.52

const packageInfo = require('./package.json');

module.exports = {
    applications: {
        ets2: '432559364772200479',
        ats: '454028920107565107',
    },
    version: `Virtual Trucker Rich Presence ${packageInfo.version}`,
    kmToMilesConversion: 0.62,
    mpCheckerIntervalMilliseconds: 3 * 60 * 1000,
    kphString: 'km/h',
    mphString: 'mph',
    kmString: 'km',
    milesString: 'miles',
    constants: {
        km: 'km',
        miles: 'm',
        ets2: 'ets2',
        ats: 'ats',
        brandPrefix: 'brand_',
        brandGenericKey: 'brand_generic',
        ets2LargeImagePrefix: 'ets2rpc_',
        atsLargeImagePrefix: 'atsrpc_',
        largeImageKeys: {
            idle: 'idle_3',
            day: 'day_3',
            night: 'night_3',
        },
        currencies: {
            euros: '€',
            dollars: '$'
        },
        speedMultiplierValue: 3.6
    },
    supportedBrands: [
        'daf',
        'freightliner',
        'international',
        'iveco',
        'kamaz',
        'kenworth',
        'mack',
        'man',
        'mercedes',
        'peterbilt',
        'renault',
        'scania',
        'skoda',
        'volvo'
    ],
    latestReleaseAPIUrl: 'https://api.github.com/repos/VirtualTruckerRPC/Virtual-Trucker-Rich-Presence/releases/latest',
    latestRelesePage: 'https://github.com/VirtualTruckerRPC/Virtual-Trucker-Rich-Presence/releases/latest'
}