process.env.NODE_ENV = 'testing';

var jsdom = require('jsdom').jsdom;
var path = require('path');
require('babel-register')();

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

global.dojoConfig = { forceGfxRenderer: 'svg' };

var requirejs = require('requirejs');

requirejs.config({
    paths: {
        'esri': path.resolve('bower_components/arcgis-js-api'),
        'dojo': path.resolve('node_modules/dojo'),
        'dijit': path.resolve('bower_components/dijit'),
        'dgrid': path.resolve('bower_components/dgrid'),
        'dstore': path.resolve('bower_components/dstore'),
        'dojox': path.resolve('bower_components/dojox'),
        'app': path.resolve('dist')
    }
    //nodeRequire: require
});

if (typeof global.define !== 'function') {
    global.define = require('amdefine');
}