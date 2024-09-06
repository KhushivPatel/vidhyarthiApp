import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, useColorScheme, TextInput, ScrollView, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import DocumentPicker from 'react-native-document-picker'; // Ensure you have this package installed

const NewRequest: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const styles = createStyles(isDarkMode);

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [selectedRequest, setSelectedRequest] = useState<string>('Request to Change');
  const [existingValue, setExistingValue] = useState<string>(''); // Placeholder for existing value
  const [inputPlaceholder, setInputPlaceholder] = useState<string>(''); // Placeholder for new value
  const [isOTPVisible, setIsOTPVisible] = useState<boolean>(false); // Control OTP visibility
   const [refreshKey, setRefreshKey] = useState<number>(0); // Key to force re-render

  // Function to reset all form states
  const resetForm = () => {
    setSelectedFile(null);
    setSelectedRequest('Request to Change');
    setExistingValue('');
    setInputPlaceholder('');
    setIsOTPVisible(false);
    setDropdownVisible(false);
    // Optionally update the key to force a refresh
    setRefreshKey((prevKey) => prevKey + 1);
  };


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

  // Dropdown item selection function
  const handleDropdownSelect = (item: string) => {
    setSelectedRequest(item);
    setDropdownVisible(false); // Hide dropdown after selection

    // Show OTP fields for Mobile Number and Email ID
    if (item === 'Mobile Number' || item === 'Email ID') {
      setIsOTPVisible(true);
    } else {
      setIsOTPVisible(false);
    }

    // Set existing value and input placeholder based on selection
    switch (item) {
      case 'Request to Change First Name':
        setExistingValue('First2050054'); // Example existing value
        setInputPlaceholder('New First Name');
        break;
      case 'Last Name':
        setExistingValue('Last2050054'); // Example existing value
        setInputPlaceholder('New Last Name');
        break;
      case 'Date Of Birth':
        setExistingValue('01/01/2000'); // Example existing value
        setInputPlaceholder('New Date of Birth');
        break;
      case 'Mobile Number':
        setExistingValue('1234567890'); // Example existing value
        setInputPlaceholder('New Mobile Number');
        break;
      case 'Email ID':
        setExistingValue('example@example.com'); // Example existing value
        setInputPlaceholder('New Email ID');
        break;
      case 'Photo':
        setExistingValue('Current Photo'); // Example existing value
        setInputPlaceholder('Upload New Photo');
        break;
      case 'Name as per Marksheet':
        setExistingValue('Name as per Marksheet'); // Example existing value
        setInputPlaceholder('New Name as per Marksheet');
        break;
      default:
        setExistingValue('');
        setInputPlaceholder('');
        break;
    }
  };

  // Dropdown toggle function
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <View style={styles.container}>
      {/* Fixed Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Request Status</Text>
        <TouchableOpacity onPress={resetForm}>
          <Image
            source={require('../../assets/icons/whitereload.png')} // Replace with your image path
            style={styles.headerImage}
          />
        </TouchableOpacity>
      </View>

      {/* Scrollable Content */}
      <ScrollView style={styles.scrollContent}>
        {/* File select and dropdown area */}
        <View style={styles.detailcontainer}>
          <View style={styles.fileSelectRow}>
            <TouchableOpacity style={styles.fileSelectButton} onPress={toggleDropdown}>
              <Text style={styles.fileSelectText}>{selectedFile ? selectedFile : selectedRequest}</Text>
              <Image
                source={require('../../assets/icons/arrowdown.png')} // Replace with your arrow icon path
                style={styles.dropdownIcon}
              />
            </TouchableOpacity>
          </View>
          {/* Dropdown menu */}
          {dropdownVisible && (
            <View style={styles.dropdownMenu}>
              <Text style={styles.Request}>Request to Change</Text>
              {[
                'First Name',
                'Last Name',
                'Mobile Number',
                'Email ID',
                'Date Of Birth',
                'Name as per Marksheet',
                'Photo',
              ].map((item) => (
                <TouchableOpacity key={item} onPress={() => handleDropdownSelect(item)}>
                  <Text style={styles.dropdownItem}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
          <View style={styles.textRow}>
            <Text style={styles.textLeft}>Request To Change</Text>
            <Text style={styles.textRight}>
              {selectedRequest.includes('First Name')
                ? 'First Name'
                : selectedRequest.includes('Last Name')
                ? 'Last Name'
                : selectedRequest.includes('Date Of Birth')
                ? 'Date Of Birth'
                : selectedRequest.includes('Mobile Number')
                ? 'Mobile Number'
                : selectedRequest.includes('Email ID')
                ? 'Email ID'
                : selectedRequest.includes('Photo')
                ? 'Photo'
                : selectedRequest.includes('Name as per Marksheet')
                ? 'Name as per Marksheet'
                : ''}
            </Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.textLeft}>
              Existing{' '}
              {selectedRequest.includes('First Name')
                ? 'First Name'
                : selectedRequest.includes('Last Name')
                ? 'Last Name'
                : selectedRequest.includes('Date Of Birth')
                ? 'Date Of Birth'
                : selectedRequest.includes('Mobile Number')
                ? 'Mobile Number'
                : selectedRequest.includes('Email ID')
                ? 'Email ID'
                : selectedRequest.includes('Photo')
                ? 'Photo'
                : selectedRequest.includes('Name as per Marksheet')
                ? 'Name as per Marksheet'
                : ''}
            </Text>
            <Text style={styles.textRight}>{existingValue}</Text>
          </View>
          <View style={styles.textRow}>
            <TextInput placeholder={inputPlaceholder} />
          </View>

          {/* Conditionally render the "Choose File" button based on the selected request */}
          {selectedRequest !== 'Mobile Number' && selectedRequest !== 'Email ID' && (
            <View style={styles.textRow}>
              <Text style={styles.attachtext}>
                {selectedRequest.includes('First Name')
                  ? 'Please Attach School Leaving Certificate *'
                  : selectedRequest.includes('Last Name')
                  ? 'Please Attach School Leaving Certificate *'
                  : selectedRequest.includes('Date Of Birth')
                  ? 'Please Attach LC/ Birth/ Passing Certificate of standard X or XII –mentioning Date of Birth *'
                  : selectedRequest.includes('Photo')
                  ? 'Upload New Photo'
                  : selectedRequest.includes('Name as per Marksheet')
                  ? 'Please Attach Standard X or XII or Last Qualifying Exam Certificate *'
                  : ''}
              </Text>
              <TouchableOpacity style={styles.ChooseButton}>
                <Text style={styles.ChooseButtonText}>Choose File</Text>
              </TouchableOpacity>
              <Text style={styles.text}>No File Selected</Text>
            </View>
          )}

          {/* OTP Container, visible only for Mobile Number and Email ID */}
          {isOTPVisible && (
            <>
              <View style={styles.otpcontainer}>
                <View style={styles.otptext}>
                  <TextInput style={styles.input} placeholder="Enter OTP" />
                </View>
                <View style={styles.otpbutton}>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Send OTP</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.otpcontainer}>
                <View style={styles.otptext}>
                  <TextInput style={styles.input} placeholder="Enter OTP" />
                </View>
                <View style={styles.otpbutton}>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Verify OTP</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </>
          )}

          <View style={styles.textRow}>
            <TextInput placeholder="Reason Of Request" />
          </View>
          <TouchableOpacity style={styles.ChooseButton}>
            <Text style={styles.ChooseButtonText}>Send Request</Text>
          </TouchableOpacity>
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
    scrollContent: {
      flex: 1,
    },
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
      width: 40,
      height: 20,
      resizeMode: 'contain',
    } as ImageStyle,
    detailcontainer: {
      paddingHorizontal: 16,
      paddingTop: 10,
    },
    fileSelectRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
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
      color: '#767676',
      fontSize: 16,
    } as TextStyle,
    dropdownIcon: {
      width: 25,
      height: 25,
      resizeMode: 'contain',
    } as ImageStyle,
    dropdownMenu: {
      marginBottom: 10,
      paddingBottom: 10,
      paddingTop: 10,
      backgroundColor:'#fff',
  borderRadius:10,
    } as ViewStyle,
    Request:{
        fontSize: 16,
         alignItems:'center',
    justifyContent:'center',
     fontWeight: 'bold',
     color: '#000',
     textAlign:'center',
       paddingBottom: 10,
    },
    dropdownItem: {
      borderBottomWidth: 1,
      borderColor: '#000',
      fontSize: 14,
      paddingVertical: 10,
      paddingHorizontal: 10,
      alignItems: 'center',
      color: '#000',
      borderRadius: 5,
    } as TextStyle,
    Requestcontainer: {
      marginVertical: 16,
      marginHorizontal: 16,
      flex: 1,
      padding: 14,
      backgroundColor: isDarkMode ? '#DCEAFF' : '#DCEAFF',
      borderRadius: 5,
    },
    textRight: {
      fontSize: 14,
      color: isDarkMode ? '#fff' : '#000',
      marginBottom: 4,
    } as TextStyle,
    textRow: {
      backgroundColor: isDarkMode ? '#869BBA' : '#DCEAFF',
      padding: 12,
      borderRadius: 10,
      marginBottom: 10,
    } as ViewStyle,
    textLeft: {
      fontSize: 16,
      fontWeight: 'bold',
      color: isDarkMode ? '#fff' : '#000',
    } as TextStyle,
    attachtext:{
      color:'#ff0000',
         fontWeight: 'bold',
    },
    ChooseButton: {
    width: '100%',
    height: 45,
    backgroundColor: '#5287D7', // Blue background color
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  ChooseButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  text:{
    color:'#000',
     fontWeight: 'bold',
  },
otpcontainer:{
    flexDirection:'row',
    justifyContent:'space-between',
   marginBottom:10,
},
otptext:{
   backgroundColor: isDarkMode ? '#869BBA' : '#DCEAFF',
   width:'67%',
   borderRadius:10,
},
otpbutton:{
  backgroundColor: '#5287D7', // Blue background color
   width:'30%',
 borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
},
  input: {
       alignItems:'center',
    justifyContent:'center',
  },
  button: {
  justifyContent:'center',
    alignItems:'center',

  },
  buttonText: {
    alignItems:'center',
    justifyContent:'center',
    color:'#fff',
    fontSize:14,
     fontWeight: 'bold',
  },

  });

export default NewRequest;
