import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const NotificationScreen = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Notification 1', description: 'This is the first notification', isNew: true },
    { id: 2, title: 'Notification 2', description: 'This is the second notification', isNew: true },
    { id: 3, title: 'Notification 3', description: 'This is the third notification', isNew: true },
    // Add more notifications if needed
  ]);

  // Function to mark all notifications as read
  const markAsRead = () => {
    setNotifications([]);
  };

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerText}>Notification</Text>
        <Text style={styles.newHeaderText}>NEW</Text>
      </View>
<View style={styles.notificationlist}>

      {/* Notification list */}
      {notifications.map((notification) => (
        <View key={notification.id} style={styles.notificationContainer}>
          <View style={styles.notificationContent}>
            <Text style={styles.notificationTitle}>{notification.title}</Text>
          </View>
          <Text style={styles.notificationDescription}>{notification.description}</Text>
        </View>
      ))}

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 16,
    backgroundColor: '#f5f5f5',
  },
  header: {
    height: 58,
    backgroundColor: '#5287D7',  // Blue background color for the header
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 16,  // Space below the header
  },
  headerText: {
    color: 'white',  // White text color for better contrast against the blue background
    fontWeight: 'bold',
    fontSize: 18,
  },
  newHeaderText: {
    color: '#fff',  // White text color for "NEW"
    fontSize: 12,
    fontWeight:'bold',
    backgroundColor:'#FF0000',
    padding:6,
    borderRadius:6,
  },
  notificationlist:{
    padding:20,
  },
  notificationContainer: {
    marginBottom: 16,
  },
  notificationContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  notificationTitle: {
      color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  notificationDescription: {
    fontSize: 14,
    color: '#000',
    marginVertical: 8,
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
  },
  markAsRead: {
    color: 'black',  // Default color
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 20,
  },
  markAsReadHover: {
    color: '#80FFA3',  // Hover color
  },
});

export default NotificationScreen;
