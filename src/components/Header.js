import styled from "styled-components";
import Icon from "./icon.svg";
import Icon2FA from "./2FA.svg";

const HeaderWrapper = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  height: 180px;
  background-color: #2468f6;
  color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const MarketplaceIcon = styled.img`
  height: 48px;
`;

const HeaderText = styled.div`
  text-align: center;
  font-size: 30px;
`;

export const Header = ({ icon = "", children }) => (
  <HeaderWrapper>
    <MarketplaceIcon
      src={icon === "2FA" ? Icon2FA : Icon}
      alt="Telefónica Marketplace"
    />
    <HeaderText>{children}</HeaderText>
  </HeaderWrapper>
);
