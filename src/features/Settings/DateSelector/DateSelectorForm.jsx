import { useRef, useState } from "react";
import {
  Button,
  Col,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { genRandomId } from "../../../helpers/util";

const DateSelectorForm = ({ addCalendarDate }) => {
  const [error, setError] = useState(false);
  const formDateRef = useRef(null);
  const dateColorRef = useRef(null);
  const dateTypeRef = useRef(null);
  const dateDescRef = useRef(null);
  const dateShowCountdownRef = useRef(null);

  const onChange = (e) => {
    // e.preventDefault();
    setError(false);
  };

  const submit = (e) => {
    e.preventDefault();
    const formDate = formDateRef.current.value.trim();
    if (!formDate) {
      setError(true);
      return;
    }
    const formData = {
      id: genRandomId(),
      date: formDate,
      color: dateColorRef.current.value.trim(),
      type: dateTypeRef.current.value.trim(),
      desc: dateDescRef.current.value.trim(),
      showCountdown: dateShowCountdownRef.current.checked,
    };
    // console.log("formData", formData);
    addCalendarDate(formData);
    formDateRef.current.value = "";
    dateDescRef.current.value = "";
    dateShowCountdownRef.current.checked = false;
  };

  return (
    <Form className="form-calendar" onSubmit={submit} onChange={onChange}>
      <Row>
        <Col md={5}>
          <FormGroup>
            <Label for="formDate">Date</Label>
            <Input
              id="formDate"
              name="formDate"
              placeholder="date placeholder"
              type="date"
              innerRef={formDateRef}
              invalid={error}
            />
            {error && <FormFeedback invalid>Select a date</FormFeedback>}
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="dateType">Type</Label>
            <Input
              id="dateType"
              name="dateType"
              type="select"
              innerRef={dateTypeRef}
            >
              <option value="dob">Birthday</option>
              <option value="important">Important</option>
              <option value="other">Other</option>
            </Input>
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup className="input-color">
            <Label for="dateColor">Color</Label>
            <Input
              id="dateColor"
              name="dateColor"
              placeholder="color placeholder"
              type="color"
              innerRef={dateColorRef}
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="dateDesc">Description</Label>
        <Input
          id="dateDesc"
          name="dateDesc"
          placeholder=""
          type="text"
          innerRef={dateDescRef}
        />
      </FormGroup>
      <FormGroup check>
        <Input
          id="dateShowCountdown"
          name="check"
          type="checkbox"
          innerRef={dateShowCountdownRef}
        />
        <Label for="dateShowCountdown" check>
          Show countdown?
        </Label>
      </FormGroup>

      <Button>Submit</Button>
    </Form>
  );
};
export default DateSelectorForm;
