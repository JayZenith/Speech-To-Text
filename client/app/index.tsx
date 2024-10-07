import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRef, useState } from 'react';
import { Audio } from "expo-av";

export default function HomeScreen() {
  const [transcribedSpeech, setTranscribedSpech] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [isTranscribing, setIsTranscribing] = useState(false);
  const audioRecordingRef = useRef(new Audio.Recording())

  const startRecording = () => {
    setIsRecording(true);
    //record the speech
  };

  const stopRecording = async () => {
    setIsRecording(false);
    setIsTranscribing(true);
    //transcribe  recorded speech
    setIsTranscribing(false);
  };

  return (
    <div>
      <SafeAreaView>
        <ScrollView style={styles.mainScrollContainer}>
          <View style={styles.mainInnterContainer}>
            <Text style={styles.title}>Welcome to Speech to Text App</Text>
            <View style={styles.transcriptionContainer}>
              {isTranscribing ? (
                <ActivityIndicator size="small" color="#000" />
               ) : (
               <Text 
                style={{
                  ...styles.transcribedText, 
                  color: transcribedSpeech ? "#000" : "rgb(150,150,150)",
                }}>
                {transcribedSpeech || "Transcribed text shown here."}
              </Text>
              )}
              
            </View>
            <TouchableOpacity style={{...styles.microphoneButton, opacity: isRecording
              || isTranscribing ? 0.5 : 1
            }}
            onPressIn={()=>{}}
            onPressOut={()=>{}}
            disabled={isRecording || isTranscribing}
            >
              {isRecording ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <FontAwesome name="microphone" size={45} color="white" />
              )}
              
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </div>
  );
}

const styles = StyleSheet.create({
  mainScrollContainer:{
    height: "100%",
    width: "100%",
    padding: 20,
  },

  mainInnterContainer: {
    height: "100%",
    alignItems: "center", 
    justifyContent: "center",
  },
  title: {
    fontSize: 35,
    padding: 5,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  transcriptionContainer:{
    backgroundColor: "rgb(220, 220, 220)",
    width: "100%",
    height: 300, 
    padding: 20,
    marginBottom: 20,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  transcribedText: {
    width: "100%",
    fontSize: 20,
    padding: 5, 
    color: "#000",
    textAlign: "left",

  },
  microphoneButton:{
    backgroundColor:"red",
    width: 75,
    height: 75,
    marginTop: 100,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  
});
