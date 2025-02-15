import React, { useRef, useEffect } from "react";

const Dropdown = ({
  searchPlaceholder,
  search,
  searchChangeHandler,
  options,
  selectedValue,
  changeSelectedHandler,
  name,
  selectedIndex,
  data,
}) => {
  const searchInputEl = useRef();
  const itemsEl = useRef();

  useEffect(() => {
    searchInputEl.current.focus();
    if (selectedValue) {
      itemsEl.current.scrollTop =
        itemsEl.current.querySelector(`.item-${selectedIndex}`).offsetTop - 42;
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <input
        type="text"
        placeholder={searchPlaceholder ? searchPlaceholder : "Search..."}
        className="dropdown-search"
        value={search}
        onChange={searchChangeHandler}
        ref={searchInputEl}
      />
      <div className="dropdown-items" ref={itemsEl}>
        {options?.map((item, index) => {
          return (
            <div
              className={
                selectedValue === item
                  ? `dropdown-item item-${data.indexOf(item)} selected`
                  : `dropdown-item item-${data.indexOf(item)}`
              }
              key={index}
              onClick={() =>
                changeSelectedHandler(item, name, data.indexOf(item))
              }
            >
              {item}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Dropdown;
