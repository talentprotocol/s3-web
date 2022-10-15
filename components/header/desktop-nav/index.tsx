import { COPY } from "copy";
import { Button } from "shared-ui";
import { NavArea } from "./styled";

export const DesktopNav = () => {
  return (
    <NavArea>
      <Button
        text={COPY.LANDING_HERO.HEADER_LOGIN}
        type="link"
        variant="secondary"
        href="/"
      />
      <Button
        text={COPY.LANDING_HERO.HEADER_SIGN_UP}
        type="link"
        variant="primary"
        href="/"
      />
    </NavArea>
  );
};
