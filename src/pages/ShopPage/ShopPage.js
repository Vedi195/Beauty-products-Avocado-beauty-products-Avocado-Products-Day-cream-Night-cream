import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import FilterSidebar from '../../components/Filter/FilterSidebar';
import ProductGrid from '../../components/Products/ProductGrid';
import { filterProducts, sortProducts } from '../../utils/helpers';
import products from '../../data/products';
import './ShopPage.css';

const defaultFilters = {
  category: 'All',
  gender: 'All',
  minPrice: 0,
  maxPrice: 5000,
  comboOnly: false,
  discountOnly: false,
  specialOnly: false,
  newArrivalsOnly: false,
  sortBy: 'default',
  search: ''
};

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState(defaultFilters);

  useEffect(() => {
    const urlCategory = searchParams.get('category');
    const urlSearch = searchParams.get('search');

    if (urlCategory || urlSearch) {
      setFilters(prev => ({
        ...prev,
        category: urlCategory || prev.category,
        search: urlSearch || prev.search
      }));
    }
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    const filtered = filterProducts(products, filters);
    return sortProducts(filtered, filters.sortBy);
  }, [filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    const params = new URLSearchParams();
    if (newFilters.category && newFilters.category !== 'All') {
      params.set('category', newFilters.category);
    }
    if (newFilters.search) {
      params.set('search', newFilters.search);
    }
    setSearchParams(params);
  };

  const handleClearFilters = () => {
    setFilters(defaultFilters);
    setSearchParams({});
  };

  const removeFilter = (key) => {
    const newFilters = { ...filters, [key]: defaultFilters[key] };
    handleFilterChange(newFilters);
  };

  const activeFilterTags = [];
  if (filters.category !== 'All') activeFilterTags.push({ key: 'category', label: filters.category });
  if (filters.gender !== 'All') activeFilterTags.push({ key: 'gender', label: filters.gender });
  if (filters.comboOnly) activeFilterTags.push({ key: 'comboOnly', label: 'Combo Packs' });
  if (filters.discountOnly) activeFilterTags.push({ key: 'discountOnly', label: 'Discounted' });
  if (filters.specialOnly) activeFilterTags.push({ key: 'specialOnly', label: 'Special Offers' });
  if (filters.newArrivalsOnly) activeFilterTags.push({ key: 'newArrivalsOnly', label: 'New Arrivals' });
  if (filters.search) activeFilterTags.push({ key: 'search', label: `"${filters.search}"` });

  return (
    <div className="shopPage" data-testid="shop-page">
      <div className="container">
        <div className="shopHeader">
          <h1 className="shopTitle">Shop All Products</h1>
          <p className="shopSubtitle">
            Explore our complete range of organic herbal products
          </p>
        </div>

        <div className="shopLayout">
          <FilterSidebar 
            filters={filters}
            onFilterChange={handleFilterChange}
            onClearFilters={handleClearFilters}
          />

          <div className="shopContent">
            <div className="resultsInfo">
              <span className="resultsCount">
                Showing <strong>{filteredProducts.length}</strong> of {products.length} products
              </span>
            </div>

            {activeFilterTags.length > 0 && (
              <div className="activeFilters">
                {activeFilterTags.map(tag => (
                  <span key={tag.key} className="activeFilter">
                    {tag.label}
                    <span 
                      className="removeFilter" 
                      onClick={() => removeFilter(tag.key)}
                      style={{ cursor: 'pointer', marginLeft: '4px' }}
                    >
                      ❌
                    </span>
                  </span>
                ))}
              </div>
            )}

            <ProductGrid 
              products={filteredProducts}
              emptyMessage="No products match your filters. Try adjusting your search criteria."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;