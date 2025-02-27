import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import {
  PerformanceContainer,
  Content,
  PerformanceContent,
  PerformanceHeader,
  SchoolPerformance,
  IndividualPerformance
} from '../../styles/PerformanceStyles';

const CheckPerformanceSection = () => {
  const [schoolPerformanceData, setSchoolPerformanceData] = useState({ averageScore: 0, totalStudents: 0 });
  const [individualPerformanceData, setIndividualPerformanceData] = useState([]);
  const [predictedSchoolPerformance, setPredictedSchoolPerformance] = useState(null);
  const [predictedIndividualPerformance, setPredictedIndividualPerformance] = useState([]);

  useEffect(() => {
    // Fetch actual performance data
    fetchPerformanceData();

    // Fetch predictions for future performance
    fetchPredictions();
  }, []);

  const fetchPerformanceData = async () => {
    // Replace this with your actual data fetching logic
    setSchoolPerformanceData({ averageScore: 85, totalStudents: 100 });
    setIndividualPerformanceData([
      { id: 1, name: 'John Doe', score: 90 },
      { id: 2, name: 'Jane Smith', score: 85 },
      { id: 3, name: 'Michael Johnson', score: 92 },
    ]);
  };

  const fetchPredictions = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/performance/predict');
      setPredictedSchoolPerformance(response.data.schoolPrediction);
      setPredictedIndividualPerformance(response.data.individualPredictions);
    } catch (error) {
      console.error('Error fetching predictions:', error);
    }
  };

  return (
    <PerformanceContainer>
      <Sidebar />
      <Content>
        <PerformanceContent>
          <PerformanceHeader>School Performance</PerformanceHeader>
          <SchoolPerformance>
            <p>Average Score: {schoolPerformanceData.averageScore}</p>
            <p>Total Students: {schoolPerformanceData.totalStudents}</p>
            {predictedSchoolPerformance && (
              <>
                <p>Predicted Average Score: {predictedSchoolPerformance.averageScore}</p>
                <p>Predicted Student Count: {predictedSchoolPerformance.totalStudents}</p>
              </>
            )}
          </SchoolPerformance>

          <PerformanceHeader>Individual Performance</PerformanceHeader>
          <IndividualPerformance>
            {individualPerformanceData.map((student) => (
              <p key={student.id}>
                {student.name}: {student.score}
              </p>
            ))}
            {predictedIndividualPerformance.map((prediction) => (
              <p key={`pred-${prediction.id}`}>
                {prediction.name} - Predicted Score: {prediction.predictedScore}
              </p>
            ))}
          </IndividualPerformance>
        </PerformanceContent>
      </Content>
    </PerformanceContainer>
  );
};

export default CheckPerformanceSection;
