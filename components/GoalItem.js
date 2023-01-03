import { StyleSheet, View, Text, Pressable} from 'react-native';

function GoalItem({ itemData, setCourseGoals, courseGoals }) {
  function removeItemHandler() {
    for (let i = 0; i < courseGoals.length; i++) {
      setCourseGoals((currentGoals) => {
        return currentGoals.filter((goal) => goal.id !== itemData.item.id);
      });
    }
  }

  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={removeItemHandler}
        android_ripple={{ color: '#fefefefe' }}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <Text style={styles.goalText}>{itemData.item.value}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    width: '100%',
    margin: 8,
    borderRadius: 5,
    backgroundColor: '#5e0acc'
  },
  goalText: {
    padding: 10,
    color: '#ffffff'
  },
  pressed: {
    backgroundColor: 'red',
    opacity: 0.5
  }
});
