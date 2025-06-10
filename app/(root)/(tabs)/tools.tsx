import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const premiumFeatures = [
  {
    title: "Verified Premium Listings",
    description:
      "Access exclusive properties verified by our team with top ratings.",
    icon: "https://img.icons8.com/fluency/48/verified-badge.png",
  },
  {
    title: "Priority Support",
    description:
      "Get faster response from our dedicated premium support agents.",
    icon: "https://img.icons8.com/fluency/48/help.png",
  },
  {
    title: "Early Access",
    description: "View upcoming listings before they go public.",
    icon: "https://img.icons8.com/fluency/48/clock--v1.png",
  },
  {
    title: "Smart Recommendations",
    description: "AI-powered property matches based on your preferences.",
    icon: "https://img.icons8.com/fluency/48/artificial-intelligence.png",
  },
  {
    title: "Zero Commission Deals",
    description: "Get commission-free deals on selected properties.",
    icon: "https://img.icons8.com/fluency/48/discount.png",
  },
];

export default function NextPremiumScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="px-5 pt-6" showsVerticalScrollIndicator={false}>
        {/* Hero Image & Header */}
        <View className="items-center mb-6">
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80",
            }}
            className="w-full h-48 rounded-2xl"
            resizeMode="cover"
          />
          <Text className="text-xl font-bold text-black mt-4">
            Unlock Nest Premium
          </Text>
          <Text className="text-sm text-gray-500 text-center mt-2 px-2">
            Enjoy exclusive access, top-tier listings, and personalized support
            with our Premium plan.
          </Text>
        </View>

        {/* Feature List */}
        {premiumFeatures.map((feature, index) => (
          <View
            key={index}
            className="flex-row items-start bg-gray-50 p-4 rounded-xl mb-3 shadow-sm"
          >
            <View className="w-8 h-8 rounded-full bg-primary-100 justify-center items-center mr-3">
              <Image source={{ uri: feature.icon }} className="w-6 h-6" />
            </View>
            <View className="flex-1">
              <Text className="text-base font-semibold text-black">
                {feature.title}
              </Text>
              <Text className="text-sm text-gray-600 mt-1">
                {feature.description}
              </Text>
            </View>
          </View>
        ))}

        {/* CTA Button */}
        <TouchableOpacity
          className="bg-blue-600 p-4 rounded-full mt-6 mb-10"
          activeOpacity={0.9}
          onPress={() => console.log("Upgrade pressed")}
        >
          <Text className="text-center text-white font-semibold text-base">
            Upgrade to Premium
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
