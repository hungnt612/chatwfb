import React, {useState} from 'react';
import {
  AsyncStorage,
  FlatList,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {Controller, useForm, SubmitHandler} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import CustomInput from '../../components/customInput';
import CustomButton from '../../components/customButton';
import firebase from 'firebase';

const schema = yup.object().shape({
  message: yup.string().required(),
});

interface FormInput {
  message: string;
}

const SendMess = (data: any) => {
  console.log(data);
};

const submit = (data: FormInput) => {
  SendMess(data);
};

const ChatRoom: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormInput>({
    resolver: yupResolver(schema),
  });
  const [state, setState] = useState('');

  // @ts-ignore
  return (
    <View
      style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-end'}}>
      <ImageBackground
        imageStyle={{opacity: 0.4}}
        source={require('../../image/img.png')}
        style={{
          flex: 9 / 10,
          backgroundColor: '#A5A5A5',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}>
      </ImageBackground>
      <View style={{flex: 0.8 / 10}}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#FFF',
            width: '100%',
            height: '100%',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginLeft: 2,
          }}>
          <View style={{flex: 9 / 10}}>
            <Controller
              control={control}
              render={({field: {onChange, value}}) => (
                <CustomInput
                  placeholder={'Type....'}
                  onChange={onChange}
                  value={value}
                  label=""
                />
              )}
              rules={{required: true}}
              name={'message'}
            />
          </View>
          <View style={{flex: 1 / 10}}>
            <TouchableOpacity onPress={handleSubmit(submit)}>
              <Text
                style={{
                  color: '#0099ff',
                  fontSize: 14,
                  marginRight: 15,
                  marginTop: 35,
                }}>
                Gửi
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
  },
  txtInputContainer: {
    marginVertical: 10,
    marginHorizontal: 15,
  },
  loginWith: {},
});

export default ChatRoom;
