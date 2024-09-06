// Define types for the notification data
export interface NotiData {
  title: string;
  subtitle: string;
  date:string;
}

// Array of notification data with three entries
const NotiData: NotiData[] = [
  {
    title: 'Orientation for academic year 2024 on 24/12/2023',
    subtitle: 'Orientation for academic year 2024 will be held on 24/12/2023 at the main campus auditorium. Please arrive on time.',
    date:' 24 May 2023 | 3:00 PM | Tuesday',
  },
  {
    title: 'Fee payment deadline extended to 30/11/2023',
    subtitle: 'The fee payment deadline has been extended to 30/11/2023. Kindly ensure all payments are made before this date to avoid late fees.',
      date:' 15 December 2020 | 10:00 PM | sunday',
  },
  {
    title: 'Holiday notice: College closed on 25/12/2023',
    subtitle: 'The college will be closed on 25/12/2023 for the Christmas holiday. Normal classes will resume on 26/12/2023.',
  },
];

export default NotiData;
