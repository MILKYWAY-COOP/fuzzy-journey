import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native';

function GoalInput({
  goalInputHandler,
  addGoalHandler,
  enteredGoal,
  isVisible,
  startAddGoalHandler
}) {
  return (
    <Modal visible={isVisible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image source={require('../assets/images/img1.jpg')} style={styles.image} />
        <TextInput
          placeholder='Your Course Goal!'
          style={styles.inputContainer.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.btns}>
          <View style={styles.btn}>
            <Button
              title='ADD GOAL'
              color={'#5e0acc'}
              onPress={addGoalHandler}
              buttonStyle={styles.button}
            />
          </View>
          <View style={styles.btn}>
            <Button title='Exit' onPress={startAddGoalHandler} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    backgroundColor: 'aqua',

    textInput: {
      width: '80%',
      borderWidth: 1,
      borderColor: '#cccccc',
      marginRight: 10,
      padding: 10,
      borderRadius: 5,
      marginBottom: 15
    }
  },
  btns: {
    width: '100%',
    flexDirection: 'row',
    marginRight: 10,
    padding: 10
  },
  btn: {
    width: 100,
    marginHorizontal: 10
  }, 
  image: {
    width: 200,
    height: 200,
    margin: 20,
    borderRadius: 20
  }
});
