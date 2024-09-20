import { View, Text, StyleSheet, Image, TouchableOpacity, useColorScheme, ScrollView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const EducationScreen = () => {
      const navigation = useNavigation();
       const isDarkMode = useColorScheme() === 'dark';

     const goToSsc = () => {
    navigation.navigate('SscEducation');
  };
     const goToHsc = () => {
    navigation.navigate('HscEducation');
  };
     const goToUg = () => {
    navigation.navigate('UgEducation');
  };
  return (
    <View style={isDarkMode ? styles.containerDark : styles.container}>
      <View style={isDarkMode ? styles.headerDark : styles.header}>
        <Text style={isDarkMode ? styles.headerTextDark : styles.headerText}>
          Educational List
        </Text>
      </View>

      {/* Main View Container with Border Radius */}
      <ScrollView>

      <View
        style={isDarkMode ? styles.mainContainerDark : styles.mainContainer}>
        {/* First View with Left Texts and Right Arrow Image */}
        <View
          style={isDarkMode ? styles.rowContainerDark : styles.rowContainer}>
          <View
            style={
              isDarkMode
                ? styles.leftTextContainerDark
                : styles.leftTextContainer
            }>
            <Text style={isDarkMode ? styles.mainTextDark : styles.mainText}>
              Degree
            </Text>
            <Text style={isDarkMode ? styles.subTextDark : styles.subText}>
              SSC / 10th
            </Text>
          </View>
          <TouchableOpacity
            style={
              isDarkMode ? styles.arrowContainerDark : styles.arrowContainer
            }
            onPress={goToSsc}>
            <Image
              source={require('../../assets/icons/arrow.png')}
              style={isDarkMode ? styles.arrowImageDark : styles.arrowImage}
            />
          </TouchableOpacity>
        </View>

        {/* Second View with only Text */}
        <View
          style={isDarkMode ? styles.textContainerDark : styles.textContainer}>
          <Text
            style={
              isDarkMode ? styles.additionalTextDark : styles.additionalText
            }>
            Gujarat secondary and Higher Secondary Education Board
          </Text>
        </View>
      </View>
      <View
        style={isDarkMode ? styles.mainContainerDark : styles.mainContainer}>
        {/* First View with Left Texts and Right Arrow Image */}
        <View
          style={isDarkMode ? styles.rowContainerDark : styles.rowContainer}>
          <View
            style={
              isDarkMode
                ? styles.leftTextContainerDark
                : styles.leftTextContainer
            }>
            <Text style={isDarkMode ? styles.mainTextDark : styles.mainText}>
              Degree
            </Text>
            <Text style={isDarkMode ? styles.subTextDark : styles.subText}>
              HSC / 12th / Intermediate
            </Text>
          </View>
          <TouchableOpacity
            style={
              isDarkMode ? styles.arrowContainerDark : styles.arrowContainer
            }
            onPress={goToHsc}>
            <Image
              source={require('../../assets/icons/arrow.png')}
              style={isDarkMode ? styles.arrowImageDark : styles.arrowImage}
            />
          </TouchableOpacity>
        </View>

        {/* Second View with only Text */}
        <View
          style={isDarkMode ? styles.textContainerDark : styles.textContainer}>
          <Text
            style={
              isDarkMode ? styles.additionalTextDark : styles.additionalText
            }>
            Gujarat secondary and Higher Secondary Education Board
          </Text>
        </View>
      </View>
      <View
        style={isDarkMode ? styles.mainContainerDark : styles.mainContainer}>
        {/* First View with Left Texts and Right Arrow Image */}
        <View
          style={isDarkMode ? styles.rowContainerDark : styles.rowContainer}>
          <View
            style={
              isDarkMode
                ? styles.leftTextContainerDark
                : styles.leftTextContainer
            }>
            <Text style={isDarkMode ? styles.mainTextDark : styles.mainText}>
              Degree
            </Text>
            <Text style={isDarkMode ? styles.subTextDark : styles.subText}>
              Under Graduate Degree(UG)
            </Text>
          </View>
          <TouchableOpacity
            style={
              isDarkMode ? styles.arrowContainerDark : styles.arrowContainer
            }
            onPress={goToUg}>
            <Image
              source={require('../../assets/icons/arrow.png')}
              style={isDarkMode ? styles.arrowImageDark : styles.arrowImage}
            />
          </TouchableOpacity>
        </View>

        {/* Second View with only Text */}
        <View
          style={isDarkMode ? styles.textContainerDark : styles.textContainer}>
          <Text
            style={
              isDarkMode ? styles.additionalTextDark : styles.additionalText
            }>
            The Maharaja Sayajirao University of Baroda
          </Text>
        </View>
      </View>
      </ScrollView>
      <Text style={isDarkMode ? styles.logotextDark : styles.logotext}>
        The Maharaja Sayajirao University - Baroda
      </Text>
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
  mainContainer: {
    marginBottom: 14,
    marginTop: 14,
    marginRight: 9,
    marginLeft: 9,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden', // Ensures children don't overflow rounded corners
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#DCEAFF',
    borderTopLeftRadius: 10, // Rounded top corners
    borderTopRightRadius: 10,
  },
  leftTextContainer: {
    flex: 1,
  },
  mainText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#000',
  },
  subText: {
    fontSize: 14,
    color: '#000',
    marginTop: 4,
  },
  arrowContainer: {
    paddingLeft: 10,
  },
  arrowImage: {
    width: 15, // Width of the arrow icon
    height: 15, // Height of the arrow icon
    resizeMode: 'contain', // Keep aspect ratio of the arrow
  },
  textContainer: {
    padding: 16,
    backgroundColor: '#B9D5FF',
    borderBottomLeftRadius: 10, // Rounded bottom corners
    borderBottomRightRadius: 10,
  },
  additionalText: {
    fontSize: 12,
    color: '#000',
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
  mainContainerDark: {
    marginBottom: 14,
    marginTop: 14,
    marginRight: 9,
    marginLeft: 9,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden', // Ensures children don't overflow rounded corners
  },
  rowContainerDark: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#565E69',
    borderTopLeftRadius: 10, // Rounded top corners
    borderTopRightRadius: 10,
  },
  leftTextContainerDark: {
    flex: 1,
  },
  mainTextDark: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#fff',
  },
  subTextDark: {
    fontSize: 14,
    color: '#fff',
    marginTop: 4,
  },
  arrowContainerDark: {
    paddingLeft: 10,
  },
  arrowImageDark: {
    width: 15, // Width of the arrow icon
    height: 15, // Height of the arrow icon
    resizeMode: 'contain', // Keep aspect ratio of the arrow
  },
  textContainerDark: {
    padding: 16,
    backgroundColor: '#869BBA',
    borderBottomLeftRadius: 10, // Rounded bottom corners
    borderBottomRightRadius: 10,
  },
  additionalTextDark: {
    fontSize: 12,
    color: '#fff',
  },
  logotext: {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
});

export default EducationScreen;
