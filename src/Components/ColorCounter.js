import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

const ColorCounter = ({color, onIncrease, onDecrease}) => {
    return (
    <View>
            <Text style ={styles.styleText} >{color}</Text>
            <Button
            onPress={() => onIncrease()} 
            title = {`Increased ${color}`}
            />
            <Button 
             onPress={() => onDecrease()} 
             title = {`Decreased ${color}`}/>
        </View>
    );
};

const styles= StyleSheet.create({
    styleText:{
        fontSize: 30,
        alignSelf: 'center'
    }
});

export default ColorCounter