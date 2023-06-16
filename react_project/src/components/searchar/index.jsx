import styles from './Searchbar.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useDebounce from '../../hooks/useDebounce';
import useCountries from '../../hooks/useCountries';

function Searchbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, 500);
  const { data, isLoading, isError, error } =
    useCountries(debouncedSearchQuery);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className={styles.searchbar}>
      <input
        className={styles.input}
        type='text'
        value={searchQuery}
        onChange={handleInputChange}
        placeholder='Search...'
      />

      {isLoading && <div>Loading...</div>}

      {isError && <span>Error: {error.message}</span>}

      {data && (
        <ul className={styles.list}>
          {data.data.results.map((country) => (
            <li key={country.item.code}>
              <Link to={`/searchbar/${country.item.code}`}>
                {country.item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Searchbar;
