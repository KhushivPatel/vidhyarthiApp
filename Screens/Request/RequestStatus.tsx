import { View, Text, TouchableOpacity, Image, StyleSheet, useColorScheme, ScrollView } from 'react-native';
import React from 'react';

const RequestStatus = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={isDarkMode ? styles.containerDark : styles.container}>
      {/* Blue header with text and image */}
      <View style={isDarkMode ? styles.headerDark : styles.header}>
        <Text style={isDarkMode ? styles.headerTextDark : styles.headerText}>Request Status</Text>
        <TouchableOpacity onPress={() => console.log('Image pressed')}>
          <Image
            source={require('../../assets/icons/whitereload.png')}  // Replace with your image path
            style={isDarkMode ? styles.headerImageDark : styles.headerImage}
          />
        </TouchableOpacity>
      </View>

      {/* Scrollable content */}
      <ScrollView style={isDarkMode ? styles.scrollViewDark : styles.scrollView}>
        <View style={isDarkMode ? styles.mainContentDark : styles.mainContent}>
          {/* Two Texts on the Right Side */}
          <View style={isDarkMode ? styles.textContainerRightDark : styles.textContainerRight}>
            <Text style={[isDarkMode ? styles.textRightDark : styles.textRight, { fontWeight: 'bold', fontSize: 12 }]}>
              Request Name
            </Text>
            <Text style={isDarkMode ? styles.textRightDark : styles.textRight}>
              Father/ Mother/ Spouse Name
            </Text>
          </View>

          {/* Divider */}
          <View style={isDarkMode ? styles.dividerDark : styles.divider} />

          {/* Texts on Left and Right Side */}
          <View style={isDarkMode ? styles.detailContainerDark : styles.detailContainer}>
            <View style={isDarkMode ? styles.textRowDark : styles.textRow}>
              <Text style={isDarkMode ? styles.textLeftDark : styles.textLeft}>Status</Text>
              <Text style={isDarkMode ? styles.textRightDark : styles.textRight}>Pending</Text>
            </View>
            <View style={isDarkMode ? styles.textRowDark : styles.textRow}>
              <Text style={isDarkMode ? styles.textLeftDark : styles.textLeft}>Existing Record</Text>
              <Text style={isDarkMode ? styles.textRightDark : styles.textRight}>8021000046_PhotoId.pdf</Text>
            </View>
            <View style={isDarkMode ? styles.textRowDark : styles.textRow}>
              <Text style={isDarkMode ? styles.textLeftDark : styles.textLeft}>New Record</Text>
              <Text style={isDarkMode ? styles.textRightDark : styles.textRight}>8022050054_RequestedFile_404.php</Text>
            </View>
            <View style={isDarkMode ? styles.textRowDark : styles.textRow}>
              <Text style={isDarkMode ? styles.textLeftDark : styles.textLeft}>Requested On</Text>
              <Text style={isDarkMode ? styles.textRightDark : styles.textRight}>10-01-2023</Text>
            </View>
            <View style={isDarkMode ? styles.textRowDark : styles.textRow}>
              <Text style={isDarkMode ? styles.textLeftDark : styles.textLeft}>Remark By Faculty</Text>
              <Text style={isDarkMode ? styles.textRightDark : styles.textRight}>N/A</Text>
            </View>
          </View>
        </View>
        {/*  */}
        <View style={isDarkMode ? styles.mainContentDark : styles.mainContent}>
          {/* Two Texts on the Right Side */}
          <View style={isDarkMode ? styles.textContainerRightDark : styles.textContainerRight}>
            <Text style={[isDarkMode ? styles.textRightDark : styles.textRight, { fontWeight: 'bold', fontSize: 12 }]}>
              Request Name
            </Text>
            <Text style={isDarkMode ? styles.textRightDark : styles.textRight}>
              Father/ Mother/ Spouse Name
            </Text>
          </View>

          {/* Divider */}
          <View style={isDarkMode ? styles.dividerDark : styles.divider} />

          {/* Texts on Left and Right Side */}
          <View style={isDarkMode ? styles.detailContainerDark : styles.detailContainer}>
            <View style={isDarkMode ? styles.textRowDark : styles.textRow}>
              <Text style={isDarkMode ? styles.textLeftDark : styles.textLeft}>Status</Text>
              <Text style={isDarkMode ? styles.textRightDark : styles.textRight}>Pending</Text>
            </View>
            <View style={isDarkMode ? styles.textRowDark : styles.textRow}>
              <Text style={isDarkMode ? styles.textLeftDark : styles.textLeft}>Existing Record</Text>
              <Text style={isDarkMode ? styles.textRightDark : styles.textRight}>8021000046_PhotoId.pdf</Text>
            </View>
            <View style={isDarkMode ? styles.textRowDark : styles.textRow}>
              <Text style={isDarkMode ? styles.textLeftDark : styles.textLeft}>New Record</Text>
              <Text style={isDarkMode ? styles.textRightDark : styles.textRight}>8022050054_RequestedFile_404.php</Text>
            </View>
            <View style={isDarkMode ? styles.textRowDark : styles.textRow}>
              <Text style={isDarkMode ? styles.textLeftDark : styles.textLeft}>Requested On</Text>
              <Text style={isDarkMode ? styles.textRightDark : styles.textRight}>10-01-2023</Text>
            </View>
            <View style={isDarkMode ? styles.textRowDark : styles.textRow}>
              <Text style={isDarkMode ? styles.textLeftDark : styles.textLeft}>Remark By Faculty</Text>
              <Text style={isDarkMode ? styles.textRightDark : styles.textRight}>N/A</Text>
            </View>
          </View>
        </View>
        {/*  */}
        <View style={isDarkMode ? styles.mainContentDark : styles.mainContent}>
          {/* Two Texts on the Right Side */}
          <View style={isDarkMode ? styles.textContainerRightDark : styles.textContainerRight}>
            <Text style={[isDarkMode ? styles.textRightDark : styles.textRight, { fontWeight: 'bold', fontSize: 12 }]}>
              Request Name
            </Text>
            <Text style={isDarkMode ? styles.textRightDark : styles.textRight}>
              Father/ Mother/ Spouse Name
            </Text>
          </View>

          {/* Divider */}
          <View style={isDarkMode ? styles.dividerDark : styles.divider} />

          {/* Texts on Left and Right Side */}
          <View style={isDarkMode ? styles.detailContainerDark : styles.detailContainer}>
            <View style={isDarkMode ? styles.textRowDark : styles.textRow}>
              <Text style={isDarkMode ? styles.textLeftDark : styles.textLeft}>Status</Text>
              <Text style={isDarkMode ? styles.textRightDark : styles.textRight}>Pending</Text>
            </View>
            <View style={isDarkMode ? styles.textRowDark : styles.textRow}>
              <Text style={isDarkMode ? styles.textLeftDark : styles.textLeft}>Existing Record</Text>
              <Text style={isDarkMode ? styles.textRightDark : styles.textRight}>8021000046_PhotoId.pdf</Text>
            </View>
            <View style={isDarkMode ? styles.textRowDark : styles.textRow}>
              <Text style={isDarkMode ? styles.textLeftDark : styles.textLeft}>New Record</Text>
              <Text style={isDarkMode ? styles.textRightDark : styles.textRight}>8022050054_RequestedFile_404.php</Text>
            </View>
            <View style={isDarkMode ? styles.textRowDark : styles.textRow}>
              <Text style={isDarkMode ? styles.textLeftDark : styles.textLeft}>Requested On</Text>
              <Text style={isDarkMode ? styles.textRightDark : styles.textRight}>10-01-2023</Text>
            </View>
            <View style={isDarkMode ? styles.textRowDark : styles.textRow}>
              <Text style={isDarkMode ? styles.textLeftDark : styles.textLeft}>Remark By Faculty</Text>
              <Text style={isDarkMode ? styles.textRightDark : styles.textRight}>N/A</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    height: 58,
    backgroundColor: '#5287D7',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  headerImage: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
  },
  scrollView: {
    flexGrow: 1,
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
    padding: 5,
  },
  // Dark mode styles
  containerDark: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  headerDark: {
    height: 58,
    backgroundColor: '#22395C',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  headerTextDark: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  scrollViewDark: {
    flexGrow: 1,
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
    padding: 5,
  },
});

export default RequestStatus;
