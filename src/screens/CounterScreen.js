import React, {useReducer} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const reducer = (state, action) => {
    switch(action.type){
        case 'Increase':
            return {...state, count: state.count + action.payload};
        case 'Decrease':
            return {...state, count: state.count - action.payload};
        default:
        return state; 
    }

};

const CounterScreen = () =>{
 //  const [counter, setCounter] = useState(0);

    const[state, dispatch] = useReducer(reducer, {count: 0})
   // const {count} = state;
    return (
        <View>
            <Button 
            title = "Increase" 
            onPress = {() => {dispatch({type:'Increase', payload: 1});}}/>
            <Button 
            title = "Decrease" 
            onPress = {() => {dispatch({type:'Decrease', payload: 1});}}/>
            <Text style ={{alignSelf: 'center'}}>Counter Count: {state.count} </Text>
        </View>
    )


};

const styles = StyleSheet.create({});

export default CounterScreen;