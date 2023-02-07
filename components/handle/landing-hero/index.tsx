import { useRef, useState } from "react";
import Image from "next/image";
import { COPY } from "copy/handle";
import { Typography } from "shared-ui";
import {
  Container,
  ItalicText,
  EarlyBird,
  EarlyBirdPromo,
  EarlyBirdPromoTag,
  PriceTag,
  SearchContainer,
  HandleInput,
  StyledReserveHandleButton,
  BenefitsArea,
  MainContainer,
  ImageContainer,
  SearchingSection,
  PinkButton,
  StepBox,
  StepNumberContainer,
  StepDescriptionContainer,
  WhiteText,
  PaymentSection,
  PaymentsRow,
  HelpText,
  NeutralButton
} from "./styled";
import { Props } from "./types";
import arrowDown from "./assets/arrow-down.svg";
import arrow from "./assets/arrow.svg";
import Circles from "./assets/circles.png";
import Taken from "./assets/taken.svg";
import Available from "./assets/available.svg";

import Spinner from "components/handle/spinner";

import { ethers } from "ethers";
import REGISTRAR from "./TalRegistrar.json";

// TODO: REPLACE MAINNET
// TOOD: REPLACE ALT IMAGES descriptions
// TODO: CALL TO ACTION SEND TO TOP OF PAGE
// TODO: CHECK WITH PP OVERSTATE ON available step
const DOMAIN_CONTRACT = "0x38B5Fb838e5A605dF510525d4A4D197Ae0DB20f0";
const CHAIN_ID = 5;
const CHAIN = "goerli";
const RPC_URL = "https://goerli.infura.io/v3/";
const NO_OWNER = "0x0000000000000000000000000000000000000000";

