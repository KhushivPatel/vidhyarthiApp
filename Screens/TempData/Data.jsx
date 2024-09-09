export interface StudentInfo {
  id: number;
  name: string;
  emailId: string;
  phoneNumber: string;
  prnNumber: string;
  facultyName: string;
  semester: string;
  examEvent: string;
  resultStatus: string;
  PRN: string;
  seatNumber: string;
  motherName: string;
  specialization: string;
  courseCode: string;
  courseName: string;
  time: string;
  maxMin: string;
  total: number;
  sts: string;
  rank: string;
  field: string;
  fieldName: string;
}

export interface PaymentInfo {
  title: string;
  subtitle: string;
  date: string;
  applicationId: string;
  status: string;
  transactionId: string;
  programmeInstancePartTerm: string;
  installmentNo: number;
  year: string;
  feesName: string;
  buildingName: string;
  receiptNo: string;
  paymentDate: string;
  tuitionFee: string;
  tuitionSubHeader: string;
  commonFee: string;
  commonFeeSubHeader: string;
  fineLateFee: string;
  examinationFee: string;
  foreignStudentFee: string;
  iccrFee: string;
  totalAmount: string;
}

// Student Data
const studentsData: StudentInfo[] = [
  {
    id: 1,
    name: 'John Doe',
    emailId: 'john.doe@example.com',
    phoneNumber: '123-456-7890',
    prnNumber: 'PRN123456',
    facultyName: 'Faculty of Engineering',
    semester: 'Second Semester of BTECH-Civil Engineering-2022-2023',
    examEvent: 'May-2022',
    resultStatus: 'Incomplete',
    PRN: '8021025147',
    seatNumber: '139405',
    motherName: 'Maryben',
    specialization: 'Painting',
    courseCode: 'AHA2216',
    courseName: 'Philosophy of Art-II',
    time: '2',
    maxMin: 'd',
    total: 1212,
    sts: 'E,C',
    rank: 'E,C',
    field: 'Second Semester of BTECH-Civil Engineering',
    fieldName: 'First Semester of F.Y. Diploma',
  },
  {
    id: 2,
    name: 'Jane Smith',
    emailId: 'jane.smith@example.com',
    phoneNumber: '987-654-3210',
    prnNumber: 'PRN654321',
    facultyName: 'Faculty of Commerce',
    semester: 'Third Semester of MCOM-Accounting-2022-2023',
    examEvent: 'Dec-2022',
    resultStatus: 'Complete',
    PRN: '8022050055',
    seatNumber: '140005',
    motherName: 'Ann Smith',
    specialization: 'Accounting',
    courseCode: 'MCA3221',
    courseName: 'Advanced Financial Management',
    time: '3',
    maxMin: 'b',
    total: 1310,
    sts: 'A,B',
    rank: 'A,B',
    field: 'Third Semester of MCOM-Accounting',
    fieldName: 'Second Semester of MCOM-Accounting',
  },
];

// Payment Data for one of the students
const paymentData: PaymentInfo = {
  title: 'Fee payment deadline extended to 30/11/2023',
  subtitle:
    'The fee payment deadline has been extended to 30/11/2023. Kindly ensure all payments are made before this date to avoid late fees.',
  date: '15 December 2020 | 10:00 PM | Sunday',
  applicationId: '562874110556',
  status: 'unpaid',
  transactionId: '1011008715628741105561',
  programmeInstancePartTerm:
    'MCOM-I-Accounting and Financial Management-2022-2023',
  installmentNo: 2,
  year: '2022-2023',
  feesName: 'Admission Fee : Admission Fees - Regular - Girls - [MSURP]',
  buildingName:
    'Deep Ashwinbhai Patel Centre for Post-Graduate Studies-(33825)',
  receiptNo: '1011008715628741105561',
  paymentDate: '18-09-2022',
  tuitionFee: '₹1,500.00',
  tuitionSubHeader: 'Tuition Fees',
  commonFee: '₹1,500.00',
  commonFeeSubHeader: 'Fee Sub Head',
  fineLateFee: '₹1,500.00',
  examinationFee: '₹1,500.00',
  foreignStudentFee: '₹1,500.00',
  iccrFee: '₹1,500.00',
  totalAmount: '₹9,000.00',
};
