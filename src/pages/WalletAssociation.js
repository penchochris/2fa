import { useState, useEffect } from "react";
import { Button } from "../components/Button";
import { ButtonsWrapper } from "../components/ButtonsWrapper";
import { Message } from "../components/Message";
import { Header } from "../components/Header";
import { ethers } from "ethers";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import abi from "../abi/abi.json";
import { routes } from "../routes/routes";

export const WalletAssociation = () => {
  const contractAddress = "0xb160c561FECc55e153e2910d594f6be831011097";
  const contractABI = abi.abi;

  const [currentAccount, setCurrentAccount] = useState("");

  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://kandolab.com:8989/api/v1/user/1`)
      .then(({ data }) => setUser(data));
  }, []);

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const buyCoffee = async (ethValue) => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum, "any");
        const signer = provider.getSigner();
        const buyMeACoffee = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        const coffeeTxn = await buyMeACoffee.buyCoffee("", "", {
          value: ethers.utils.parseEther(ethValue),
        });

        await coffeeTxn.wait();

        buyMeACoffee.on("NewMemo", (address) => {
          axios.put("http://kandolab.com:8989/api/v1/user/pair", {
            wallet_id: address,
          });
          navigate(routes.walletAssociationOK)
        });

      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header icon="2FA">{`[${user.name}] ${user.msisdn}`}</Header>
      <Message>
        {currentAccount
          ? `Wallet [${currentAccount}] conectado. \n Para confirmar que este teléfono realmente es suyo, por favor, páganos un café por 0,00001ETH (luego se  devuelve).`
          : "Conecta su wallet al servicio de autenticación de dos factores."}
      </Message>
      <ButtonsWrapper>
        {currentAccount ? (
          <Button color="#2468F6" onClick={() => buyCoffee("0.00001")}>
            Comprar un café
          </Button>
        ) : (
          <Button color="#2468F6" onClick={connectWallet}>
            Connectar wallet
          </Button>
        )}
      </ButtonsWrapper>
    </>
  );
};
