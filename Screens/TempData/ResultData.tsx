// ResultData.tsx

export interface ResultDataType {
  id: number; // Unique identifier for each result
  facultyName: string;
  semester: string;
  examEvent: string;
  resultStatus: string;
}

const resultData: ResultDataType[] = [
  {
    id: 1,
    facultyName: 'Faculty of Fine Arts',
    semester: 'First Semester of MCOM-I-Accounting and Financial Management-2022-2023',
    examEvent: 'November-2022',
    resultStatus: 'Complete',
    // viewresult
    PRN: '8021025147',
    Name: 'Pratik Maheshkumar Damor',
    Faculty: 'Faculty of Fine Arts',
    Specialization: 'Painting',
    SeatNumber: '139405',
    MotherName: 'Maryben',
    // result marks
    coursecode:'AHA2216',
    coursename:'Philosophy of Art-II',
    time:'2',
    maxmin:'d',
    total:1212,
    sts:'E,C',
    rank:'E,C',
  },
  {
    id: 2,
    facultyName: 'Faculty of Engineering',
    semester: 'Second Semester of BTECH-Civil Engineering-2022-2023',
    examEvent: 'May-2022',
    resultStatus: 'Incomplete',
    PRN: '8021025147',
    Name: 'Vidhi daodar vyash',
    Faculty: 'faculty of enginnering',
    Specialization: 'Painting',
    SeatNumber: '139405',
    MotherName: 'Maryben',
        // result marks
    coursecode:'AHA2216',
    coursename:'Philosophy of Art-II',
    time:'2',
    maxmin:'d',
    total:1212,
    sts:'E,C',
    rank:'E,C',
  },
  // Add more records as needed
];

export default resultData;
