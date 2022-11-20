import PropTypes from 'prop-types';
import {
  Table,
  TableHead,
  TableData,
  TableRow,
  ThNames,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => (
  <Table>
    <TableHead>
      <TableRow>
        <ThNames>Type</ThNames>
        <ThNames>Amount</ThNames>
        <ThNames>Currency</ThNames>
      </TableRow>
    </TableHead>

    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <TableRow key={id}>
          <TableData>{type}</TableData>
          <TableData>{amount}</TableData>
          <TableData>{currency}</TableData>
        </TableRow>
      ))}
    </tbody>
  </Table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
