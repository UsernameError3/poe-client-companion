const fs = require('fs');
const path = require('path');

let rawData = fs.readFileSync('schemaOld/profileDataSchemaOld.json');
let schemaData = JSON.parse(rawData);

const itemEquipment = schemaData.items.equipment;

const equipment = [
    "weapons",
    "armour",
    "jewellery",
    "flasks",
    "jewels"
];

const classWeapons = [
    "One Hand Axes",
    "One Hand Maces",
    "One Hand Swords",
    "Thrusting One Hand Swords",
    "Claws",
    "Daggers",
    "Rune Daggers",
    "Sceptres",
    "Wands",
    "Bows",
    "Two Hand Axes",
    "Two Hand Maces",
    "Two Hand Swords",
    "Staves",
    "Warstaves"
];

const classArmour = [
    "Helmets",
    "Body Armours",
    "Gloves",
    "Boots",
    "Shields"
];

const classAccessories = [
    "Quivers",
    "Rings",
    "Belts"
];

const classAmulets = [
    "Amulets",
];

const classFlasks = [
    "Utility Flask",
    "Life Flask",
    "Mana Flask",
    "Hybrid Flask"
];

const classJewels = [
    "Jewel"
];

// const exportArray = [];

const alphaRegex = /[^a-zA-Z0-9]/g;

function classSortMods(filename, path, data) {
    console.log('Parsing Mods for: ', path, filename);
    try {
        const itemClassModList = [];
        const itemMods = data.mods;

        const dirname = `schemaOld/exports/classes/${path}`;
        try {
            fs.mkdirSync(dirname);
        } catch (error) {
            // console.log("Path already exists.");
        };

        for (let i = 0; i < itemMods.length; i++) {
            const itemModObj = {
                itemModHeader: itemMods[i].itemModHeader,
                itemModClass: "",
                itemModInfluence: null,
                itemModTiers: [],
                itemModTierList: []
            }
    
            const itemModTierList = itemMods[i].itemModTiers;

            for (let j = 0; j < itemModTierList.length; j++) {
                itemModObj.itemModTiers.push(itemModTierList[j].itemModName);
                itemModObj.itemModTierList.push(itemModTierList[j]);
            }
    
            itemClassModList.push(itemModObj);
        }
    
        let exportData = JSON.stringify(itemClassModList, null, 4);
        fs.writeFileSync(`schemaOld/exports/classes/${path}/${filename}.json`, exportData);   
    } catch (error) {
        console.log("Iteration or Export Failed...", error);
    }
}

function classSortArmourMods(filename, path, data) {
    console.log('Parsing Mods for: ', path, filename);
    try {
        
        const itemDefences = data.defences;

        for (let d = 0; d < itemDefences.length; d++) {
            const pathDefenceType = itemDefences[d].defenceType.replace(alphaRegex, "");
            const dirname = `schemaOld/exports/classes/${path}/${pathDefenceType.toLowerCase()}`;
            try {
                fs.mkdirSync(dirname);
            } catch (error) {
                // console.log("Path already exists.");
            };

            const itemClassModList = [];
            const itemMods = itemDefences[d].mods;

            for (let i = 0; i < itemMods.length; i++) {
                const itemModObj = {
                    itemModHeader: itemMods[i].itemModHeader,
                    itemModClass: "",
                    itemModInfluence: null,
                    itemModTiers: [],
                    itemModTierList: []
                };
        
                const itemModTierList = itemMods[i].itemModTiers;

                for (let j = 0; j < itemModTierList.length; j++) {
                    itemModObj.itemModTiers.push(itemModTierList[j].itemModName);
                    itemModObj.itemModTierList.push(itemModTierList[j]);
                };
        
                itemClassModList.push(itemModObj);
            };

            let exportData = JSON.stringify(itemClassModList, null, 4);
            fs.writeFileSync(`${dirname}/${filename}.json`, exportData);              

        };
    } catch (error) {
        console.log("Iteration or Export Failed...", error);
    }
}

