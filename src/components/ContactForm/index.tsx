import { withTranslation } from "react-i18next";
import React from 'react';
import { ContactProps, ValidationTypeProps } from "./types";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import { Button } from "../../common/Button";
import { Span, ButtonContainer } from "./styles";
import { useHistory } from 'react-router-dom';

const Contact = ({ title, content, id, t }: ContactProps) => {
  const { values, errors, handleChange, handleSubmit } = useForm(validate);

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type as keyof typeof errors];
    return <Span>{ErrorMessage}</Span>;
  };
  const nav = useHistory();


  return (
              <ButtonContainer>
              <Button>
                <a style="color:"antiquewhite" " href="http://0.0.0.0:3000">Go To App</a>
              </Button>
              </ButtonContainer>
  );
};

export default withTranslation()(Contact);
