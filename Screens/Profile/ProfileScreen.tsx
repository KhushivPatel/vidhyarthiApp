// ProfileScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, useColorScheme } from 'react-native';

const ProfileScreen: React.FC = () => {
    const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={isDarkMode ? styles.containerDark  : styles.container}>
      <View style={isDarkMode ? styles.headerDark  : styles.header}>
        <Text style={isDarkMode ? styles.headerTextDark  : styles.headerText}>Profile</Text>
        <View style={isDarkMode ? styles.headerIconsDark  : styles.headerIcons}>
          <TouchableOpacity style={isDarkMode ? styles.iconButtonDark  : styles.iconButton}>
            <Image source={require('../../assets/icons/menu.png')} style={isDarkMode ? styles.notificationDark  : styles.notification} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={isDarkMode ? styles.mainContainerDark  : styles.mainContainer}>
        <View style={isDarkMode ? styles.profileSectionDark  : styles.profileSection}>
          <Image
            source={require('../../assets/images/login_img.png')}
            style={isDarkMode ? styles.profileImageDark  : styles.profileImage}
          />
          <View style={isDarkMode ? styles.infoContainerDark  : styles.infoContainer}>
            <Text style={isDarkMode ? styles.nameDark  : styles.name}>John Doe</Text>
            <Text style={isDarkMode ? styles.emailDark  : styles.email}>johndoe@example.com</Text>
            <View style={isDarkMode ? styles.dividerDark  : styles.divider} />
            <View style={isDarkMode ? styles.boxContainerDark  : styles.boxContainer}>
              <View style={isDarkMode ? styles.boxDark  : styles.box}>
                <Text style={isDarkMode ? styles.boxTextDark  : styles.boxText}>PRN NO:</Text>
                <View style={isDarkMode ? styles.boxansDark  : styles.boxans}>
                  <Text style={isDarkMode ? styles.ansDark  : styles.ans}>8021025147</Text>
                </View>
              </View>
              <View style={isDarkMode ? styles.boxDark  : styles.box}>
                <Text style={isDarkMode ? styles.boxTextDark  : styles.boxText}>Ph No:</Text>
                <View style={isDarkMode ? styles.boxansDark  : styles.boxans}>
                  <Text style={isDarkMode ? styles.ansDark  : styles.ans}>9999999999</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>

      <ScrollView style={isDarkMode ? styles.studentcomponentDark  : styles.studentcomponent} contentContainerStyle={styles.scrollViewContent}>
        <View style={isDarkMode ? styles.studentDetailmainDark  : styles.studentDetailmain}>
          <View style={isDarkMode ? styles.studentmenuDark  : styles.studentmenu}>
            <TouchableOpacity>
              <Image source={require('../../assets/images/profile1.png')} style={isDarkMode ? styles.menuimgDark  : styles.menuimg} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../../assets/images/profil2.png')} style={isDarkMode ? styles.menuimgDark  : styles.menuimg} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../../assets/images/profile3.png')} style={isDarkMode ? styles.menuimgDark  : styles.menuimg} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../../assets/images/profile4.png')} style={isDarkMode ? styles.menuimgDark  : styles.menuimg} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  notification: {
    height: 20,
    width: 20,
  },
  header: {
    height: 58,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#5287D7',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 16,
  },
  mainContainer: {
    padding: 20,
  },
  profileSection: {
    flexDirection: 'row',
  },
  profileImage: {
    width: 111,
    height: 111,
    borderRadius: 23,
    marginRight: 16,
  },
  infoContainer: {
    flex: 1,
    height: 111,
    backgroundColor: '#DCEAFF',
    borderRadius: 17,
    padding: 10,
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 12,
    color: '#555',
  },
  divider: {
    height: 1,
    backgroundColor: '#5D779E',
    marginTop: 5,
  },
  boxContainer: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box: {
    backgroundColor: '#B9D5FF',
    flex: 1,
    height: 45,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  boxText: {
    fontSize: 12,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  boxans: {
    backgroundColor: '#88AFE9',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  ans: {
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 30, // Center text vertically
  },
  studentcomponent: {
    paddingHorizontal: 10,
  },
  scrollViewContent: {
    flexGrow: 1,  // Ensures the content container takes up all available space
  },
  studentDetailmain: {
    backgroundColor: '#DCEAFF',
    borderRadius: 14,
    paddingBottom: 20, // Add padding to ensure it fills up to the bottom
    flex: 1,
  },
  studentmenu: {
    flexDirection: 'row',
    backgroundColor: '#B9D5FF',
    borderRadius: 14,
    height: 53,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  menuimg: {
    height: 20,
    width: 20,
  },
  // dark
  containerDark: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  notificationDark: {
    height: 20,
    width: 20,
  },
  headerDark: {
    height: 58,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#22395C',
    borderBottomWidth: 1,
    // borderBottomColor: '#ddd',
  },
  headerTextDark: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerIconsDark: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButtonDark: {
    marginLeft: 16,
  },
  mainContainerDark: {
    padding: 20,
  },
  profileSectionDark: {
    flexDirection: 'row',
  },
  profileImageDark: {
    width: 111,
    height: 111,
    borderRadius: 23,
    marginRight: 16,
  },
  infoContainerDark: {
    flex: 1,
    height: 111,
    backgroundColor: '#565E69',
    borderRadius: 17,
    padding: 10,
  },
  nameDark: {
    fontSize: 15,
    fontWeight: 'bold',
    color:'#fff',
  },
  emailDark: {
    fontSize: 12,
    color: '#ddd',
  },
  dividerDark: {
    height: 1,
    backgroundColor: '#5D779E',
    marginTop: 5,
  },
  boxContainerDark: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boxDark: {
    backgroundColor: '#869BBA',
    flex: 1,
    height: 45,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  boxTextDark: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  boxansDark: {
    backgroundColor: '#5C78A0',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  ansDark: {
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 30, // Center text vertically
    color:'#fff',
  },
  studentcomponentDark: {
    paddingHorizontal: 10,
  },
  scrollViewContentDark: {
    flexGrow: 1,  // Ensures the content container takes up all available space
  },
  studentDetailmainDark: {
    backgroundColor: '#565E69',
    borderRadius: 14,
    paddingBottom: 20, // Add padding to ensure it fills up to the bottom
    flex: 1,
  },
  studentmenuDark: {
    flexDirection: 'row',
    backgroundColor: '#869BBA',
    borderRadius: 14,
    height: 53,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  menuimgDark: {
    height: 20,
    width: 20,
  },
});

export default ProfileScreen;
