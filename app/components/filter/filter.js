const loadFilterData = require('./loadFilterData.js');

const init = async function() {
    try {
        const filterData = await loadFilterData.load();
        
    } catch (error) {
        console.log('An Initilization Error Occurred: ', error);
    }
}

init();
