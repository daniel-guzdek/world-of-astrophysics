import React, { useState, useRef, useEffect, useCallback } from "react";
import Dropdown from "../Dropdown/Dropdown";

const Select = ({
  data,
  value,
  name,
  onChange,
  error,
  defaultOptionLabel,
  searchPlaceholder,
}) => {
  const [selectedValue, setSelectedValue] = useState(value);
  const [selectedIndex, setSelectedIndex] = useState(
    value !== "" ? data.indexOf(value) : null
  );
  const [search, setSearch] = useState("");
  const [options, setOptions] = useState(data);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownEl = useRef();

  // hide dropdown if clicked outside of dropdown
  const handleClickOutside = useCallback(
    (e) => {
      if (
        showDropdown &&
        e.target.closest(".dropdown") !== dropdownEl.current
      ) {
        setShowDropdown(false);
        setSearch("");
        setOptions(data);
      }
    },
    [showDropdown, setShowDropdown, dropdownEl, data]
  );

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.addEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  const changeSelectedHandler = (item, name, index) => {
    setSelectedValue(item);
    setSelectedIndex(index);
    setShowDropdown(false);
    onChange(item, name);
  };

  const searchChangeHandler = (e) => {
    setSearch(e.target.value);
    const filteredOptions = data.filter((opt) => {
      return opt.toLowerCase().includes(e.target.value.trim().toLowerCase());
    });
    setOptions(filteredOptions);
  };

  return (
    <div className="select-group">
      <div className="dropdown" ref={dropdownEl}>
        <input
          type="hidden"
          name={name}
          onChange={(e) => onChange(value, name)}
        />
        <div
          className="dropdown-selected"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          {selectedValue
            ? selectedValue
            : defaultOptionLabel
            ? defaultOptionLabel
            : "Select..."}
        </div>
        {showDropdown && (
          <Dropdown
            searchPlaceholder={searchPlaceholder}
            search={search}
            searchChangeHandler={searchChangeHandler}
            options={options}
            selectedValue={selectedValue}
            selectedIndex={selectedIndex}
            changeSelectedHandler={changeSelectedHandler}
            name={name}
            data={data}
          />
        )}
        {error && <div className="dropdown-error">{error}</div>}
      </div>
    </div>
  );
};

export default Select;
