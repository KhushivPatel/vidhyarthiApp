import { View, Text, useColorScheme, StyleSheet, ViewStyle, TextStyle, Image, ScrollView } from 'react-native';
import React from 'react';

const E_recipt = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const styles = createStyles(isDarkMode);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>E-Receipt</Text>
      </View>
      {/* main container */}

      <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.maincontainer}>
        <View style={styles.reciptnamedetail}>
          <View style={styles.leftView}>
            <Text style={styles.numbertext}>Receipt No.</Text>
            <Text style={styles.number}>1011008715628741105551</Text>
          </View>
          <View style={styles.divider} />
          <View style={[styles.rightView,{alignItems: 'flex-end'}]}>
            <Text style={styles.numbertext}>Payment Date</Text>
            <Text style={styles.number}>17/09/2022</Text>
          </View>
        </View>
        {/* Image container */}
        <View style={styles.msucontainer}>
          <Image source={require('../../assets/images/logo2.png')} style={styles.msulogo} />
          <Text style={styles.msu}>The Maharaja Sayajirao University, Baroda</Text>
          <Text style={styles.recipttext}>Student Admission Online Payment E-Receipt 2022-2023</Text>
        </View>
        {/* Details container */}
        <View style={styles.detailsContainer}>
          <View style={styles.detailItem}>
            <Text style={styles.detailtextbold}>Academic Year</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailtext}>2022-2023</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailtextbold}>PRN</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailtext}>8022050054</Text>
          </View>
        </View>
        {/*  */}
        <View style={styles.detailsContainer}>
          <View style={styles.Course}>
            <Text style={styles.detailtextbold}>Faculty Name</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailtext}>Faculty of Commerce</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailtextbold}>Name</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailtext}>8022050054_RequestedFile_404.php</Text>
          </View>
        </View>
        {/*  */}
        <View style={styles.detailsContainer}>
          <View style={styles.Course}>
            <Text style={styles.detailtextbold}>Course Name</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailtext}>Master of Commerce : Accounting and Financial Management</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailtextbold}>Mobile No.</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailtext}>9999999999</Text>
          </View>
        </View>
        {/*  */}
        <View style={styles.detailsContainer}>
          <View style={styles.Course}>
            <Text style={styles.detailtextbold}>Course Year</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailtext}>Master of Commerce-I-2022-2023</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailtextbold}>Fees Name</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailtext}>Admission Fee : Admission Fees - Regular - Boys - [MSURP]</Text>
          </View>
        </View>
        {/*  */}
        <View style={styles.detailsContainer}>
          <View style={styles.Course}>
            <Text style={styles.detailtextbold}>Building Name</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailtext}>Deep Ashwinbhai Patel Centre for Post-Graduate Studies-(33824)</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailtextbold}>Installment No.</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailtext}>1</Text>
          </View>
        </View>
        {/*  */}
          <View style={styles.reciptnamedetail}>
          <View style={styles.leftView}>
            <Text style={styles.numbertext}>Total Amount</Text>
            <Text style={styles.number}>₹8,360.00</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.rightView}>
            <Text style={styles.numbertext}>Amount Paid</Text>
            <Text style={styles.number}>₹8,360.00</Text>
          </View>
        </View>
        {/*  */}
         <View style={styles.feeTotalsContainer}>
  <View style={styles.feeHeader}>
    <Text style={[styles.feeHeaderTextBold,{fontSize:14,fontWeight:'bold',}]}>Faculty Name</Text>
  </View>
  <View style={styles.feeItem}>
    <Text style={[styles.feeHeaderTextBold,{fontSize:14,fontWeight:'bold',}]}>Faculty of Commerce</Text>
  </View>
  <View style={styles.feeItem1}>
    <Text style={[styles.feeHeaderTextBold,{fontSize:14,fontWeight:'bold',}]}>Name</Text>
  </View>
</View>
  {/* amount details by stap */}
          <View style={styles.feeTotalsContainer}>
  <View style={styles.feeHeader}>
    <Text style={styles.feeHeaderTextBold}>Tuition Fees</Text>
  </View>
  <View style={styles.feeItem}>
    <Text style={styles.feeHeaderTextBold}>Tuition Fees</Text>
  </View>
  <View style={styles.feeItem1}>
    <Text style={styles.feeHeaderTextBold}>₹1,200.00</Text>
  </View>
