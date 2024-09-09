import {
  View,
  Text,
  TouchableOpacity,
  useColorScheme,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Exam_fee = () => {
  const navigation=useNavigation()
  const isDarkMode = useColorScheme() === 'dark';
  const styles = createStyles(isDarkMode);

  const handlefeerecipt = () =>{
    navigation.navigate('Exam_fee_receipt')
  }
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Exam Fee Details</Text>
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
            <Text style={styles.textLeft}>Specialization</Text>
            <Text style={styles.textRight}>General</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.textLeft}>Board / University</Text>
            <Text style={styles.textRight}>General</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.textLeft}>Grade</Text>
            <Text style={styles.textRight}>292 / 600</Text>
          </View>

          {/* Column Layout for Grade and Percentage */}
          <View style={styles.viewColumn}>
            <View style={styles.equalView}>
              <Text style={styles.textLeft}>Exam Fee Start Date</Text>
              <Text style={styles.textLeft}>29/05/2022</Text>
            </View>
            <View style={styles.equalView}>
              <Text style={styles.textLeft}>Exam Fee End Date</Text>
              <Text style={styles.textLeft}>26/06/2022</Text>
            </View>
          </View>
          {/* button */}
          <TouchableOpacity
            style={styles.button} // Pass the data here
          >
            <Text style={styles.buttonText}>Pay Exam Fees</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button} // Pass the data here
            onPress={handlefeerecipt}>
            <Text style={styles.buttonText}>Exam Fees Receipt</Text>
          </TouchableOpacity>
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
  });

export default Exam_fee;
