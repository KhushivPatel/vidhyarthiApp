import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const UgEducation = () => {
  return (
  <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Educational Details</Text>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        {/* Two Texts on the Right Side */}
        <View style={styles.textContainerRight}>
          <Text style={[styles.textRight, { fontWeight: 'bold', color: '#000', fontSize: 12 }]}>Degree</Text>
          <Text style={styles.textRight}>Under Graduate Degree(UG)</Text>
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
            <Text style={styles.textLeft}>Faculty / School / College Name</Text>
            <Text style={styles.textRight}>General</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.textLeft}>Specialization</Text>
            <Text style={styles.textRight}>General</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.textLeft}>Specialization</Text>
            <Text style={styles.textRight}>General</Text>
          </View>

          {/* ViewRow with equal-sized views and spacing */}
          <View style={styles.viewRow}>
            <View style={styles.equalView}>
              <Text style={styles.textLeft}>Grade</Text>
              <Text style={styles.textRight}>292 / 600</Text>
            </View>
            <View style={[styles.equalView, styles.equalViewRight]}>
              <Text style={styles.textLeft}>Percentage</Text>
              <Text style={styles.textRight}>48.67</Text>
            </View>
          </View>
          {/*  */}
            <View style={styles.textRow}>
            <Text style={styles.textLeft}>Specialization</Text>
            <Text style={styles.textRight}>General</Text>
          </View>
           <View style={styles.textRow}>
            <Text style={styles.textLeft}>Specialization</Text>
            <Text style={styles.textRight}>General</Text>
          </View>
           <View style={styles.textRow}>
            <Text style={styles.textLeft}>Specialization</Text>
            <Text style={styles.textRight}>General</Text>
          </View>
           <View style={styles.textRow}>
            <Text style={styles.textLeft}>Specialization</Text>
            <Text style={styles.textRight}>General</Text>
          </View>
           <View style={styles.textRow}>
            <Text style={styles.textLeft}>Specialization</Text>
            <Text style={styles.textRight}>General</Text>
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
});


export default UgEducation