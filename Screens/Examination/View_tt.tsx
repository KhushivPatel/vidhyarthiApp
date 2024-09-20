import {
  View,
  Text,
  ScrollView,
  useColorScheme,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {TimeTableData} from '../TempData/TimeTableData';

const View_tt = () => {
  const route = useRoute();
  const {timetableData} = route.params as {timetableData: TimeTableData};

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
            <Text style={styles.textRight}>Programme Name</Text>
            <Text style={styles.textRight}>
              {/* Master of Visual Arts-2021-2022 */}
              {timetableData.programName}
            </Text>
          </View>

          <View style={styles.detailContainer}>
            <Text style={styles.boldText}>{timetableData.semester}</Text>
          </View>
        </View>
        {/* id card */}
        <View style={styles.gridview}>
          <Text style={styles.griditem}> Paper Name </Text>
          <Text style={styles.griditem}> Teaching Learning Method </Text>
          <Text style={styles.griditem}> Paper Date </Text>
          <Text style={styles.griditem}> Time Slot </Text>
        </View>
        <View style={styles.gridview2}>
          <Text style={styles.griditem2}>{timetableData.paper1}</Text>
          <Text style={styles.griditem2}>{timetableData.teachingMethod}</Text>
          <Text style={styles.griditem2}>{timetableData.paperDate}</Text>
          <Text style={styles.griditem2}>{timetableData.timeSlot}</Text>
        </View>
        <View style={styles.gridview2}>
          <Text style={styles.griditem2}>{timetableData.paper2}</Text>
          <Text style={styles.griditem2}>{timetableData.teachingMethod}</Text>
          <Text style={styles.griditem2}>{timetableData.paperDate}</Text>
          <Text style={styles.griditem2}>{timetableData.timeSlot}</Text>
        </View>
        <View style={styles.gridview2}>
          <Text style={styles.griditem2}>{timetableData.paper3}</Text>
          <Text style={styles.griditem2}>{timetableData.teachingMethod}</Text>
          <Text style={styles.griditem2}>{timetableData.paperDate}</Text>
          <Text style={styles.griditem2}>{timetableData.timeSlot}</Text>
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
    griditem: {
      fontSize: 12,
      borderColor: '#000',
      borderRightWidth: 1,
      borderBottomWidth: 1,
      height: 65,
      width: 97.3,
      color: '#000',
      padding: 10,
      textAlignVertical: 'center',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    gridview: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      borderColor: '#000',
      borderLeftWidth: 1,
      borderTopWidth: 1,
      marginRight: 10,
      marginLeft: 10,
    },
    gridview2: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      borderColor: '#000',
      borderLeftWidth: 1,
      marginRight: 10,
      marginLeft: 10,
    },
    griditem2: {
      fontSize: 10,
      borderColor: '#000',
      borderRightWidth: 1,
      borderBottomWidth: 1,
      height: 70,
      width: 97.3,
      color: '#000',
      padding: 10,
      textAlignVertical: 'center',
      textAlign: 'center',
    },
  });

export default View_tt;
