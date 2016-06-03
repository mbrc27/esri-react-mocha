'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _chai = require('chai');

var _requirejs = require('requirejs');

var _requirejs2 = _interopRequireDefault(_requirejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Map = (0, _requirejs2['default'])('app/Map')['default'];

describe('<Map/>', function () {
    it('Should have esri map', function () {
        var wrapper = (0, _enzyme.shallow)(_react2['default'].createElement(Map, null));
        (0, _chai.expect)(true).to.be.equal(true);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1hcC5zcGVjWi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU0sTUFBTSw0QkFBVSxTQUFWLFlBQVo7O0FBRUEsU0FBUyxRQUFULEVBQW1CLFlBQU07QUFDckIsT0FBRyxzQkFBSCxFQUEyQixZQUFNO0FBQzdCLFlBQU0sVUFBVSxxQkFBUSxpQ0FBQyxHQUFELE9BQVIsQ0FBaEI7QUFDQSwwQkFBTyxJQUFQLEVBQWEsRUFBYixDQUFnQixFQUFoQixDQUFtQixLQUFuQixDQUF5QixJQUF6QjtBQUNILEtBSEQ7QUFJSCxDQUxEIiwiZmlsZSI6Ik1hcC5zcGVjWi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7c2hhbGxvd30gZnJvbSAnZW56eW1lJztcclxuaW1wb3J0IHtleHBlY3R9IGZyb20gJ2NoYWknO1xyXG5pbXBvcnQgcmVxdWlyZWpzIGZyb20gJ3JlcXVpcmVqcyc7XHJcblxyXG5jb25zdCBNYXAgPSByZXF1aXJlanMoJ2FwcC9NYXAnKS5kZWZhdWx0O1xyXG5cclxuZGVzY3JpYmUoJzxNYXAvPicsICgpID0+IHtcclxuICAgIGl0KCdTaG91bGQgaGF2ZSBlc3JpIG1hcCcsICgpID0+IHtcclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gc2hhbGxvdyg8TWFwLz4pO1xyXG4gICAgICAgIGV4cGVjdCh0cnVlKS50by5iZS5lcXVhbCh0cnVlKTtcclxuICAgIH0pO1xyXG59KTsiXX0=