export const LandingHero = ({ isMobile, isSafari, isAndroid }: Props) => {
  const talRef = useRef<HTMLSpanElement>(null);
  const [currentStage, changeCurrentStage] = useState("search");
  const [desiredName, setDesiredName] = useState("");

  const checkAvailability = async () => {
    if ((talRef.current?.innerText?.length || 0) < 3) {
      return;
    }

    changeCurrentStage("searching");
    const desiredDomain = talRef.current?.innerText || "";
    setDesiredName(desiredDomain);
    console.log("checking availability");
    console.log(desiredDomain);

    // @ts-ignore
    const provider = ethers.getDefaultProvider(CHAIN);
    const subdomainContract = new ethers.Contract(
      DOMAIN_CONTRACT,
      REGISTRAR.abi,
      provider
    );

    const owner = await subdomainContract.subDomainOwner(desiredDomain);
    console.log(owner);

    // @ts-ignore
    if (owner == NO_OWNER) {
      console.log("DOMAIN ISN'T TAKEN");
      changeCurrentStage("available");
    } else {
      console.log("DOMAIN IS TAKEN");
      changeCurrentStage("taken");
    }
  };

  const startBuyProcess = () => {
    changeCurrentStage("step1");
  }

  const connectWallet = async () => {
    // @ts-ignore
    const { ethereum } = window;
    if (!ethereum || !ethereum.isMetaMask) {
      alert("You need to have metamask on your browser or use the matemask browser");
      return;
    }
    const defaultProvider = new ethers.providers.Web3Provider(ethereum);

    const accounts = await defaultProvider.send("eth_requestAccounts", []);
    if (accounts.length == 0) {
      alert("You need to allow us to connect to at least one wallet.");
      return;
    }

    const chainHex = ethers.utils.hexValue(ethers.utils.hexlify(CHAIN_ID));
    await defaultProvider.send("wallet_switchEthereumChain", [
      { chainId: chainHex },
    ]);

    changeCurrentStage("step2");
  }

  const buyDomain = async () => {
    // @ts-ignore
    const { ethereum } = window;
    if (!ethereum || !ethereum.isMetaMask) {
      alert("You need to have metamask on your browser or use the matemask browser");
      return;
    }
    const defaultProvider = new ethers.providers.Web3Provider(ethereum);

    const accounts = await defaultProvider.send("eth_requestAccounts", []);
    if (accounts.length == 0) {
      alert("You need to allow us to connect to at least one wallet.");
      return;
    }

    const chainHex = ethers.utils.hexValue(ethers.utils.hexlify(CHAIN_ID));
    await defaultProvider.send("wallet_switchEthereumChain", [
      { chainId: chainHex },
    ]);

    // @ts-ignore
    const provider = ethers.getDefaultProvider(CHAIN);
    const subdomainContract = new ethers.Contract(
      DOMAIN_CONTRACT,
      REGISTRAR.abi,
      provider
    );

    const account = accounts[0];

    const valueInEth = await subdomainContract.domainPriceInEth();
    const event = await subdomainContract.connect(account).register(desiredName, { value: valueInEth });
    await event.wait();
    console.log("done");

    console.log("Double checking");
    const newOwner = await subdomainContract.subDomainOwner(desiredName);
    console.log(newOwner);
  };

  const cancelBuy = () => {
    changeCurrentStage("search");
  }

  const renderStage = () => {
    switch(currentStage) {
      case "searching":
        return (
          <>
            <Spinner noBox={true}/>
            <SearchingSection>
              <Typography type="general" color="WHITE">
                <>{COPY.BENEFITS.SEARCHING.TITLE}</>
              </Typography>
              <Typography type="body1" color="WHITE">
                <>{COPY.BENEFITS.SEARCHING.SUBTITLE}</>
              </Typography>
            </SearchingSection>
            <BenefitsArea>
              <Image src={arrowDown} alt="icon image" />
              <Typography type="body1" color="PINK"><>{COPY.LANDING_HERO.BENEFITS}</></Typography>
            </BenefitsArea>
          </>
        );
      case "taken":
        return (
          <>
            <Image src={Taken} alt="icon image"/>
            <SearchingSection>
              <Typography type="h3" color="WHITE">
                <>{desiredName}{COPY.BENEFITS.TAKEN.TITLE}</>
              </Typography>
              <Typography type="p1" color="WHITE">
                <>{COPY.BENEFITS.TAKEN.SUBTITLE}</>
              </Typography>
            </SearchingSection>
            <SearchContainer>
              <HandleInput
                ref={talRef}
                contentEditable
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    e.stopPropagation();
                  }
                }}
                spellCheck={false}
                placeholder={COPY.LANDING_HERO.EARLY_BIRD.INPUT_PLACEHOLDER}
              />
              <StyledReserveHandleButton
                onClick={() => checkAvailability()}
              >
                {COPY.LANDING_HERO.EARLY_BIRD.BUTTON}
              </StyledReserveHandleButton>
            </SearchContainer>
            <BenefitsArea>
              <Image src={arrowDown} alt="icon image" />
              <Typography type="body1" color="PINK"><>{COPY.LANDING_HERO.BENEFITS}</></Typography>
            </BenefitsArea>
          </>
        );
      case "available":
        return (
          <>
            <Image src={Available} alt="icon image"/>
            <SearchingSection>
              <Typography type="h3" color="WHITE">
                <>{desiredName}{COPY.BENEFITS.AVAILABLE.TITLE}</>
              </Typography>
              <Typography type="p1" color="WHITE">
                <>{COPY.BENEFITS.AVAILABLE.SUBTITLE}</>
              </Typography>
            </SearchingSection>
            <PinkButton onClick={() => startBuyProcess()}>
              {COPY.BENEFITS.AVAILABLE.BUTTON}
            </PinkButton>
            <BenefitsArea>
              <Image src={arrowDown} alt="icon image" />
              <Typography type="body1" color="PINK"><>{COPY.LANDING_HERO.BENEFITS}</></Typography>
            </BenefitsArea>
          </>
        );
      case "step1":
        return (
          <>
            <StepBox>
              <StepNumberContainer>
                <Typography type="p2" color="WHITE">
                  <>{"Step 1/"}</>
                </Typography>
                <Typography type="p2" color="LIGHT_GREY"><>{"2"}</></Typography>
              </StepNumberContainer>
              <StepDescriptionContainer>
                <Typography type="h5" color="WHITE">
                  <>{COPY.BENEFITS.STEP_1.TITLE}</>
                </Typography>
                <Typography type="p2" color="LIGHT_GREY">
                  <>{COPY.BENEFITS.STEP_1.SUBTITLE}</>
                </Typography>
              </StepDescriptionContainer>
              <PinkButton onClick={() => connectWallet()}>
                {COPY.BENEFITS.STEP_1.BUTTON}
              </PinkButton>
            </StepBox>
          </>
        );
      case "step2":
        return (
          <>
            <StepBox>
              <StepNumberContainer>
                <Typography type="p2" color="WHITE">
                  <>{"Step 2/"}</>
                </Typography>
                <Typography type="p2" color="LIGHT_GREY"><>{"2"}</></Typography>
              </StepNumberContainer>
              <StepDescriptionContainer>
                <Typography type="h5" color="WHITE">
                  <>{COPY.BENEFITS.STEP_1.TITLE}</>
                </Typography>
                <Typography type="p2" color="LIGHT_GREY">
                  <>{COPY.BENEFITS.STEP_2.SUBTITLE_PART_1}<WhiteText>{desiredName}{COPY.BENEFITS.STEP_2.WHITE_TEXT_PART_1}</WhiteText>{COPY.BENEFITS.STEP_2.SUBTITLE_PART_2}<WhiteText>{desiredName}{COPY.BENEFITS.STEP_2.WHITE_TEXT_PART_2}</WhiteText>{COPY.BENEFITS.STEP_2.SUBTITLE_PART_3}</>
                </Typography>
              </StepDescriptionContainer>
              <PaymentSection>
                <PaymentsRow>
                  <Typography type="p2" color="LIGHT_GREY" text="Annual Subscription"/>
                  <Typography type="p2" color="WHITE" text="$8.00/year"/>
                </PaymentsRow>
                <PaymentsRow>
                  <Typography type="p2" color="LIGHT_GREY" text="Gas fee"/>
                  <Typography type="p2" color="WHITE" text="Ethereum gas fee"/>
                </PaymentsRow>
              </PaymentSection>
              <PaymentSection>
                <PaymentsRow>
                  <Typography type="p1" color="WHITE" text="Total"/>
                  <Typography type="p1" color="WHITE" text="$8.00 + Gas fee"/>
                </PaymentsRow>
              </PaymentSection>
              <HelpText>
                <Typography type="p3" color="LIGHT_GREY">
                  <>{COPY.BENEFITS.STEP_2.HELP}</>
                </Typography>
              </HelpText>
              <PinkButton onClick={() => buyDomain()}>
                {COPY.BENEFITS.STEP_2.BUTTON_YES}
              </PinkButton>
              <NeutralButton onClick={() => cancelBuy()}>
                {COPY.BENEFITS.STEP_2.BUTTON_NO}
              </NeutralButton>
            </StepBox>
          </>
        );
      default:
        return (
          <>
            <Typography type="h3" color={"WHITE"}>
              <>
                <Image src={arrow} alt="icon image" />
                <><br/>{COPY.LANDING_HERO.TITLE_REGULAR_1}<br/></>
                <ItalicText>{COPY.LANDING_HERO.TITLE_ITALIC_1}</ItalicText>
                <><br/>{COPY.LANDING_HERO.TITLE_REGULAR_2}<br/></>
                <ItalicText>{COPY.LANDING_HERO.TITLE_ITALIC_2}</ItalicText>
              </>
            </Typography>
            <EarlyBird>
                <EarlyBirdPromo>
                  <EarlyBirdPromoTag>
                    <Typography type="p3" color={"DARK_BLUE"}>
                      <>{COPY.LANDING_HERO.EARLY_BIRD.PROMO}</>
                    </Typography>
                  </EarlyBirdPromoTag>
                </EarlyBirdPromo>
                <PriceTag>
                  <Typography type="h3" color={"WHITE"}>
                    <>{COPY.LANDING_HERO.EARLY_BIRD.PRICE}</>
                  </Typography>
                  <Typography type="p1" color={"PINK"}>
                    <>{COPY.LANDING_HERO.EARLY_BIRD.PERIOD}</>
                  </Typography>
                </PriceTag>
                <SearchContainer>
                  <HandleInput
                    ref={talRef}
                    contentEditable
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        e.stopPropagation();
                      }
                    }}
                    spellCheck={false}
                    placeholder={COPY.LANDING_HERO.EARLY_BIRD.INPUT_PLACEHOLDER}
                  />
                  <StyledReserveHandleButton
                    onClick={() => checkAvailability()}
                  >
                    {COPY.LANDING_HERO.EARLY_BIRD.BUTTON}
                  </StyledReserveHandleButton>
                </SearchContainer>
                <BenefitsArea>
                  <Image src={arrowDown} alt="icon image" />
                  <Typography type="body1" color="PINK"><>{COPY.LANDING_HERO.BENEFITS}</></Typography>
                </BenefitsArea>
            </EarlyBird>
          </>
        )
    }
  }

  return (
    <MainContainer isMobile={isMobile}>
      <Container isMobile={isMobile}>
        {renderStage()}
      </Container>
      <ImageContainer isMobile={isMobile || currentStage.includes("step")}>
        <Image src={Circles} alt="icon image" />
      </ImageContainer>
    </MainContainer>
  );
};
