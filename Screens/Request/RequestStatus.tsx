import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, useColorScheme, ScrollView, ViewStyle, TextStyle, ImageStyle } from 'react-native';

// Define types for props
interface DetailRowProps {
  label: string;
  value: string;
}

const RequestStatus: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const styles = createStyles(isDarkMode);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Request Status</Text>
        <TouchableOpacity onPress={() => console.log('Image pressed')}>
          <Image
            source={require('../../assets/icons/whitereload.png')} // Replace with your image path
            style={styles.headerImage}
          />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.mainContent}>
          <View style={styles.textContainerRight}>
            <Text style={[styles.textRight, styles.boldText, styles.smallText]}>Request Name</Text>
            <Text style={styles.textRight}>Father/ Mother/ Spouse Name</Text>
          </View>

          <View style={styles.divider} />

          {/* Individual rows */}
          <View style={styles.textRow}>
            <Text style={styles.textLeft}>Status</Text>
            <Text style={styles.textRight}>Pending</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.textLeft}>Existing Record</Text>
            <Text style={styles.textRight}>8021000046_PhotoId.pdf</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.textLeft}>New Record</Text>
            <Text style={styles.textRight}>8022050054_RequestedFile_404.php</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.textLeft}>Requested On</Text>
            <Text style={styles.textRight}>10-01-2023</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.textLeft}>Remark By Faculty</Text>
            <Text style={styles.textRight}>N/A</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

// Define styles
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
    } as ViewStyle,
    headerText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 18,
    } as TextStyle,
    headerImage: {
      width: 16,
      height: 16,
      resizeMode: 'contain',
    } as ImageStyle,
    scrollView: {
      flexGrow: 1,
    } as ViewStyle,
    mainContent: {
      marginVertical: 14,
      marginHorizontal: 9,
      backgroundColor: isDarkMode ? '#565E69' : '#DCEAFF',
      borderRadius: 10,
      padding: 10,
    } as ViewStyle,
    textContainerRight: {
      padding: 10,
      alignItems: 'flex-start',
    } as ViewStyle,
    textRight: {
      fontSize: 14,
      color: isDarkMode ? '#fff' : '#000',
      marginBottom: 4,
      flex:2,
      textAlign: 'right',
    } as TextStyle,
    divider: {
      height: 2,
      backgroundColor: isDarkMode ? '#fff' : '#000',
      marginVertical: 10,
    } as ViewStyle,
    textRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: isDarkMode ? '#869BBA' : '#B9D5FF',
      padding: 12,
      borderRadius: 10,
      marginBottom: 10,
    } as ViewStyle,
    textLeft: {
      fontSize: 16,
      flex:2,
      color: isDarkMode ? '#fff' : '#000',
      fontWeight: 'bold',
    } as TextStyle,
    detailContainer: {
      padding: 5,
    } as ViewStyle,
    boldText: {
      fontWeight: 'bold',
    } as TextStyle,
    smallText: {
      fontSize: 12,
    } as TextStyle,
  });

export default RequestStatus;
