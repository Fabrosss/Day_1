import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
//  console.log(props.navigation);
  return(
  <View>
    <Text style={styles.text}>Home</Text>
    <Button 
      title = "Go to Compnents Demo"
      onPress={() => navigation.navigate('Component')}
    />
    <Button
      title="Go to List Demo"
      onPress= {() => navigation.navigate('List')}
      />
    <Button
      title="Go to Image Demo"
      onPress= {() => navigation.navigate('Image')}
      />
      <Button
      title="Go to Counter"
      onPress= {() => navigation.navigate('Counter')}
      />
       <Button
      title="Go to Color Screen"
      onPress= {() => navigation.navigate('Color')}
      />
       <Button
      title="Go to Color Square"
      onPress= {() => navigation.navigate('Square')}
      />
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
