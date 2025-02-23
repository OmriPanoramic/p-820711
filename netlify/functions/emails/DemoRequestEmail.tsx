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
            <Img width={114} src={`${baseUrl}/static/logo.png`} />
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
  backgroundColor: "#ffffff",
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

