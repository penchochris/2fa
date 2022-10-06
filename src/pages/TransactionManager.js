import { useCallback, useEffect, useState } from "react";

import { Button } from "../components/Button";
import { ButtonsWrapper } from "../components/ButtonsWrapper";
import { Message } from "../components/Message";
import { Header } from "../components/Header";

import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { routes } from "../routes/routes";

export const TransactionManager = () => {
  const [text, setText] = useState();
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://tt.kandolab.com/api/2fa/v1/operation/${id}`)
      .then(({ data: { info } }) => setText(info));
  }, [id]);

  const handleAccept = useCallback(() => {
    axios
      .put(`https://tt.kandolab.com/api/2fa/v1/operation/validate`, {
        token: id,
        accept: true,
      })
      .then(() => {
        navigate(routes.transactionOK);
      })
      .catch(() => {
        navigate(routes.transactionOK);
      });
  }, [id, navigate]);

  const handleReject = useCallback(() => {
    axios.put(`https://tt.kandolab.com/api/2fa/v1/operation/validate`, {
      token: id,
      accept: false,
    });
  }, [id]);

  return (
    <>
      <Header>Por favor, autoriza la transacción</Header>
      <Message>{text}</Message>
      <ButtonsWrapper>
        <Button color="#5CB615" onClick={handleAccept}>
          Autorizar
        </Button>
        <Button color="#D73241" onClick={handleReject}>
          Rechazar
        </Button>
      </ButtonsWrapper>
    </>
  );
};
