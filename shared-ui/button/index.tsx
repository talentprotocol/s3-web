import Link from "next/link";
import { ButtonLinkContainer } from "./styled";
import { Props, ButtonTypeEnum } from "./types";

export const Button = ({
  text,
  type,
  variant,
  children,
  href = "/",
}: Props) => {
  switch (type) {
    case ButtonTypeEnum.LINK:
      return (
        <Link href={href} passHref>
          <ButtonLinkContainer variant={variant} target="_blank">
            {text}
            {children}
          </ButtonLinkContainer>
        </Link>
      );
    case ButtonTypeEnum.DEFAULT:
    default:
      return <div>TBD</div>;
  }
};
