import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView, ScrollView } from 'react-native';


export default function HomeScreen() {
  return (
    <div>
      <SafeAreaView>
        <ScrollView style={styles.mainScrollContainer}>
          <View style={styles.mainInnterContainer}>
            <Text style={styles.title}>Welcome to Speech to Text App</Text>
            <View style={styles.transcriptionContainer}>
              <Text>Transcribed text shown here.</Text>
            </View>
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
  }
  
});
