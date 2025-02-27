import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ChooseUserContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  background-color: #FFD700; /* Playful yellow background color */

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between; /* Spread items evenly horizontally */
    align-items: flex-start;
  }
`;

export const UserSection = styled.div`
  text-align: center; /* Center text */
  padding-top: 20px;

  @media screen and (min-width: 768px) {
    padding-top: 0;
    margin: 20px;
    text-align: left; /* Align text to the left for larger screens */
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #FF4500; /* Admin: Orange color */

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const AddClassButton = styled(Link)`
  background-color: #90EE90; /* Student: Light green color */
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 10px;
  text-decoration: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #7CFC00; /* Darker shade of green on hover */
  }

  @media screen and (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;
// Add this styled component in ClassesStyles.js
export const AddClassForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;

  label {
    margin-bottom: 10px;
    font-size: 16px;
  }

  input, button {
    margin-top: 8px;
    padding: 10px;
    font-size: 16px;
  }
`;
// Add this styled component in ClassesStyles.js
export const AddClassInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 10px;
  width: 100%;

  &:focus {
    border-color: #90EE90; /* Light green color for focus */
    outline: none;
  }
`;
// Add this styled component in ClassesStyles.js
export const ClassItem = styled.div`
  padding: 15px;
  margin: 10px 0;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  &:hover {
    background-color: #eaeaea; /* Slightly darker shade on hover */
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;
// Add this styled component in ClassesStyles.js
export const ClassList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background-color: #fafafa;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media screen and (min-width: 768px) {
    padding: 30px;
    gap: 15px;
  }
`;
// Add this styled component in ClassesStyles.js
export const ClassesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  margin: 0 auto;
  max-width: 800px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media screen and (min-width: 768px) {
    padding: 40px;
  }
`;
// Add this styled component in ClassesStyles.js
export const ClassesContent = styled.section`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: #f0f8ff; /* Light blue background color */
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    padding: 30px;
    gap: 20px;
  }
`;
// Add this styled component in ClassesStyles.js
export const ClassHeader = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    margin-bottom: 30px;
  }
`;
// Add this styled component in ClassesStyles.js
export const Content = styled.div`
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media screen and (min-width: 768px) {
    padding: 30px;
  }
`;
// Add this styled component in ClassesStyles.js
export const ClassContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: #e0f7fa; /* Light teal background */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    padding: 30px;
  }
`;


// ClassesStyles.js

// Add your existing styled components here

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px; /* Set your desired width */
  height: 100%;
  background-color: #2c3e50; /* Dark blue background */
  color: white;
  padding-top: 60px;
  overflow-y: auto; /* Enable vertical scrolling */
  z-index: 100; /* Ensure sidebar stays above content */
`;

// Add other styled components that you are using in ClassSection.js
