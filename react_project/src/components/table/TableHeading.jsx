import { PropTypes } from 'prop-types';
import styles from './Table.module.css';
import { SORT_ASCENDING } from '../../constants';


function TableHeading({ sortConfig: conf, handleSorting, columns }) {
  return (
    <thead>
      <tr className={styles.tr}>
        {columns.map((column) => (
          <th className={styles.th} key={column.title}>
            <span
              className={
                conf.sortField === column.title ? 
                (conf.sortOrder === SORT_ASCENDING ? styles.sortIconAscending : styles.sortIconDescending) : "null"
              }
              onClick={() => column.sortable ? handleSorting(column.title) : null}
            >
              {column.label}
            </span>
          </th>
        ))}
      </tr>
    </thead>
  );
}

TableHeading.propTypes = {
  handleSorting: PropTypes.func.isRequired,
  columns: PropTypes.array.isRequired,
  sortConfig: PropTypes.object.isRequired,
};

export default TableHeading;
