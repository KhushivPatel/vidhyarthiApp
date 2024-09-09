import { View, Text, ScrollView, useColorScheme, StyleSheet, TouchableOpacity, ViewStyle, TextStyle } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const View_tt = () => {
     const navigation = useNavigation();
    const isDarkMode = useColorScheme() === 'dark';
    const styles = createStyles(isDarkMode);
   
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Time Table</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.mainContent}>
          <View style={styles.textContainerRight}>
            <Text style={[styles.textRight]}>
              Programme Name
            </Text>
            <Text style={styles.textRight}>
              Master of Visual Arts-2021-2022
            </Text>
          </View>

          <View style={styles.detailContainer}>
            <Text style={styles.boldText}>
              First Semester of MVA-I-Painting-2021-2022
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

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

    detailContainer: {
      flex: 2,
      paddingTop: 12,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 20,
      backgroundColor: isDarkMode ? '#869BBA' : '#B9D5FF',
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    } as ViewStyle,
    boldText: {
      // fontWeight: 'bold',
      color: '#000',
    } as TextStyle,
  });

export default View_tt