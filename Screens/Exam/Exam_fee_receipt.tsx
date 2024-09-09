import { View, Text, useColorScheme, TouchableOpacity, StyleSheet, Image, TextStyle, ViewStyle } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Exam_fee_recipt = () => {
  const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';
  const styles = createStyles(isDarkMode);

  const handlefeerecipt = () => {
    navigation.navigate('Exam_fee_receipt');
  };
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Exam Fee Receipt</Text>
      </View>
      <View style={styles.msucontainer}>
        <Image
          source={require('../../assets/images/msu_logo.png')}
          style={styles.logo}></Image>
        <Text style={styles.logotext}>
          The Maharaja Sayajirao University Student Exam Fee Online Payment
          Receipt
        </Text>
        <Text style={styles.logotext}>Receipt No: 8021080267004070159005</Text>
      </View>
      {/* Main Content */}
      <View style={styles.mainContent}>
        {/* Two Texts on the Right Side */}
        <View style={styles.textContainerRight}>
          <Text style={[styles.textRight, {fontWeight: 'bold', fontSize: 12}]}>
            Faculty Name
          </Text>
          <Text style={styles.textRight}>Faculty of Fine Arts</Text>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Texts on Left and Right Side */}
        <View style={styles.detailContainer}>
          <View style={styles.textRow}>
            <Text style={styles.textLeft}>Student Name </Text>
            <Text style={styles.textRight}>Last1080267</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.textLeft}>PRN No.</Text>
            <Text style={styles.textRight}>8021080267</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.textLeft}>Branch Name</Text>
            <Text style={styles.textRight}>Civil Engineering</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.textLeft}>Course Name</Text>
            <Text style={styles.textRight}>Diploma in arts</Text>
          </View>

          {/* Column Layout for Grade and Percentage */}
          <View style={styles.viewColumn}>
            <View style={styles.equalView}>
              <Text style={styles.textLeft}>Payment Date</Text>
              <Text style={styles.textLeft}>29/05/2022</Text>
            </View>
            <View style={styles.equalView}>
              <Text style={styles.textLeft}>Transaction Amount</Text>
              <Text style={styles.textLeft}>₹ 920</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const createStyles = isDarkMode =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? '#1E1E1E' : '#fff',
    },
    header: {
      height: 58,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: isDarkMode ? '#22395C' : '#5287D7',
      paddingHorizontal: 16,
      borderBottomWidth: 1,
      borderBottomColor: isDarkMode ? 'transparent' : '#ddd',
    },
    headerText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff',
    },
    logo: {
      height: 84,
      width: 84,
    },
    mainContent: {
      marginTop: 14,
      marginLeft: 9,
      marginRight: 9,
      marginBottom: 14,
      backgroundColor: isDarkMode ? '#565E69' : '#DCEAFF',
      borderRadius: 10,
      padding: 10,
    },
    textContainerRight: {
      padding: 10,
      alignItems: 'flex-start',
    },
    textRight: {
      fontSize: 14,
      color: isDarkMode ? '#fff' : '#000',
      marginBottom: 4,
      textAlign: 'right',
    },
    divider: {
      height: 2,
      backgroundColor: isDarkMode ? '#fff' : '#000',
      marginVertical: 10,
    },
    textRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: isDarkMode ? '#869BBA' : '#B9D5FF',
      padding: 12,
      borderRadius: 10,
      marginBottom: 10,
    },
    textLeft: {
      fontSize: 16,
      color: isDarkMode ? '#fff' : '#000',
      fontWeight: 'bold',
    },
    detailContainer: {
      padding: 10,
    },
    viewRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    viewColumn: {
      flexDirection: 'row', // Set this to column
      alignItems: 'flex-start', // Align items to the left side
      marginBottom: 10,
      justifyContent: 'space-between',
    },
    equalView: {
      width: '48%', // Ensure each item takes full width
      backgroundColor: isDarkMode ? '#869BBA' : '#B9D5FF',
      padding: 12,
      borderRadius: 10,
      marginBottom: 10,
    },
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
    msucontainer: {
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logotext: {
      fontSize: 16,
      padding:10,
      color: isDarkMode ? '#fff' : '#000',
      fontWeight: 'bold',
    },
  });

export default Exam_fee_recipt