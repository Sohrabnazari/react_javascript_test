import { useState } from 'react';
import { SORT_ASCENDING, SORT_DESCENDING } from '../constants';

function useSort(data, columns) {
  const [tableData, setTableData] = useState(data);
  const [sortField, setSortField] = useState(columns[0].title);
  const [sortOrder, setSortOrder] = useState(SORT_ASCENDING);

  if (typeof data !== 'object' && !Array.isArray(data)) {
    throw new Error('Data must be an array of objects.');
  }

  const handleSorting = (column) => {
    let order = SORT_ASCENDING;
    if (!column) {
      throw new Error('Sorting Column must be specified.');
    }

    if (sortField === column && sortOrder === SORT_ASCENDING) {
      order = SORT_DESCENDING;
    }

    let multiplier = order === SORT_ASCENDING ? 1 : -1;
    let sortedData = [...tableData].sort((a, b) => {
      if (a[column] === null) return 1;
      if (b[column] === null) return -1;
      if (a[column] === null && b[column] === null) return 0;

      const stringA = a[column].toString();
      const stringB = b[column].toString();

      return (
        stringA.localeCompare(stringB, undefined, { numeric: true }) * multiplier
      );
    });

    sortedData.map((item, index) => item.index = index + 1)

    setSortField(column);
    setSortOrder(order);
    setTableData(sortedData);
  };

  return {
    tableData,
    handleSorting,
    sortConfig: { sortOrder, sortField },
  };
}

export default useSort;
