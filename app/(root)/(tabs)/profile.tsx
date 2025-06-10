import icons from "@/constants/icons";
import { useGlobalContext } from "@/lib/global-provider";
import React from "react";
import {
  Alert,
  Image,
  ImageSourcePropType,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { settings } from "@/constants/data";

import { logout } from "@/lib/appwrite";

interface SettingsItemProp {
  icon: ImageSourcePropType;
  title: string;
  onPress?: () => void;
  textStyle?: string;
  showArrow?: boolean;
}
const SettingsItem = ({
  icon,
  title,
  onPress,
  textStyle,
  showArrow = true,
}: SettingsItemProp) => (
  <TouchableOpacity
    onPress={onPress}
    className="flex flex-row items-center justify-between py-3"
  >
    <View className="flex flex-row items-center gap-3">
      <Image source={icon} className="size-6" />
      <Text className={`text-lg font-rubik-medium text-black-300 ${textStyle}`}>
        {title}
      </Text>
    </View>

    {showArrow && <Image source={icons.rightArrow} className="size-5" />}
  </TouchableOpacity>
);
const profile = () => {
  const { user, refetch } = useGlobalContext();

  const handleLogout = async () => {
    const result = await logout();
    if (result) {
      Alert.alert("Success", "Logged out successfully");
      refetch();
    } else {
      Alert.alert("Error", "Failed to logout");
    }
  };
  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32 px-7"
      >
        <View className="flex flex-row items-center justify-between mt-5 ">
          <Text className="text-xl font-rubik-bold">Profile</Text>
          <Image source={icons.bell} className="size-5" />
        </View>

        <View className="items-center mt-10 mb-8">
          {/* Decorative Background Dots */}
          <View className="absolute w-full h-60 z-0">
            {/* Top Left */}
            <View className="w-4 h-4 bg-blue-200 rounded-full absolute top-4 left-8 opacity-30" />
            <View className="w-3 h-3 bg-yellow-200 rounded-full absolute top-16 left-20 opacity-40" />
            {/* Top Right */}
            <View className="w-5 h-5 bg-pink-200 rounded-full absolute top-6 right-12 opacity-30" />
            <View className="w-3 h-3 bg-green-200 rounded-full absolute top-20 right-4 opacity-40" />
            {/* Bottom area */}
            <View className="w-2 h-2 bg-red-200 rounded-full absolute bottom-10 left-24 opacity-40" />
            <View className="w-4 h-4 bg-purple-200 rounded-full absolute bottom-6 right-20 opacity-30" />
          </View>

          {/* Foreground Avatar & Name */}
          <View className="z-10 items-center">
            <Image
              source={{ uri: user?.avatar }}
              className="w-28 h-28 rounded-full bg-neutral-200"
              resizeMode="cover"
            />

            <Text className="text-xl font-rubik-bold text-black mt-4">
              {user?.name || "User"}
            </Text>

            <TouchableOpacity className="mt-4 px-6 py-2 border border-gray-300 rounded-full">
              <Text className="text-base font-rubik-medium text-black">
                Edit Profile
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className=" flex flex-col mt-10">
          <SettingsItem icon={icons.calendar} title="My Booking" />
          <SettingsItem icon={icons.wallet} title="Payments" />
        </View>
        <View className="flex flex-col mt-5 border-t pt-5 border-primary-200">
          {settings.slice(2).map((item, index) => (
            <SettingsItem key={index} {...item} />
          ))}
        </View>
        <View className="flex flex-col border-t mt-5 pt-5 border-primary-200">
          <SettingsItem
            icon={icons.logout}
            title="Logout"
            textStyle="text-danger"
            showArrow={false}
            onPress={handleLogout}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default profile;
