const fs = require('fs');
const path = require('path');
const manifestFile = path.resolve(__dirname, '../../public/assets/manifest.json');
const manifestPath = path.resolve(__dirname, '../../public/assets');
const manifestJSON = JSON.parse(fs.readFileSync(manifestFile));

module.exports.asset = (asset) => {
    return manifestPath + "/" + manifestJSON[asset].substring(2);
};