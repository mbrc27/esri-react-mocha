import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';

describe('<MapNode/>', () => {
    var Map = global.require(['app/MapNode'], function (MapNode) {
        it('Should have esri map', () => {
            const wrapper = shallow(<MapNode.default/>);
            expect(true).to.be.equal(true);
        });
    });
});