import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

type CustomInputProperties = {
  label: string;
  placeholder: string;
  onChange: (val: string) => void;
  value: string;
};

const CustomInput: React.FC<CustomInputProperties> = ({
  label,
  placeholder,
  onChange,
  value,
}) => {
  return (
    <View style={styles.container}>
      <Text style={{color: 'red', fontWeight: 'bold', marginTop:15}}>{label}</Text>
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChange}
        style={{
          borderWidth: 0.5,
          borderColor: '#D0D0D0',
          borderRadius: 5,
          padding:10,
          marginTop:5,
          fontFamily:'Cochin',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default CustomInput;
