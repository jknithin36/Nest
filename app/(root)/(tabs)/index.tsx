import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="font-bold text-3xl my-10 text-blue-500 font-rubik ">
        Nest
      </Text>
      <Link href="/sign-in">Sign-in</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/properties/1">Properties</Link>
    </View>
  );
}
