import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, useColorScheme, TouchableOpacity, ScrollView, StyleSheet, ViewStyle, TextStyle } from 'react-native';

// Define types for the detail row props
interface DetailRowProps {
  label: string;
  value: string;
}

const Result: React.FC = () => {
  const navigation = useNavigation();
    const goToResult = () => {
    navigation.navigate('Viewresult');
  };
  const isDarkMode = useColorScheme() === 'dark';
  const styles = createStyles(isDarkMode);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Result</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.mainContent}>
          <View style={styles.textContainerRight}>
            <Text style={[styles.textRight, styles.boldText, styles.smallText]}>Request Name</Text>
            <Text style={styles.textRight}>Father/ Mother/ Spouse Name</Text>
          </View>

          <View style={styles.detailContainer}>
            {/* Individual rows */}
            <View style={styles.textRow}>
              <Text style={styles.textLeft}>Specialization</Text>
              <Text style={styles.textRight}>General</Text>
            </View>
            <View style={styles.textRow}>
              <Text style={styles.textLeft}>Board / University</Text>
              <Text style={styles.textRight}>General</Text>
            </View>
            <View style={styles.textRow}>
              <Text style={styles.textLeft}>Semester</Text>
              <Text style={styles.textRight}>First Semester of MCOM-I-Accounting and Financial Management-2022-2023</Text>
            </View>
            <View style={styles.textRow}>
              <Text style={styles.textLeft}>Existing Record</Text>
              <Text style={styles.textRight}>8021000046_PhotoId.pdf</Text>
            </View>
            <View style={styles.textRow}>
              <Text style={styles.textLeft}>New Record</Text>
              <Text style={styles.textRight}>8022050054_RequestedFile_404.php</Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={goToResult}>
              <Text style={styles.buttonText}>View Result</Text>
            </TouchableOpacity>
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
    scrollView: {
      flexGrow: 1,
    } as ViewStyle,
    mainContent: {
      marginVertical: 10,
      marginHorizontal: 10,
      backgroundColor: isDarkMode ? '#565E69' : '#DCEAFF',
      borderRadius: 10,
    } as ViewStyle,
    textContainerRight: {
      padding: 10,
      alignItems: 'flex-start',
    } as ViewStyle,
    textRight: {
      fontSize: 14,
      color: isDarkMode ? '#fff' : '#000',
      marginBottom: 4,
      textAlign: 'right',
    } as TextStyle,
    textRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: isDarkMode ? '#5C78A0' : '#88AFE9',
      padding: 12,
      borderRadius: 10,
      marginBottom: 12,
    } as ViewStyle,
    textLeft: {
      fontSize: 16,
      color: isDarkMode ? '#fff' : '#000',
      fontWeight: 'bold',
      flex: 0.5, // Ensures it takes up available space
    } as TextStyle,
    textRight: {
      fontSize: 16,
      color: isDarkMode ? '#fff' : '#000',
      textAlign: 'right',
      flex: 1, // Takes more space to handle long text
    } as TextStyle,
    detailContainer: {
      paddingTop:12,
      paddingLeft:10,
      paddingRight:10,
      paddingBottom:20,
      backgroundColor:isDarkMode ? '#869BBA' : '#B9D5FF',
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    } as ViewStyle,
    boldText: {
      fontWeight: 'bold',
    } as TextStyle,
    smallText: {
      fontSize: 12,
    } as TextStyle,
    button: {
      marginTop: 10,
      paddingVertical: 15,
      paddingHorizontal: 20,
      backgroundColor:isDarkMode ? '#152947' : '#5287D7',
      borderRadius: 10,
      alignItems: 'center',
    } as ViewStyle,
    buttonText: {
      color: '#fff',
      fontSize: 16,
    } as TextStyle,
  });

export default Result;
