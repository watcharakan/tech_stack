// Import Librarites for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = (props) =>
{
    const { textStyle, viewStyle } = styles;

return (
<View style={viewStyle}>
        <Text style={textStyle}> {props.headerText} </Text>
</View>
        );
};
const styles  = {
 viewStyle: {
   backgroundColor: '#F5F5F5',
   justifyContent: 'center' ,
   alignItems:  'center' ,
   height: 60,
   paddingTop: 15,
   shadowColor: '#000000',
   shadowOffset: {
       width: 0,
       height: 2 
   },
   shadowOpacity: 0.2,
   elevation: 2,
   position: 'relative' 
 },
 textStyle:{
    fontSize: 20
 }

};
 
// Make the component avaliable to other parts of the app
export {Header};