// Define types for the fee data
export interface FeeData {
  applicationId: string;
  status: 'paid' | 'unpaid';
  transactionId: string;
  programmeInstancePartTerm: string;
  installmentNo: number;
  year: string;
  PRN: string;
  facultyName: string;
  name: string;
  mobileNumber: string;
  courseYear: string;
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

// Array of fee data
const feeData: FeeData[] = [
  {
    applicationId: '562874110555',
    status: 'paid',
    transactionId: '1011008715628741105551',
    programmeInstancePartTerm: 'MCOM-I-Accounting and Financial Management-2022-2023',
    installmentNo: 1,
    // e_ercipt
    year: '2022-2023',
    PRN: '8022050054',
    facultyName: 'Faculty of Commerce',
    name: '8022050054_RequestedFile_404.php',
    mobileNumber: '9999999999',
    courseYear: 'Master of Commerce-I-2022-2023',
    feesName: 'Admission Fee : Admission Fees - Regular - Boys - [MSURP]',
    buildingName: 'Deep Ashwinbhai Patel Centre for Post-Graduate Studies-(33824)',
    receiptNo: '1011008715628741105551',
    paymentDate: '17-09-2022',
    tuitionFee: '₹1,200.00',
    tuitionSubHeader: 'Tuition Fees',
    commonFee: '₹1,200.00',
    commonFeeSubHeader: 'Fee Sub Head',
    fineLateFee: '₹1,200.00',
    examinationFee: '₹1,200.00',
    foreignStudentFee: '₹1,200.00',
    iccrFee: '₹1,200.00',
    totalAmount: '₹8,360.00',
  },
  {
    applicationId: '562874110556',
    status: 'unpaid',
    transactionId: '1011008715628741105561',
    programmeInstancePartTerm: 'MCOM-I-Accounting and Financial Management-2022-2023',
    installmentNo: 2,
    year: '2022-2023',
    PRN: '8022050055',
    facultyName: 'Faculty of Commerce',
    name: '8022050055_RequestedFile_405.php',
    mobileNumber: '9999999998',
    courseYear: 'Master of Commerce-II-2022-2023',
    feesName: 'Admission Fee : Admission Fees - Regular - Girls - [MSURP]',
    buildingName: 'Deep Ashwinbhai Patel Centre for Post-Graduate Studies-(33825)',
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
  },
  // Add more records as needed
];

export default feeData;
