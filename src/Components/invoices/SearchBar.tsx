import type React from "react";
import { useRef } from "react";

interface SearchBarprops {
  handlefilter: (inputvalue: string) => void;
}
const SearchBar: React.FC<SearchBarprops> = ({ handlefilter }) => {
  const debounceref = useRef<number | null>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (debounceref.current) {
      clearTimeout(debounceref.current);
    }
    debounceref.current = setTimeout(() => {
      handlefilter(value);
    }, 500);
  };
  return (
    <div style={{ display: "flex" }}>
      <div style={{ margin: "5px" }}>SearchBar</div>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default SearchBar;
