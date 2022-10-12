import styled, { css, keyframes } from "styled-components";
import { COLORS, fontNormal } from "shared-ui";
import { HorizontalShapeProps, ShapeProps } from "./types";

/*
const sliderRotation = keyframes`
    from {
      transform: translate(-20%, 0);
    }
    to {
      transform: translate(0%, 0);
    }
`;
*/

export const Container = styled.div`
  width: 150%;
  min-height: 320px;
  max-height: 320px;
  overflow: hidden;
  display: flex;
  transform: translate(-86px, 0);

  @media (min-width: 768px) {
    min-height: 374px;
    max-height: 374px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OvalShape = styled.div<ShapeProps>`
  min-width: 172px;
  min-height: 270px;
  max-width: 172px;
  max-height: 270px;
  border-radius: 216px;
  ${({ backrgound }) =>
    backrgound && `background: ${COLORS[backrgound]};`};
`;

export const ImageOvalShape = styled.div<ShapeProps>`
  min-width: 196px;
  min-height: 286px;
  max-width: 196px;
  max-height: 286px;
  border-radius: 216px;
  background-image: url("${({ image }) => image}");
  background-position: center;
  background-size: cover;
`;

export const HorizontalOvalShape = styled.div<HorizontalShapeProps>`
  ${fontNormal}
  font-weight: 400;
  font-size: 32px;
  line-height: 120%;
  min-width: 196px;
  min-height: 96px;
  max-width: 196px;
  max-height: 96px;
  border-radius: 216px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ backrgound }) =>
    backrgound && css`background: ${COLORS[backrgound]};`};
  ${({ color }) => color && css`color: ${COLORS[color]};`};
  ${({ isBig }) => isBig && css`
    min-width: 286px;
    max-width: 286px;
  `};
  ${({ isMedium }) => isMedium && css`
    min-width: 234px;
    max-width: 234px;
  `};
`;
