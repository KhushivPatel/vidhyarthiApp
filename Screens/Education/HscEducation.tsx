/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'

const HscEducation = () => {
    const isDarkMode = useColorScheme() === 'dark';
return (
    <View style={isDarkMode ? styles.containerDark   : styles.container}>
      {/* Header */}
      <View style={isDarkMode ? styles.headerDark   : styles.header}>
        <Text style={isDarkMode ? styles.headerTextDark   : styles.headerText}>Educational Details</Text>
      </View>

      {/* Main Content */}
      <View style={isDarkMode ? styles.mainContentDark   : styles.mainContent}>
        {/* Two Texts on the Right Side */}
        <View style={isDarkMode ? styles.textContainerRightDark   : styles.textContainerRight}>
          <Text style={[isDarkMode ? styles.textRightDark   : styles.textRight, { fontWeight: 'bold', fontSize: 12 }]}>Degree</Text>
          <Text style={isDarkMode ? styles.textRightDark   : styles.textRight}>HSC / 12th / Intermediate</Text>
        </View>

        {/* Divider */}
        <View style={isDarkMode ? styles.dividerDark   : styles.divider} />

        {/* Texts on Left and Right Side */}
        <View style={isDarkMode ? styles.detailContainerDark   : styles.detailContainer}>
          <View style={isDarkMode ? styles.textRowDark   : styles.textRow}>
            <Text style={isDarkMode ? styles.textLeftDark   : styles.textLeft}>Specialization</Text>
            <Text style={isDarkMode ? styles.textRightDark   : styles.textRight}>General</Text>
          </View>
          <View style={isDarkMode ? styles.textRowDark   : styles.textRow}>
            <Text style={isDarkMode ? styles.textLeftDark   : styles.textLeft}>Board / University</Text>
            <Text style={isDarkMode ? styles.textRightDark   : styles.textRight}>General</Text>
          </View>
           <View style={isDarkMode ? styles.textRowDark   : styles.textRow}>
            <Text style={isDarkMode ? styles.textLeftDark   : styles.textLeft}>Board / University</Text>
            <Text style={isDarkMode ? styles.textRightDark   : styles.textRight}>General</Text>
          </View>
           <View style={isDarkMode ? styles.textRowDark   : styles.textRow}>
            <Text style={isDarkMode ? styles.textLeftDark   : styles.textLeft}>Board / University</Text>
            <Text style={isDarkMode ? styles.textRightDark   : styles.textRight}>General</Text>
          </View>
          <View style={isDarkMode ? styles.textRowDark   : styles.textRow}>
            <Text style={isDarkMode ? styles.textLeftDark   : styles.textLeft}>Specialization</Text>
            <Text style={isDarkMode ? styles.textRightDark   : styles.textRight}>General</Text>
          </View>

          {/* ViewRow with equal-sized views and spacing */}
          <View style={isDarkMode ? styles.viewRowDark   : styles.viewRow}>
            <View style={isDarkMode ? styles.equalViewDark   : styles.equalView}>
              <Text style={isDarkMode ? styles.textLeftDark   : styles.textLeft}>Grade</Text>
              <Text style={isDarkMode ? styles.textRightDark   : styles.textRight}>292 / 600</Text>
            </View>
            <View style={[isDarkMode ? styles.textRowDark   : styles.equalView, styles.equalViewRight]}>
              <Text style={isDarkMode ? styles.textLeftDark   : styles.textLeft}>Percentage</Text>
              <Text style={isDarkMode ? styles.textRightDark   : styles.textRight}>48.67</Text>
            </View>
          </View>
          {/*  */}
            <View style={isDarkMode ? styles.textRowDark   : styles.textRow}>
            <Text style={isDarkMode ? styles.textLeftDark   : styles.textLeft}>Specialization</Text>
            <Text style={isDarkMode ? styles.textRightDark   : styles.textRight}>General</Text>
          </View>
           <View style={isDarkMode ? styles.textRowDark   : styles.textRow}>
            <Text style={isDarkMode ? styles.textLeftDark   : styles.textLeft}>Specialization</Text>
            <Text style={isDarkMode ? styles.textRightDark   : styles.textRight}>General</Text>
          </View>
           <View style={isDarkMode ? styles.textRowDark   : styles.textRow}>
            <Text style={isDarkMode ? styles.textLeftDark   : styles.textLeft}>Specialization</Text>
            <Text style={isDarkMode ? styles.textRightDark   : styles.textRight}>General</Text>
          </View>
           <View style={isDarkMode ? styles.textRowDark   : styles.textRow}>
            <Text style={isDarkMode ? styles.textLeftDark   : styles.textLeft}>Specialization</Text>
            <Text style={isDarkMode ? styles.textRightDark   : styles.textRight}>General</Text>
          </View>
           <View style={isDarkMode ? styles.textRowDark   : styles.textRow}>
            <Text style={isDarkMode ? styles.textLeftDark   : styles.textLeft}>Specialization</Text>
            <Text style={isDarkMode ? styles.textRightDark   : styles.textRight}>General</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 58,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#5287D7',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
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
    backgroundColor: '#DCEAFF',
    borderRadius: 10,
    padding: 10,
  },
  textContainerRight: {
    padding: 10,
    alignItems: 'flex-start',
  },
  textRight: {
    fontSize: 14,
    color: '#000',
    marginBottom: 4,
    textAlign: 'right',
  },
  divider: {
    height: 2,
    backgroundColor: '#000',
    marginVertical: 10,
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#B9D5FF',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  textLeft: {
    fontSize: 16,
    color: '#000',
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
  equalView: {
    flex: 1,
    flexDirection: 'row', // Align children horizontally
    justifyContent: 'space-between', // Space items within the view
    backgroundColor: '#B9D5FF', // Optional: Background color to visualize the equal sizing
    padding: 12,
    borderRadius: 10,
  },
  equalViewRight: {
    marginLeft: 10, // Ensure there is a 10px space between the two views
  },
  // dark
  containerDark: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  headerDark: {
    height: 58,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#22395C',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    // borderBottomColor: '#ddd',
  },
  headerTextDark: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  mainContentDark: {
    marginTop: 14,
    marginLeft: 9,
    marginRight: 9,
    marginBottom: 14,
    backgroundColor: '#565E69',
    borderRadius: 10,
    padding: 10,
  },
  textContainerRightDark: {
    padding: 10,
    alignItems: 'flex-start',
  },
  textRightDark: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 4,
    textAlign: 'right',
  },
  dividerDark: {
    height: 2,
    backgroundColor: '#fff',
    marginVertical: 10,
  },
  textRowDark: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#869BBA',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  textLeftDark: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  detailContainerDark: {
    padding: 10,
  },
  viewRowDark: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  equalViewDark: {
    flex: 1,
    flexDirection: 'row', // Align children horizontally
    justifyContent: 'space-between', // Space items within the view
    backgroundColor: '#869BBA', // Optional: Background color to visualize the equal sizing
    padding: 12,
    borderRadius: 10,
  },
  equalViewRightDark: {
    marginLeft: 10, // Ensure there is a 10px space between the two views
  },
});


export default HscEducation