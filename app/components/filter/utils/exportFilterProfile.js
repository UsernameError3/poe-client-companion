const fs = require('fs');
const path = require('path');

const exportFilter = async function (exportPath, exportFilename, exportData) {
    try {
        let exportJSON = JSON.stringify(exportData, null, 4);
        fs.writeFileSync(`${exportPath}${exportFilename}.json`, exportJSON);  
    } catch (error) {
        console.log('An File Write Error Occurred: ', error);
    }
}

const exportProfile = async function(data) {
    try {
        await exportFilter('data/filter/profile/', 'profile', data);
    } catch (error) {
        console.log('An Generation Error Occurred: ', error);
    }
}

module.exports = {
    exportProfile: exportProfile
};