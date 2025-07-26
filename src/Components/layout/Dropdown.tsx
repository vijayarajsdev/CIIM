interface DropdownOption {
  onSelect: (value: string) => void;
}
const Dropdown: React.FC<DropdownOption> = ({ onSelect }) => {
  const options = [
    { key: "1", value: "Option 1" },
    { key: "2", value: "Option 2" },
    { key: "3", value: "Option 3" },
    { key: "4", value: "Option 4" },
    { key: "5", value: "Option 5" },
    { key: "6", value: "Option 6" },
    { key: "7", value: "Option 7" },
    { key: "8", value: "Option 8" },
    { key: "9", value: "Option 9" },
    { key: "10", value: "Option 10" },
  ];
  const handledropdownchange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    onSelect(event.target.value);
    console.log("Selected value inside component:", event.target.value);
  };
  return (
    <>
      <label htmlFor="dropdown">Select an option:</label>
      <select value={options[0]?.value} onChange={handledropdownchange}>
        {options.map((option) => (
          <option key={option.key} value={option.value}>
            {option?.value}
          </option>
        ))}
      </select>
    </>
  );
};

export default Dropdown;
