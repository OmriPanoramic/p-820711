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

interface UpgradeRequestEmailProps {
  fullName: string;
  phone: string;
  email: string;
  accountName: string;
  supportPartner: string;
  moreInfo?: string;
}

export const UpgradeRequestEmail: React.FC<UpgradeRequestEmailProps> = ({
  fullName,
  phone,
  email,
  accountName,
  supportPartner,
  moreInfo,
}) => {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container>
          <Section>
            <Heading style={heading}>New Upgrade Request</Heading>
            <Text style={text}><strong>Full Name:</strong> {fullName}</Text>
            <Text style={text}><strong>Phone:</strong> {phone}</Text>
            <Text style={text}><strong>Email:</strong> {email}</Text>
            <Text style={text}><strong>Account Name:</strong> {accountName}</Text>
            <Text style={text}><strong>Support Partner:</strong> {supportPartner}</Text>
            <Text style={text}><strong>Additional Information:</strong> {moreInfo || 'N/A'}</Text>
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

export default UpgradeRequestEmail; 