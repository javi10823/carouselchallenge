import React, {useEffect} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {SafeAreaView, View} from 'react-native';
import {Button, TextInput, Title} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {useLoginMutation} from '../../services/auth';
import {login} from '../../store/reducers/auth';
import styles from './styles';

const Login = () => {
  const dispatch = useDispatch();
  const [sendLogin, {isLoading, isError, isSuccess, data, error}] =
    useLoginMutation();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  useEffect(() => {
    if (isSuccess) {
      dispatch(login(data.token));
    }
  }, [data, dispatch, isSuccess]);

  console.log({isLoading, isError, isSuccess, data, error});

  const onSubmit = ({sub}) => sendLogin({sub});

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Title>Login</Title>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              mode="outlined"
              label="sub"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              disabled={isLoading}
            />
          )}
          name="sub"
        />
        <Button
          mode="contained"
          onPress={handleSubmit(onSubmit)}
          disabled={isLoading}>
          Submit
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Login;
