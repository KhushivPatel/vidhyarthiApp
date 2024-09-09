import {
  View,
  Text,
  useColorScheme,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RadioButton} from 'react-native-paper';

type RootStackParamList = {
  Re_assessment: {student: any};
};

type ReAssessmentRouteProp = RouteProp<RootStackParamList, 'Re_assessment'>;

const Re_assessment: React.FC = () => {
  const route = useRoute<ReAssessmentRouteProp>();
  const {student} = route.params;

  const [selectedPaper, setSelectedPaper] = useState<string | null>(null);

  const isDarkMode = useColorScheme() === 'dark';
  const styles = createStyles(isDarkMode);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Re-Assessment</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.mainContent}>
          <View style={styles.textContainerRight}>
            <Text style={[styles.textRight, styles.boldText, styles.smallText]}>
              Name
            </Text>
            <Text style={styles.textRight}>{student.Name}</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.textRow}>
            <Text style={styles.textLeft}>Instance Part Term</Text>
            <Text style={styles.textRight}>{student.fild}</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.textLeft}>Part Term Name</Text>
            <Text style={styles.textRight}>{student.fildname}</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.textLeft}>PRN</Text>
            <Text style={styles.textRight}>{student.PRN}</Text>
          </View>

          <View style={styles.textRow}>
            <Text style={styles.textLeft}>Exam Event Name</Text>
            <Text style={styles.textRight}>{student.examEvent}</Text>
          </View>

          <View style={styles.textRow}>
            <Text style={styles.textLeft}>Seat Number</Text>
            <Text style={styles.textRight}>{student.SeatNumber}</Text>
          </View>

          <View style={styles.radioGroup}>
            <Text style={styles.radioGroupTitle}>Select Assessment Type:</Text>
            <View style={styles.radioButtonContainer}>
              <RadioButton
                value="Re-Assessment Paper"
                status={
                  selectedPaper === 'Re-Assessment Paper'
                    ? 'checked'
                    : 'unchecked'
                }
                onPress={() => setSelectedPaper('Re-Assessment Paper')}
              />
              <Text style={styles.radioButtonLabel}>Re-Assessment Paper</Text>
            </View>
            <View style={styles.radioButtonContainer}>
              <RadioButton
                value="Verification Paper"
                status={
                  selectedPaper === 'Verification Paper'
                    ? 'checked'
                    : 'unchecked'
                }
                onPress={() => setSelectedPaper('Verification Paper')}
              />
              <Text style={styles.radioButtonLabel}>Verification Paper</Text>
            </View>
            <View style={styles.radioButtonContainer}>
              <RadioButton
                value="Inspection Paper"
                status={
                  selectedPaper === 'Inspection Paper' ? 'checked' : 'unchecked'
                }
                onPress={() => setSelectedPaper('Inspection Paper')}
              />
              <Text style={styles.radioButtonLabel}>Inspection Paper</Text>
            </View>
          </View>

          {/* Conditionally render the message based on the selected radio button */}
        </View>
        {selectedPaper === 'Re-Assessment Paper' && (
          <View style={styles.messageContainer}>
            <Text style={styles.messageText}>
              Name of Subject/s or Paper/s for Re-Assessment is Required
            </Text>
          </View>
        )}
        {selectedPaper === 'Verification Paper' && (
          <View style={styles.messageContainer}>
            <Text style={styles.messageText}>
              Verification of Marks for Selected Paper/s is Required
            </Text>
          </View>
        )}

        {selectedPaper === 'Inspection Paper' && (
          <View style={styles.messageContainer}>
            <Text style={styles.messageText}>
              Inspection of the Paper/s is Required
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const createStyles = (isDarkMode: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? '#1E1E1E' : '#f5f5f5',
    },
    header: {
      height: 58,
      backgroundColor: isDarkMode ? '#22395C' : '#5287D7',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
    },
    headerText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 18,
    },
    scrollView: {
      flexGrow: 1,
      paddingBottom: 20,
    },
    mainContent: {
      marginVertical: 14,
      marginHorizontal: 9,
      backgroundColor: isDarkMode ? '#565E69' : '#DCEAFF',
      borderRadius: 10,
      padding: 10,
    },
    textContainerRight: {
      padding: 10,
      alignItems: 'flex-start',
    },
    textRight: {
      fontSize: 14,
      color: isDarkMode ? '#fff' : '#000',
      marginBottom: 4,
      flex: 2,
      textAlign: 'right',
    },
    divider: {
      height: 2,
      backgroundColor: isDarkMode ? '#fff' : '#000',
      marginVertical: 10,
    },
    textRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: isDarkMode ? '#869BBA' : '#B9D5FF',
      padding: 12,
      borderRadius: 10,
      marginBottom: 10,
    },
    textLeft: {
      fontSize: 16,
      flex: 2,
      color: isDarkMode ? '#fff' : '#000',
      fontWeight: 'bold',
    },
    boldText: {
      fontWeight: 'bold',
    },
    smallText: {
      fontSize: 12,
    },
    button: {
      marginTop: 10,
      paddingVertical: 15,
      paddingHorizontal: 20,
      backgroundColor: isDarkMode ? '#152947' : '#5287D7',
      borderRadius: 10,
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 14,
    },
    radioGroup: {
      marginBottom: 15,
      borderRadius: 10,
      padding: 12,
      backgroundColor: isDarkMode ? '#869BBA' : '#B9D5FF',
    },
    radioGroupTitle: {
      fontSize: 16,
      color: '#000',
      fontWeight: 'bold',
    },
    radioButtonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: 10,
    },
    radioButtonLabel: {
      marginLeft: 8,
      fontSize: 16,
      color: '#000',
    },
    messageContainer: {
      marginTop: 16,
      padding: 16,
      backgroundColor: isDarkMode ? '#555' : '#f5f5f5',
      borderRadius: 4,
    },
    messageText: {
      fontSize: 16,
      color: isDarkMode ? '#fff' : '#000',
    },
  });
export default Re_assessment;
