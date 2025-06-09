import icons from "@/constants/icons";
import images from "@/constants/images";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  const handleLogin = () => {
    // TODO: implement Google login
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        contentContainerClassName="flex-grow bg-white"
        showsVerticalScrollIndicator={false}
      >
        {/* Onboarding Image - fills top, no borders or extra white padding */}
        <Image
          source={images.onboarding}
          className="w-full h-[60vh] rounded-md"
          resizeMode="cover"
        />

        <View className="px-6 py-8 space-y-6">
          {/* Subtitle */}
          <Text className="text-xs text-center uppercase font-rubik text-neutral-400 tracking-widest">
            Welcome to Nest
          </Text>

          {/* Headline */}
          <Text className="text-3xl font-rubik-bold text-black text-center leading-snug">
            Discover Spaces That{"\n"}
            <Text className="text-[#0061FF]">Feel Like Home</Text>
          </Text>

          {/* Instruction */}
          <Text className="text-base text-center font-rubik text-neutral-500 mt-4">
            Login to Nest with Google
          </Text>

          {/* Google Button */}
          <TouchableOpacity
            onPress={handleLogin}
            activeOpacity={0.85}
            className="bg-white border border-zinc-200 rounded-full py-4 px-4 shadow-md mt-8"
          >
            <View className="flex-row items-center justify-center gap-x-3">
              <Image
                source={icons.google}
                className="w-5 h-5"
                resizeMode="contain"
              />
              <Text className="font-rubik-medium text-black text-base">
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
