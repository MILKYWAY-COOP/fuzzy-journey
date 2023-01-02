import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList
} from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals((currentGoals) => [...currentGoals, { id: Math.random().toString(), value: enteredGoal }]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Your Course Goal!'
          style={styles.inputContainer.textInput}
          onChangeText={goalInputHandler}
        />
        <Button title='ADD GOAL' color='#202A44' onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item.value}</Text>
              </View>
            )
          }}
          keyExtractor={(item, index) => item.id}
          alwaysBounceVertical={true}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    width: '100%',
    padding: 50,
    paddingHorizontal: 16,
    flex: 1,
    flexDirection: 'column'
  },

  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',

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

  goalsContainer: {
    flex: 3,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#202A44'
  },

  goalItem: {
    width: '100%',
    margin: 8,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#5e0acc'
  },

  goalText: {
    color: '#ffffff'
  }
});
