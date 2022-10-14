import { COPY } from "copy";
import { useMediaQuery } from "hooks/use-media-query";
import { Button } from "shared-ui";
import { NavArea } from "./styled";

export const DesktopNav = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return !isMobile ? (
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
  ) : (
    <></>
  );
};

export default DesktopNav;
