import { AvailableColors } from "shared-ui";

export interface ShapeProps {
  backrgound?: AvailableColors;
  color?: AvailableColors;
  image?: string;
}

export interface HorizontalShapeProps extends ShapeProps {
  isBig?: boolean;
  isMedium?: boolean;
}
