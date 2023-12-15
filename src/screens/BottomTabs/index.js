// Import from React
import React, { useEffect, useRef } from "react";
// Import from react navigation Bottom Tabs
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import from react antive
import { TouchableOpacity,Text,StyleSheet} from "react-native";
// import from screens
import DashBoardScreen from "../DashBoardScreen";
import ClassesScreen from "../ClassesScreen";
import ExamsScreen from "../ExamsScreen";
import ProfileScreen from "../ProfileScreen";
// import from constants
import Colors from "../../constants/Colors";
import { COLORS } from "../../constants";
import Icon, { Icons } from "../../constants/Icons";
// import from context
import { useStateContext } from "../../context/StateContext/StateContext";
// import from react native animatable
import * as Animatable from "react-native-animatable";

     
 
const TabArr = [
    
  {
    route: "Home",
    label: "Home",
    type: Icons.Feather,
    icon: "home",
    component: DashBoardScreen,
    color: COLORS.darkBlue,
    alphaClr:COLORS.darkBlue,
  },
   
    {
      route: "ClassesScreen",
      label: "Classes",
      type: Icons.MaterialIcons,
      icon: "class",
      component: ClassesScreen,
      color: COLORS.darkBlue,
      alphaClr: COLORS.darkBlue,
    },
     {
      route: "ExamsScreen",
      label: "Exams",
      type: Icons.AntDesign,
      icon: "filetext1",
      component: ExamsScreen,
      color: Colors.darkOverlayColor,
      alphaClr: Colors.primaryAlpha,
    },
    {
      route: "ProfileScreen",
      label: "Profile",
      type: Icons.FontAwesome5,
      icon: "user-graduate",
      component: ProfileScreen,
      color: Colors.darkOverlayColor,
      alphaClr: Colors.primaryAlpha,
    },
 
];

// for bottom navigator
const Tab = createBottomTabNavigator();

