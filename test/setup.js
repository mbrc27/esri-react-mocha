//Setting enviroment to testing
process.env.NODE_ENV = 'testing';

var jsdom = require('jsdom').jsdom;
var path = require('path');

//There is a problem when Enzyme is loading lodash
// and babel-register is loading regenerate after loading dojo
//Temporaly solution is to load these modules as global before dojo
// _ = require('lodash');
// regenerate = require('regenerate');

//Definition of jsdom document
var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('<!doctype html><html><body></body></html>', { url: 'http://localhost' });
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
    if (typeof global[property] === 'undefined') {
        exposedProperties.push(property);
        global[property] = document.defaultView[property];
    }
});

navigator = {
    userAgent: 'node.js',
    appVersion: '00'
};

global.dojoConfig = {
    hasCache: {
        'host-node': true
    },
    //We need to force gfx renderer so that map can be loaded within jsdom
    forceGfxRenderer: 'svg',
    //async: true,
    //isDebug: true,
    packages: [
        {
            name: 'react',
            location: path.resolve('bower_components/react'),
            main: 'react'
        },
        {
            name: 'react-dom',
            location: path.resolve('bower_components/react'),
            main: 'react-dom'
        },
        {
            name: 'dojo',
            location: path.resolve('bower_components/dojo')
        },
        {
            name: 'dojox',
            location: path.resolve('bower_components/dojox')
        },
        {
            name: 'dijit',
            location: path.resolve('bower_components/dijit')
        },
        {
            name: 'esri',
            location: path.resolve('bower_components/arcgis-js-api')
        },
        {
            name: 'dgrid',
            location: path.resolve('bower_components/dgrid')
        },
        {
            name: 'dstore',
            location: path.resolve('bower_components/dstore')
        },
        {
            name: 'moment',
            location: path.resolve('bower_components/moment'),
            main: 'moment'
        },
        {
            name: 'app',
            location: path.resolve('dist')
        }
    ]
};

require(path.resolve('bower_components/dojo/dojo.js'));

// require('babel-register')({
//     only: /test/
//     //extensions: ['.jsx']
// });