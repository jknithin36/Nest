import * as Linking from "expo-linking";
import { openAuthSessionAsync } from "expo-web-browser";
import { Account, Avatars, Client, OAuthProvider } from "react-native-appwrite";

export const config = {
  platform: "com.nest", // Appwrite platform ID (can be any string for React Native)
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!,
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!,
};

// Initialize Appwrite Client
export const client = new Client();

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

export const avatar = new Avatars(client);
export const account = new Account(client);

/**
 * Google OAuth2 login using Appwrite + Expo Web Browser
 */
export async function login() {
  try {
    const redirectUri = Linking.createURL("/");

    const authUrl = await account.createOAuth2Token(
      OAuthProvider.Google,
      redirectUri
    );

    if (!authUrl) throw new Error("Failed to get OAuth2 token URL");

    const browserResult = await openAuthSessionAsync(
      authUrl.toString(),
      redirectUri
    );

    if (browserResult.type !== "success") {
      throw new Error("OAuth login was cancelled or failed");
    }

    const url = new URL(browserResult.url);
    const secret = url.searchParams.get("secret");
    const userId = url.searchParams.get("userId");

    if (!secret || !userId) {
      throw new Error("Missing secret or userId in callback URL");
    }

    console.log("OAuth userId:", userId);
    console.log("OAuth secret:", secret);

    const session = await account.createSession(userId, secret);

    console.log("Appwrite session created:", session);

    return true;
  } catch (error) {
    console.error("Login Error:", error);
    return false;
  }
}

/**
 * Logout current user
 */
export async function logout() {
  try {
    return await account.deleteSession("current");
  } catch (error) {
    console.error("Logout Error:", error);
    return false;
  }
}

/**
 * Get current authenticated user
 */
export async function getCurrentUser() {
  try {
    // Check for session existence before calling account.get()
    try {
      await account.getSession("current");
    } catch {
      return null; // Not logged in
    }

    const result = await account.get();

    if (result?.$id) {
      const userAvatar = avatar.getInitials(result.name);
      return {
        ...result,
        avatar: userAvatar.toString(),
      };
    }

    return null;
  } catch (error) {
    console.log("GetCurrentUser Error:", error);
    return null;
  }
}
