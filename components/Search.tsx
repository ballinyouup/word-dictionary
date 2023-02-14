import { FC } from 'react';
import useSearch from '../hooks/useSearch';
import styles from '../styles/Search.module.css';
const Search: FC = () => {
  const { query, handleInput, handleKeyDown, handleClick } = useSearch();
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.search}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
        placeholder="Enter word for definition.."
        value={query}
      />
      <button className={styles.searchButton} onClick={handleClick}>
        <img
          className={styles.searchIcon}
          src="https://cdn-icons-png.flaticon.com/512/149/149852.png"
        />
      </button>
    </div>
  );
};

export default Search;
