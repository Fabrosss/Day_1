import React, {useState} from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native';

const TextScreen = () => {
    const [password, setPassword] = useState('');
    return (
    <View>
        <Text>Enter Password:</Text>
        <TextInput style = {styles.input}
        autoCapitalize = "none"
        autoCorrect = {false}
        value ={password}
        onChangeText ={(newText) => setPassword(newText)}
        />
        {password.length < 6 ? <Text> Password have to be longer than 5 char </Text> : null }
    </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
        fontSize: 30
    }
});

export default TextScreen