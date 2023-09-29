import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";
import Logo from "../components/Logo";
import Footer from "../components/Footer";

const Promotions = ({ baseUrl = "http://localhost:3000" }) => {
  return (
    <Html>
      <Head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
        </style>
      </Head>
      <Preview>Get 20% Off The Latest Plants</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded my-1 mx-auto max-w-[500px] w-full">
            {/* =============== Latest Addition =============== */}
            <Section className="p-5">
              <Section className="my-8">
                <Logo />
              </Section>

              <Section className="text-center mb-8 text-[#256940]">
                <Text className="text-lg font-sans">TODAY ONLY</Text>

                <Text className="text-5xl font-bold text-center">
                  Buy One, Get 20% Off
                </Text>

                <Text className="text-xl mt-8">Code: BLACK FRIDAY</Text>

                <Text className="text-xl mt-6">
                  A little effort towards saving the environment is better than
                  no effort.
                </Text>
              </Section>

              <Section className="flex justify-center">
                <Button className="bg-[#256940] h-14 rounded-full w-60 text-white flex items-center justify-center">
                  Save on Greenland
                </Button>
              </Section>

              <Section className="my-20">
                <div>
                  <div className="w-[400px] h-[400px] mx-auto mb-10">
                    <Img
                      src={`${baseUrl}/static/plant.png`}
                      width={400}
                      height={400}
                      className="border border-solid border-[#256940] rounded "
                    />
                  </div>
                  <Button className="bg-[#256940] h-14 rounded-full w-60 text-white flex items-center justify-center mx-auto">
                    Buy
                  </Button>
                </div>
              </Section>
            </Section>

            <Footer baseUrl={baseUrl} />
            {/* =============== Latest Addition =============== */}
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default Promotions;
