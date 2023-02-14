import { useEffect, useState } from 'react';
import axios from 'axios';
import { IData } from '../types/FetchTypes';
import { useRouter } from 'next/router';
const useFetch = () => {
  const [data, setData] = useState<IData | null>(null);
  const router = useRouter();
  const { word } = router.query;
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (word !== '') {
          const response = await axios.get(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
          );
          setData(response.data[0]);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [word]);
  return {data, word};
};

export default useFetch;
