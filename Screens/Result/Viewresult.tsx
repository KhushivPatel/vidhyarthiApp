/* eslint-disable react-native/no-inline-styles */
import { View, Text, useColorScheme, ScrollView, StyleSheet, ViewStyle, TextStyle, Image } from 'react-native';
import React from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';

type RootStackParamList = {
  Viewresult: { student: any }; // Define the route parameters
};

type ViewResultRouteProp = RouteProp<RootStackParamList, 'Viewresult'>;

const Viewresult = () => {
  const route = useRoute<ViewResultRouteProp>();
  const { student } = route.params;

  const isDarkMode = useColorScheme() === 'dark';
  const styles = createStyles(isDarkMode);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>View Result</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.mainContent}>
          <View style={styles.textContainerRight}>
            <Text style={[styles.textRight, styles.boldText, styles.smallText]}>Name</Text>
            <Text style={styles.textRight}>{student.Name}</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.textRow}>
            <Text style={styles.textLeft}>PRN</Text>
            <Text style={styles.textRight}>{student.PRN}</Text>
          </View>

          <View style={styles.textRow}>
            <Text style={styles.textLeft}>Faculty</Text>
            <Text style={styles.textRight}>{student.Faculty}</Text>
          </View>

          <View style={styles.textRow}>
            <Text style={styles.textLeft}>Specialization</Text>
            <Text style={styles.textRight}>{student.Specialization}</Text>
          </View>

          <View style={styles.textRow}>
            <Text style={styles.textLeft}>Seat Number</Text>
            <Text style={styles.textRight}>{student.SeatNumber}</Text>
          </View>

          <View style={styles.textRow}>
            <Text style={styles.textLeft}>Mother Name</Text>
            <Text style={styles.textRight}>{student.MotherName}</Text>
          </View>
        </View>

        <View style={styles.result}>
          {/* MSU Logo and Title */}
          <View style={styles.msutitle}>
            <Image source={require('../../assets/images/msu_logo.png')} style={styles.logo} />
            <View style={styles.msutext}>
              <Text style={styles.text}>The Maharaja Sayajirao University, Baroda</Text>
              <Text style={styles.subtext}>Fatehgunj, Vadodara-390002, Gujarat (India)</Text>
            </View>
          </View>

          {/* Exam Date Text */}
          <View style={styles.examdatetext}>
            <Text style={{ fontSize: 13, color: 'black', textAlign: 'center' }}>
              {student.semester}
            </Text>
          </View>

          {/* Result Marks */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScrollView}>
            <View style={styles.verticalcontainer}>

            <View style={styles.horizontalContainer}>
              <View style={styles.columnContainer}>
                <View style={styles.course}>
                  <Text style={styles.ResultText}>Course Code</Text>
                  <Text style={styles.ResultText}>Course Name</Text>
                  <Text style={styles.ResultText}>AM</Text>
                  <View>
                  <Text style={styles.ResultText}>UA</Text>
                  <View style={styles.subTextContainer}>
                    <Text style={styles.subText}>Min</Text>
                    <Text style={styles.subText}>Max</Text>
                    <Text style={styles.subText}>Total</Text>
                  </View>
                  </View>
                  <View>
                  <Text style={styles.ResultText}>UA</Text>
                  <View style={styles.subTextContainer}>
                    <Text style={styles.subText}>Min</Text>
                    <Text style={styles.subText}>Max</Text>
                    <Text style={styles.subText}>Total</Text>
                  </View>
                  </View>
              <View>
                  <Text style={styles.ResultText}>UA</Text>
                  <View style={styles.subTextContainer}>
                    <Text style={styles.subText}>Min</Text>
                    <Text style={styles.subText}>Max</Text>
                    <Text style={styles.subText}>Total</Text>
                  </View>
                  </View>
                  <Text style={styles.ResultText}>Sts</Text>
                  <Text style={styles.ResultText}>Rmk</Text>
                </View>
               {/* <View style={styles.columnContainer}>
                  <Text style={styles.ResultText}>hifhdkjsfhjhdjfhkjshjhdsj</Text>
                </View> */}
              </View>
            </View>
            <View style={styles.horizontalContainer}>
              <View style={styles.columnContainer}>
                <View style={styles.course}>
                  <Text style={styles.ResultText}>Course Code</Text>
                  <Text style={styles.ResultText}>Course Name</Text>
                  <Text style={styles.ResultText}>AM</Text>
                  <View style={styles.subTextContainer}>
                    <Text style={styles.subText}>Min</Text>
                    <Text style={styles.subText}>Max</Text>
                    <Text style={styles.subText}>Total</Text>
                  </View>
                  <View style={styles.subTextContainer}>
                    <Text style={styles.subText}>Min</Text>
                    <Text style={styles.subText}>Max</Text>
                    <Text style={styles.subText}>Total</Text>
                  </View>
                  <View style={styles.subTextContainer}>
                    <Text style={styles.subText}>Min</Text>
                    <Text style={styles.subText}>Max</Text>
                    <Text style={styles.subText}>Total</Text>
                  </View>
                  <Text style={styles.ResultText}>Sts</Text>
                  <Text style={styles.ResultText}>Rmk</Text>
                </View>
               {/* <View style={styles.columnContainer}>
                  <Text style={styles.ResultText}>hifhdkjsfhjhdjfhkjshjhdsj</Text>
                </View> */}
              </View>
            </View>
            </View>
          </ScrollView>
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
      paddingBottom: 20,
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
      flex: 2,
      textAlign: 'right',
    } as TextStyle,
    divider: {
      height: 2,
      backgroundColor: isDarkMode ? '#fff' : '#000',
      marginVertical: 10,
    } as ViewStyle,
    dividerNoGap: {
      width: '100%',
      height: 3,
      backgroundColor: '#000',
      marginVertical: 0, // Removed any vertical margin to avoid gaps
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
      flex: 2,
      color: isDarkMode ? '#fff' : '#000',
      fontWeight: 'bold',
    } as TextStyle,
    boldText: {
      fontWeight: 'bold',
    } as TextStyle,
    smallText: {
      fontSize: 12,
    } as TextStyle,
    result: {
      borderColor: '#000',
      borderWidth: 1,
      margin: 14,
    } as ViewStyle,
    msutitle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
    } as ViewStyle,
    logo: {
      height: 55,
      width: 55,
    },
    msutext: {
      padding: 10,
      alignItems: 'center',
    },
    text: {
      fontSize: 14,
      color: '#000',
    },
    subtext: {
      fontWeight: 'bold',
      fontSize: 11,
      color: '#000',
    },
    examdatetext: {
      borderWidth: 1,
      borderColor: '#000',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 10,
    },
    horizontalScrollView: {
      flexGrow: 1,
    } as ViewStyle,
    verticalcontainer:{
      flexDirection:'column',
    },
    horizontalContainer: {
      flexDirection: 'row',
    } as ViewStyle,
    columnContainer: {
      flexDirection: 'row',
      flexWrap: 'nowrap',
      // marginBottom:10,
    } as ViewStyle,
    ResultText: {
      fontSize: 14,
      fontWeight: 'bold',
      textAlign: 'center',
      paddingHorizontal: 20,
      borderColor:'#000',
      borderBottomWidth:1,
      borderRightWidth:1,
    } as TextStyle,
    course: {
       flexDirection: 'row',
    } as ViewStyle,
    subTextContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
         borderColor:'#000',
      borderBottomWidth:1,
          // borderRightWidth:1,
    } as ViewStyle,
    subText: {
    fontSize: 14,
      fontWeight: 'bold',
      textAlign: 'center',
      paddingHorizontal: 20,
           borderColor:'#000',
          borderRightWidth:1,
    } as TextStyle,
  });

export default Viewresult;