const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const textViewRef = useRef(null);
  
  useEffect(() => {
    if (focused) {
      viewRef.current.animate({
        0: { scale: 0.5, rotate: "0deg" },
        1: { scale: 1.3, rotate: "360deg" },
      });
    } else {
      viewRef.current.animate({
        0: { scale: 1.3, rotate: "360deg" },
        1: { scale: 1, rotate: "0deg" },
      });
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}
    >
      <Animatable.View ref={viewRef} duration={1000} style={styles.container}>
        <Icon
          type={item.type}
          name={item.icon}
          color={focused ?  COLORS.darkBlue : "#9bcefc"}
        />
      </Animatable.View>
      <Text style={{ color: focused ?  COLORS.darkBlue : Colors.transparentBlack7 }}>
        {item.label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

// for tabs 
const BottomTabs = ({ navigation }) => {
  const { colors, toggleDarkMode } = useStateContext();

  const screenOptions1 = {
    tabBarStyle: {
      backgroundColor: colors.background,
    },
    tabBarItemStyle: {
      borderRadius: 10,
    
    },
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 55,
          position: "absolute",
            // bottom: 16,
            // right: 16,
            // left: 16,
            // borderRadius: 16
        },
      }}
    >
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: (props) => <TabButton {...props} item={item} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};
export default BottomTabs;











// import { View, Text, TouchableOpacity } from "react-native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import HomeScreen from "../HomeScreen";
// import ExploreScreen from "../ExploreScreen";
// import { StyleSheet } from "react-native";
// import Colors from "../../constants/Colors";
// import { COLORS } from "../../constants/theme";
// import Icon, { Icons } from "../../constants/Icons";
// import { useStateContext } from "../../context/StateContext/StateContext";

// import * as Animatable from "react-native-animatable";

// import React, { useEffect, useRef } from "react";

// const TabArr = [
//   {
//     route: "Home",
//     label: "Home",
//     type: Icons.Feather,
//     icon: "home",
//     component: HomeScreen,
//     color: COLORS.lightblue,
//     alphaClr:COLORS.lightblue,
//   },
//   {
//     route: "Search",
//     label: "Search",
//     type: Icons.Feather,
//     icon: "search",
//     component: ExploreScreen,
//     color: Colors.darkOverlayColor,
//     alphaClr: Colors.primaryAlpha,
//   },
//   // {
//   //   route: "HelpScreen",
//   //   label: "Help",
//   //   type: Icons.Feather,
//   //   icon: "help-circle",
//   //   component: HelpScreen,
//   //   color: Colors.darkOverlayColor,
//   //   alphaClr: Colors.primaryAlpha,
//   // },
//   // {
//   //   route: "ProfileScreen",
//   //   label: "Profile",
//   //   type: Icons.FontAwesome5,
//   //   icon: "user-graduate",
//   //   component: ProfileScreen,
//   //   color: Colors.darkOverlayColor,
//   //   alphaClr: Colors.primaryAlpha,
//   // },
//   // { route: 'Account', label: 'Account', type: Icons.FontAwesome, icon: 'user-circle-o', component: AccountScreen, color: Colors.primary, alphaClr: Colors.primaryAlpha },
// ];

// const Tab = createBottomTabNavigator();

// const animate1 = { 0: { scale: .5, translateY: 7 }, .92: { translateY: -34 }, 1: { scale: 1, translateY: -24 } }
// const animate2 = { 0: { scale: 1, translateY: -24 }, 1: { scale: 1, translateY: 7 } }

// const circle1 = { 0: { scale: 0 }, 0.3: { scale: .9 }, 0.5: { scale: .2 }, 0.8: { scale: .7 }, 1: { scale: 1 } }
// const circle2 = { 0: { scale: 1 }, 1: { scale: 0 } }

// const TabButton = (props) => {
//   const { item, onPress, accessibilityState } = props;
//   const focused = accessibilityState.selected;
//   const viewRef = useRef(null);
//   const circleRef = useRef(null);
//   const textRef = useRef(null);

//   useEffect(() => {
//     if (focused) {
//       viewRef.current.animate(animate1);
//       circleRef.current.animate(circle1);
//       textRef.current.transitionTo({ scale: 1 });
//     } else {
//       viewRef.current.animate(animate2);
//       circleRef.current.animate(circle2);
//       textRef.current.transitionTo({ scale: 0 });
//     }
//   }, [focused])

//   return (
//     <TouchableOpacity
//       onPress={onPress}
//       activeOpacity={1}
//       style={styles.container}>
//       <Animatable.View
//         ref={viewRef}
//         duration={1000}
//         style={styles.container}>
//         <View style={styles.btn}>
//           <Animatable.View
//             ref={circleRef}
//             style={styles.circle} />
//           <Icon type={item.type} name={item.icon} color={focused ? COLORS.lightblue : COLORS.lightblue} />
//         </View>
//         <Animatable.Text
//           ref={textRef}
//           style={styles.text}>
//           {item.label}
//         </Animatable.Text>
//       </Animatable.View>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
 
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   tabBar: {
//     height: 50,
//     position: 'absolute',
//     // bottom: 2,
//     // right: 16,
//     // left: 16,
//     borderRadius: 16,
//   },
//   btn: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     borderWidth: 4,
//     borderColor: Colors.white,
//     backgroundColor: Colors.white,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   circle: {
//     ...StyleSheet.absoluteFillObject,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: Colors.primary,
//     borderRadius: 25,
//   },
//   text: {
//     fontSize: 12,
//     textAlign: 'center',
//     color: Colors.primary,
//   }
// });

// const BottomTabs = ({ navigation }) => {
//   const { colors, toggleDarkMode } = useStateContext();

//   const screenOptions1 = {
//     tabBarStyle: {
//       // backgroundColor:colors.background,
//     },
//     tabBarItemStyle: {
//       borderRadius: 10,
//     },
//   };

//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarStyle: {
//           height: 60,
//           position: 'absolute',
//           // bottom: 16,
//           // right: 16,
//           // left: 16,
//           // borderRadius: 16
//         }
//       }}
//     >
//       {TabArr.map((item, index) => {
//         return (
//           <Tab.Screen key={index} name={item.route} component={item.component}
//             options={{
//               tabBarShowLabel: false,
//               tabBarButton: (props) => <TabButton {...props} item={item} />
//             }}
//           />
//         )
//       })}
//     </Tab.Navigator>
//   );
// };
// export default BottomTabs;

