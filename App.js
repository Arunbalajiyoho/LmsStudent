// // App.js
// // import from react
// import React from 'react';
// import { useEffect } from "react";
// // import from react native
// import { NavigationContainer } from '@react-navigation/native';
// import Navigation from './src/navigation';
// // import from context
// import { StateContextProvider } from './src/context';
// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View, Alert } from "react-native";
// import messaging from "@react-native-firebase/messaging";
// import { android } from "@react-native-firebase/messaging";



// function App() {

//   const requestUserPermission = async () => {
//     const authStatus = await messaging().requestPermission();
//     const enabled =
//       authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//       authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//     if (enabled) {
//       console.log("Authorization status:", authStatus);
//     }
//   };

//   useEffect(() => {
//     if (requestUserPermission()) {
//       messaging()
//         .getToken()
//         .then((token) => {
//           console.log(token);
//         });
//     } else {
//       console.log("failed token status", authStatus);
//     }
//     //check whether intial notification is available
//     messaging()
//       .getInitialNotification()
//       .then(async (remoteMessage) => {
//         if (remoteMessage) {
//           console.log(
//             "Notification caused app to open from quit state:",
//             remoteMessage.notification
//           );
//           const notification = {
//             notification: {
//               title: "Custom Sound Notification",
//               body: "This is a notification with a custom sound.",
//               sound: notificationsound, // Replace with the URL of your custom sound
//             },
//           };

//           // Send the notification
//           messaging().send(notification);
//         }
//       });
//     // Assume a message-notification contains a "type" property in the data payload of the screen to open

//     messaging().onNotificationOpenedApp(async (remoteMessage) => {
//       console.log(
//         "Notification caused app to open from background state:",
//         remoteMessage.notification
//       );
//     });

//     // Register background handler
//     messaging().setBackgroundMessageHandler(async (remoteMessage) => {
//       console.log("Message handled in the background!", remoteMessage);
//     });

//     //Alert
//     const unsubscribe = messaging().onMessage(async (remoteMessage) => {
//       Alert.alert("A new FCM message arrived!", JSON.stringify(remoteMessage));
//     });
//   }, []);
 

//   return (
//     <NavigationContainer>
//       <StateContextProvider>
//       <StatusBar style="dark" />
//        <Navigation/>
//        </StateContextProvider>
//     </NavigationContainer>
//   );
// }

// export default App;










// App.js
// import from react
import React from 'react';
import { useEffect } from "react";
// import from react native
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation';
// import from context
import { StateContextProvider } from './src/context';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert } from "react-native";
import messaging from "@react-native-firebase/messaging";
import { android } from "@react-native-firebase/messaging";
import CustomDrawer from './src/navigation/CustomDrawer';



function App() {

  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log("Authorization status:", authStatus);
    }
  };

  useEffect(() => {
    if (requestUserPermission()) {
      messaging()
        .getToken()
        .then((token) => {
          console.log(token);
        });
    } else {
      console.log("failed token status", authStatus);
    }
    //check whether intial notification is available
    messaging()
      .getInitialNotification()
      .then(async (remoteMessage) => {
        if (remoteMessage) {
          console.log(
            "Notification caused app to open from quit state:",
            remoteMessage.notification
          );
          const notification = {
            notification: {
              title: "Custom Sound Notification",
              body: "This is a notification with a custom sound.",
              sound: notificationsound, // Replace with the URL of your custom sound
            },
          };

          // Send the notification
          messaging().send(notification);
        }
      });
    // Assume a message-notification contains a "type" property in the data payload of the screen to open

    messaging().onNotificationOpenedApp(async (remoteMessage) => {
      console.log(
        "Notification caused app to open from background state:",
        remoteMessage.notification
      );
    });

    // Register background handler
    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      console.log("Message handled in the background!", remoteMessage);
    });

    //Alert
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      Alert.alert("A new FCM message arrived!", JSON.stringify(remoteMessage));
    });
  }, []);
 

  return (
    <NavigationContainer>
      <StateContextProvider>
      <StatusBar style="dark" />
       <Navigation/>
       </StateContextProvider>
    </NavigationContainer>
  );
}

export default App;
