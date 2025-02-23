import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Heading,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface DemoRequestEmailProps {
  fullName: string;
  phone: string;
  email: string;
  account: string;
  partner: string;
}

export const DemoRequestEmail: React.FC<DemoRequestEmailProps> = ({
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
        <Container>
          <Section>
            <Heading style={heading}>New Demo Request</Heading>
            <Text style={text}><strong>Full Name:</strong> {fullName}</Text>
            <Text style={text}><strong>Phone:</strong> {phone}</Text>
            <Text style={text}><strong>Email:</strong> {email}</Text>
            <Text style={text}><strong>Account:</strong> {account}</Text>
            <Text style={text}><strong>Partner:</strong> {partner}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: '#ffffff',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const heading = {
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '24px',
};

const text = {
  fontSize: '16px',
  lineHeight: '24px',
  margin: '12px 0',
};

export default DemoRequestEmail; 