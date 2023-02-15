import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import words from 'words.json';
import debounce from "lodash.debounce";

const useSearch = () => {
  //Creates new query state for search string.
  const [query, setQuery] = useState<string>('');
  const [matching, setMatching] = useState<string[]>([]);
  let timeout;
  //Creates a new router from next's useRouter hook.
  const router = useRouter();

  //Sets query to the value of the input.
  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    const trimmedQuery: string = event.target.value.trim();
    const keys = Object.keys(words);
    const matchingWords = keys.filter((key: string) => {
      const regex = new RegExp(`^${trimmedQuery}`, 'i');
      return regex.test(key);
    });
    setQuery(trimmedQuery);
    timeout = setTimeout(() => {
      setMatching(matchingWords);
    }, 500);
  }
  const debouncedChangeHandler = useCallback(debounce(handleInput, 300), []);

  useEffect(() => {
    console.log(matching);
  }, [matching]);

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
    const trimmedQuery: string = query.trim();
    const keys = Object.keys(words);
    const matchesQuery = keys.some((key: string) => {
      return key === trimmedQuery;
    });
    if (matchesQuery) {
      router.push(`/${trimmedQuery}`);
      setQuery('');
    }
  }

  function handleMatchingClick(result: string) {
    router.push(`/${result}`);
    setQuery('');
  }

  //Returns the objects below to be used in components.
  return {
    query,
    setQuery,
    handleInput,
    handleKeyDown,
    handleClick,
    matching,
    handleMatchingClick,
  };
};

export default useSearch;
