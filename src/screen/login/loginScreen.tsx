import React, { useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
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
import firebase from "firebase";
import { firebaseConfig } from "../../config/configFB";


const schema = yup.object().shape({
  userName: yup.string().required(),
  password: yup.string().required(),
});

interface FormInput {
  userName: string;
  password: string;
}


const LoginScreen: React.FC = () => {
  useEffect(() => {
    firebase.initializeApp(firebaseConfig);
  }, []);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormInput>({
    resolver: yupResolver(schema),
  });
  const navigation = useNavigation();
  const submit = (data: FormInput) => {

    console.log(data);
    navigation.navigate('JoinRoomScreen')
  };
  return (
    <View style={styles.container}>
      <View style={styles.txtInputContainer}>
        <Controller
          control={control}
          render={({field: {onChange, value}}) => (
            <CustomInput
              value={value}
              placeholder="Tài Khoản"
              label={'Tài Khoản'}
              onChange={onChange}
            />
          )}
          rules={{required: true}}
          name="userName"
        />
        {errors.userName && <Text>This is required.</Text>}
        <Controller
          control={control}
          render={({field: {onChange, value}}) => (
            <CustomInput
              label={'Mật Khẩu'}
              placeholder={'Mật Khẩu'}
              onChange={onChange}
              value={value}
            />
          )}
          rules={{required: true}}
          name={'password'}
        />
        {errors.password && <Text>This is required.</Text>}
      </View>
      <View>
        <CustomButton lable="Đăng Nhập" onPress={handleSubmit(submit)} />
      </View>
      <View style={styles.loginWith}>
        <Text
          style={{
            alignSelf: 'center',
            marginVertical: 10,
            fontStyle: 'italic',
          }}>
          Hoặc đăng nhập với
        </Text>
        <View style={styles.loginOptions}>
          <Text>fb</Text>
          <Text style={{marginHorizontal:10}}> </Text>
          <Text>gg</Text>
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
  loginOptions:{
    flexDirection:'row',
    justifyContent:"center",
  },
});

export default LoginScreen;
