import PropTypes from 'prop-types';
import styles from './Table.module.css';

function TableRow({ row }) {
  return (
    <tr className={styles.tr}>
      {Object.keys(row).map((column) => (
        <td className={styles.td} key={column}>{row[column] ? row[column] : '-'}</td>
      ))}
    </tr>
  );
}

TableRow.propTypes = {
  row: PropTypes.object.isRequired,
};

export default TableRow;
