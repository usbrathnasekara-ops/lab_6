
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const tips = [
  {
    title: '💧 Drink Water Regularly',
    description: 'Drink water throughout the day instead of waiting until you feel thirsty.',
  },
  {
    title: '🌅 Start Your Day',
    description: 'Drink a glass of water after waking up in the morning.',
  },
  {
    title: '🥗 Eat Water-Rich Foods',
    description: 'Include fruits and vegetables such as watermelon, cucumber and oranges.',
  },
  {
    title: '🏃 Stay Hydrated During Exercise',
    description: 'Remember to drink water before, during and after physical activity.',
  },
  {
    title: '☀️ Drink More in Hot Weather',
    description: 'Pay attention to your fluid intake when the weather is hot.',
  },
  {
    title: '📱 Use Reminders',
    description: 'Set regular reminders to develop a consistent hydration habit.',
  },
];

export default function TipsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Hydration Tips 💧</Text>
      <Text style={styles.subtitle}>
        Simple habits for a healthier lifestyle
      </Text>

      {tips.map((tip, index) => (
        <View style={styles.card} key={index}>
          <Text style={styles.title}>{tip.title}</Text>
          <Text style={styles.description}>
            {tip.description}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0FAFF',
    padding: 20,
  },
  heading: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#0077A8',
    marginTop: 35,
  },
  subtitle: {
    color: '#666',
    marginTop: 8,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 3,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#0077A8',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#555',
    lineHeight: 22,
  },
});
