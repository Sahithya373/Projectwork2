import styled from 'styled-components';

export const PerformanceContainer = styled.div`
  display: flex;
  background-color: #f5f7fa;
  min-height: 100vh;
`;

export const SidebarContainer = styled.div`
  flex: 0 0 250px;
  background-color: #3f51b5;
  color: #fff;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2);
`;

export const Content = styled.div`
  flex: 1;
  padding: 40px;
  background-color: #f5f7fa;
`;

export const PerformanceContent = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const PerformanceHeader = styled.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 25px;
  border-bottom: 2px solid #3f51b5;
  padding-bottom: 8px;
`;

export const SchoolPerformance = styled.div`
  margin-bottom: 30px;
  background-color: #e8f0fe;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const IndividualPerformance = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const PerformanceInfo = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const PerformanceGraphContainer = styled.div`
  margin-bottom: 30px;
  background-color: #fafafa;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const TotalMarks = styled.div`
  font-weight: bold;
  font-size: 20px;
  color: #3f51b5;
  margin-top: 10px;
`;
