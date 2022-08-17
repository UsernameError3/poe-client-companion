const fs = require('fs');
const path = require('path');

const loadProfileData = async function(filepath, filename) {
    try {
        // Load Data
        console.log(`Loading: ${filepath}${filename}...`);
        return fs.readFileSync(`${filepath}${filename}`).toString();
    } catch (error) {
        console.log('Loading Filter Profile Failed: ', error);
    }
}

const formatProfileData = async function(data) {
    try {
        const profileJSON = JSON.parse(data);
        if (profileJSON) {
            return profileJSON;
        } else {
            return;
        }
    } catch (error) {
        console.log('Validating Filter Profile Failed: ', error);
    }
}

const load = async function(filename) {
    try {
        const profileData = await loadProfileData('data/filter/profile/', filename);
        if (profileData === '' || profileData === '{}') {
            return;
        } else {
            const profileJSON = await formatProfileData(profileData);
            return profileJSON;
        }
    } catch (error) {
        console.log('An Loading Error Occurred: ', error);
        return error;
    }
}

module.exports = {
    load: load
};
