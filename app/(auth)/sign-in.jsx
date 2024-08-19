import { View, Text, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {};

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView>
        <View className="w-full h-full justify-center px-6 my-12 ">
          <View className="flex gap-4">
            <Text className="font-mbold text-2xl">Welcome Back!</Text>
            <Text className="font-msbold text-base">
              Log in to your account{" "}
            </Text>
          </View>
          <FormField
            // title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
            placeholder="email"
          />
          <FormField
            // title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
            placeholder="password"
          />
          <CustomButton
            title="Log in "
            handlePress={submit}
            containerStyles="mt-12"
            isLoading={isSubmitting}
          />
        </View>
        <View className="justify-center pt-5 flex-row gap-2">
          <Text className="font-mregular text-base">
            Don't have an account?
          </Text>
          <Link href="/sign-up" className="font-mregular text-base text-others">
            Sign up
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
