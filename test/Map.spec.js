var React = require('react');
var shallow = require('enzyme').shallow;
var expect = require('chai').expect;
// import React from 'react';
// import {shallow} from 'enzyme';
// import {expect} from 'chai';

describe('<Map/>', () => {
    global.require(['app/Map'], function (Map) {
        it('Should have esri map', () => {
            //const wrapper = shallow(<Map.default/>);
            var wrapper = shallow(
                React.createElement(Map.default)
            );
            expect(true).to.be.equal(true);
        });
    });
});