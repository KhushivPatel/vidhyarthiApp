// Define the TypeScript interface for timetable data
export interface TimeTableData {
  data(data: any): void;
  id: number; // added an id field
  paper1: string;
  paper2: string;
  paper3: string;
  teachingMethod: string;
  paperDate: string;
  timeSlot: string;
  semester: string;
  seatNumber: string;
  examEvent: string;
  appearanceType: string;
  formNumber: string;
  programName: string;
}

// Sample timetable data
export const sampleTimeTableData: TimeTableData[] = [
  {
    id: 1,
    paper1: '(PNT2103) History of Painting',
    paper2: '(PNT2104) Modern Art',
    paper3: '(AHA2116) Philosophy of Art',
    teachingMethod: 'Lecture - Theory - UA',
    paperDate: '02-03-2022',
    timeSlot: '1:30PM to 3:15PM',
    semester:
      'First Semester of MCOM-I-Accounting and Financial Management-2022-2023',
    seatNumber: '123456',
    examEvent: 'November-2022',
    appearanceType: 'Fresher',
    formNumber: '100058827',
    programName: 'Master of Visual Arts-2021-2022',
  },
];
