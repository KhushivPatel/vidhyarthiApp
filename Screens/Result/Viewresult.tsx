import { View, Text, useColorScheme, TouchableOpacity, Image, ScrollView, StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import React from 'react';

const Viewresult = () => {
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
            <Text style={styles.textRight}>Pratik Maheshkumar Damor</Text>
          </View>

          <View style={styles.divider} />

          {/* Individual rows */}
          <View style={styles.textRow}>
            <Text style={styles.textLeft}>PRN</Text>
            <Text style={styles.textRight}>8021025147</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.textLeft}>Faculty</Text>
            <Text style={styles.textRight}>Faculty of Fine Arts</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.textLeft}>Specialization</Text>
            <Text style={styles.textRight}>Painting</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.textLeft}>Seat Number</Text>
            <Text style={styles.textRight}>139405</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.textLeft}>Mother Name</Text>
            <Text style={styles.textRight}>Maryben</Text>
          </View>
        </View>
        {/* result */}
        <View style={styles.result}>
{/* msu logo and title */}
<View style={styles.msutitle}>
    <Image source={require('../../assets/images/msu_logo.png')}  style={styles.logo}/>
    <View style={styles.msutext}>

<Text style={styles.text}>The Maharaja Sayajirao University, Baroda</Text>
<Text style={styles.subtext}>Fatehgunj,Vadodara-390002,Gujarat(India)</Text>
    </View>
</View>
{/* text */}
<View style={styles.examdatetext}>

<Text style={{ fontSize: 13, color: 'black' ,alignItems:'center',
        textAlign:'center',}}>
  Statement of Grade for First Semester of MVA-I [Master of Visual Arts] Examination : November-2021
</Text>

</View>
{/* result marks */}
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
    result:{
        borderColor:'#000',
        borderWidth:1,
        margin:14,
    },
msutitle:{
   flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
       padding:10,
},
    logo:{
        height:55,
        width:55,
    },
    msutext:{
        padding:10,
        alignItems:'center',
    },
    text:{
        fontSize:14,
        color:'#000',
    },
    subtext:{
         fontWeight:'bold',
              fontSize:11,
        color:'#000',
    },
    examdatetext:{
        borderWidth:1,
        borderTopColor:'#000',
        borderBottomColor:'#000',
        borderRightColor:'#fff',
        borderLeftColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
      paddingRight:11,
      paddingLeft:11,
      paddingTop:10,
      paddingBottom:10,
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
    padding:10,
  } as TextStyle,
  subTextContainer: {
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderColor: '#000',
    // paddingLeft: 5,
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
export default Viewresult;
