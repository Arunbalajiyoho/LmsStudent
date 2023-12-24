import React from "react";
import { View, Text, StyleSheet, FlatList ,TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SIZES,COLORS } from "../../constants";
import { useStateContext } from "../../context/StateContext/StateContext";
// import from vector icons
import { FontAwesome5 } from "@expo/vector-icons";

const ResultScreen = ({navigation}) => {

   // state for darkmode
   const { colors, isDarkMode } = useStateContext();
  // Sample result data
  const resultData = [
    { id: "1", subject: "Math", score: 85 },
    { id: "2", subject: "English", score: 92 },
    { id: "3", subject: "Science", score: 78 },
    // Add more subjects and scores as needed
  ];

  const renderResultItem = ({ item }) => (
    <View style={styles.resultContainer}>
      <Text style={styles.subject}>{item.subject}</Text>
      <Text style={styles.score}>Score: {item.score}%</Text>
    </View>
  );



  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f0f0f0",
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
    padding: SIZES.radius,
    borderRadius: 10,
    color: COLORS.darkBlue,
  },
  flatList: {
    flex: 1,
  },
  resultContainer: {
    backgroundColor: "#E3F2FD",
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
  },
  subject: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  score: {
    fontSize: 16,
    color: "#555",
  },
});

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
          <FontAwesome5 name="chevron-left" size={16} color={COLORS.darkBlue} />
        </TouchableOpacity>
        <View>
          <Text style={styles.heading}>Results</Text>
        </View>
      </View>
     
      <FlatList
        data={resultData}
        keyExtractor={(item) => item.id}
        renderItem={renderResultItem}
        style={styles.flatList}
      />
    
    </SafeAreaView>
  );
};


export default ResultScreen;
