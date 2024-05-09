import { default as ReactSelect } from "react-select";
import makeAnimated from "react-select/animated";
import "./css/select.css";

const formatGroupLabel = (data) => (
  <div className="select-group">
    <span>{data.label}</span>
    <span className="select-group-badge">{data.options.length}</span>
  </div>
);

const formatOptionLabel = (option) => (
  <div className="select-option">{option.label}</div>
);

const customStyles = {
  // control: (provided, state) => {
  //   console.log(provided, state);
  //   return {
  //     ...provided,
  //   };
  // },
  // valueContainer: (provided) => ({
  //   ...provided,
  //   maxHeight: "40px",
  //   overflow: "auto",
  // }),
};

const animatedComponents = makeAnimated();

const Select = ({ groupedOptions, defaultOption, onChange }) => {
  return (
    <ReactSelect
      className="input-select"
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={[...defaultOption]}
      isMulti
      options={groupedOptions}
      //   menuIsOpen={true}
      formatGroupLabel={formatGroupLabel}
      formatOptionLabel={formatOptionLabel}
      onChange={onChange}
      styles={customStyles}
    />
  );
};
export default Select;
