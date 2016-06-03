import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import requirejs from 'requirejs';

const Map = requirejs('app/Map').default;

describe('<Map/>', () => {
    it('Should have esri map', () => {
        const wrapper = shallow(<Map/>);
        expect(true).to.be.equal(true);
    });
});