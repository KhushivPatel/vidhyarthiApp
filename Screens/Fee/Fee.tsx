/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, useColorScheme, ScrollView, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import feeData, { FeeData } from '../TempData/feeData'; // Importing fee data

const Fee: React.FC = () => {
  const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';
  const styles = createStyles(isDarkMode);

const goToRecipt = (fee: FeeData) => {
  navigation.navigate('E_receipt', { fee });
};


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Fees</Text>
        <TouchableOpacity onPress={() => console.log('Image pressed')}>
          <Image
            source={require('../../assets/icons/whitereload.png')} // Replace with your image path
            style={styles.headerImage}
          />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView}>
        {feeData.map((fee, index) => (
          <View key={index} style={styles.mainContent}>
            {/* Two Texts on the Right Side */}
            <View style={styles.textContainerRight}>
              <Text style={[styles.textRight, styles.boldText, styles.smallText]}>Application Id</Text>
              <Text style={styles.textRight}>{fee.applicationId}</Text>
            </View>

            {/* Divider */}
            <View style={styles.divider} />

            {/* Detail Rows */}
            <View style={styles.detailContainer}>
              <View style={[
                styles.textRow,
                { backgroundColor: fee.status === 'paid' ? '#80FFA3' : '#FF8686' },
              ]}>
                <Text style={styles.textLeft}>Status</Text>
                <Text style={styles.textRight}>{fee.status.charAt(0).toUpperCase() + fee.status.slice(1)}</Text>
              </View>
              {fee.status === 'paid' && (
                <>
                  <View style={styles.textRow}>
                    <Text style={styles.textLeft}>Transaction ID</Text>
                    <Text style={styles.textRight}>{fee.transactionId}</Text>
                  </View>
                  <View style={styles.textRow}>
                    <Text style={styles.textLeft}>Programme Instance Part Term</Text>
                    <Text style={styles.textRight}>{fee.programmeInstancePartTerm}</Text>
                  </View>
                  <View style={styles.textRow}>
                    <Text style={styles.textLeft}>Installment No.</Text>
                    <Text style={styles.textRight}>{fee.installmentNo}</Text>
                  </View>
                  <View style={styles.textRow}>
                    <Text style={styles.textLeft}>View Fees Receipt</Text>
                   <TouchableOpacity style={styles.button} onPress={() => goToRecipt(fee)}>
  <Text style={styles.textRight}>View</Text>
</TouchableOpacity>

                  </View>
                </>
              )}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

// Define styles
const createStyles = (isDarkMode: boolean) => StyleSheet.create({
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
    textAlign: 'right',
    flex: 2,
  } as TextStyle,
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
    fontWeight: 'bold',
    color: isDarkMode ? '#fff' : '#000',
    flex: 2,
  } as TextStyle,
  detailContainer: {
    padding: 5,
  } as ViewStyle,
  divider: {
    height: 2,
    backgroundColor: isDarkMode ? '#fff' : '#000',
    marginVertical: 10,
  } as ViewStyle,
  boldText: {
    fontWeight: 'bold',
  } as TextStyle,
  smallText: {
    fontSize: 12,
  } as TextStyle,
  button: {
    backgroundColor: '#8AABDC',
    padding: 5,
    borderRadius: 10,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Fee;
