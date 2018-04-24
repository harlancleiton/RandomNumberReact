import React from 'react';
import { Text, View, Button, AppRegistry } from 'react-native';

const generateRandomNumber = () => {
  let randomNumber = Math.random();
  randomNumber = Math.floor(randomNumber * 100);
  alert(randomNumber);
};

const App = function () {
  return (
    <View>
      <Text>Gerador de números randômicos.</Text>
      <Button
        title="Gerar número aleatório."
        onPress={generateRandomNumber}
      />
    </View>
  );
};

AppRegistry.registerComponent('RandomNumber', () => App);