import { Message } from "../components/Message";
import { Header } from "../components/Header";

export const WalletAssociationOK = () => (
  <>
    <Header icon="2FA">Autenticación de dos factores activada</Header>
    <Message>
      <b>Teléfono verificado.</b>
      <br />
      Ahora sus NFTs en Telefónica Marketplace están aún más seguros.
      <br /><br />
      Gracias por confiar en Telefónica 2FA.
      <br /><br />
      <a href="_blank">Volver a Telefónica Marketplace</a>
    </Message>
  </>
);
