const fs = require('fs');
const path = require('path');

const generateEquipment = async function(preferenceData) {
    try {
        return [];
    } catch (error) {
        
    }
}

const generateMapping = async function(preferenceData) {
    try {
        return [];
    } catch (error) {
        
    }
}

const generateCurrency = async function(preferenceData) {
    try {
        return [];
    } catch (error) {
        
    }
}

const generateCards = async function(preferenceData) {
    try {
        return [];
    } catch (error) {
        
    }
}

const generateLeague = async function(preferenceData) {
    try {
        return [];
    } catch (error) {
        
    }
}

const generateMisc = async function(preferenceData) {
    try {
        return [];
    } catch (error) {
        
    }
}

const mapProfile = async function(filterData) {
    try {
        const profileTemplate = {
            profileName: "testing",
            profileVersion: "1",
            profileLeague: "Kalandra",
            profileStrictness: "Strict",
            profileStyles: [],
            profileEquipmentPreferences: await generateEquipment(filterData.data),
            profileMappingPreferences: await generateMapping(filterData.data),
            profileCurrencyPreferences: await generateCurrency(filterData.data),
            profileCardPreferences: await generateCards(filterData.data),
            profileLeaguePreferences: await generateLeague(filterData.data),
            profileMiscPreferences: await generateMisc(filterData.data)
        }

        return profileTemplate;
    } catch (error) {
        console.log('An Profile Mapping Error Occurred: ', error);
    }
}

const generateProfile = async function(filterData, filterStyles) {
    try {
        const newTemplate = await mapProfile(filterData);
        return newTemplate;
    } catch (error) {
        console.log('An Profile Generation Error Occurred: ', error);
    }
}

module.exports = {
    generateProfile: generateProfile
};