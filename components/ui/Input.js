import React from 'react';
import { Text, TextInput, View } from 'react-native';

const Input = ({ label, keyboardType, secure, onUpdateValue, value }) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        style={styles.input}
        autoCapitalize='none'
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        value={value}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVerical: 8,
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    backgroundColor: Colors.primary100, //커스텀 Color 임포트
    borderRadius: 4,
    fontSize: 16,
  },
});
