import PropTypes from 'prop-types';
import styles from './Table.module.css';
import TableBody from './TableBody';
import TableHeading from './TableHeading';
import useSort from '../../hooks/useSort';

function Table({ data, columns }) {
  const { tableData, sortConfig, handleSorting } = useSort(data, columns);

  return (
    <table className={styles.table}>
      <TableHeading
        sortConfig={sortConfig}
        handleSorting={handleSorting}
        columns={columns}
      />
      <TableBody rows={tableData} />
    </table>
  );
}

Table.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
};

export default Table;