function classSortAmuletMods(filename, path, data) {
    console.log('Parsing Mods for: ', path, filename);
    try {
        
        const itemDefences = data.amuletTypes;

        for (let d = 0; d < itemDefences.length; d++) {
            const pathDefenceType = itemDefences[d].amuletType.replace(alphaRegex, "");
            const dirname = `schemaOld/exports/classes/${path}/${pathDefenceType.toLowerCase()}`;
            try {
                fs.mkdirSync(dirname);
            } catch (error) {
                // console.log("Path already exists.");
            };

            const itemClassModList = [];
            const itemMods = itemDefences[d].mods;

            for (let i = 0; i < itemMods.length; i++) {
                const itemModObj = {
                    itemModHeader: itemMods[i].itemModHeader,
                    itemModClass: "",
                    itemModInfluence: null,
                    itemModTiers: [],
                    itemModTierList: []
                };
        
                const itemModTierList = itemMods[i].itemModTiers;

                for (let j = 0; j < itemModTierList.length; j++) {
                    itemModObj.itemModTiers.push(itemModTierList[j].itemModName);
                    itemModObj.itemModTierList.push(itemModTierList[j]);
                };
        
                itemClassModList.push(itemModObj);
            };

            let exportData = JSON.stringify(itemClassModList, null, 4);
            fs.writeFileSync(`${dirname}/${filename}.json`, exportData);              

        };
    } catch (error) {
        console.log("Iteration or Export Failed...", error);
    }
}

function classSortJewelMods(filename, path, data) {
    console.log('Parsing Mods for: ', path, filename);
    try {
        
        const itemDefences = data.jewelTypes;

        for (let d = 0; d < itemDefences.length; d++) {
            const pathDefenceType = itemDefences[d].jewelType.replace(alphaRegex, "");
            const dirname = `schemaOld/exports/classes/${path}/${pathDefenceType.toLowerCase()}`;
            try {
                fs.mkdirSync(dirname);
            } catch (error) {
                // console.log("Path already exists.");
            };

            const itemClassModList = [];
            const itemMods = itemDefences[d].mods;

            for (let i = 0; i < itemMods.length; i++) {
                const itemModObj = {
                    itemModHeader: itemMods[i].itemModHeader,
                    itemModClass: "",
                    itemModInfluence: null,
                    itemModTiers: [],
                    itemModTierList: []
                };
        
                const itemModTierList = itemMods[i].itemModTiers;

                for (let j = 0; j < itemModTierList.length; j++) {
                    itemModObj.itemModTiers.push(itemModTierList[j].itemModName);
                    itemModObj.itemModTierList.push(itemModTierList[j]);
                };
        
                itemClassModList.push(itemModObj);
            };

            let exportData = JSON.stringify(itemClassModList, null, 4);
            fs.writeFileSync(`${dirname}/${filename}.json`, exportData);              

        };
    } catch (error) {
        console.log("Iteration or Export Failed...", error);
    }
}

for (let i = 0; i < equipment.length; i++) {
    try {
        const itemTypeList = itemEquipment[i];
        const itemEquipmentIndex = itemTypeList[equipment[i]];

        if (itemEquipmentIndex) {
            for (let j = 0; j < itemEquipmentIndex.length; j++) {
                const itemClassMods = itemEquipmentIndex[j];
                const filename = itemClassMods.classType.replace(alphaRegex, "_");
                
                if (classWeapons.includes(itemClassMods.classType)) {
                    classSortMods(filename, 'weapons', itemClassMods);
                } else if (classArmour.includes(itemClassMods.classType)) {
                    classSortArmourMods(filename, 'gear', itemClassMods);
                } else if (classAccessories.includes(itemClassMods.classType)) {
                    classSortMods(filename, 'accessories', itemClassMods);
                } else if (classAmulets.includes(itemClassMods.classType)) {
                    classSortAmuletMods(filename, 'amulets', itemClassMods);
                } else if (classFlasks.includes(itemClassMods.classType)) {
                    classSortMods(filename, 'flasks', itemClassMods);
                } else if (classJewels.includes(itemClassMods.classType)) {
                    classSortJewelMods(filename, 'jewels', itemClassMods);
                } else {
                    console.log('Unexpected Data Exported...');
                    fs.writeFileSync(`schemaOld/exports/classes/${filename}.json`, data);
                }
            }; 
        }
    } catch (error) {
        console.log('Error While Iterating...', error);
    };
};



// let data = JSON.stringify(itemClasses, null, 4);
// fs.writeFileSync('schemaOld/exports/classes/data_export.json', data);
