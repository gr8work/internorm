import React, { FC, useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import {
  Wrapper,
  Container,
  Content,
  Description,
  Form,
  FormBody,
  Col,
  InputList,
  ErrorBox,
  SuccessBox,
} from './styles';
import { iAmRadios, statusRadios } from './data';
import Title from 'components/atoms/Title';
import Text from 'components/atoms/Text';
import List from 'components/molecules/List';
import Image from 'components/atoms/Image';

import Button from 'components/atoms/Button';
import InputGroup from 'components/molecules/InputGroup';
import Input from 'components/atoms/Input';
import FileInput from 'components/atoms/FileInput';

export const listItems = [
  {
    id: 1,
    children: 'Poznasz filozofię Internorm',
  },
  {
    id: 2,
    children: 'Doświadczysz możliwości naszych produktów',
  },
  {
    id: 3,
    children: (
      <>
        Wspólnie zaplanujemy <span>bezpieczeństwo</span> Twojego domu
      </>
    ),
  },
];

// Dodać działanie formularza

export const ContactForm: FC = () => {
  const [success, setSuccess] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([
    {
      id: 1,
      type: 'file',
      name: 'files',
      text: 'dodaj kolejny +',
    },
  ]);

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const Validation = Yup.object().shape({
    who: Yup.string()
      .oneOf(
        ['Klientem indywidualnym', 'Architektem', 'Klientem Biznesowym', 'Inne'],
        'Zaznacz poprawną odpowiedź'
      )
      .required('Zaznacz poprawną odpowiedź'),
    name: Yup.string().required('Uzupełnij pole'),
    postcode: Yup.string(),
    phone: Yup.string().required('Uzupełnij pole').matches(phoneRegExp, 'Wpisz poprawny numer'),
    email: Yup.string().email('Wpisz poprawny e-mail').required('Uzupełnij pole'),
    step: Yup.string()
      .oneOf(
        ['Etap projektu', 'Pozwolenie na budowę', 'Fundament', 'Stan Surowy','Robię remont', 'Inne'],
        'Zaznacz poprawną odpowiedź'
      )
      .required('Zaznacz poprawną odpowiedź'),
    note: Yup.string(),
    policy: Yup.boolean().oneOf([true], 'Musisz wyrazić zgodę').required('Musisz wyrazić zgodę"'),
  });

  const sendForm = async (values: any) => {
    const arValues = {
      who: values.who,
      name: values.name,
      postcode: values.postcode,
      phone: values.phone,
      email: values.email,
      step: values.step,
      note: values.note,
      files: values.files,
    };

    const form = new FormData();

    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(arValues)) {
      if (value === '') {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (key === 'files') {
        arValues.files.map((soloFile: string | File) => form.append('files[]', soloFile));
      } else {
        form.append(
          key.replaceAll('_', '.'),
          // eslint-disable-next-line no-nested-ternary
          value === null || typeof value === 'undefined'
            ? ''
            : value instanceof File
            ? value
            : value.toString()
        );
      }
    }

    const res = await fetch(`https://inter.oryginalni.eu/wp-json/newsletter/new-contact`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: form,
    });

    return res.json();
  };

  const formik = useFormik({
    initialValues: {
      who: '',
      name: '',
      postcode: '',
      phone: '',
      email: '',
      step: '',
      note: '',
      files: [],
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

  return (
    <Wrapper id="formularz-kontaktowy">
      <Container>
        <Description>
          <Content>
            <Title
              subTitle="SKONTAKTUJ SIĘ Z NAMI"
              title="<h3><strong>Zapraszamy Cię</strong> na spotkanie</h3>"
            />
            <Text
              text="<p>Jeśli chcesz omówić swoje potrzeby dotyczące projektu Twojego domu, wypełnij
              formularz. A na spotkaniu:</p>"
            />
            <List type="contact-form" items={listItems} />
          </Content>
          <Image src="home/men-in-suits.webp" alt="Men in suits" type="contact-form" />
        </Description>
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
                text="Jestem :"
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
                  value: formik.values.name,
                }}
                error={formik.errors.name}
                handleChange={formik.handleChange}
              />
              <InputGroup
                text="Poczta <b>(opcjonalne)</b>"
                input={{
                  name: 'postcode',
                  type: 'text',
                  value: formik.values.postcode,
                }}
                error={formik.errors.postcode}
                handleChange={formik.handleChange}
              />
              <InputGroup
                text="Numer telefonu"
                input={{
                  name: 'phone',
                  type: 'text',
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
                  value: formik.values.email,
                }}
                error={formik.errors.email}
                handleChange={formik.handleChange}
              />
            </InputList>
            <Col>
              <InputGroup
                text="Na jakim etapie jest budowa:"
                type="half"
                items={statusRadios}
                value={formik.values.step}
                error={formik.errors.step}
                handleChange={formik.handleChange}
              />
            </Col>
            <Col type="textarea">
              <InputGroup
                text="Treść wiadomości <b>(opcjonalne)</b>"
                input={{
                  name: 'note',
                  type: 'textarea',
                  placeholder: 'Napisz w czym mozemy Ci pomóc?',
                  value: formik.values.note,
                }}
                error={formik.errors.note}
                handleChange={formik.handleChange}
              />
              <FileInput setFieldValue={formik.setFieldValue} files={formik.values.files} />
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
            formik.errors.who ||
            formik.errors.step ||
            formik.errors.name ||
            formik.errors.phone ||
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
