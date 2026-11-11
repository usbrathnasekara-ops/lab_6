
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.icon}>💧</Text>

        <Text style={styles.heading}>
          About Hydration Reminder
        </Text>

        <Text style={styles.description}>
          Hydration Reminder is a mobile application designed
          to help users maintain healthy hydration habits.
        </Text>

        <View style={styles.card}>
          <Text style={styles.title}>Our Features</Text>

          <Text style={styles.item}>✓ Daily water intake tracking</Text>
          <Text style={styles.item}>✓ Customizable water goals</Text>
          <Text style={styles.item}>✓ Scheduled notifications</Text>
          <Text style={styles.item}>✓ Hydration tips</Text>
          <Text style={styles.item}>✓ Progress monitoring</Text>
        </View>

        <Text style={styles.footer}>
          Stay hydrated, stay healthy! 💙
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0FAFF',
  },
  content: {
    padding: 25,
    alignItems: 'center',
  },
  icon: {
    fontSize: 75,
    marginTop: 50,
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#0077A8',
    textAlign: 'center',
    marginTop: 20,
  },
  description: {
    fontSize: 16,
    color: '#555',
    lineHeight: 25,
    textAlign: 'center',
    marginTop: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    padding: 22,
    borderRadius: 18,
    marginTop: 30,
    elevation: 3,
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#0077A8',
    marginBottom: 15,
  },
  item: {
    fontSize: 15,
    color: '#444',
    marginVertical: 8,
  },
  footer: {
    fontSize: 16,
    color: '#0077A8',
    fontWeight: 'bold',
    marginTop: 30,
  },
});
