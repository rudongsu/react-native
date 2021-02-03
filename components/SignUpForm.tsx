import React, { useState } from 'react';
import { Text, TextInput, View, Button, TouchableOpacity, SafeAreaView, FlatList, Modal, TouchableHighlight } from 'react-native';
import { Formik, Form, Field } from 'formik';
import styles from '../styles';
import axios from 'axios';
import {API_URL} from "react-native-dotenv";

interface Values {
    Users_ID: string;
    email: string;
    password: string;
}

const SignUpForm = () => {
    const [modalVisible, setmodalVisible] = useState(false);
    const modalText = useState('Hello');

    const addUser = (userInfo) => {
        userInfo.Users_ID = Math.random().toString();
        console.log('user info going to post: ', userInfo);
        axios.post(API_URL, userInfo)
            .then((res) => {
                console.log(res.data.message);
                setmodalVisible(true);
            })
            .catch((e) => {
                console.log(e);
            })
    }


    return (
        <Formik
            initialValues={{
                Users_ID: '',
                email: '',
                password: '',
            }}
            onSubmit={(values: Values) => {
                console.log('hit onSubmit');
                addUser(values);

            }}

        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>
                    <TextInput
                        placeholder="Email"
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        style={styles.rootInput}
                        value={values.email}
                    />
                    <TextInput
                        placeholder="Password"
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        style={styles.rootInput}
                        value={values.password}
                    />

                    <TouchableOpacity
                        style={styles.signup_button}
                        onPress={() => handleSubmit()}
                    >
                        <Button onPress={() => handleSubmit()} title="Sign Up" color='white' />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.exit_button}
                        onPress={() => handleSubmit()}
                    >
                        <Button onPress={() => { }} title="Login" color='black' />
                    </TouchableOpacity>

                </View>
            )}
        </Formik>

    )
}

export default SignUpForm;
