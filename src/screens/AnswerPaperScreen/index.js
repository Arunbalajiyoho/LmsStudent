import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useStateContext } from '../../context/StateContext/StateContext';
import Colors from '../../constants/Colors';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
// imports from constants
import { COLORS, SIZES } from "../../constants";
// import from expo vector icons
import {
  Ionicons
} from "@expo/vector-icons";

const AnswerPaperScreen = () => {

 // for colors
 const { colors, isDarkMode } = useStateContext();



  const RadioButton = ({ label, selected, onPress }) => {
    return (
      <TouchableOpacity style={styles.radioButton} onPress={onPress}>
        <View style={[styles.radioInner, selected && styles.radioSelected]} />
        <Text style={styles.radioLabel}>{label}</Text>
      </TouchableOpacity>
    );
  };
  

  const styles = StyleSheet.create({
    grandParent: {
      flex: 1,
      backgroundColor: isDarkMode ? Colors.greenAlpha : colors.background,
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
      marginLeft: SIZES.radius,
      color: colors.textColor,
    },
    back: {
  
      backgroundColor: colors.iconBackground,
      padding: SIZES.base,
      borderRadius: 10,
    },
    container: {
      // flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      // padding: 20,
      
    },
    timer: {
      fontSize: 16,
      marginBottom: 10,
    },
    questionNumber: {
      fontSize: 16,
      marginBottom: 10,
    },
    question: {
      fontSize: 20,
      marginBottom: 20,
    },
    radioButton: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
    },
    radioInner: {
      width: 20,
      height: 20,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: '#3498db',
      marginRight: 10,
    },
    radioSelected: {
      backgroundColor: '#3498db',
    },
    radioLabel: {
      fontSize: 16,
    },
    selectedAnswer: {
      marginTop: 20,
      fontSize: 16,
      fontWeight: 'bold',
    },
    startButton: {
      backgroundColor: '#3498db',
      padding: 10,
      borderRadius: 5,
      marginVertical: 10,
    },
    startButtonText: {
      color: '#fff',
      fontSize: 16,
    },
    buttonContainer: {
      flexDirection: 'row',
      marginTop: 20,
    },
    navigationButton: {
      flex: 1,
      backgroundColor: '#3498db',
      padding: 10,
      borderRadius: 5,
      marginHorizontal: 5,
    },
    navigationButtonText: {
      color: '#fff',
      fontSize: 16,
      textAlign: 'center',
    },
    completionMessage: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#27ae60', // Change color as needed
      textAlign: 'center',
      marginBottom: 20,
    },
  });


  const allQuestions = [
    { question: "What is the capital of France?", answers: ["Paris", "Berlin", "London", "Madrid"], correctAnswer: "Paris" },
    { question: "What is the largest mammal?", answers: ["Elephant", "Blue Whale", "Giraffe", "Lion"], correctAnswer: "Blue Whale" },
    // Add more questions as needed
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timer, setTimer] = useState(10); // Set initial time (in seconds)
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);

  useEffect(() => {
    let interval;

    if (quizStarted && !quizCompleted) {
      // Set up the timer interval
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer === 0) {
            // Time's up, move to the next question
            handleNextQuestion();
            return 10; // Reset timer for the next question
          } else {
            return prevTimer - 1;
          }
        });
      }, 1000);
    }

    // Clean up the interval when the component unmounts or when moving to the next question
    return () => clearInterval(interval);
  }, [quizStarted, quizCompleted, currentQuestionIndex]);

  const handleAnswerPress = (answer) => {
    // Check if the answer is being selected
    if (selectedAnswer !== answer) {
      // Toggle the selected answer
      setSelectedAnswer(answer);

      // Increment the count of questions answered
      setQuestionsAnswered((prevCount) => prevCount + 1);
    } else {
      // If the same answer is selected again (deselected), clear the selection
      setSelectedAnswer(null);
    }
  };

  const handleNextQuestion = () => {
    // Move to the next question
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    // Clear the selected answer for the next question
    setSelectedAnswer(null);
    // Reset the timer for the next question
    setTimer(10);

    // Check if all questions are answered
    if (currentQuestionIndex === allQuestions.length - 1) {
      // Set quiz completion state
      setQuizCompleted(true);
    }
  };

  const handlePreviousQuestion = () => {
    // Move to the previous question
    setCurrentQuestionIndex((prevIndex) => Math.max(0, prevIndex - 1));
    // Clear the selected answer for the previous question
    setSelectedAnswer(null);
    // Reset the timer for the previous question
    setTimer(10);
  };

  const handleStartQuiz = () => {
    // Start the quiz by setting the quizStarted state to true
    setQuizStarted(true);
  };

  return (

    <SafeAreaView style={styles.grandParent}>
      
       <KeyboardAwareScrollView 
       keyboardDismissMode="on-drag"
       contentContainerStyle={{
        flex:1,
       }}
    >
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.back}
          >
            <Ionicons name="ios-arrow-back" size={24} color={Colors.primary} />
            <View>
  
  

            </View>
          </TouchableOpacity>

          <View>
            <Text style={styles.heading}>Quesion Paper</Text>
          </View>
        </View>
    <View style={styles.container}>
      {/* Timer */}
      {quizStarted && !quizCompleted && <Text style={styles.timer}>{`Time Remaining: ${timer}s`}</Text>}

      {/* Question Number */}
      {!quizCompleted && (
        <Text style={styles.questionNumber}>{`Question ${currentQuestionIndex + 1} of ${allQuestions.length}`}</Text>
      )}

      {/* Question or Completion Message */}
      {quizCompleted ? (
        <Text style={styles.completionMessage}>{`Exam Completed!`}</Text>
      ) : (
        <View>
          <Text style={styles.question}>{allQuestions[currentQuestionIndex].question}</Text>
          {/* Answers */}
          {allQuestions[currentQuestionIndex].answers.map((answer, index) => (
            <RadioButton
              key={index}
              label={answer}
              selected={answer === selectedAnswer}
              onPress={() => handleAnswerPress(answer)}
            />
          ))}
        </View>
      )}

      {/* Display selected answer */}
      {selectedAnswer !== null && !quizCompleted && (
        <Text style={styles.selectedAnswer}>Selected Answer: {selectedAnswer}</Text>
      )}

      {/* Start Button */}
      {!quizStarted && !quizCompleted && (
        <TouchableOpacity style={styles.startButton} onPress={handleStartQuiz}>
          <Text style={styles.startButtonText}>Start Quiz</Text>
        </TouchableOpacity>
      )}

      {/* Navigation Buttons */}
      {quizStarted && !quizCompleted && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.navigationButton, { opacity: currentQuestionIndex === 0 ? 0.5 : 1 }]}
            onPress={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
          >
            <Text style={styles.navigationButtonText}>Previous</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navigationButton}
            onPress={handleNextQuestion}
          >
            <Text style={styles.navigationButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
    </KeyboardAwareScrollView>
    </SafeAreaView>
  
  );
};



export default AnswerPaperScreen;