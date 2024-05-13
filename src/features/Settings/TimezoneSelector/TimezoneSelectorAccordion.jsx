import {
  AccordionItem,
  AccordionBody,
  AccordionHeader,
  UncontrolledAccordion,
} from "reactstrap";
import { useMainContext } from "../../../context/MainContext";
import { useTimezones } from "../../../hooks/useTimezones";

const AccordionComponent = ({ activeZones, groups, onChange }) => {
  return (
    <UncontrolledAccordion>
      {groups.map((group) => {
        const { id, label, options } = group;
        return (
          <AccordionItem key={id}>
            <AccordionHeader targetId={id}>{label}</AccordionHeader>
            <AccordionBody accordionId={id}>
              {options.map((option) => {
                const { id, city, value } = option;
                const isActive = activeZones?.some(
                  (elem) => elem.value === value
                );
                return (
                  <div
                    className={`timezone-option ${isActive ? "active" : ""}`}
                    key={id}
                    onClick={() => {
                      onChange(option);
                    }}
                  >
                    <span>{city}:</span>
                    <span>{value}</span>
                  </div>
                );
              })}
            </AccordionBody>
          </AccordionItem>
        );
      })}
    </UncontrolledAccordion>
  );
};

const TimezoneSelectorAccordion = () => {
  const { localStore, groupedOptions } = useTimezones();
  const { selectedTimezones, addTimezone } = useMainContext();

  return (
    <>
      <AccordionComponent
        activeZones={selectedTimezones}
        groups={groupedOptions}
        onChange={addTimezone}
      />
    </>
  );
};
export default TimezoneSelectorAccordion;
