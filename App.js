import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const DisplayCounter = (props) => {
  return (
    <View>
      <Text>ທ້າວໄຊທິດດ ສູລິວົງ 2CW1</Text>
      <Text>{props.counter}</Text>
    </View>
  );
};

const CounterApp = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <DisplayCounter counter={counter} />
      <Button title="ກົດບວກ" onPress={incrementCounter} />
  
      <Button title="ກົດລົບ" onPress={decrementCounter} />
    </View>
  );
};

export default CounterApp;
