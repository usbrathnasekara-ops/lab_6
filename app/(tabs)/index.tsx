
import * as Notifications from 'expo-notifications';
import { useState } from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function HomeScreen() {
  const [water, setWater] = useState(0);
  const [goal, setGoal] = useState(2000);
  const [interval, setInterval] = useState('60');
  const [reminderActive, setReminderActive] = useState(false);

  const addWater = (amount: number) => {
    setWater((previous) => previous + amount);
  };

  const progress = Math.min((water / goal) * 100, 100);

  const startReminder = async () => {
    try {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();

      let finalStatus = existingStatus;

      if (existingStatus !== 'granted') {
        const { status } =
          await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }

      if (finalStatus !== 'granted') {
        Alert.alert(
          'Permission required',
          'Please enable notification permissions.'
        );
        return;
      }

      const minutes = Math.max(1, Number(interval) || 60);

      await Notifications.cancelAllScheduledNotificationsAsync();

      await Notifications.scheduleNotificationAsync({
        content: {
          title: '💧 Time to drink water!',
          body: 'Stay hydrated. Take a moment to drink some water.',
          sound: true,
        },
        trigger: {
          type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
          seconds: minutes * 60,
          repeats: true,
        },
      });

      setReminderActive(true);
      Alert.alert('Success', 'Your hydration reminders are now active!');
    } catch (error) {
      Alert.alert('Error', 'Unable to schedule notifications.');
      console.log(error);
    }
  };

  const stopReminder = async () => {
    await Notifications.cancelAllScheduledNotificationsAsync();
    setReminderActive(false);
    Alert.alert('Reminder stopped', 'Notifications have been cancelled.');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Hydration Reminder 💧</Text>
      <Text style={styles.subtitle}>Stay healthy. Stay hydrated.</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Today's Water Intake</Text>
        <Text style={styles.amount}>{water} ml</Text>
        <Text style={styles.goal}>Daily Goal: {goal} ml</Text>

        <View style={styles.progressBackground}>
          <View
            style={[styles.progressFill, { width: `${progress}%` }]}
          />
        </View>

        <Text style={styles.percentage}>
          {Math.round(progress)}% Completed
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Add Water Intake</Text>

      <View style={styles.buttonRow}>
        {[150, 250, 500].map((amount) => (
          <TouchableOpacity
            key={amount}
            style={styles.waterButton}
            onPress={() => addWater(amount)}
          >
            <Text style={styles.buttonText}>+{amount} ml</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={styles.resetButton}
        onPress={() => setWater(0)}
      >
        <Text style={styles.resetText}>Reset Today's Intake</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Daily Water Goal</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={String(goal)}
        onChangeText={(value) => setGoal(Number(value) || 0)}
        placeholder="Enter daily goal in ml"
      />

      <Text style={styles.sectionTitle}>Reminder Interval</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={interval}
        onChangeText={setInterval}
        placeholder="Enter minutes"
      />

      <TouchableOpacity
        style={styles.startButton}
        onPress={startReminder}
      >
        <Text style={styles.startText}>Start Reminders</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.stopButton}
        onPress={stopReminder}
      >
        <Text style={styles.stopText}>Stop Reminders</Text>
      </TouchableOpacity>

      <Text style={styles.status}>
        Status: {reminderActive ? 'Active ✅' : 'Inactive'}
      </Text>

      <View style={{ height: 40 }} />
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
    marginBottom: 25,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 25,
    borderRadius: 20,
    alignItems: 'center',
    elevation: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  amount: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#0099CC',
    marginTop: 15,
  },
  goal: {
    color: '#666',
    marginVertical: 10,
  },
  progressBackground: {
    height: 12,
    width: '100%',
    backgroundColor: '#DDEEF5',
    borderRadius: 10,
    marginTop: 10,
  },
  progressFill: {
    height: 12,
    backgroundColor: '#00A5E9',
    borderRadius: 10,
  },
  percentage: {
    marginTop: 12,
    color: '#0077A8',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 12,
    color: '#333',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  waterButton: {
    backgroundColor: '#0099CC',
    padding: 15,
    borderRadius: 12,
    flex: 1,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  resetButton: {
    marginTop: 12,
    padding: 12,
    alignItems: 'center',
  },
  resetText: {
    color: '#D9534F',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#DDEEF5',
  },
  startButton: {
    backgroundColor: '#00A5E9',
    padding: 17,
    borderRadius: 12,
    marginTop: 25,
    alignItems: 'center',
  },
  startText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  stopButton: {
    backgroundColor: '#FCE8E8',
    padding: 17,
    borderRadius: 12,
    marginTop: 12,
    alignItems: 'center',
  },
  stopText: {
    color: '#C0392B',
    fontWeight: 'bold',
  },
  status: {
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
    color: '#0077A8',
  },
});