</View>
  {/* amount details by stap */}
          <View style={styles.feeTotalsContainer}>
  <View style={styles.feeHeader}>
    <Text style={styles.feeHeaderTextBold}>Common Fees</Text>
  </View>
  <View style={styles.feeItem}>
    <Text style={styles.feeHeaderTextBold}>Fee Sub Head</Text>
  </View>
  <View style={styles.feeItem1}>
    <Text style={styles.feeHeaderTextBold}>₹1,200.00</Text>
  </View>
</View>
  {/* amount details by stap */}
          <View style={styles.feeTotalsContainer}>
  <View style={styles.feeHeader}>
    <Text style={styles.feeHeaderTextBold}>Common Fees</Text>
  </View>
  <View style={styles.feeItem}>
    <Text style={styles.feeHeaderTextBold}>Fee Sub Head</Text>
  </View>
  <View style={styles.feeItem1}>
    <Text style={styles.feeHeaderTextBold}>₹1,200.00</Text>
  </View>
</View>
  {/* amount details by stap */}
          <View style={styles.feeTotalsContainer}>
  <View style={styles.feeHeader}>
    <Text style={styles.feeHeaderTextBold}>Common Fees</Text>
  </View>
  <View style={styles.feeItem}>
    <Text style={styles.feeHeaderTextBold}>Fee Sub Head</Text>
  </View>
  <View style={styles.feeItem1}>
    <Text style={styles.feeHeaderTextBold}>₹1,200.00</Text>
  </View>
</View>
  {/* amount details by stap */}
          <View style={styles.feeTotalsContainer}>
  <View style={styles.feeHeader}>
    <Text style={styles.feeHeaderTextBold}>Common Fees</Text>
  </View>
  <View style={styles.feeItem}>
    <Text style={styles.feeHeaderTextBold}>Fee Sub Head</Text>
  </View>
  <View style={styles.feeItem1}>
    <Text style={styles.feeHeaderTextBold}>₹1,200.00</Text>
  </View>
</View>
  {/* amount details by stap */}
          <View style={styles.feeTotalsContainer}>
  <View style={styles.feeHeader}>
    <Text style={styles.feeHeaderTextBold}>Common Fees</Text>
  </View>
  <View style={styles.feeItem}>
    <Text style={styles.feeHeaderTextBold}>Fee Sub Head</Text>
  </View>
  <View style={styles.feeItem1}>
    <Text style={styles.feeHeaderTextBold}>₹1,200.00</Text>
  </View>
</View>
  {/* amount details by stap */}
          <View style={styles.feeTotalsContainer}>
  <View style={styles.feeHeader}>
    <Text style={styles.feeHeaderTextBold}>Common Fees</Text>
  </View>
  <View style={styles.feeItem}>
    <Text style={styles.feeHeaderTextBold}>Fee Sub Head</Text>
  </View>
  <View style={styles.feeItem1}>
    <Text style={styles.feeHeaderTextBold}>₹1,200.00</Text>
  </View>
</View>
  {/* amount details by stap */}
          <View style={styles.feeTotalsContainer}>
  <View style={styles.feeHeader}>
    <Text style={styles.feeHeaderTextBold}>Common Fees</Text>
  </View>
  <View style={styles.feeItem}>
    <Text style={styles.feeHeaderTextBold}>Fee Sub Head</Text>
  </View>
  <View style={styles.feeItem1}>
    <Text style={styles.feeHeaderTextBold}>₹1,200.00</Text>
  </View>
</View>
  {/* amount details by stap */}
          <View style={styles.feeTotalsContainer}>
  <View style={styles.feeHeader}>
    <Text style={styles.feeHeaderTextBold}>Common Fees</Text>
  </View>
  <View style={styles.feeItem}>
    <Text style={styles.feeHeaderTextBold}>Fee Sub Head</Text>
  </View>
  <View style={styles.feeItem1}>
    <Text style={styles.feeHeaderTextBold}>₹1,200.00</Text>
  </View>
