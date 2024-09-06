import { View, Text, Image, useColorScheme, ScrollView, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import React from 'react';

type ResultPrintProps = {
  student: Student;
};

const ResultPrint: React.FC<ResultPrintProps> = ({ student }) => {
  const isDarkMode = useColorScheme() === 'dark';
  const styles = createStyles(isDarkMode);

  return (
    <View style={styles.result}>
      {/* MSU Logo and Title */}
      <View style={styles.msutitle}>
        <Image source={require('../../assets/images/msu_logo.png')} style={styles.logo} />
        <View style={styles.msutext}>
          <Text style={styles.text}>The Maharaja Sayajirao University, Baroda</Text>
          <Text style={styles.subtext}>Fatehgunj, Vadodara-390002, GujaIndia)rat (</Text>
        </View>
      </View>

      {/* Exam Date Text */}
      <View style={styles.examdatetext}>
        <Text style={{ fontSize: 13, color: 'black', textAlign: 'center' }}>
          Statement of Grade for First Semester of MVA-I [Master of Visual Arts] Examination: November-2021
        </Text>
      </View>

      {/* Result Marks */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScrollView}>
        <View style={styles.horizontalContainer}>
          <View style={styles.columnContainer}>
            <Text style={styles.headerText}>Course Code</Text>
            <Text style={styles.headerText}>Course Name</Text>
            <Text style={styles.headerText}>AM</Text>

            {/* UA Section */}
            <View style={styles.sectionContainer}>
              <Text style={styles.mainText}>UA</Text>
              <View style={styles.subTextContainer}>
                <Text style={styles.subText}>Max</Text>
                <Text style={styles.subText}>Min</Text>
                <Text style={styles.subText}>Obt</Text>
              </View>
            </View>

            {/* IA Section */}
            <View style={styles.sectionContainer}>
              <Text style={styles.mainText}>IA</Text>
              <View style={styles.subTextContainer}>
                <Text style={styles.subText}>Max</Text>
                <Text style={styles.subText}>Min</Text>
                <Text style={styles.subText}>Obt</Text>
              </View>
            </View>

            {/* Another UA Section */}
            <View style={styles.sectionContainer}>
              <Text style={styles.mainText}>UA</Text>
              <View style={styles.subTextContainer}>
                <Text style={styles.subText}>Max</Text>
                <Text style={styles.subText}>Min</Text>
                <Text style={styles.subText}>Obt</Text>
              </View>
            </View>

            <Text style={styles.headerText}>Sts</Text>
            <Text style={styles.headerText}>Rmk</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const createStyles = (isDarkMode: boolean) =>
  StyleSheet.create({
    result: {
      borderColor: '#000',
      borderWidth: 1,
      margin: 14,
    },
    msutitle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
    },
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
      borderTopColor: '#000',
      borderBottomColor: '#000',
      borderRightColor: '#fff',
      borderLeftColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      paddingRight: 11,
      paddingLeft: 11,
      paddingTop: 10,
      paddingBottom: 10,
    },
    horizontalScrollView: {
      flexGrow: 1,
    } as ViewStyle,
    horizontalContainer: {
      flexDirection: 'row',
    } as ViewStyle,
    columnContainer: {
      flexDirection: 'row',
      flexWrap: 'nowrap',
    } as ViewStyle,
    headerText: {
      fontSize: 14,
      fontWeight: 'bold',
      marginRight: 10,
      textAlign: 'center',
      borderRightWidth: 1,
      borderColor: '#000',
    } as TextStyle,
    sectionContainer: {
    } as ViewStyle,
    mainText: {
      fontSize: 14,
      fontWeight: 'bold',
      textAlign: 'center',
      borderRightWidth: 1,
      borderColor: '#000',
      padding: 10,
    } as TextStyle,
    subTextContainer: {
      borderRightWidth: 1,
      borderTopWidth: 1,
      borderColor: '#000',
      flexDirection: 'row',
      flexWrap: 'nowrap',
    } as ViewStyle,
    subText: {
      fontSize: 12,
      textAlign: 'center',
      marginBottom: 2,
      borderLeftWidth: 1,
      borderColor: '#000',
    } as TextStyle,
  });

export default ResultPrint;
