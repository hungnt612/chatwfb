import React from 'react';
import {
  AsyncStorage,
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
import firebase from 'firebase';

const schema = yup.object().shape({
  name: yup.string().required(),
});

interface FormInput {
  name: string;
}

const ToChatRoom = (data: any) => {
  console.log(data)
  firebase
    .auth()
    .signInAnonymously()
    .then(user => {
      console.log(user);
    })
    .catch(err => console.log(err));
};

const submit = (data: FormInput) => {
  ToChatRoom(data);
};

const JoinRoomScreen: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormInput>({
    resolver: yupResolver(schema),
  });
  return (
    <View style={styles.container}>
      <View style={styles.txtInputContainer}>
        <Controller
          control={control}
          render={({field: {onChange, value}}) => (
            <CustomInput
              label={'Nhập tên của bạn'}
              placeholder={'Tên của bạn'}
              onChange={onChange}
              value={value}
            />
          )}
          rules={{required: true}}
          name={'name'}
        />
        {errors.name && <Text>This is required.</Text>}
      </View>
      <View>
        <CustomButton lable="Vào Ngay" onPress={handleSubmit(submit)} />
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

export default JoinRoomScreen;
