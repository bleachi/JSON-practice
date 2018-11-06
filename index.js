var _ = require('lodash');
const loadJsonFile = require('load-json-file');


loadJsonFile('data.json').then(json => {
    console.log(json);
});