import { useState, useEffect } from "react";

const useSelect = (defaultObject, objects) => {
  const [selectedObject, setSelectedObject] = useState(defaultObject);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const foundObject = objects?.find((object) => object?.name === searchTerm);
    setSelectedObject(foundObject || defaultObject);
  }, [searchTerm, objects, defaultObject]);

  return [selectedObject, searchTerm, setSearchTerm];
};

export default useSelect;
