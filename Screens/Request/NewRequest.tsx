import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, useColorScheme, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import DocumentPicker from 'react-native-document-picker'; // Ensure you have this package installed

const NewRequest: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const styles = createStyles(isDarkMode);

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  // File picker function
  const handleFileSelect = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setSelectedFile(result[0].name); // Get the selected file name
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled the picker');
      } else {
        throw err;
      }
    }
  };

  // Dropdown toggle function
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Request Status</Text>
        <TouchableOpacity onPress={() => console.log('Image pressed')}>
          <Image
            source={require('../../assets/icons/whitereload.png')} // Replace with your image path
            style={styles.headerImage}
          />
        </TouchableOpacity>
      </View>

      {/* File select and dropdown area */}
      <View style={styles.fileSelectRow}>
        <TouchableOpacity style={styles.fileSelectButton} onPress={toggleDropdown}>
          <Text style={styles.fileSelectText}>{selectedFile ? selectedFile : 'Request to Change'}</Text>
          <Image
            source={require('../../assets/icons/arrowdown.png')} // Replace with your arrow icon path
            style={styles.dropdownIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.Requestcontainer}>
        <Text>Request to Change</Text>
        <Text>Last Name</Text>
      </View>
      {/* Dropdown menu */}
      {dropdownVisible && (
        <View style={styles.dropdownMenu}>
          <Text style={styles.dropdownItem}>Option 1</Text>
          <Text style={styles.dropdownItem}>Option 2</Text>
          <Text style={styles.dropdownItem}>Option 3</Text>
        </View>
      )}
      {/* detail ui */}
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
    fileSelectRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingTop:10,
    } as ViewStyle,
    fileSelectButton: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      flex: 1,
      padding: 14,
      backgroundColor: isDarkMode ? '#DCEAFF' : '#DCEAFF',
      borderRadius: 5,
    } as ViewStyle,
    fileSelectText: {
      color:'#767676',
      fontSize: 16,
    } as TextStyle,
    dropdownIcon: {
      width: 25,
      height: 25,
      resizeMode: 'contain',
    } as ImageStyle,
    dropdownMenu: {
      backgroundColor: isDarkMode ? '#22395C' : '#fff',
      marginHorizontal: 16,
    borderBottomRightRadius:5,
    borderBottomLeftRadius:5,
    } as ViewStyle,
    dropdownItem: {
    borderBottomWidth:1,
    borderColor:'#ccc',
      fontSize: 16,
      paddingVertical: 10,
      paddingHorizontal: 10,
      alignItems:'center',
      color: isDarkMode ? '#fff' : '#000',
    } as TextStyle,
    Requestcontainer:{
         marginVertical: 16,
      marginHorizontal: 16,
      flex: 1,
      padding: 14,
      backgroundColor: isDarkMode ? '#DCEAFF' : '#DCEAFF',
      borderRadius: 5,
    },
  });

export default NewRequest;
