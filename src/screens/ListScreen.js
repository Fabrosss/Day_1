import React from 'react';
import { ViewBase, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () =>{
    const friends = [
        { name: 'Friend #1', age: 'Age 20'},
        { name: 'Friend #2', age: 'Age 45' },
        { name: 'Friend #3', age: 'Age 32' },
        { name: 'Friend #4', age: 'Age 43' },
        { name: 'Friend #5', age: 'Age 55' },
        { name: 'Friend #6', age: 'Age 66' },
        { name: 'Friend #7', age: 'Age 33' },
        { name: 'Friend #8', age: 'Age 44' }
    ];

    return (
    <FlatList 
    vertical
    showsVerticalScrollIndicator={false}
    keyExtractor={(friend) => friend.name}
    data ={friends} 
    renderItem = {({item}) => {
        return <Text style={styles.textStyle}>
            {item.name} {item.age} 
            </Text>
    }}
    
    />
    );

};

const styles = StyleSheet.create({
    textStyle:{
        marginVertical: 50
    }
});

export default ListScreen;