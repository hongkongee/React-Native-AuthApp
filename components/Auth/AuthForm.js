import React, { useState } from 'react';
import { View } from 'react-native';
import Input from '../ui/Input';

const AuthForm = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('');

  const updateInputValueHandler = (inputType, enteredValue) => {
    console.log('inputType: ', inputType);
    console.log('enteredValue: ', enteredValue);
    switch (inputType) {
      case 'email':
        setEnteredEmail(enteredValue);
        break;
      case 'name':
        setEnteredName(enteredValue);
        break;
      case 'password':
        setEnteredPassword(enteredValue);
        break;
      case 'confirmPassword':
        setEnteredConfirmPassword(enteredValue);
        break;

      default:
        break;
    }
  };

  const submitHandler = () => {
    console.log('버튼 클릭됨! submit!');
  };

  return (
    <View>
      <View>
        <Input
          label=''
          keyBoardType='email-address'
          //   bind()는 표준 javaScript 함수로, 나중에 실행할 함수를 미리 조정할 수 있게 합니다.
          //   bind에 제공되는 첫번째 인수는 곧 실행할 함수의 this 키워드로 설정됩니다.
          //   두번째 인수는 지정한 함수에 전달할 값을 세팅하면 됩니다.
          onUpdateValue={updateInputValueHandler.bind(this, 'email')}
        />
        <Input
          label='이름'
          onUpdateValue={updateInputValueHandler.bind(this, 'name')}
        />
        <Input
          label='비밀번호'
          secure
          onUpdateValue={updateInputValueHandler.bind(this, 'password')}
        />
        <Input
          label='비밀번호 확인'
          secure
          onUpdateValue={updateInputValueHandler.bind(this, 'confirmPassword')}
        />
        <View>
          <Button onPress={submitHandler}>회원가입</Button>
        </View>
      </View>
    </View>
  );
};

export default AuthForm;
