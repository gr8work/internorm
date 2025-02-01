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
} from './PartnerZoneContactForm.styles';

import Title from 'components/atoms/Title';
import Text from 'components/atoms/Text';

import Button from 'components/atoms/Button';
import InputGroup from 'components/molecules/InputGroup';
import Input from 'components/atoms/Input';
import ContactFormAbout, { ContactFormAboutType } from 'components/organisms/ContactFormAbout';

export type PartnerZoneContactFormType = {
  contactFormDescription: ContactFormAboutType;
};

const PartnerZoneContactForm = ({ contactFormDescription }: PartnerZoneContactFormType) => {
  const [success, setSuccess] = useState(false);

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const Validation = Yup.object().shape({
    name: Yup.string().required('Uzupełnij pole'),
    postcode: Yup.string(),
    phone: Yup.string().required('Uzupełnij pole').matches(phoneRegExp, 'Wpisz poprawny numer'),
    email: Yup.string().email('Wpisz poprawny e-mail'),
    company: Yup.string().required('Uzupełnij pole'),
    city: Yup.string().required('Uzupełnij pole'),
    note: Yup.string(),
    policy: Yup.boolean().oneOf([true], 'Musisz wyrazić zgodę').required('Musisz wyrazić zgodę"'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      company: '',
      postcode: '',
      city: '',
      note: '',
      policy: false,
    },
    validateOnBlur: false,
    validateOnChange: false,
    validationSchema: Validation,
    onSubmit: async (values, { resetForm }) => {
      const data = await sendForm(values);
      setSuccess(true);
      resetForm();
    },
  });

  const sendForm = async (values: any) => {
    const body = JSON.stringify({
      name: values.name,
      phone: values.phone,
      email: values.email,
      company: values.company,
      postcode: values.postcode,
      city: values.city,
      note: values.note,
    });

    const res = await fetch(`https://inter.oryginalni.eu/wp-json/partnerzone/new-contact`, {
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
                  placeholder: 'Wpisz numer',
                  value: formik.values.phone,
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
                text="Firma"
                input={{
                  name: 'company',
                  type: 'text',
                  placeholder: 'Twoja firma',
                  value: formik.values.company,
                }}
                error={formik.errors.company}
                handleChange={formik.handleChange}
              />
              <InputGroup
                text="Poczta <b>(opcjonalnie)</b>"
                input={{
                  name: 'postcode',
                  type: 'text',
                  placeholder: '00-000',
                  value: formik.values.postcode,
                }}
                error={formik.errors.postcode}
                handleChange={formik.handleChange}
              />
              <InputGroup
                text="Miasto"
                input={{
                  name: 'city',
                  type: 'text',
                  placeholder: 'Wpisz miasto',
                  value: formik.values.city,
                }}
                error={formik.errors.city}
                handleChange={formik.handleChange}
              />
            </InputList>
            <Col type="textarea">
              <InputGroup
                text="Treść wiadomości"
                input={{
                  name: 'note',
                  type: 'textarea',
                  placeholder: 'Napisz nam o swojej działalności',
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
            formik.errors.phone ||
            formik.errors.city ||
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

export default PartnerZoneContactForm;
