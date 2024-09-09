import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle, TextStyle, Image, useColorScheme, ScrollView } from 'react-native';
import NotiData from '../TempData/NotiData'; // Import the data

// Define the type for a notification item (matches NotiData)
interface Notification {
  id: number;
  title: string;
  description: string;
    date:string;
}

const NotificationScreen: React.FC = () => {
    const isDarkMode = useColorScheme() === 'dark';
  const styles = createStyles(isDarkMode);

  // Use NotiData to set the initial state of notifications
  const [notifications, setNotifications] = useState<Notification[]>(
    NotiData.map((item, index) => ({
      id: index + 1,
      title: item.title,
      description: item.subtitle,
      date: item.date,
    }))
  );

  // Function to mark all notifications as read
  const markAsRead = () => {
    setNotifications([]); // Clear all notifications
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Notification</Text>
      </View>
<ScrollView style={styles.scroll}>

      <View style={styles.notificationList}>
         <View style={styles.textRow}>
                <Image
                  source={require('../../assets/images/msunoti.png')}
                  style={styles.notificationImage}
                />
                <View style={styles.notificationTextContainer}>
                  <Text style={styles.notificationTitle}>Orientation for academic year 2024 on 24/12/2023 </Text>
                  <Text style={styles.notificationDescription}>Orientation for academic year 2024 on 24/12/2023 Orientation for academic year 2024 on 24/12/2023  Orientation for academic year 2024 on 24/12/2023 Orientation for </Text>
                </View>
              </View>
        {/* If there are notifications, display them */}
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <View key={notification.id} style={styles.notificationContainer}>
              <View style={styles.textRow}>
      
                <View style={styles.notificationTextContainer}>
                  <View style={styles.padding}>

                  <Text style={styles.notificationTitle}>{notification.title}</Text>
                  <Text style={styles.notificationDescription}>{notification.description}</Text>
                  </View>
                <View style={styles.datecontainer}>
                  <Text style={styles.datetext}>
                   {notification.date}
                  </Text>
                </View>
                </View>
              </View>
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
</ScrollView>
    </View>
  );
};

// Define the styles
const createStyles = (isDarkMode: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? '#1E1E1E' : '#f5f5f5',
    } as ViewStyle,
    header: {
      height: 58,
      backgroundColor: isDarkMode ? '#22395C' : '#5287D7',
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
    notificationList: {
      padding: 20,
    } as ViewStyle,
    notificationContainer: {
      marginBottom: 16,
    } as ViewStyle,
    notificationTitle: {
      color: '#000',
      fontWeight: 'bold',
      fontSize: 16,
    } as TextStyle,
    notificationDescription: {
      fontSize: 14,
      color: '#000',
      marginTop: 4,
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
      color: isDarkMode ? 'white' : 'black',
      textAlign: 'center',
      fontWeight: 'bold',
      marginTop: 20,
    } as TextStyle,
    textRow: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: isDarkMode ? '#565E69' : '#DCEAFF',
      // padding: 12,
      borderRadius: 10,
      marginBottom: 10,
    } as ViewStyle,
    notificationImage: {
      width: 100,
      height: 100,
      borderRadius: 50, // Circular shape
      marginRight: 10,
    } as ViewStyle,
    notificationTextContainer: {
      flex: 1, // Allow text to take up remaining space
    } as ViewStyle,
    datecontainer: {
      backgroundColor: isDarkMode ? '#869BBA' : '#B9D5FF',
      borderBottomRightRadius: 10,
      borderBottomLeftRadius: 10,
      padding: 10,
    },
    padding: {
      padding: 10,
    },
    datetext: {
      color: '#002E74',
      fontWeight: 'bold',
    },
    scroll:{
      flexGrow:1,
    },
  });

export default NotificationScreen;
