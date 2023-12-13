// import from react
import React from "react";
// import from react native
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import from context
import { useStateContext } from "../../context/StateContext/StateContext";
// import from constants
import { SIZES, FONTS, COLORS } from "../../constants/theme";
// import from expo
import {
  MaterialIcons,
  Ionicons,
  Entypo,
  Feather,
  FontAwesome5,
  AntDesign,
} from "@expo/vector-icons";
import { StatusBar } from "react-native";

const CommunityProfileScreen = ({navigation}) => {
  // for colors
  const { colors } = useStateContext();

  // dummy data for community
  const dummyData = {
    student: {
      name: 'John Doe',
      course: 'Computer Science',
      batch: 'Batch A',
      image: 'https://media.istockphoto.com/id/1301397300/photo/portrait-of-young-woman-stock-photo.jpg?s=612x612&w=0&k=20&c=Xvgo-k58_woBTuQaRNZ4JXP2SQsw_RSbrlSbt7XbQlU=', // Replace with actual image URL
    },
    batchMembers: [
      {
        name: 'Luffy',
        designation: 'Student',
        image: 'https://img.freepik.com/free-photo/young-man-student-with-notebooks-showing-thumb-up-approval-smiling-satisfied-blue-studio-background_1258-65334.jpg', // Replace with actual image URL
      },
      {
        name: 'zoro',
        designation: 'Instructor',
        image: 'https://static8.depositphotos.com/1008303/880/i/450/depositphotos_8803246-stock-photo-asian-college-student.jpg', // Replace with actual image URL
      },
      {
        name: 'Bob Johnson',
        designation: 'Instructor',
        image: 'https://placekitten.com/160/160', // Replace with actual image URL
      },
      {
        name: 'Bob Johnson',
        designation: 'Instructor',
        image: 'https://placekitten.com/160/160', // Replace with actual image URL
      },
      // Add more members as needed
    ],
  };
  const { name, course, batch, image } = dummyData.student;

  // styles
  const styles = StyleSheet.create({
    grandParent: {
      flex: 1,
      backgroundColor: colors.background,
        paddingHorizontal: SIZES.radius,
      paddingVertical: SIZES.radius * 2,
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: SIZES.radius,
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
   
    profileImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginBottom: 8,
    },
    profileContainer: {
      paddingVertical:SIZES.radius,
      justifyContent: "center",
      alignItems: "center",
      
    },
    name: {
      fontSize: 20,
      fontWeight: "bold",
      color:colors.textColor
    },
    course: {
      fontSize: 16,
      color: "gray",
    },
    batch: {
      fontSize: 16,
      color: "gray",
    },
    membersTitle: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 8,
      paddingHorizontal:SIZES.radius,
      marginVertical:SIZES.base,
      color:colors.textColor
    },
    menuContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: colors.cardBackground,
      shadowColor: colors.textColor, // Adjust shadow properties
      shadowOffset: { width: 0, height: 2 },
      // shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 3, // Adjust elevation for Android
      marginHorizontal:SIZES.base,
      borderRadius: 26,
      marginVertical: SIZES.radius,
      padding:15,
     
    },
   
    menuText: {
      // ...FONTS,
      fontWeight: "600",
      marginHorizontal: SIZES.radius,
      color:colors.textColor
    },
    overalprofilecontainer: {
      marginTop: 20,
      paddingHorizontal: 10,
      backgroundColor: "red",
    },
  
   
  });

  return (
    <SafeAreaView style={styles.grandParent}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.back}
          >
            <FontAwesome5
              name="chevron-left"
              size={16}
              color={COLORS.darkBlue}
            />
          </TouchableOpacity>

          <View>
            <Text style={styles.heading}>Community Profile</Text>
          </View>
        </View>

       
          <View style={styles.profileContainer}>
            <Image
              source={{
                uri: "https://static8.depositphotos.com/1008303/880/i/450/depositphotos_8803246-stock-photo-asian-college-student.jpg",
              }}
              style={styles.profileImage}
            />
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.batch}>{batch}</Text>
            <Text style={styles.course}>{course}</Text>
          </View>

          <Text style={styles.membersTitle}>Batch Members</Text>
          <View Style={styles.overalprofilecontainer}>
           {dummyData.batchMembers.map((member, index) => (
           
               <TouchableOpacity
              style={styles.menuContainer}
              onPress={() => navigation.navigate("")}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={styles.menuIcons}>
                 
                <Image style={{width:40,height:40,borderRadius:20}} source={{ uri: member.image }} />
                </View>
                <View>
                  <Text style={styles.menuText}> {member.name}</Text>
                </View>
              </View>
              <View>
               <Text style={{color:colors.textColor}}>  {member.designation} </Text>
              </View>
            </TouchableOpacity>
              
            
            
              ))} 
              </View>

        
       
      </ScrollView>
    </SafeAreaView>
  );
};

export default CommunityProfileScreen;