</View>
  {/* amount details by stap */}
          <View style={styles.feeTotalsContainer}>
  <View style={styles.feeHeader}>
    <Text style={styles.feeHeaderTextBold}>Common Fees</Text>
  </View>
  <View style={styles.feeItem}>
    <Text style={styles.feeHeaderTextBold}>Fee Sub Head</Text>
  </View>
  <View style={styles.feeItem1}>
    <Text style={styles.feeHeaderTextBold}>₹1,200.00</Text>
  </View>
</View>
  {/* amount details by stap */}
          <View style={styles.feeTotalsContainer}>
  <View style={styles.feeHeader}>
    <Text style={styles.feeHeaderTextBold}>Common Fees</Text>
  </View>
  <View style={styles.feeItem}>
    <Text style={styles.feeHeaderTextBold}>Fee Sub Head</Text>
  </View>
  <View style={styles.feeItem1}>
    <Text style={styles.feeHeaderTextBold}>₹1,200.00</Text>
  </View>
</View>
  {/* amount details by stap */}
          <View style={styles.feeTotalsContainer}>
  <View style={styles.feeHeader}>
    <Text style={styles.feeHeaderTextBold}>Other Fees</Text>
  </View>
  <View style={styles.feeItem}>
    <Text style={styles.feeHeaderTextBold}>Fee Sub Head</Text>
  </View>
  <View style={styles.feeItem1}>
    <Text style={styles.feeHeaderTextBold}>₹1,200.00</Text>
  </View>
</View>
  {/* amount details by stap */}
          <View style={styles.feeTotalsContainer}>
  <View style={styles.feeHeader}>
    <Text style={styles.feeHeaderTextBold}>Other Fees</Text>
  </View>
  <View style={styles.feeItem}>
    <Text style={styles.feeHeaderTextBold}>Fee Sub Head</Text>
  </View>
  <View style={styles.feeItem1}>
    <Text style={styles.feeHeaderTextBold}>₹1,200.00</Text>
  </View>
</View>
  {/* amount details by stap */}
          <View style={styles.feeTotalsContainer}>
  <View style={styles.feeHeader}>
    <Text style={styles.feeHeaderTextBold}>Other Fees</Text>
  </View>
  <View style={styles.feeItem}>
    <Text style={styles.feeHeaderTextBold}>Fee Sub Head</Text>
  </View>
  <View style={styles.feeItem1}>
    <Text style={styles.feeHeaderTextBold}>₹1,200.00</Text>
  </View>
</View>
  {/* amount details by stap */}
          <View style={styles.feeTotalsContainer}>
  <View style={styles.feeHeader}>
    <Text style={styles.feeHeaderTextBold}>Other Fees</Text>
  </View>
  <View style={styles.feeItem}>
    <Text style={styles.feeHeaderTextBold}>Fee Sub Head</Text>
  </View>
  <View style={styles.feeItem1}>
    <Text style={styles.feeHeaderTextBold}>₹1,200.00</Text>
  </View>
</View>
  {/* amount details by stap */}
          <View style={styles.feeTotalsContainer}>
  <View style={styles.feeHeader}>
    <Text style={styles.feeHeaderTextBold}>Other Fees</Text>
  </View>
  <View style={styles.feeItem}>
    <Text style={styles.feeHeaderTextBold}>Fee Sub Head</Text>
  </View>
  <View style={styles.feeItem1}>
    <Text style={styles.feeHeaderTextBold}>₹1,200.00</Text>
  </View>
</View>
  {/* amount details by stap */}
          <View style={styles.feeTotalsContainer}>
  <View style={styles.feeHeader}>
    <Text style={styles.feeHeaderTextBold}>Fine/Late Fees</Text>
  </View>
  <View style={styles.feeItem}>
    <Text style={styles.feeHeaderTextBold}>Fee Sub Head</Text>
  </View>
  <View style={styles.feeItem1}>
    <Text style={styles.feeHeaderTextBold}>₹1,200.00</Text>
  </View>
</View>
  {/* amount details by stap */}
          <View style={styles.feeTotalsContainer}>
  <View style={styles.feeHeader}>
    <Text style={styles.feeHeaderTextBold}>Examination Fees</Text>
  </View>
  <View style={styles.feeItem}>
    <Text style={styles.feeHeaderTextBold}>Fee Sub Head</Text>
  </View>
  <View style={styles.feeItem1}>
    <Text style={styles.feeHeaderTextBold}>₹1,200.00</Text>
  </View>
