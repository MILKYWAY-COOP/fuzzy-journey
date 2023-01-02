import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Your Course Goal!' style={styles.textInput} />
        <Button title='ADD GOAL' />
     </View>
      <View>
        <Text>Course Goals.</Text>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    flex: 1,
    flexDirection: 'column',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }, 
  textInput: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#cccccc',
    marginRight: 10,
    padding: 10,
    borderRadius: 5,
  }
});
