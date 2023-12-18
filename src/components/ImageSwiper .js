import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import { useStateContext } from "../context/StateContext/StateContext";


const ImageSwiper = () => {

  const { colors } = useStateContext();
  
  const data = [
      {
        id: 1,
        image: "https://amatra.in/wp-content/uploads/2017/02/pop.jpg",
        text: "Popular Courses",
        image1:""
      },
    {
      id: 2,
      image:
        "https://www.classcentral.com/report/wp-content/uploads/2020/06/top-100-course-pandemic.png",
      text: "Online Courses",
    },
    {
      id: 3,
      image:
        "https://d1ymz67w5raq8g.cloudfront.net/Pictures/1024x536/P/web/n/z/b/onlinecourses_shutterstock_490891228_2000px_728945.jpg",
      text: "Live Sessions",
    },
  ];



  const styles = StyleSheet.create({
    slide: {
      alignItems: "center",
    },
    image: {
      width: "100%",
      height: 200,
      resizeMode: "cover",
      borderRadius: 10,
    },
    text: {
      marginTop: 20,
      fontSize: 20,
      fontWeight: "bold",
      color: colors.textColor,
    },
  });


  return (
    <Swiper
      style={styles.wrapper}
      showsButtons={false}
      showsPagination={false}
      autoplay={true}    
      autoplayTimeout={3} // Adjust the timeout as needed (in seconds)
     >
      {data.map((item) => (
        <View key={item.id} style={styles.slide}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.text}>{item.text}</Text>
        </View>
      ))}
    </Swiper>
  );
};



export default ImageSwiper;
