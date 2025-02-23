import * as React from "react";
import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";

interface DemoRequestProps {
  fullName: string;
  phone: string;
  email: string;
  account: string;
  partner: string;
}

const baseUrl = 'https://optimize.powerradar.energy';

const DemoRequestEmail: React.FC<DemoRequestProps> = ({
  fullName,
  phone,
  email,
  account,
  partner,
}) => {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Preview>New Demo Request</Preview>
        <Container style={container}>
          <Section style={logo}>
            <img alt="" src="data:image/png;base64,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" />
          </Section>
          <Section style={sectionsBorders}>
            <Row>
              <Column style={sectionBorder} />
              <Column style={sectionCenter} />
              <Column style={sectionBorder} />
            </Row>
          </Section>
          <Section  style={content}>
            <Heading style={heading}>New Demo Request</Heading>
            <Text style={text}>
              <strong>Full Name:</strong> {fullName}
            </Text>
            <Text style={text}>
              <strong>Phone:</strong> {phone}
            </Text>
            <Text style={text}>
              <strong>Email:</strong> {email}
            </Text>
            <Text style={text}>
              <strong>Account:</strong> {account}
            </Text>
            <Text style={text}>
              <strong>Partner:</strong> {partner}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: '#efeef1',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  maxWidth: '580px',
  margin: '30px auto',
  backgroundColor: '#ffffff',
};

const content = {
  padding: '5px 20px 10px 20px',
};

const logo = {
  display: 'flex',
  justifyContent: 'center',
  alingItems: 'center',
  padding: 30,
};

const sectionsBorders = {
  width: '100%',
  display: 'flex',
};

const sectionBorder = {
  borderBottom: '1px solid rgb(238,238,238)',
  width: '249px',
};

const sectionCenter = {
  borderBottom: '1px solid #ff6f0f',
  width: '102px',
};

const heading = {
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "24px",
};

const text = {
  fontSize: "16px",
  lineHeight: "24px",
  margin: "12px 0",
};

export default DemoRequestEmail;

