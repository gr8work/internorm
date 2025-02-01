import React, { useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import {
  Wrapper,
  Container,
  Form,
  FormBody,
  Col,
  InputList,
  ErrorBox,
  SuccessBox,
} from './ArchitectZoneContactForm.styles';

import Title from 'components/atoms/Title';
import Text from 'components/atoms/Text';
import { iAmRadios } from './data';

import Button from 'components/atoms/Button';
import InputGroup from 'components/molecules/InputGroup';
import Input from 'components/atoms/Input';
import ContactFormAbout, { ContactFormAboutType } from 'components/organisms/ContactFormAbout';

export type ArchitectZoneContactFormType = {
  contactFormDescription: ContactFormAboutType;
};

const ArchitectZoneContactForm = ({ contactFormDescription }: ArchitectZoneContactFormType) => {
  const [success, setSuccess] = useState(false);

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const Validation = Yup.object().shape({
    who: Yup.string()
      .oneOf(['Architekt indywidualny', 'Biuro architektoniczne'], 'Zaznacz poprawną odpowiedź')
      .required('Zaznacz poprawną odpowiedź'),
    name: Yup.string().required('Uzupełnij pole'),
    phone: Yup.string().required('Uzupełnij pole').matches(phoneRegExp, 'Wpisz poprawny numer'),
    email: Yup.string().email('Wpisz poprawny e-mail').required('Uzupełnij pole'),
    note: Yup.string(),
    policy: Yup.boolean().oneOf([true], 'Musisz wyrazić zgodę').required('Musisz wyrazić zgodę"'),
  });

  const formik = useFormik({
    initialValues: {
      who: '',
      name: '',
      phone: '',
      email: '',
      company: '',
      note: '',
      policy: false,
    },
    validationSchema: Validation,
    onSubmit: async (values, { resetForm }) => {
      const data = await sendForm(values);
      setSuccess(true);
      resetForm();
    },
    validateOnBlur: false,
    validateOnChange: false,
  });

  const sendForm = async (values: any) => {
    const body = JSON.stringify({
      who: values.who,
      name: values.name,
      phone: values.phone,
      email: values.email,
      company: values.company,
      note: values.note,
    });

    const res = await fetch(`https://inter.oryginalni.eu/wp-json/architectzone/new-contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    });

    return res.json();
  };

  return (
    <Wrapper id="formularz-kontaktowy">
      <Container>
        <ContactFormAbout {...contactFormDescription} />
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit();
          }}
        >
          <Title subTitle="Wypełnij formularz" />
          <FormBody>
            <Col>
              <InputGroup
                items={iAmRadios}
                value={formik.values.who}
                error={formik.errors.who}
                handleChange={formik.handleChange}
              />
            </Col>
            <InputList>
              <InputGroup
                text="Imię i nazwisko"
                input={{
                  name: 'name',
                  type: 'text',
                  placeholder: 'Wpisz imię i nazwisko',
                  value: formik.values.name,
                }}
                error={formik.errors.name}
                handleChange={formik.handleChange}
              />
              <InputGroup
                text="Numer telefonu"
                input={{
                  name: 'phone',
                  type: 'text',
                  value: formik.values.phone,
                  placeholder: 'Wpisz numer',
                  error: formik.errors.phone,
                }}
                error={formik.errors.phone}
                handleChange={formik.handleChange}
              />
              <InputGroup
                text="Adres e-mail"
                input={{
                  name: 'email',
                  type: 'email',
                  placeholder: 'Wpisz adres e-mail',
                  value: formik.values.email,
                }}
                error={formik.errors.email}
                handleChange={formik.handleChange}
              />
              <InputGroup
                text="Biuro w którym pracuję <b>(opcjonalnie)</b>"
                input={{
                  name: 'company',
                  type: 'text',
                  placeholder: 'Twoja firma',
                  value: formik.values.company,
                }}
                error={formik.errors.company}
                handleChange={formik.handleChange}
              />
            </InputList>
            <Col type="textarea">
              <InputGroup
                text="Treść wiadomości"
                input={{
                  name: 'note',
                  type: 'textarea',
                  placeholder: 'Napisz w czym możemy Ci pomóc?',
                  value: formik.values.note,
                }}
                error={formik.errors.note}
                handleChange={formik.handleChange}
              />
            </Col>
          </FormBody>
          <Input
            type="checkbox"
            name="policy"
            text="Zgadzam się na przetwarzanie moich danych osobowych podanych przeze mnie powyżej w celu przygotowania stosownej oferty oraz otrzymywania materiałów reklamowych. Oświadczam, że zapoznałam/em się z treścią klauzuli informacyjnej dotyczącej przetwarzania moich danych osobowych, na co wyrażam zgodę.*"
            handleChange={formik.handleChange}
            error={formik.errors.policy}
          />
          <Button type="red-form" text="Wyślij" />
          {(formik.errors.policy ||
            formik.errors.name ||
            formik.errors.who ||
            formik.errors.phone ||
            formik.errors.company ||
            formik.errors.email) && (
            <ErrorBox>
              <Text className="title" text="FORMULARZ NIE ZOSTAŁ WYSŁANY" />
              <Text className="content" text="Sprawdź poprawność danych i spróbuj jeszcze raz" />
            </ErrorBox>
          )}
          {success && (
            <SuccessBox>
              <Text className="title" text="FORMULARZ ZOSTAŁ WYSŁANY" />
              <Text className="content" text="Wkrótce skontaktuje się z Tobą nasz doradca" />
            </SuccessBox>
          )}
        </Form>
      </Container>
    </Wrapper>
  );
};

export default ArchitectZoneContactForm;
