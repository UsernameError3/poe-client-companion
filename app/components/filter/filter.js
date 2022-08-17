const loadFilterData = require('./utils/loadFilterData.js');
const loadFilterProfile = require('./utils/loadFilterProfile.js');
const genFilterProfile = require('./utils/generateFilterProfile.js');
const updateFilterProfile = require('./utils/updateFilterProfile.js');
const exportFilterProfile = require('./utils/exportFilterProfile.js');

const profileCache = {};

const saveProfile = async function(profileData) {
    try {
        exportFilterProfile.exportProfile(profileData);
    } catch (error) {
        console.log('An Profile Saving Error Occurred: ', error);
    }
}

const updateProfile = async function(filterProfile, filterData) {
    try {
        profileCache.profile = await updateFilterProfile.overwriteProfile(filterProfile, filterData);
    } catch (error) {
        console.log('An Profile Generation Error Occurred: ', error);
    }
    // Validate Cache
    if (profileCache.profile) {
        return true;
    } else {
        throw 'profileCache.Profile is False or Empty.';
    }
}

const genProfile = async function(filterProfile, filterData) {
    try {
        profileCache.profile = await genFilterProfile.generateProfile(filterProfile, filterData);
    } catch (error) {
        console.log('An Profile Generation Error Occurred: ', error);
    }
    // Validate Cache
    if (profileCache.profile) {
        return true;
    } else {
        throw 'profileCache.Profile is False or Empty.';
    }
}

