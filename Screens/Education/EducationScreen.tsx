import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const EducationScreen = () => {
      const navigation = useNavigation();

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
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Educational List</Text>
      </View>

      {/* Main View Container with Border Radius */}
      <View style={styles.mainContainer}>
        {/* First View with Left Texts and Right Arrow Image */}
        <View style={styles.rowContainer}>
          <View style={styles.leftTextContainer}>
            <Text style={styles.mainText}>Degree</Text>
            <Text style={styles.subText}>SSC / 10th</Text>
          </View>
          <TouchableOpacity style={styles.arrowContainer} onPress={goToSsc}>
            <Image source={require('../../assets/icons/arrow.png')} style={styles.arrowImage} />
          </TouchableOpacity>
        </View>

        {/* Second View with only Text */}
        <View style={styles.textContainer}>
          <Text style={styles.additionalText}>
          Gujarat secondary and Higher Secondary Education Board
          </Text>
        </View>
      </View>
      <View style={styles.mainContainer}>
        {/* First View with Left Texts and Right Arrow Image */}
        <View style={styles.rowContainer}>
          <View style={styles.leftTextContainer}>
            <Text style={styles.mainText}>Degree</Text>
            <Text style={styles.subText}>HSC / 12th / Intermediate</Text>
          </View>
          <TouchableOpacity style={styles.arrowContainer} onPress={goToHsc}>
            <Image source={require('../../assets/icons/arrow.png')} style={styles.arrowImage} />
          </TouchableOpacity>
        </View>

        {/* Second View with only Text */}
        <View style={styles.textContainer}>
          <Text style={styles.additionalText}>
          Gujarat secondary and Higher Secondary Education Board
          </Text>
        </View>
      </View>
      <View style={styles.mainContainer}>
        {/* First View with Left Texts and Right Arrow Image */}
        <View style={styles.rowContainer}>
          <View style={styles.leftTextContainer}>
            <Text style={styles.mainText}>Degree</Text>
            <Text style={styles.subText}>Under Graduate Degree(UG)</Text>
          </View>
          <TouchableOpacity style={styles.arrowContainer} onPress={goToUg}>
            <Image source={require('../../assets/icons/arrow.png')} style={styles.arrowImage} />
          </TouchableOpacity>
        </View>

        {/* Second View with only Text */}
        <View style={styles.textContainer}>
          <Text style={styles.additionalText}>
       The Maharaja Sayajirao University of Baroda
          </Text>
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
  mainContainer: {
    marginBottom:14,
    marginTop:14,
    marginRight:9,
    marginLeft:9,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden', // Ensures children don't overflow rounded corners
    // elevation: 2, // Adds shadow for Android
    // shadowColor: '#000', // Adds shadow for iOS
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,
    // shadowRadius: 2,
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
});

export default EducationScreen;