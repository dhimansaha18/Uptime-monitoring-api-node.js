const environments = {};

environments.staging = {
    port: 3000,
    envName: 'staging',
    secretKey: 'djkdjskdjksdjksjdskjd',
};

environments.production = {
    port: 5000,
    envName: 'production',
    secretKey: 'djkdjskdjksdjksjdskjd',
};

const currentEnvironment =
    typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : 'staging';

const enivronmentToExport =
    typeof environments[currentEnvironment] === 'object'
        ? environments[currentEnvironment]
        : environments.staging;

module.exports = enivronmentToExport;
