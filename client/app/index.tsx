import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView, ScrollView } from 'react-native';


export default function HomeScreen() {
  return (
    <div>
      <SafeAreaView>
        <ScrollView style={styles.mainScrollContainer}>
          <View style={styles.mainInnterContainer}>
            <Text style={styles.title}>Welcome to Speech to Text App</Text>
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
  
});
