var React = require('react');
var Text = require('react-native').Text;
var AppRegistry = require('react-native').AppRegistry;

const App = function () {
  return (
    <Text>Hello World</Text>
  );
};

AppRegistry.registerComponent('RandomNumber', function () { return App });