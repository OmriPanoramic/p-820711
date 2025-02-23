import * as React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Heading,
  Text,
} from "@react-email/components";

interface UpgradeRequestProps {
  fullName: string;
  phone: string;
  email: string;
  accountName: string;
  supportPartner: string;
  moreInfo?: string;
}

const UpgradeRequestEmail: React.FC<UpgradeRequestProps> = ({
  fullName,
  phone,
  email,
  accountName,
  supportPartner,
  moreInfo,
}) => {
  return (
    <Html lang="en">
      <Head />
      <Body style={main}>
        <Container>
          <Section>
            <Heading style={heading}>New Upgrade Request</Heading>
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
              <strong>Account/Site Name:</strong> {accountName}
            </Text>
            <Text style={text}>
              <strong>Support Partner:</strong> {supportPartner}
            </Text>
            <Text style={text}>
              <strong>Additional Information:</strong> {moreInfo || "N/A"}
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
} as const;

const heading = {
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "24px",
} as const;

const text = {
  fontSize: "16px",
  lineHeight: "24px",
  margin: "12px 0",
} as const;

export default UpgradeRequestEmail;