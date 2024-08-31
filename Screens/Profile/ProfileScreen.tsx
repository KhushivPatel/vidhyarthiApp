// ProfileScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

const ProfileScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Profile</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Image source={require('../../assets/icons/menu.png')} style={styles.notification} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.mainContainer}>
        <View style={styles.profileSection}>
          <Image
            source={require('../../assets/images/login_img.png')}
            style={styles.profileImage}
          />
          <View style={styles.infoContainer}>
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.email}>johndoe@example.com</Text>
            <View style={styles.divider} />
            <View style={styles.boxContainer}>
              <View style={styles.box}>
                <Text style={styles.boxText}>PRN NO:</Text>
                <View style={styles.boxans}>
                  <Text style={styles.ans}>8021025147</Text>
                </View>
              </View>
              <View style={styles.box}>
                <Text style={styles.boxText}>Ph No:</Text>
                <View style={styles.boxans}>
                  <Text style={styles.ans}>9999999999</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>

      <ScrollView style={styles.studentcomponent} contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.studentDetailmain}>
          <View style={styles.studentmenu}>
            <TouchableOpacity>
              <Image source={require('../../assets/images/profile1.png')} style={styles.menuimg} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../../assets/images/profil2.png')} style={styles.menuimg} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../../assets/images/profile3.png')} style={styles.menuimg} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../../assets/images/profile4.png')} style={styles.menuimg} />
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
});

export default ProfileScreen;