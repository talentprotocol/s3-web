import Link from "next/link";
import { ButtonLinkContainer } from "./styled";
import { Props, ButtonTypeEnum } from "./types";

export const Button = ({ text, type, variant, href }: Props) => {
  switch (type) {
    case ButtonTypeEnum.LINK:
      return (
        <Link href={href}>
          <ButtonLinkContainer variant={variant}>
            {text}
          </ButtonLinkContainer>
        </Link>
      );
    case ButtonTypeEnum.DEFAULT:
    default:
      return <div>default</div>;
  }
};
