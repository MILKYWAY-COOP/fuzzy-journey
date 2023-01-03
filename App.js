import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  function startAddGoalHandler() {
    setIsVisible(!isVisible);
  }

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: enteredGoal }
    ]);
    setEnteredGoal('');
  }

  return (
    <>
      <StatusBar style='dark'/>
      <View style={styles.appContainer}>
        <Button
          title='Add New Goal'
          color='grey'
          onPress={startAddGoalHandler}
        />
        <GoalInput
          goalInputHandler={goalInputHandler}
          addGoalHandler={addGoalHandler}
          enteredGoal={enteredGoal}
          isVisible={isVisible}
          startAddGoalHandler={startAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  itemData={itemData}
                  setCourseGoals={setCourseGoals}
                  courseGoals={courseGoals}
                />
              );
            }}
            keyExtractor={(item, index) => item.id}
            alwaysBounceVertical={true}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    width: '100%',
    padding: 50,
    paddingHorizontal: 16,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFD700'
  },

  goalsContainer: {
    flex: 3,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#202A44'
  }
});

// what does .splice() do?
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
