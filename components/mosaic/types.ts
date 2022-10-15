import { AvailableColors } from "shared-ui";

export interface Props {
  isMobile: boolean;
}

export interface ColumnProps {
  movedUp?: boolean;
}

export interface ShapeProps {
  backrgound?: AvailableColors;
  color?: AvailableColors;
  image?: any;
}

export interface HorizontalShapeProps extends ShapeProps {
  isBig?: boolean;
  isMedium?: boolean;
}
