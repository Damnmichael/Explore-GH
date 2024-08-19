import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-sm font-mmedium">{title}</Text>
      <View
        className={`w-full h-16 px-4 rounded-xl border-2 items-center flex-row ${
          isFocused ? "border-primary" : "border-gray-200"
        } bg-gray-200`}
      >
        <TextInput
          className="flex-1 font-msbold text-sm"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#BCBCBC"
          onChangeText={handleChangeText}
          secureTextEntry={title === "password" && !showPassword}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </View>
    </View>
  );
};

export default FormField;
