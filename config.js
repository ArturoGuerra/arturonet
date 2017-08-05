try {
    const config = module.exports = require('./config/config.json');
} catch (error) {
    const sample = require('./config/sample.json');
    const fs = require('fs');
    const prompt = require('prompt');
    var config = {};
    var keys = [];
    for (var key in sample) keys.push(key);
    prompt.start()
    prompt.get(keys, function(err, result) {
        for (var key in result) {
            config[key] = result[key];
        }
        fs.writeFileSync('./config/config.json', JSON.stringify(config), 'utf-8');
    });
    module.exports = config;
}
