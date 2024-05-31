import Image from "next/image";
import Head from "next/head";
import { Container, Box } from "@mui/material";
import HeroSection from "@/components/home-page/HeroSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Payment system</title>
        <meta name="keywords" content="payment system, payments, online payment system" />
        <meta name="description" content="Payment system" />
      </Head>

      <Container>
        <Box py="80px" display="flex" flexDirection="column" gap="130px">
          <HeroSection />
        </Box>
      </Container>
    </>
  );
}
