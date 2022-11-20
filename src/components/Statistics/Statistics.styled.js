import styled from 'styled-components';

export const StatisticsSect = styled.section`
  width: 450px;
  margin-top: 60px;
  margin-right: auto;
  margin-left: auto;
`;

export const Title = styled.h2`
  padding: 30px;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  background-color: white;
  color: #5b5b5b;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-around;
  text-align: center;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  align-items: center;
  gap: 5px;
  padding: 15px;
  color: #fff;
`;
