import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  const searchApi = async searchTerm => {
    try {
      const response = await yelp.get('/search', {
        params: { limit: 50, term: searchTerm, location: 'london' }
      });
      setResults(response.data.businesses);
    } catch (error) {
      setError('Something went wrong!');
    }
  };

  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [searchApi, results, error];
};

export default SearchScreen;
