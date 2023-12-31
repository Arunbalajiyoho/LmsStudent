import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert, Modal, TextInput, Button } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

import { useStateContext } from '../context/StateContext/StateContext';

import Colors from '../constants/Colors';
 import { COLORS } from '../constants';
const MyCalendar = () => {


// for using colors from context
const { colors,isDarkMode} = useStateContext();

  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState({});
  const [eventModalVisible, setEventModalVisible] = useState(false);
  const [eventText, setEventText] = useState('');

  const onDateChange = (date) => {
    setSelectedDate(date);
  };

  const addEvent = () => {
    setEventModalVisible(true);
  };

  const saveEvent = () => {
    if (!eventText) {
      Alert.alert('Enter event details.');
      return;
    }

    const existingEvents = events[selectedDate.toString()] || [];
    const newEvent = {
      title: eventText,
    };

    setEvents({
      ...events,
      [selectedDate.toString()]: [...existingEvents, newEvent],
    });

    setEventText('');
    setEventModalVisible(false);
    Alert.alert('Event added successfully!');
  };

  const renderEvents = () => {
    if (!selectedDate) {
      return null;
    }

    const dateEvents = events[selectedDate.toString()] || [];

    return dateEvents.map((event, index) => (
      <View key={index}>
        <Text>{event.title}</Text>
      </View>
    ));
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // marginTop: 50,
      padding: 16,
      backgroundColor:  isDarkMode ? Colors.greenAlpha  : colors.cardBackground,
    },
    addButton: {
      marginTop: 16,
      padding: 10,
      backgroundColor: COLORS.darkBlue,
      borderRadius: 5,
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 8,
      marginVertical: 10,
      width: '80%',
    },
    eventsContainer: {
      marginTop: 20,
    },
    eventsHeader: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
      color:colors.textColor
    },
  });

  return (
    <View style={styles.container}>
      <CalendarPicker
        startFromMonday={true}
        minDate={new Date()}
        selectedStartDate={selectedDate}
        onDateChange={onDateChange}
      />

      <TouchableOpacity onPress={addEvent}>
        <View style={styles.addButton}>
          <Text style={styles.buttonText}>Add Event</Text>
        </View>
      </TouchableOpacity>

      <Modal visible={eventModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text>Enter Event Details:</Text>
          <TextInput
            style={styles.input}
            placeholder="Event details"
            value={eventText}
            onChangeText={(text) => setEventText(text)}
          />

         <TouchableOpacity onPress={saveEvent}>
        <View style={styles.addButton}>
          <Text style={styles.buttonText}>Save Event</Text>
        </View>
      </TouchableOpacity>
          
        
          <View style={{marginTop:1}}>
          <TouchableOpacity onPress={() => setEventModalVisible(false)} >
        <View style={styles.addButton}>
          <Text style={styles.buttonText}>Cancel</Text>
        </View>
      </TouchableOpacity>
         
          </View>
        </View>
      </Modal>

      <View style={styles.eventsContainer}>
        <Text style={styles.eventsHeader}>Selected Date Events:</Text>
        {renderEvents()}
      </View>
    </View>
  );
};



export default MyCalendar;