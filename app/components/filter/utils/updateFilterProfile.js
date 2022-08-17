const fs = require('fs');
const path = require('path');

const profileTemplate = {}

const mapProfile = async function(filterProfile, filterData) {
    try {
        profileTemplate.profileName = filterProfile.profileName;
        profileTemplate.profileVersion = filterProfile.profileVersion;
        profileTemplate.profileLeague = filterProfile.profileLeague;
        profileTemplate.profileStrictness = filterProfile.profileStrictness;
        profileTemplate.profileStyles = filterProfile.profileStyles;
        profileTemplate.profileEquipmentPreferences = filterProfile.profileEquipmentPreferences;
        profileTemplate.profileMappingPreferences = filterProfile.profileMappingPreferences;
        profileTemplate.profileCurrencyPreferences = filterProfile.profileCurrencyPreferences;
        profileTemplate.profileCardPreferences = filterProfile.profileCardPreferences;
        profileTemplate.profileLeaguePreferences = filterProfile.profileLeaguePreferences;
        profileTemplate.profileMiscPreferences = filterProfile.profileMiscPreferences;
        return true;
    } catch (error) {
        console.log('An Profile Mapping Error Occurred: ', error);
    }
}

const overwriteProfile = async function(filterProfile, filterData, filterStyles) {
    try {
        await mapProfile(filterProfile, filterData);
        return profileTemplate;
    } catch (error) {
        console.log('An Profile Update Error Occurred: ', error);
    }
}

module.exports = {
    overwriteProfile: overwriteProfile
};