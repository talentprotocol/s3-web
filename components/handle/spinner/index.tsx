import React from "react";
import { Container } from "./styled";
import { Props } from "./types";

const Spinner = ({ noBox = false }: Props) => 
  <Container noBox={noBox}>
    <svg
      viewBox={"0 0 64 64"}
      width={64}
      height={64}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      id="loading"
      className="rotate"
    >
      <path d="M32 0C37.9015 7.03749e-08 43.6881 1.63198 48.72 4.71551C53.7518 7.79905 57.833 12.214 60.5122 17.4723C63.1914 22.7306 64.3644 28.6274 63.9014 34.5107C63.4383 40.394 61.3574 46.0347 57.8885 50.8091L55.2997 48.9282C58.4216 44.6312 60.2945 39.5546 60.7112 34.2596C61.1279 28.9646 60.0723 23.6575 57.661 18.9251C55.2497 14.1926 51.5766 10.2191 47.048 7.44396C42.5193 4.66878 37.3114 3.2 32 3.2L32 0Z" fill="#E1C3FF"/>
    </svg>
  </Container>;

export default Spinner;