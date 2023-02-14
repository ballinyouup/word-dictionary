import { useRouter } from 'next/router';
import { useState } from 'react';

const useSearch = () => {
  const [query, setQuery] = useState<string>('');

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }

  function handleClick() {
    handleSearch();
  }

  function handleSearch() {
    const trimmedQuery = query.trim();
    if (trimmedQuery) {
      router.push(`/${trimmedQuery}`);
      setQuery('');
    }
  }
  const router = useRouter();
  return {
    query,
    setQuery,
    handleInput,
    handleKeyDown,
    handleClick,
  };
};

export default useSearch;
