import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from 'react-native';

// Define the type for a notification item
interface Notification {
  id: number;
  title: string;
  description: string;
  isNew: boolean;
}

const NotificationScreen: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: 1, title: 'Notification 1', description: 'This is the first notification', isNew: true },
    { id: 2, title: 'Notification 2', description: 'This is the second notification', isNew: true },
    { id: 3, title: 'Notification 3', description: 'This is the third notification', isNew: true },
    // Add more notifications if needed
  ]);

  // Function to mark all notifications as read
  const markAsRead = () => {
    setNotifications([]); // Clear all notifications
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Notification</Text>
        <Text style={styles.newHeaderText}>NEW</Text>
      </View>

      <View style={styles.notificationList}>
        {/* If there are notifications, display them */}
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <View key={notification.id} style={styles.notificationContainer}>
              <View style={styles.notificationContent}>
                <Text style={styles.notificationTitle}>{notification.title}</Text>
              </View>
              <Text style={styles.notificationDescription}>{notification.description}</Text>
            </View>
          ))
        ) : (
          // If no notifications, display a message
          <Text style={styles.noNotificationsText}>No notifications available</Text>
        )}

        <View style={styles.divider} />

        {/* Mark all as read button */}
        {notifications.length > 0 && (
          <TouchableOpacity onPress={markAsRead}>
            <Text style={styles.markAsRead}>Mark all as read</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

// Define the styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  } as ViewStyle,
  header: {
    height: 58,
    backgroundColor: '#5287D7',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 16,
  } as ViewStyle,
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  } as TextStyle,
  newHeaderText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    backgroundColor: '#FF0000',
    padding: 6,
    borderRadius: 6,
  } as TextStyle,
  notificationList: {
    padding: 20,
  } as ViewStyle,
  notificationContainer: {
    marginBottom: 16,
  } as ViewStyle,
  notificationContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  } as ViewStyle,
  notificationTitle: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  } as TextStyle,
  notificationDescription: {
    fontSize: 14,
    color: '#000',
    marginVertical: 8,
  } as TextStyle,
  noNotificationsText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
  } as TextStyle,
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  } as ViewStyle,
  markAsRead: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 20,
  } as TextStyle,
});

export default NotificationScreen;
