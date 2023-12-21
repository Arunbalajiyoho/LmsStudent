// import from react
import React from "react";
// import from react native
import { Ionicons } from "@expo/vector-icons";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// imports from constants
import { COLORS, SIZES } from "../../constants";
// imports from context
import dummyData from "../../components/dummyData";
import { useStateContext } from "../../context/StateContext/StateContext";

const CertificatesModelScreen = ({ navigation }) => {
  // for colors
  const { colors, isDarkMode } = useStateContext();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      justifyContent:"center",
      
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
    },
    heading: {
      fontSize: SIZES.h2,
      fontWeight: "bold",
      marginLeft: SIZES.radius,
      color: colors.textColor,
      
    },
    back: {
      backgroundColor: COLORS.lightblue,
      padding: SIZES.base,
      borderRadius: 10,
      color: COLORS.darkBlue,
    },
    certificateContainer: {
      backgroundColor: "#fff",
      borderRadius: 10,
      padding: SIZES.padding,
      marginBottom: SIZES.base,
      paddingVertical:SIZES.padding
    },
    certificateTitle: {
      fontSize:SIZES.h2,
      fontWeight: "bold",
      marginBottom: SIZES.base,
      textAlign: "center",
    },
    certificateDescription: {
      fontSize:SIZES.body3,
      marginBottom: SIZES.base,
      textAlign: "center",
    },
    certificateDate: {
      ...SIZES.body4,
      color: COLORS.gray,
      textAlign: "center",
    },
    certificateImage: {
      width: "100%",
      height: 250,
      resizeMode: "cover",
      borderRadius: 10,
      marginBottom: SIZES.base,
      marginTop:SIZES.radius
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.back}
          >
            <Ionicons name="ios-arrow-back" size={24} color={COLORS.darkBlue} />
          </TouchableOpacity>

          <View>
            <Text style={styles.heading}>Certificate</Text>
          </View>
        </View>

        <View style={{ marginVertical: SIZES.radius }}>
          {dummyData.certificates.map((certificate, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
               
              }}
            >
              <View style={styles.certificateContainer}>
                <Text style={styles.certificateTitle}>{certificate.title}</Text>
                <Text style={styles.certificateDescription}>
                  {certificate.description}
                </Text>
                <Text style={styles.certificateDate}>
                  Awarded to: {certificate.studentName} | {certificate.date}
                </Text>
                <Image
                  source={{ uri: certificate.imageUrl }}
                  style={styles.certificateImage}
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CertificatesModelScreen;
