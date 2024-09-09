import {
  View,
  Text,
  useColorScheme,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Idcard = () => {
  const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';
  const styles = createStyles(isDarkMode);
  const handleViewid= ()=>{
    navigation.navigate('View_id')
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Generate ID Card</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.mainContent}>
          <View style={styles.idContainer}>
            <View style={styles.programNameContainer}>
              <Text style={styles.programNameText}>Program Name</Text>
              <Text>Master of Commerce</Text>
            </View>
            <TouchableOpacity onPress={handleViewid}>
              <Image
                source={require('../../assets/icons/arrow.png')}
                style={styles.arrow}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.detailContainer}>
            <View style={styles.textRow}>
              <Text style={styles.textLeft}>
                Second Semester of MCOM-I-Accounting and Financial
                Management-2022-2023
              </Text>
            </View>
            <View style={styles.textRow}>
              <Text style={styles.textLeft}>
                First Semester of MCOM-I-Accounting and Financial
                Management-2022-2023
              </Text>
            </View>
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
      backgroundColor: '#B9D5FF',
      borderRadius: 10,
    } as ViewStyle,
    idContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#DCEAFF',
      borderRadius: 10,
      padding: 10,
    } as ViewStyle,
    arrow: {
      height: 20,
      width: 20,
      resizeMode: 'contain',
    } as ViewStyle,
    programNameContainer: {
      flex: 1,
      alignItems: 'flex-start', // Align texts to the right
    } as ViewStyle,
    programNameText: {
      fontSize: 16,
      color: isDarkMode ? '#fff' : '#000',
      fontWeight: 'bold',
      marginBottom: 4,
    } as TextStyle,
    textRight: {
      fontSize: 14,
      color: isDarkMode ? '#fff' : '#000',
      textAlign: 'right',
    } as TextStyle,
    textRow: {
      alignItems: 'flex-start',
      backgroundColor: isDarkMode ? '#5C78A0' : '#88AFE9',
      padding: 16,
      borderRadius: 10,
      marginBottom: 15,
    } as ViewStyle,
    textLeft: {
      fontSize: 16,
      color: isDarkMode ? '#fff' : '#000',
      fontWeight: 'bold',
    } as TextStyle,
    detailContainer: {
      paddingTop: 15,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 10,
    } as ViewStyle,
  });

export default Idcard;
