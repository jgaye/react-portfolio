import { HelloWave } from "@/components/HelloWave";
// import { IdentityBox } from "@/components/IdentityBox";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello World</Text>
      <br />
      <HelloWave></HelloWave>
      <br />
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <br />
      {/* <IdentityBox userName="Bob"></IdentityBox> */}
    </View>
  );
}
