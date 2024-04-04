import { Parallax } from "react-parallax";
import Satellite from "../../../assests/satellite.jpeg";

const ImageTwo = () => (
  <Parallax
    className="image"
    blur={0}
    bgImage={Satellite}
    strength={800}
    bgImageStyle={{ minHeight: "400px" }}
  >
    <div className="content">
      <span className="img-txt">a trip to Space</span>
    </div>
  </Parallax>
);

export default ImageTwo;
