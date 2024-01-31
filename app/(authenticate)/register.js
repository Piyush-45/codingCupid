import {
    StyleSheet,
    Text,
    View,
    Image,
    KeyboardAvoidingView,
    TextInput,
    Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons,Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import logo from "../../assets/images/logo.png";
//   import axios from "axios";
//   import AsyncStorage from "@react-native-async-storage/async-storage";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const router = useRouter()
    return (
        <SafeAreaView
            style={{ flex: 1, backgroundColor: "#FFF0F5", display: 'flex', flexDirection: 'column', gap: 10 }}
        >
            <View style={{ height: hp('10%'), width: wp('100%'), alignItems: 'center', justifyContent: 'center' }}>

                <View
                    style={{
                        display: 'flex', flexDirection: 'row', alignItems: 'flex-end'
                    }}
                >
                    <Image
                        // style={{ width: 150, height: 80, resizeMode: "contain" }}
                        source={logo}
                    />
                    <Text
                        style={{
                            // marginTop: 20,
                            textAlign: "center",
                            fontSize: 20,
                            // fontFamily: "GillSans-SemiBold",
                        }}
                    >
                        CodingCupid
                    </Text>
                </View>
            </View>

            <KeyboardAvoidingView>
                <View style={{ alignItems: "center" }}>
                    <Text
                        style={{
                            fontSize: 24,
                            fontWeight: "600",
                            textAlign: "center",
                            color: '#000',

                        }}
                    >
                        Create a new account
                    </Text>
                </View>



                <View style={{ display: 'flex', alignItems: 'center' }}>

                <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 5,
                            backgroundColor: "#fff",
                            paddingVertical: 5,
                            paddingHorizontal: 10,
                            borderRadius: 50,
                            // borderRadius: 5,
                            marginTop: 30,
                            width: wp('90%'),

                        }}
                    >
                        <Ionicons
                            style={{ marginLeft: 8 }}
                            name="person-sharp"
                            size={24}
                            color="#888"
                        />
                        <TextInput
                            value={name}
                            onChangeText={(text) => setName(text)}
                            placeholder="Enter your name"
                            placeholderTextColor={"#888"}
                            style={{
                                color: "white",
                                marginVertical: 10,
                                width: 300,
                                fontSize: name ? 17 : 17,
                            }}
                        />
                    </View>

                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 5,
                            backgroundColor: "#fff",
                            paddingVertical: 5,
                            paddingHorizontal: 10,
                            borderRadius: 50,
                            // borderRadius: 5,
                            marginTop: 30,
                            width: wp('90%'),

                        }}
                    >
                        <MaterialIcons
                            style={{ marginLeft: 8 }}
                            name="email"
                            size={24}
                            color="#888"
                        />
                        <TextInput
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            placeholder="Enter your email"
                            placeholderTextColor={"#888"}
                            style={{
                                color: "white",
                                marginVertical: 10,
                                width: 300,
                                fontSize: password ? 17 : 17,
                            }}
                        />
                    </View>

                    <View style={{}}>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                gap: 5,
                                backgroundColor: "#fff",
                                paddingVertical: 5,
                                borderRadius: 5,
                                marginTop: 30,
                                width: wp('90%'),
                                paddingHorizontal: 10,
                                borderRadius: 50,
                            }}
                        >
                            <AntDesign
                                style={{ marginLeft: 8 }}
                                name="lock1"
                                size={24}
                                color="#888"
                            />
                            <TextInput
                                value={password}
                                onChangeText={(text) => setPassword(text)}
                                secureTextEntry={true}
                                placeholder="Enter your password"
                                style={{
                                    color: "white",
                                    marginVertical: 10,
                                    width: 300,
                                    fontSize: password ? 17 : 17,
                                }}
                                placeholderTextColor="#888"
                            />
                        </View>
                    </View>
                    <Pressable
                        //   onPress={handleLogin}
                        style={{
                            width: wp(90),
                            backgroundColor: "#FE506B",
                            borderRadius: 50,
                            padding: 15,
                            marginTop: hp(4)
                        }}
                    >
                        <Text
                            style={{
                                textAlign: "center",
                                color: "white",
                                fontSize: 16,
                                fontWeight: "bold",

                            }}
                        >
                            Register
                        </Text>
                    </Pressable>

                    <View style={{ marginTop: 12, display: 'flex', flexDirection:'row', alignItems: 'center' }}>
                        <Text style={{ textAlign: "center", color: "#333", fontSize: 18 }}>
                            Already have an account?
                        </Text>
                        <Pressable onPress={() => router.replace("/login")}><Text style={{ color: '#1877F2', fontSize: 18, marginLeft:3 }}>Log In</Text></Pressable>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default Register;

const styles = StyleSheet.create({});