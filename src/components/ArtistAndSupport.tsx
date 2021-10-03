import { Col, Image } from "react-bootstrap";

type PropType = {
  size: number;
  imgSrc: string;
  name: string;
  homepage: string;
};

export const Artist = (props: PropType) => {
  const width = props.size === 6 ? "w-50" : "w-75";

  return (
    <Col xs={props.size} className="text-center">
      <a href={props.homepage} className="text-black text-decoration-none">
        <Image src={props.imgSrc} className={width} roundedCircle thumbnail />
        <br />
        <small>{props.name}</small>
      </a>
    </Col>
  );
};

export const Support = (props: PropType) => {
  return (
    <Col xs={props.size} className="text-center">
      <a href={props.homepage} className="text-black text-decoration-none">
        <Image src={props.imgSrc} className="w-50" rounded thumbnail />
        <p>{props.name}</p>
      </a>
    </Col>
  );
};
