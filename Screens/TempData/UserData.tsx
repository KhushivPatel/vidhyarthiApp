// data.ts

// Define the TypeScript interface for user data
export interface UserData {
  emailId: string;
  name: string;
  phoneNumber: string;
  prnNumber: string;
}

// Sample data
export const sampleUserData: UserData[] = [
  {
    emailId: 'john.doe@example.com',
    name: 'John Doe',
    phoneNumber: '123-456-7890',
    prnNumber: 'PRN123456',
  },
  // Add more sample data as needed
];
