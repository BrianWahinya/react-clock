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
  const dateRepeatRef = useRef(null);
  const dateNameRef = useRef(null);
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
      repeat: dateRepeatRef.current.value.trim(),
      name: dateNameRef.current.value.trim(),
      showCountdown: dateShowCountdownRef.current.checked,
    };
    // console.log("formData", formData);
    addCalendarDate(formData);
    formDateRef.current.value = "";
    dateNameRef.current.value = "";
    dateShowCountdownRef.current.checked = false;
  };

  const reset = (e) => {
    e.preventDefault();
    formDateRef.current.value = "";
    dateNameRef.current.value = "";
    dateShowCountdownRef.current.checked = false;
  };

  return (
    <Form
      className="form-calendar"
      onSubmit={submit}
      onReset={reset}
      onChange={onChange}
    >
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="dateName">Name</Label>
            <Input
              id="dateName"
              name="dateName"
              placeholder=""
              type="text"
              innerRef={dateNameRef}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
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
      </Row>
      <Row>
        <Col md={4}>
          <FormGroup>
            <Label for="dateType">Type</Label>
            <Input
              id="dateType"
              name="dateType"
              type="select"
              innerRef={dateTypeRef}
            >
              <option value="important">Important</option>
              <option value="dob">Birthday</option>
              <option value="other">Other</option>
            </Input>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="dateRepeat">Repeat</Label>
            <Input
              id="dateRepeat"
              name="dateRepeat"
              type="select"
              innerRef={dateRepeatRef}
            >
              <option value="yearly">Yearly</option>
              <option value="monthly">Monthly</option>
            </Input>
          </FormGroup>
        </Col>
        <Col md={4}>
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
      <FormGroup className="form-btns">
        <Button className="btn-submit" size="sm" color="primary" outline>
          Save
        </Button>
        <Button
          type="reset"
          className="btn-reset"
          size="sm"
          color="danger"
          outline
        >
          Reset
        </Button>
      </FormGroup>
    </Form>
  );
};
export default DateSelectorForm;
