import TableRow from './TableRow';
import PropTypes from 'prop-types';

function TableBody({ rows }) {
  return (
    <tbody>
      {rows.map((row) => (
        <TableRow key={row.index} row={row} />
      ))}
    </tbody>
  );
}

TableBody.propTypes = {
  rows: PropTypes.array.isRequired,
};

export default TableBody;
