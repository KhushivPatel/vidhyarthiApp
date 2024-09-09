// ResultData.tsx

export interface ResultDataType {
  id: number; // Unique identifier for each result
  facultyName: string;
  semester: string;
  examEvent: string;
  resultStatus: string;
  PRN?: string; // Optional field if not always present
  Name?: string;
  Faculty?: string;
  Specialization?: string;
  SeatNumber?: string;
  MotherName?: string;
  coursecode?: string;
  coursename?: string;
  time?: string;
  maxmin?: string;
  total?: number;
  sts?: string;
  rank?: string;
  fild?: string; // Add the new field here
  fildname?: string;
}

const resultData: ResultDataType[] = [
  {
    id: 1,
    facultyName: 'Faculty of Fine Arts',
    semester:
      'First Semester of MCOM-I-Accounting and Financial Management-2022-2023',
    examEvent: 'November-2022',
    resultStatus: 'Complete',
    PRN: '8021025147',
    Name: 'Pratik Maheshkumar Damor',
    Faculty: 'Faculty of Fine Arts',
    Specialization: 'Painting',
    SeatNumber: '139405',
    MotherName: 'Maryben',
    coursecode: 'AHA2216',
    coursename: 'Philosophy of Art-II',
    time: '2',
    maxmin: 'd',
    total: 1212,
    sts: 'E,C',
    rank: 'E,C',
    fild: 'First Semester of MCOM-I-Accounting',
    fildname: 'First Semester of F.Y. Diploma',
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
    coursecode: 'AHA2216',
    coursename: 'Philosophy of Art-II',
    time: '2',
    maxmin: 'd',
    total: 1212,
    sts: 'E,C',
    rank: 'E,C',
    fild: 'Second Semester of BTECH-Civil Engineering',
    fildname: 'First Semester of F.Y. Diploma',
  },
  // Add more records as needed
];

export default resultData;
