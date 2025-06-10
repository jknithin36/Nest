import icons from "@/constants/icons";
import { BlurView } from "expo-blur";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Models } from "react-native-appwrite";

interface Props {
  item: Models.Document;
  onPress?: () => void;
}

export const FeaturedCard = ({ item, onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="w-64 h-80 rounded-3xl overflow-hidden bg-white shadow-lg"
      activeOpacity={0.9}
    >
      {/* Background Image */}
      <Image
        source={{ uri: item.image }}
        className="w-full h-full absolute"
        resizeMode="cover"
      />

      {/* Rating Badge */}
      <View className="absolute top-4 right-4 bg-white/90 px-2.5 py-1 rounded-full flex-row items-center shadow">
        <Image source={icons.star} className="w-4 h-4" />
        <Text className="text-xs font-rubik-bold text-primary-300 ml-1">
          {item.rating}
        </Text>
      </View>

      {/* Blurred Overlay */}
      <View className="absolute bottom-0 w-full">
        <BlurView intensity={40} tint="dark" className="p-4">
          <Text
            className="text-white text-lg font-rubik-bold"
            numberOfLines={1}
          >
            {item.name}
          </Text>
          <Text
            className="text-white text-xs font-rubik mt-1 opacity-90"
            numberOfLines={1}
          >
            {item.address}
          </Text>
          <View className="flex-row justify-between items-center mt-2">
            <Text className="text-white text-base font-rubik-bold">
              ${item.price}
            </Text>
            <TouchableOpacity>
              <Image
                source={icons.heart}
                className="w-5 h-5"
                tintColor="white"
              />
            </TouchableOpacity>
          </View>
        </BlurView>
      </View>
    </TouchableOpacity>
  );
};

export const Card = ({ item, onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-1 bg-white rounded-xl p-3 shadow-md shadow-black/5 mb-4"
    >
      {/* Rating */}
      <View className="absolute top-3 right-3 z-10 bg-white/90 px-2 py-1 rounded-full flex-row items-center shadow-sm">
        <Image source={icons.star} className="w-3 h-3" />
        <Text className="text-xs ml-1 font-rubik-bold text-primary-300">
          {item.rating}
        </Text>
      </View>

      {/* Image */}
      <Image
        source={{ uri: item.image }}
        className="w-full h-36 rounded-lg"
        resizeMode="cover"
      />

      {/* Text Info */}
      <View className="mt-3">
        <Text
          className="text-base font-rubik-bold text-black-300"
          numberOfLines={1}
        >
          {item.name}
        </Text>
        <Text className="text-xs text-black-100 font-rubik" numberOfLines={1}>
          {item.address}
        </Text>

        <View className="flex-row justify-between items-center mt-2">
          <Text className="text-base font-rubik-bold text-primary-300">
            ${item.price}
          </Text>
          <TouchableOpacity activeOpacity={0.8}>
            <Image
              source={icons.heart}
              className="w-5 h-5"
              tintColor="#191D31"
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};
