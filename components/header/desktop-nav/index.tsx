import { COPY } from "copy";
import { Button } from "shared-ui";
import { NavArea } from "./styled";

export const DesktopNav = ({
  darkMode = false,
}: {
  darkMode: boolean;
}) => {
  return (
    <NavArea>
      <Button
        text={COPY.LANDING_HERO.HEADER_LOGIN}
        type="link"
        variant="secondary"
        href="https://beta.talentprotocol.com"
        darkMode={darkMode}
      />
      <Button
        text={COPY.LANDING_HERO.HEADER_SIGN_UP}
        type="link"
        variant="primary"
        onClick={() => {
          try {
            // @ts-ignore
            gtag("event", "sign_up", {
              device: "desktop",
              event_name: "signup_click",
            });
            return true;
          } catch {
            return true;
          }
        }}
        href="https://beta.talentprotocol.com/join"
      />
    </NavArea>
  );
};
