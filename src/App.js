import { Route, Routes } from "react-router-dom";

import { TransactionManager } from "./pages/TransactionManager";
import { TransactionOK } from "./pages/TransactionOK";
import { WalletAssociation } from "./pages/WalletAssociation";
import { WalletAssociationOK } from "./pages/WalletAssociationOK";
import { NotFound } from "./pages/NotFound";

import { routes } from "./routes/routes";

import "./App.css";

export const App = () => (
  <Routes>
    <Route path={routes.transaction} element={<TransactionManager />} />
    <Route path={routes.transactionOK} element={<TransactionOK />} />
    <Route path={routes.walletAssociation} element={<WalletAssociation />} />
    <Route path={routes.walletAssociationOK} element={<WalletAssociationOK />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default App;
