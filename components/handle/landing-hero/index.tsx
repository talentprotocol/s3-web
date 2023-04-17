import { useEffect, useRef, useState } from "react";
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
  NeutralButton,
  ButtonConfirmationContainer,
  LeftAlignSVG,
  TextWithButton,
  StyledText,
  BigItalicText,
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

// MAINNET ADDRESS: 0xc187Cf217f578B7Ef6b895E08197a18E77FCd185
// TESTNET ADDRESS: 0xa25976089f3A74319660c088063Ebf8B4a55B039
const DOMAIN_CONTRACT = "0xe86C5ea96eA47D3A9D835672C1428329bD0bb7Af";
const CHAIN_ID = 1;
const NO_OWNER = "0x0000000000000000000000000000000000000000";

export const LandingHero = ({
  isMobile,
  isSafari,
  isAndroid,
}: Props) => {
  const talRef = useRef<HTMLDivElement>(null);
  const [currentStage, changeCurrentStage] = useState("search");
  const [desiredName, setDesiredName] = useState("");

  useEffect(() => {
    // @ts-ignore
    const url = new URL(document.location);
    const name = url.searchParams.get("name") || "";

    if (name != "") {
      if (talRef?.current) {
        // @ts-ignore
        talRef.current.innerText = name;
      }
      window.history.pushState(
        {},
        document.location.href,
        document.location.href.replace(document.location.search, "")
      );
    }
  });

  const checkAvailability = async () => {
    if ((talRef.current?.innerText?.length || 0) < 3) {
      return;
    }

    // @ts-ignore
    const { ethereum } = window;
    if (!ethereum || !ethereum.isMetaMask) {
      alert(
        "You need to have metamask on your browser or use the matemask browser"
      );
      return;
    }
    const defaultProvider = new ethers.providers.Web3Provider(
      ethereum
    );

    const chainHex = ethers.utils.hexValue(
      ethers.utils.hexlify(CHAIN_ID)
    );
    await defaultProvider.send("wallet_switchEthereumChain", [
      { chainId: chainHex },
    ]);

    changeCurrentStage("searching");
    const desiredDomain = (
      talRef.current?.innerText || ""
    ).toLowerCase();
    setDesiredName(desiredDomain);
    console.log("checking availability");
    console.log(desiredDomain);

    // @ts-ignore
    const provider = new ethers.providers.Web3Provider(ethereum);
    const subdomainContract = new ethers.Contract(
      DOMAIN_CONTRACT,
      REGISTRAR.abi,
      provider
    );

    const owner = await subdomainContract.subDomainOwner(
      desiredDomain
    );
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
  };

  const connectWallet = async () => {
    // @ts-ignore
    const { ethereum } = window;
    if (!ethereum || !ethereum.isMetaMask) {
      alert(
        "You need to have metamask on your browser or use the matemask browser"
      );
      return;
    }
    const defaultProvider = new ethers.providers.Web3Provider(
      ethereum
    );

    const accounts = await defaultProvider.send(
      "eth_requestAccounts",
      []
    );
    if (accounts.length == 0) {
      alert(
        "You need to allow us to connect to at least one wallet."
      );
      return;
    }

    const chainHex = ethers.utils.hexValue(
      ethers.utils.hexlify(CHAIN_ID)
    );
    await defaultProvider.send("wallet_switchEthereumChain", [
      { chainId: chainHex },
    ]);

    changeCurrentStage("step2");
  };

  const buyDomain = async () => {
    // @ts-ignore
    const { ethereum } = window;
    if (!ethereum || !ethereum.isMetaMask) {
      alert(
        "You need to have metamask on your browser or use the matemask browser"
      );
      return;
    }
    const defaultProvider = new ethers.providers.Web3Provider(
      ethereum
    );

    const accounts = await defaultProvider.send(
      "eth_requestAccounts",
      []
    );
    if (accounts.length == 0) {
      alert(
        "You need to allow us to connect to at least one wallet."
      );
      return;
    }

    const chainHex = ethers.utils.hexValue(
      ethers.utils.hexlify(CHAIN_ID)
    );
    await defaultProvider.send("wallet_switchEthereumChain", [
      { chainId: chainHex },
    ]);

    // @ts-ignore
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();

    const subdomainContract = new ethers.Contract(
      DOMAIN_CONTRACT,
      REGISTRAR.abi,
      signer
    );

    const valueInEth = await subdomainContract.domainPriceInEth();
    console.log(valueInEth);
    console.log("Value: ", ethers.utils.formatUnits(valueInEth));

    // Add rejection;
    const event = await subdomainContract
      .connect(signer)
      .register(desiredName, { value: valueInEth });
    console.log("before wait");
    if (!event) {
      alert("You need to confirm the transaction");
      return;
    }
    await event.wait();
    console.log("done");

    console.log("Double checking");
    const newOwner = await subdomainContract.subDomainOwner(
      desiredName
    );
    console.log(newOwner);

    // show https://app.ens.domains/address/0x33041027dd8F4dC82B6e825FB37ADf8f15d44053/controller
    changeCurrentStage("step3");
  };

  const goToProfile = async () => {
    // @ts-ignore
    const { ethereum } = window;
    if (!ethereum || !ethereum.isMetaMask) {
      alert(
        "You need to have metamask on your browser or use the matemask browser"
      );
      return;
    }
    const defaultProvider = new ethers.providers.Web3Provider(
      ethereum
    );

    const accounts = await defaultProvider.send(
      "eth_requestAccounts",
      []
    );
    if (accounts.length == 0) {
      alert(
        "You need to allow us to connect to at least one wallet."
      );
      return;
    }

    const account = accounts[0];
    window.open(`https://beta.talentprotocol.com/u/${account}`);
  };

  const goToENS = async () => {
    // @ts-ignore
    const { ethereum } = window;
    if (!ethereum || !ethereum.isMetaMask) {
      alert(
        "You need to have metamask on your browser or use the matemask browser"
      );
      return;
    }
    const defaultProvider = new ethers.providers.Web3Provider(
      ethereum
    );

    const accounts = await defaultProvider.send(
      "eth_requestAccounts",
      []
    );
    if (accounts.length == 0) {
      alert(
        "You need to allow us to connect to at least one wallet."
      );
      return;
    }

    const account = accounts[0];
    window.open(
      `https://app.ens.domains/address/${account}/controller`
    );
  };

  const cancelBuy = () => {
    changeCurrentStage("search");
  };

  const renderStage = () => {
    switch (currentStage) {
      case "searching":
        return (
          <>
            <Spinner noBox={true} />
            <SearchingSection>
              <Typography type="general" color="WHITE">
                <>{COPY.BENEFITS.SEARCHING.TITLE}</>
              </Typography>
              <Typography type="body1" color="WHITE">
                <>{COPY.BENEFITS.SEARCHING.SUBTITLE}</>
              </Typography>
            </SearchingSection>
            <BenefitsArea>
              <Image src={arrowDown} alt="arrow pointing down" />
              <Typography type="body1" color="PINK">
                <>{COPY.LANDING_HERO.BENEFITS}</>
              </Typography>
            </BenefitsArea>
          </>
        );
      case "taken":
        return (
          <>
            <LeftAlignSVG>
              <Image src={Taken} alt="red cross" />
            </LeftAlignSVG>
            <SearchingSection>
              <Typography type="h3" color="WHITE">
                <>
                  {desiredName}
                  {COPY.BENEFITS.TAKEN.TITLE}
                </>
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
                placeholder={
                  COPY.LANDING_HERO.EARLY_BIRD.INPUT_PLACEHOLDER
                }
              />
              <StyledReserveHandleButton
                onClick={() => checkAvailability()}
              >
                {COPY.LANDING_HERO.EARLY_BIRD.BUTTON}
              </StyledReserveHandleButton>
            </SearchContainer>
            <BenefitsArea>
              <Image src={arrowDown} alt="arrow pointing down" />
              <Typography type="body1" color="PINK">
                <>{COPY.LANDING_HERO.BENEFITS}</>
              </Typography>
            </BenefitsArea>
          </>
        );
      case "available":
        return (
          <>
            <LeftAlignSVG>
              <Image src={Available} alt="Green check mark" />
            </LeftAlignSVG>
            <SearchingSection>
              <Typography type="h3" color="WHITE">
                <>
                  {desiredName}
                  {COPY.BENEFITS.AVAILABLE.TITLE}
                </>
              </Typography>
              <Typography type="p1" color="WHITE">
                <>{COPY.BENEFITS.AVAILABLE.SUBTITLE}</>
              </Typography>
            </SearchingSection>
            <PinkButton
              onClick={() => startBuyProcess()}
              alignButtonLeft={true}
            >
              {COPY.BENEFITS.AVAILABLE.BUTTON}
            </PinkButton>
            <BenefitsArea>
              <Image src={arrowDown} alt="arrow pointing down" />
              <Typography type="body1" color="PINK">
                <>{COPY.LANDING_HERO.BENEFITS}</>
              </Typography>
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
                <Typography type="p2" color="LIGHT_GREY">
                  <>{"3"}</>
                </Typography>
              </StepNumberContainer>
              <StepDescriptionContainer>
                <Typography type="h5" color="WHITE">
                  <>{COPY.BENEFITS.STEP_1.TITLE}</>
                </Typography>
                <Typography type="p2" color="LIGHT_GREY">
                  <>{COPY.BENEFITS.STEP_1.SUBTITLE}</>
                </Typography>
              </StepDescriptionContainer>
              <PinkButton
                onClick={() => connectWallet()}
                alignButtonLeft={false}
              >
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
                <Typography type="p2" color="LIGHT_GREY">
                  <>{"3"}</>
                </Typography>
              </StepNumberContainer>
              <StepDescriptionContainer>
                <Typography type="h5" color="WHITE">
                  <>{COPY.BENEFITS.STEP_1.TITLE}</>
                </Typography>
                <Typography type="p2" color="LIGHT_GREY">
                  <>
                    {COPY.BENEFITS.STEP_2.SUBTITLE_PART_1}
                    <WhiteText>
                      {desiredName}
                      {COPY.BENEFITS.STEP_2.WHITE_TEXT_PART_1}
                    </WhiteText>
                    {COPY.BENEFITS.STEP_2.SUBTITLE_PART_2}
                    <WhiteText>
                      {desiredName}
                      {COPY.BENEFITS.STEP_2.WHITE_TEXT_PART_2}
                    </WhiteText>
                    {COPY.BENEFITS.STEP_2.SUBTITLE_PART_3}
                  </>
                </Typography>
              </StepDescriptionContainer>
              <PaymentSection>
                <PaymentsRow>
                  <Typography
                    type="p2"
                    color="LIGHT_GREY"
                    text="Annual Subscription"
                  />
                  <Typography
                    type="p2"
                    color="WHITE"
                    text="$8.00/year"
                  />
                </PaymentsRow>
                <PaymentsRow>
                  <Typography
                    type="p2"
                    color="LIGHT_GREY"
                    text="Gas fee"
                  />
                  <Typography
                    type="p2"
                    color="WHITE"
                    text="Ethereum gas fee"
                  />
                </PaymentsRow>
              </PaymentSection>
              <PaymentSection>
                <PaymentsRow>
                  <Typography type="p1" color="WHITE" text="Total" />
                  <Typography
                    type="p1"
                    color="WHITE"
                    text="$8.00 + Gas fee"
                  />
                </PaymentsRow>
              </PaymentSection>
              <HelpText>
                <Typography type="p3" color="LIGHT_GREY">
                  <>{COPY.BENEFITS.STEP_2.HELP}</>
                </Typography>
              </HelpText>
              <ButtonConfirmationContainer>
                <PinkButton
                  onClick={() => buyDomain()}
                  alignButtonLeft={false}
                >
                  {COPY.BENEFITS.STEP_2.BUTTON_YES}
                </PinkButton>
                <NeutralButton onClick={() => cancelBuy()}>
                  {COPY.BENEFITS.STEP_2.BUTTON_NO}
                </NeutralButton>
              </ButtonConfirmationContainer>
            </StepBox>
          </>
        );
      case "step3":
        return (
          <>
            <StepBox>
              <StepNumberContainer>
                <Typography type="p2" color="WHITE">
                  <>{"Step 3/"}</>
                </Typography>
                <Typography type="p2" color="LIGHT_GREY">
                  <>{"3"}</>
                </Typography>
              </StepNumberContainer>
              <StepDescriptionContainer>
                <Typography type="h5" color="WHITE">
                  <>
                    {desiredName}
                    {COPY.BENEFITS.SETTINGS.TITLE_PART_1}
                    {isMobile ? <br /> : " "}
                    {COPY.BENEFITS.SETTINGS.TITLE_PART_2} 👏
                  </>
                </Typography>
                <Typography type="p2" color="LIGHT_GREY">
                  <>
                    <WhiteText>
                      {COPY.BENEFITS.SETTINGS.SUBTITLE_PART_1}
                      {desiredName}
                      {COPY.BENEFITS.SETTINGS.SUBTITLE_PART_2_WHITE}
                    </WhiteText>
                    {COPY.BENEFITS.SETTINGS.SUBTITLE_PART_3}
                  </>
                </Typography>
              </StepDescriptionContainer>
              <StepDescriptionContainer>
                <Typography type="p1" color="WHITE">
                  <>{COPY.BENEFITS.SETTINGS.PROFILE_SECTION_TITLE}</>
                </Typography>
                <TextWithButton>
                  <Typography type="p2" color="LIGHT_GREY">
                    <>
                      {
                        COPY.BENEFITS.SETTINGS
                          .PROFILE_SECTION_DESCRIPTION
                      }
                    </>
                  </Typography>
                  <PinkButton
                    onClick={() => goToProfile()}
                    alignButtonLeft={true}
                  >
                    {COPY.BENEFITS.SETTINGS.PROFILE_SECTION_BUTTON}
                  </PinkButton>
                </TextWithButton>
              </StepDescriptionContainer>
              <StepDescriptionContainer style={{ marginBottom: 0 }}>
                <Typography type="p1" color="WHITE">
                  <>{COPY.BENEFITS.SETTINGS.ENS_INTEGRATION_TITLE}</>
                </Typography>
                <TextWithButton>
                  <Typography type="p2" color="LIGHT_GREY">
                    <>
                      {
                        COPY.BENEFITS.SETTINGS
                          .ENS_INTEGRATION_DESCRIPTION
                      }
                    </>
                  </Typography>
                  <PinkButton
                    onClick={() => goToENS()}
                    alignButtonLeft={true}
                  >
                    {COPY.BENEFITS.SETTINGS.ENS_INTEGRATION_BUTTON}
                  </PinkButton>
                </TextWithButton>
              </StepDescriptionContainer>
            </StepBox>
          </>
        );
      default:
        return (
          <>
            <Typography type="h3" color="WHITE">
              <>
                <Image src={arrow} alt="arrow pointing right" />
                <br />
                <StyledText>
                  {COPY.BENEFITS.CALL_TO_ACTION.TITLE_REGULAR_1}
                </StyledText>{" "}
                <BigItalicText>
                  {COPY.BENEFITS.CALL_TO_ACTION.TITLE_ITALIC_1}
                  <br />
                  {COPY.BENEFITS.CALL_TO_ACTION.TITLE_ITALIC_2}
                </BigItalicText>
                <StyledText>
                  {COPY.BENEFITS.CALL_TO_ACTION.TITLE_REGULAR_2}
                </StyledText>
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
                  placeholder={
                    COPY.LANDING_HERO.EARLY_BIRD.INPUT_PLACEHOLDER
                  }
                />
                <StyledReserveHandleButton
                  onClick={() => checkAvailability()}
                >
                  {COPY.LANDING_HERO.EARLY_BIRD.BUTTON}
                </StyledReserveHandleButton>
              </SearchContainer>
            </EarlyBird>
            <BenefitsArea>
              <Image src={arrowDown} alt="arrow pointing down" />
              <Typography type="body1" color="PINK">
                <>{COPY.LANDING_HERO.BENEFITS}</>
              </Typography>
            </BenefitsArea>
          </>
        );
    }
  };

  return (
    <MainContainer
      isMobile={isMobile}
      centerContent={currentStage.includes("step")}
    >
      <Container isMobile={isMobile}>{renderStage()}</Container>
      <ImageContainer
        isMobile={isMobile || currentStage.includes("step")}
      >
        <Image src={Circles} alt="Pink circles" />
      </ImageContainer>
    </MainContainer>
  );
};
