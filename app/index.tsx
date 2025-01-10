import React from 'react';
import SearchBar from '@/components/SearchBar';

const Home = () => (
  <div>
    <SearchBar onSearch={function (): void {
      throw new Error('Function not implemented.');
    } } />
  </div>
);

export default Home;