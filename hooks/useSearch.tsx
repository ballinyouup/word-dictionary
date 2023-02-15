import { useRouter } from 'next/router';
import { useState } from 'react';

const useSearch = () => {
  //Creates new query state for search string.
  const [query, setQuery] = useState<string>('');

  //Creates a new router from next's useRouter hook.
  const router = useRouter();

  //Sets query to the value of the input.
  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
  }

  //Runs handleSearch on Enter
  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }
  //Runs handleSearch on click of search icon button.
  function handleClick() {
    handleSearch();
  }

  /*
  The handleSearch function stored the trimmed query inside trimmedQuery.
  If trimmedQuery has a value, it moves you to the location. 
  Resets query, and value of input.
  */
  function handleSearch() {
    const trimmedQuery = query.trim();
    if (trimmedQuery) {
      router.push(`/${trimmedQuery}`);
      setQuery('');
    }
  }
  
  //Returns the objects below to be used in components.
  return {
    query,
    setQuery,
    handleInput,
    handleKeyDown,
    handleClick,
  };
};

export default useSearch;
