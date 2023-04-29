const environments = {};

environments.staging = {
    port: 3000,
    envName: 'staging',
    secretKey: 'djkdjskdjksdjksjdskjd',
    maxChecks: 5,
    twilio: {
        fromPhone: '+16205260235',
        accountSid: 'ACd2256a45b925f1cfd34bfee79d3c25bd',
        authToken: 'a41352d1e0e1d48149f20e8bb542b03b',
    },
};

environments.production = {
    port: 5000,
    envName: 'production',
    secretKey: 'djkdjskdjksdjksjdskjd',
    maxChecks: 5,
    twilio: {
        fromPhone: '+16205260235',
        accountSid: 'ACd2256a45b925f1cfd34bfee79d3c25bd',
        authToken: 'a41352d1e0e1d48149f20e8bb542b03b',
    },
};

const currentEnvironment =
    typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : 'staging';

const enivronmentToExport =
    typeof environments[currentEnvironment] === 'object'
        ? environments[currentEnvironment]
        : environments.staging;

module.exports = enivronmentToExport;
