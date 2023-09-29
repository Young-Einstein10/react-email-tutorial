import * as React from "react";
import {
  Button,
  Column,
  Img,
  Link,
  Row,
  Section,
  Text,
} from "@react-email/components";
import Logo from "./Logo";

interface IFooterProps {
  baseUrl: string;
}

const Footer = ({ baseUrl }: IFooterProps) => {
  const footerLinks = [
    {
      name: "Home",
      url: "#",
    },
    {
      name: "Plants",
      url: "#",
    },
    {
      name: "FAQs",
      url: "#",
    },
    {
      name: "Contact Us",
      url: "#",
    },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://facebook.com",
      iconUrl: `${baseUrl}/static/facebook.png`,
    },
    {
      name: "Twitter",
      href: "https://twitter.com",
      iconUrl: `${baseUrl}/static/twitter.png`,
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      iconUrl: `${baseUrl}/static/instagram.png`,
    },
  ];

  return (
    <Section className="p-14 bg-[#256940] text-white">
      <Logo mode="light" />

      <Row className="mt-8">
        <Column align="center">
          {footerLinks.map((link) => (
            <Button
              key={link.name}
              href={link.url}
              className="mb-4 bg-white h-12 rounded-full w-72 text-[#256940] flex items-center justify-center"
            >
              {link.name}
            </Button>
          ))}
        </Column>
      </Row>

      <Section className="my-10">
        <div className="flex items-center justify-center gap-6">
          {socialLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <Img src={link.iconUrl} />
            </Link>
          ))}
        </div>
      </Section>

      <Text className="text-center">
        <span>© 2023 Greenland. All Rights Reserved.</span>
        <br />
        <span>600 Olive Blvd., San Francisco, CA 12345</span>
      </Text>

      <Text className="text-center">
        No longer want to receive these emails?
        <Link href="" className="ml-2 font-semibold underline text-white">
          Unsubscribe.
        </Link>
      </Text>
    </Section>
  );
};

export default Footer;
