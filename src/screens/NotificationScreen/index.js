import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../constants";
import { useStateContext } from "../../context/StateContext/StateContext";
import dummyData from "../../components/dummyData"; // Import the dummy data

const NotificationScreen = ({ navigation }) => {
  const { colors } = useStateContext();

  const styles = StyleSheet.create({
    grandParent: {
      flex: 1,
      backgroundColor: colors.background,
      paddingHorizontal: SIZES.radius,
      paddingVertical: SIZES.radius,
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
    },
    heading: {
      fontSize: SIZES.h2,
      fontWeight: "bold",
      marginLeft: SIZES.base,
      color: colors.textColor,
    },
    back: {
      backgroundColor: COLORS.lightblue,
      padding: SIZES.base,
      borderRadius: 10,
      color: COLORS.darkBlue,
    },
  });

  return (
    <SafeAreaView style={styles.grandParent}>
      {/* Your existing code */}


      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.back}
        >
          <Ionicons name="ios-arrow-back" size={24} color={COLORS.darkBlue} />
        </TouchableOpacity>

        <View>
          <Text style={styles.heading}>Notification</Text>
        </View>
      </View>
      <ScrollView>
        {dummyData.notifications.map((notification) => (
          <View key={notification.id} style={{ marginVertical: SIZES.padding }}>
            <Text style={{ color: colors.textColor, fontSize: 18, fontWeight: "bold" }}>
              {notification.date}
            </Text>

            {notification.notifications.map((item) => (
              <View key={item.id} style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                  <Image
                    source={{ uri: item.image }}
                    style={{ width: 40, height: 40, borderRadius: 50, marginLeft: 6 }}
                  />
                  <View>
                    <Text style={{ color: colors.textColor, marginLeft: 15 }}>{item.title}</Text>
                    <Text style={{ color: colors.textColor, marginLeft: 15 }}>{item.description}</Text>
                  </View>
                </View>

                <View>
                  <TouchableOpacity>
                    <Entypo name="dots-three-vertical" size={12} color="black" style={{}} />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotificationScreen;
