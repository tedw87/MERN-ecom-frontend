import { Form } from "react-bootstrap";

const AttributesFilterComponent = () => {
  return (
    <>
      {[
        { color: ["red", "blue", "green"] },
        { ram: ["1TB", "2TB", "4TB"] },
      ].map((item, index) => (
        <div key={index} className="mb-3">
          <Form.Label>
            <b>{Object.keys(item)}</b>
          </Form.Label>
          {item[Object.keys(item)].map((i, index) => (
            <Form.Check type="checkbox" key={index} label={i} />
          ))}
        </div>
      ))}
    </>
  );
};

export default AttributesFilterComponent;
