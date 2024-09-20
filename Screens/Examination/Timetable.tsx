import {
  View,
  Text,
  useColorScheme,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextStyle,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {sampleTimeTableData} from '../TempData/TimeTableData'; // Adjust the path to your data file

const Timetable = () => {
  const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';
  const styles = createStyles(isDarkMode);

  const handleViewtimetable = (id: number) => {
    const timetableData = sampleTimeTableData.find(data => data.id === id);
    if (timetableData) {
      navigation.navigate('View_tt', {timetableData});
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Examination Details</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.mainContent}>
          <View style={styles.textContainerRight}>
            <Text style={[styles.textRight, styles.boldText, styles.smallText]}>
              Faculty Name
            </Text>
            <Text style={styles.textRight}>Faculty of Fine Arts</Text>
          </View>
          {sampleTimeTableData.map(timetable => (
            <View key={timetable.id} style={styles.detailContainer}>
              <View style={styles.textRow}>
                <Text style={styles.textLeft}>Semester</Text>
                <Text style={styles.textRight}>{timetable.semester}</Text>
              </View>
              <View style={styles.textRow}>
                <Text style={styles.textLeft}>Seat Number</Text>
                <Text style={styles.textRight}>{timetable.seatNumber}</Text>
              </View>
              <View style={styles.textRow}>
                <Text style={styles.textLeft}>Exam Event</Text>
                <Text style={styles.textRight}>{timetable.examEvent}</Text>
              </View>
              <View style={styles.textRow}>
                <Text style={styles.textLeft}>Appearance Type</Text>
                <Text style={styles.textRight}>{timetable.appearanceType}</Text>
              </View>
              <View style={styles.textRow}>
                <Text style={styles.textLeft}>Form No</Text>
                <Text style={styles.textRight}>{timetable.formNumber}</Text>
              </View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleViewtimetable(timetable.id)}>
                <Text style={styles.buttonText}>View Exam Time Table</Text>
              </TouchableOpacity>
            </View>
          ))}
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
      flex: 2,
      fontSize: 14,
      color: isDarkMode ? '#fff' : '#000',
      marginBottom: 4,
      textAlign: 'right',
    } as TextStyle,
    textRow: {
      // flex: 1,
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
      flex: 2,
    } as TextStyle,
    // textRight: {
    //   fontSize: 16,
    //   color: isDarkMode ? '#fff' : '#000',
    //   textAlign: 'right',
    //   flex: 1,
    // } as TextStyle,
    detailContainer: {
      flex: 2,
      paddingTop: 12,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 20,
      backgroundColor: isDarkMode ? '#869BBA' : '#B9D5FF',
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      marginBottom:10,
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
      backgroundColor: isDarkMode ? '#152947' : '#5287D7',
      borderRadius: 10,
      alignItems: 'center',
    } as ViewStyle,
    buttonText: {
      color: '#fff',
      fontSize: 16,
    } as TextStyle,
  });
export default Timetable;
