import { useState } from "react";
import jsonData from '../data.json';
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

const ProductsPage = () => {
  const [products] = useState(jsonData);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [showOnlyInStock, setShowOnlyInStock] = useState(false);

  const handleSearch = (searchText) => {
    const filtered = products.filter((product) => {
      return product.name.toLowerCase().includes(searchText.toLowerCase());
    });
    if (showOnlyInStock) {
      const filteredInStock = filtered.filter((product) => {
        return product.inStock;
      });
      setFilteredProducts(filteredInStock);
    } else {
      setFilteredProducts(filtered);
    }
  };

  const handleStockFilter = (isChecked) => {
    setShowOnlyInStock(isChecked);
    if (isChecked) {
      const filteredInStock = filteredProducts.filter((product) => {
        return product.inStock;
      });
      setFilteredProducts(filteredInStock);
    } else {
      setFilteredProducts(products);
    }
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar onSearch={handleSearch} onStockFilter={handleStockFilter} />
      <ProductTable products={filteredProducts} />
    </div>
  );
};

export default ProductsPage;
