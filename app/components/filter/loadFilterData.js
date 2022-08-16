const fs = require('fs');
const path = require('path');

const filterDataCache = {};

const loadSchemaData = async function(filepath, filename) {
    try {
        // Load Data
        console.log(`Loading: ${filepath}${filename}...`);
        filterDataCache.schema = JSON.parse(fs.readFileSync(`${filepath}${filename}`));

        // Validate Cache
        if (filterDataCache.schema) {
            // console.log(`${filepath}${filename} Loaded Successfully!`);
            return true;
        } else {
            throw 'FilterDataCache.Schema is False or Empty.';
        }
    } catch (error) {
        console.log('Loading Filter Schema Failed: ', error);
    }
}

const loadProfileData = async function(filepath, filename) {
    try {
        // Load Data
        console.log(`Loading: ${filepath}${filename}...`);
        filterDataCache.profile = JSON.parse(fs.readFileSync(`${filepath}${filename}`));

        // Validate Cache
        if (filterDataCache.profile) {
            // console.log(`${filepath}${filename} Loaded Successfully!`);
            return true;
        } else {
            throw 'FilterDataCache.Profile is False or Empty.';
        }
    } catch (error) {
        console.log('Loading Filter Profile Failed: ', error);
    }
}

const loadSchemaItemData = async function(filepath, schemaData) {
    try {
        // Load Data
        console.log(`Loading: ${filepath}items...`);
        filterDataCache.equipment = JSON.parse(fs.readFileSync(`${filepath}${schemaData.ruleItems.equipment.filename}`));
        filterDataCache.mapping = JSON.parse(fs.readFileSync(`${filepath}${schemaData.ruleItems.mapping.filename}`));
        filterDataCache.currency = JSON.parse(fs.readFileSync(`${filepath}${schemaData.ruleItems.currency.filename}`));
        filterDataCache.cards = JSON.parse(fs.readFileSync(`${filepath}${schemaData.ruleItems.cards.filename}`));
        filterDataCache.league = JSON.parse(fs.readFileSync(`${filepath}${schemaData.ruleItems.league.filename}`));
        filterDataCache.misc = JSON.parse(fs.readFileSync(`${filepath}${schemaData.ruleItems.misc.filename}`));

        // Validate Cache
        if (filterDataCache.equipment && filterDataCache.mapping && filterDataCache.currency && filterDataCache.cards && filterDataCache.league && filterDataCache.misc) {
            // console.log(`${filepath}items Loaded Successfully!`);
            return true;
        } else if (!filterDataCache.equipment) {
            throw 'FilterDataCache.equipment is False or Empty.';
        } else if (!filterDataCache.mapping) {
            throw 'FilterDataCache.mapping is False or Empty.';
        } else if (!filterDataCache.currency) {
            throw 'FilterDataCache.currency is False or Empty.';
        } else if (!filterDataCache.cards) {
            throw 'FilterDataCache.cards is False or Empty.';
        } else if (!filterDataCache.league) {
            throw 'FilterDataCache.league is False or Empty.';
        } else if (!filterDataCache.misc) {
            throw 'FilterDataCache.misc is False or Empty.';
        } else {
            throw 'Unexpected Result While Loading Filter Item Data.';
        }
    } catch (error) {
        console.log('Loading Filter Item Data Failed: ', error);
    }
}

const load = async function() {
    try {
        await loadProfileData('data/filter/profile/', 'profile.json');
        await loadSchemaData('data/filter/', 'filterSchema.json');
        await loadSchemaItemData('data/filter/schema/', filterDataCache.schema);
        return filterDataCache;
    } catch (error) {
        console.log('An Loading Error Occurred: ', error);
        return error;
    }
}

module.exports = {
    load: load
};
