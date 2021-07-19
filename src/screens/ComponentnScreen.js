import React from "react";
import { Text, StyleSheet, View } from "react-native";
const ComponentnScreen = () => {
    const greeting = <Text style = {styles.subHeaderStyle}>Hello to you!</Text>;
    return (<View>
        <Text style={styles.text}> 22 </Text>
        {greeting}
        </View>
    );
  };
  
  const styles = StyleSheet.create({
    text: {
      fontSize: 45
      
    },
    subHeaderStyle:{
        fontSize: 22
    }
  });
  
  export default ComponentnScreen;
  