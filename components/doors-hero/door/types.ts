import { TagType } from "shared-ui/label-tag/types";

export interface Props {
  isHighlighted?: boolean;
  labelType: TagType;
  labelText: string;
  title: string;
  subTitle: string;
  buttonText: string;
  url: string;
}

export interface StyledDoorProps {
  isHighlighted?: boolean;
}