const genStyles = async function() {
    try {
        const styles = [
            {
                styleName: 'T1',
                SetTextColor: {
                    styleProperty: 'SetTextColor',
                    styleValue: '255 0 255 255'
                },
                SetBorderColor: {
                    styleProperty: 'SetBorderColor',
                    styleValue: '255 0 255 255'
                },
                SetBackgroundColor: {
                    styleProperty: 'SetBackgroundColor',
                    styleValue: '0 0 0 255'
                },
                SetFontSize: {
                    styleProperty: 'SetFontSize',
                    styleValue: '45'
                },
                PlayAlertSound: {
                    styleProperty: 'PlayAlertSound',
                    styleValue: '21 300'
                },
                PlayEffect: {
                    styleProperty: 'PlayEffect',
                    styleValue: 'Pink'
                },
                MinimapIcon: {
                    styleProperty: 'MinimapIcon',
                    styleValue: '0 Pink Circle'
                }
            },
            {
                styleName: 'T2',
                SetTextColor: {
                    styleProperty: 'SetTextColor',
                    styleValue: '255 0 0 255'
                },
                SetBorderColor: {
                    styleProperty: 'SetBorderColor',
                    styleValue: '255 0 0 255'
                },
                SetBackgroundColor: {
                    styleProperty: 'SetBackgroundColor',
                    styleValue: '0 0 0 255'
                },
                SetFontSize: {
                    styleProperty: 'SetFontSize',
                    styleValue: '35'
                },
                PlayAlertSound: {
                    styleProperty: 'PlayAlertSound',
                    styleValue: '10 300'
                },
                PlayEffect: {
                    styleProperty: 'PlayEffect',
                    styleValue: 'Red'
                },
                MinimapIcon: {
                    styleProperty: 'MinimapIcon',
                    styleValue: '0 Red Circle'
                }
            },
            {
                styleName: 'T3',
                SetTextColor: {
                    styleProperty: 'SetTextColor',
                    styleValue: '141 0 255 255'
                },
                SetBorderColor: {
                    styleProperty: 'SetBorderColor',
                    styleValue: '141 0 255 255'
                },
                SetBackgroundColor: {
                    styleProperty: 'SetBackgroundColor',
                    styleValue: '0 0 0 255'
                },
                SetFontSize: {
                    styleProperty: 'SetFontSize',
                    styleValue: '30'
                },
                PlayEffect: {
                    styleProperty: 'PlayEffect',
                    styleValue: 'Purple'
                },
                MinimapIcon: {
                    styleProperty: 'MinimapIcon',
                    styleValue: '1 Purple Circle'
                }
            },
            {
                styleName: 'T4',
                SetTextColor: {
                    styleProperty: 'SetTextColor',
                    styleValue: '0 200 255 255'
                },
                SetBorderColor: {
                    styleProperty: 'SetBorderColor',
                    styleValue: '0 200 255 255'
                },
                SetBackgroundColor: {
                    styleProperty: 'SetBackgroundColor',
                    styleValue: '0 0 0 255'
                },
                SetFontSize: {
                    styleProperty: 'SetFontSize',
                    styleValue: '25'
                },
                MinimapIcon: {
                    styleProperty: 'MinimapIcon',
                    styleValue: '2 Cyan Circle'
                }
            },
            {
                styleName: 'T5',
                SetTextColor: {
                    styleProperty: 'SetTextColor',
                    styleValue: '0 255 0 255'
                },
                SetBorderColor: {
                    styleProperty: 'SetBorderColor',
                    styleValue: '0 255 0 255'
                },
                SetBackgroundColor: {
                    styleProperty: 'SetBackgroundColor',
                    styleValue: '0 0 0 255'
                },
                SetFontSize: {
                    styleProperty: 'SetFontSize',
                    styleValue: '20'
                },
                MinimapIcon: {
                    styleProperty: 'MinimapIcon',
                    styleValue: '2 Green Circle'
                }
            },
            {
                styleName: 'T6',
                SetTextColor: {
                    styleProperty: 'SetTextColor',
                    styleValue: '0 255 0 255'
                },
                SetBorderColor: {
                    styleProperty: 'SetBorderColor',
                    styleValue: '0 255 0 255'
                },
                SetBackgroundColor: {
                    styleProperty: 'SetBackgroundColor',
                    styleValue: '0 0 0 255'
                },
                SetFontSize: {
                    styleProperty: 'SetFontSize',
                    styleValue: '20'
                }
            },
            {
                styleName: 'T7',
                SetTextColor: {
                    styleProperty: 'SetTextColor',
                    styleValue: ''
                },
                SetBorderColor: {
                    styleProperty: 'SetBorderColor',
                    styleValue: ''
                },
                SetBackgroundColor: {
                    styleProperty: 'SetBackgroundColor',
                    styleValue: ''
                },
                SetFontSize: {
                    styleProperty: 'SetFontSize',
                    styleValue: ''
                }
            },
            {
                styleName: 'Uniques',
                SetTextColor: {
                    styleProperty: 'SetTextColor',
                    styleValue: ''
                },
                SetBorderColor: {
                    styleProperty: 'SetBorderColor',
                    styleValue: ''
                },
                SetBackgroundColor: {
                    styleProperty: 'SetBackgroundColor',
                    styleValue: ''
                },
                SetFontSize: {
                    styleProperty: 'SetFontSize',
                    styleValue: ''
                },
                PlayAlertSound: {
                    styleProperty: 'PlayAlertSound',
                    styleValue: ''
                },
                PlayEffect: {
                    styleProperty: 'PlayEffect',
                    styleValue: ''
                },
                MinimapIcon: {
                    styleProperty: 'MinimapIcon',
                    styleValue: ''
                }
            },
            {
                styleName: 'Rares',
                SetTextColor: {
                    styleProperty: 'SetTextColor',
                    styleValue: ''
                },
                SetBorderColor: {
                    styleProperty: 'SetBorderColor',
                    styleValue: ''
                },
                SetBackgroundColor: {
                    styleProperty: 'SetBackgroundColor',
                    styleValue: ''
                },
                SetFontSize: {
                    styleProperty: 'SetFontSize',
                    styleValue: ''
                },
                PlayAlertSound: {
                    styleProperty: 'PlayAlertSound',
                    styleValue: ''
                },
                PlayEffect: {
                    styleProperty: 'PlayEffect',
                    styleValue: ''
                },
                MinimapIcon: {
                    styleProperty: 'MinimapIcon',
                    styleValue: ''
                }
            },
            {
                styleName: 'Magic',
                SetTextColor: {
                    styleProperty: 'SetTextColor',
                    styleValue: ''
                },
                SetBorderColor: {
                    styleProperty: 'SetBorderColor',
                    styleValue: ''
                },
                SetBackgroundColor: {
                    styleProperty: 'SetBackgroundColor',
                    styleValue: ''
                },
                SetFontSize: {
                    styleProperty: 'SetFontSize',
                    styleValue: ''
                },
                PlayAlertSound: {
                    styleProperty: 'PlayAlertSound',
                    styleValue: ''
                },
                PlayEffect: {
                    styleProperty: 'PlayEffect',
                    styleValue: ''
                },
                MinimapIcon: {
                    styleProperty: 'MinimapIcon',
                    styleValue: ''
                }
            },
            {
                styleName: 'Normal',
                SetTextColor: {
                    styleProperty: 'SetTextColor',
                    styleValue: ''
                },
                SetBorderColor: {
                    styleProperty: 'SetBorderColor',
                    styleValue: ''
                },
                SetBackgroundColor: {
                    styleProperty: 'SetBackgroundColor',
                    styleValue: ''
                },
                SetFontSize: {
                    styleProperty: 'SetFontSize',
                    styleValue: ''
                },
                PlayAlertSound: {
                    styleProperty: 'PlayAlertSound',
                    styleValue: ''
                },
                PlayEffect: {
                    styleProperty: 'PlayEffect',
                    styleValue: ''
                },
                MinimapIcon: {
                    styleProperty: 'MinimapIcon',
                    styleValue: ''
                }
            },
        ];

        return styles;
    } catch (error) {
        console.log('An Profile Style Generation Error Occurred: ', error);
    }
}

const init = async function() {
    try {
        const filterProfile = await loadFilterProfile.load('profile.json');
        const filterData = await loadFilterData.load();
        const filterStyles = await genStyles(filterData);

        if (filterProfile) {
            console.log('Loading Existing Profile...');
            await updateProfile(filterProfile, filterData, filterStyles);
            await saveProfile(profileCache.profile);  
        } else {
            console.log('Generating New Profile...');
            await genProfile(filterData, filterStyles);
            await saveProfile(profileCache.profile);  
        }

    } catch (error) {
        console.log('An Initilization Error Occurred: ', error);
    }
}

init();
