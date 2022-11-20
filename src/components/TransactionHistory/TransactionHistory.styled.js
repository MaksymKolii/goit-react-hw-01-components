import styled from 'styled-components';

export const Table = styled.table`
  width: 900px;
  border-collapse: collapse;
  border-style: hidden;
  margin: 60px auto 0 auto;
  background-color: #fff;
  /* border-radius: 5px; */
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15), 0px 4px 8px rgba(0, 0, 0, 0.12),
    1px 4px 8px rgba(0, 0, 0, 0.2);
`;

export const ThNames = styled.th`
  color: #fff;
  border-right: 1px solid #fff;
`;

export const TableHead = styled.thead`
  background: #4fa9fc;
  text-transform: uppercase;
`;

export const TableRow = styled.tr`
  height: 50px;
  text-align: center;
  color: #6e7a76;
  &:nth-child(even) {
    background-color: #eeeeee;
  }
`;

export const TableColumn = styled.td`
  border: 1px solid #bce1f5;
  border: 1px solid tomato;
`;

export const Type = styled(TableColumn)`
  text-transform: capitalize;
`;

export const TableData = styled.td`
  border: 1px solid #eee;
  text-align: center;
`;
