import { useState } from 'react';

const SearchBar = ({ onSearch, onStockFilter }) => {
  const [searchText, setSearchText] = useState('');
  const [showOnlyInStock, setShowOnlyInStock] = useState(false);

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
    onSearch(event.target.value);
  };

  const handleStockFilterChange = (event) => {
    const isChecked = event.target.checked;
    setShowOnlyInStock(isChecked);
    onStockFilter(isChecked);
  };

  return (
    <div>
      <p style={{ marginBottom: '10px' }}>Search</p>
      <input type="text" value={searchText} onChange={handleInputChange} style={{ width: '980px', height: '30px' }} />
      <br />
      <div style={{ marginTop: '15px' }}>
        <input
          type="checkbox"
          name="onlyInStock"
          id="onlyInStock"
          checked={showOnlyInStock}
          onChange={handleStockFilterChange}
        />
        <label htmlFor="onlyInStockCheckbox">Only show products in stock</label>
      </div>
    </div>
  );
};

export default SearchBar;
