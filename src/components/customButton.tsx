import React from 'react';
import {View, Text, Dimensions, TouchableOpacity, Alert} from 'react-native';

type CustomBunttonProperties = {
  lable: string;
  onPress: (val: string) => void;
};

const CustomButton: React.FC<CustomBunttonProperties> = ({lable, onPress}) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(lable)}
      style={{
        height: 60,
        borderRadius: 10,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical:10,
        marginHorizontal:10,
      }}>
      <Text style={{color: 'white', fontWeight: 'bold'}}>{lable}</Text>
    </TouchableOpacity>
  );
};
export default CustomButton;
