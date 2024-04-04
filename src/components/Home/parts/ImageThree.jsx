import { Parallax } from "react-parallax";
import spaceStation from "../../../assests/spaceStation.jpeg";
const ImageThree = () => (
  <Parallax
    className="image"
    blur={0}
    bgImage={spaceStation}
    strength={800}
    bgImageStyle={{ minHeight: "400px" }}
  >
    <div className="content">
      <span className="img-txt">a trip to Space</span>
    </div>
  </Parallax>
);

export default ImageThree;
