import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

interface AdrienEmailProps {
  firstName: string;
  lastName: string;
  email: string;
  tel: string;
  message: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const AdrienEmail = ({
  firstName,
  lastName,
  email,
  tel,
  message,
}: AdrienEmailProps) => (
  <Tailwind
    config={{
      theme: {
        extend: {
          colors: {
            brand: "#007291",
          },
        },
      },
    }}
  >
    <Html>
      <Head />
      <Preview>
        Nouveau message de {firstName} {lastName}
      </Preview>
      <Body className="bg-white font-sans">
        <Container
          className="mx-auto p-6 bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("${baseUrl}/static/Adrien-bg.png")`,
          }}
        >
          <Heading className="text-2xl font-bold mt-12 text-center">
            Nouveau message de {firstName} {lastName}
          </Heading>
          <Section className="my-6">
            <Text className="text-lg leading-7">
              <strong>Prénom :</strong> {firstName}
            </Text>
            <Text className="text-lg leading-7">
              <strong>Nom :</strong> {lastName}
            </Text>
            <Text className="text-lg leading-7">
              <strong>Email :</strong>{" "}
              <Link
                href={`mailto:${email}`}
                className="text-pink-500 hover:underline"
              >
                {email}
              </Link>
            </Text>
            <Text className="text-lg leading-7">
              <strong>Téléphone :</strong>{" "}
              <Link
                href={`tel:${tel}`}
                className="text-pink-500 hover:underline"
              >
                {tel}
              </Link>
            </Text>
          </Section>

          <Section className="my-6">
            <Text className="text-lg leading-7">
              <strong>Message :</strong>
            </Text>
            <Text className="text-lg leading-7">
              {message ? message : "Aucun message fourni"}
            </Text>
          </Section>

          <Hr className="border-t border-gray-300 mt-12" />
          <Img
            src={"/images/logo/Adrien_logo.png"}
            width={32}
            height={32}
            alt="Adrien Logo Grayscale"
            className="mx-auto mt-5 filter grayscale"
          />
          <Text className="text-gray-500 text-sm text-center">
            Adrien Portfolio
          </Text>
        </Container>
      </Body>
    </Html>
  </Tailwind>
);

export default AdrienEmail;
