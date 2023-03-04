import { useEffect, useState } from 'react';
import {makeRequest} from '../makeRequest'
const useFetch = (url) => {
 const [data, setData] = useState(null);
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState(null);
 useEffect(() => {
  const fetchProducts = async () => {
   try {
    setLoading(true)
    const response = await makeRequest.get(
     url
    );
    setData(response.data.data);
   } catch (err) {
    setError(true)
   }
   setLoading(false)
  };
  fetchProducts();
 }, [url]);
 return {data,error,loading}
};

export default useFetch