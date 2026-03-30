import React, { useState } from 'react';
import { getCategories } from '../../utils/helpers';
import products from '../../data/products.js';
import './FilterSidebar.css';

const FilterSidebar = ({
  filters = {},
  onFilterChange = () => {},
  onClearFilters = () => {},
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const categories = [
    "All",
    "Skin Care",
    "Foot Care",
    "Bath & Body",
    "Makeup",
    "Lip Care",
    "Face Care",
  ].filter((cat) => cat === "All" || products.some((p) => p.category === cat)); 

  const handleSortChange = (e) => {
    onFilterChange({ ...filters, sortBy: e.target.value });
  };

  const handleCategoryChange = (category) => {
    onFilterChange({ ...filters, category });
  };

  const handlePriceChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    onFilterChange({ ...filters, maxPrice: value });
  };

  const handleToggleChange = (key) => {
    onFilterChange({ ...filters, [key]: !filters[key] });
  };

  const FilterContent = () => (
    <>
      {/* Sort */}
      <div className="filterGroup">
        <label className="filterGroupTitle">Sort By</label>
        <select
          className="sortSelect"
          value={filters.sortBy || 'default'}
          onChange={handleSortChange}
        >
          <option value="default">Default</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Top Rated</option>
          <option value="newest">Newest First</option>
          <option value="discount">Highest Discount</option>
        </select>
      </div>

      {/* Category */}
      <div className="filterGroup">
        <label className="filterGroupTitle">Category</label>
        <div className="categoryOptions">
          {categories.map((cat) => (
            <label key={cat} className="categoryOption">
              <input
                type="radio"
                name="category"
                checked={filters.category === cat}
                onChange={() => handleCategoryChange(cat)}
              />
              <span className="checkmark">
                {filters.category === cat && "✔️"}
              </span>
              <span>{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="filterGroup">
        <label className="filterGroupTitle">Price Range</label>
        <div className="priceRange">
          <div className="rangeValues">
            <span>₹0</span>
            <span>₹{filters.maxPrice ?? 5000}</span>
          </div>
          <input
            type="range"
            className="rangeSlider"
            min="0"
            max="5000"
            step="100"
            value={filters.maxPrice ?? 5000}
            onChange={handlePriceChange}
          />
        </div>
      </div>

      {/* Toggles */}
      <div className="filterGroup">
        <label className="filterGroupTitle">Filter Options</label>

        {[
          { key: 'comboOnly', label: 'Combo Packs' },
          { key: 'discountOnly', label: 'Discounted Items' },
          { key: 'specialOnly', label: 'Special Offers' },
          { key: 'newArrivalsOnly', label: 'New Arrivals' },
        ].map(({ key, label }) => (
          <div key={key} className="toggleOption">
            <span className="toggleLabel">{label}</span>
            <button
              className={`toggleSwitch ${filters[key] ? 'active' : ''}`}
              onClick={() => handleToggleChange(key)}
            >
              {filters[key] ? "🟢" : "⚪"}
            </button>
          </div>
        ))}
      </div>

    </>
  );

  return (
    <>
      {/* Desktop */}
      <aside className="filterSidebar">
        <div className="filterHeader">
          <h3 className="filterTitle">Filters</h3>
          <button className="clearBtn" onClick={onClearFilters}>
            Clear All
          </button>
        </div>

        <FilterContent />
      </aside>

      {/* Mobile Toggle */}
      <button
        className="mobileFilterToggle"
        onClick={() => setIsDrawerOpen(true)}
      >
        ⚙️ Filters
      </button>

      {/* Drawer */}
      <div className={`filterDrawer ${isDrawerOpen ? 'open' : ''}`}>
        <div className="drawerContent">
          <div className="drawerHeader">
            <h3 className="filterTitle">Filters</h3>
            <button
              className="closeDrawer"
              onClick={() => setIsDrawerOpen(false)}
            >
              ❌
            </button>
          </div>

          <FilterContent />

          <div style={{ marginTop: 16, display: 'flex', gap: 12 }}>
            <button
              className="btn btn-secondary"
              style={{ flex: 1 }}
              onClick={() => {
                onClearFilters();
                setIsDrawerOpen(false);
              }}
            >
              Clear All
            </button>

            <button
              className="btn btn-primary"
              style={{ flex: 1 }}
              onClick={() => setIsDrawerOpen(false)}
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;