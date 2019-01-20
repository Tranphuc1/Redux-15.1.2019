import React from 'react';
import { TextInput, View } from 'react-native';

/**
 * to be wrapped with redux-form Field component
 */
export default function MyTextInput(props) {
  const { input } = props;

  return (
    <View>
      <TextInput
        onChangeText={input.onChange}
        // onBlur={input.onBlur}
        // onFocus={input.onFocus}
        value={input.value}
        />
    </View>
  );
}