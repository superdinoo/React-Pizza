import React, { memo } from "react";

const Categories = memo(function Categories({
  activeCategory,
  items,
  onClickItem,
}) {
  return (
    <div className="categories">
      <ul>
        <li
          className={!activeCategory === null ? "active" : ""}
          onClick={() => onClickItem(null)}
        >
          Все
        </li>
        {items.map((name, index) => (
          <li
            className={activeCategory === index ? "active" : ""}
            onClick={() => onClickItem(index)}
            key={index}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Categories;