</View>
  {/* amount details by stap */}
          <View style={styles.feeTotalsContainer}>
  <View style={styles.feeHeader}>
    <Text style={styles.feeHeaderTextBold}>Foreign Students Assistance Fees</Text>
  </View>
  <View style={styles.feeItem}>
    <Text style={styles.feeHeaderTextBold}>Fee Sub Head</Text>
  </View>
  <View style={styles.feeItem1}>
    <Text style={styles.feeHeaderTextBold}>₹1,200.00</Text>
  </View>
</View>
  {/* amount details by stap */}
          <View style={styles.feeTotalsContainer}>
  <View style={styles.feeHeader}>
    <Text style={styles.feeHeaderTextBold}>Foreign Students Coordination Fees (ICCR)</Text>
  </View>
  <View style={styles.feeItem}>
    <Text style={styles.feeHeaderTextBold}>Fee Sub Head</Text>
  </View>
  <View style={styles.feeItem1}>
    <Text style={styles.feeHeaderTextBold}>₹1,200.00</Text>
  </View>
</View>
  {/* amount details by stap */}
    <View style={styles.reciptnamedetail}>
          <View style={styles.leftView}>
            <Text style={styles.numbertext}>Total Amount</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.rightView}>
            <Text style={styles.numbertext}>₹8,360.00</Text>
          </View>
        </View>
      </View>
      </ScrollView>
    </View>
  );
};

const createStyles = (isDarkMode: boolean) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: isDarkMode ? '#1E1E1E' : '#f5f5f5',
  } as ViewStyle,

     scrollContainer: {
    paddingBottom: 20, // Additional padding to avoid clipping
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
  maincontainer: {
    margin: 10,
    borderWidth: 2,
    borderColor: isDarkMode ? '#333' : '#000', // Optional, for better visual separation
  },
  reciptnamedetail: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: isDarkMode ? '#333' : '#000', // Optional, for better visual separation
  },
  leftView: {
    flex: 1,
    padding: 10,
  } as ViewStyle,
  rightView: {
    flex: 1,
    padding: 10,

  } as ViewStyle,
  divider: {
    width: 1,
    backgroundColor: '#000', // Divider color
  } as ViewStyle,
  msucontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
    paddingTop: 20,
    borderBottomColor:'#000',
    borderWidth:1,
  },
  msulogo: {
    height: 108,
    width: 93,
  },
  msu: {
    paddingTop: 10,
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
  },
  recipttext: {
    paddingTop: 10,
    fontSize: 12,
    color: '#000',
  },
  detailsContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#000', // Divider color
  },
  detailItem: {
    flex: 1,
    borderRightWidth: 1,
    borderColor: '#000', // Divider color
    padding: 5,
   justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
  } as ViewStyle,
  Course: {
    flex: 1,
    borderRightWidth: 1,
    borderColor: '#000', // Divider color
    padding: 5,
    justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
  } as ViewStyle,
  detailtextbold:{
    fontSize:12,
    fontWeight:'bold',
        color: '#000',
         justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
  },
  detailtext:{
    fontSize:12,
        color: '#000',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
  },
  number:{
     fontSize:12,
        color: '#000',
  },
  numbertext:{
    fontSize:14,
    fontWeight:'bold',
        color: '#000',
  },
   feeTotalsContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#000',
  } as ViewStyle,
  feeHeader: {
    flex: 3,
    borderRightWidth: 1,
    borderColor: '#000',
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  } as ViewStyle,
  feeItem: {
    flex: 5,
    borderRightWidth: 1,
    borderColor: '#000',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  } as ViewStyle,
  feeItem1: {
    flex: 2,
    borderRightWidth: 1,
    borderColor: '#000',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  } as ViewStyle,
  feeHeaderTextBold: {
    fontSize: 12,
    color: '#000',
    textAlign: 'center',
  } as TextStyle,
  feeText: {
    fontSize: 12,
    color: '#000',
    textAlign: 'center',
  } as TextStyle,
});

export default E_recipt;
