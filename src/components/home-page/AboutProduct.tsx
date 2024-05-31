import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

const AboutProducts: React.FC = () => {
  return (
    <Box component="section" display="flex"  flexDirection="column" gap="130px">
      <Box display="flex" gap="100px">
        <Box>
          <Image
            src="/images/payment-example-2.png"
            alt="payment example"
            width={650}
            height={300}
          />
        </Box>
        <Stack direction="column" gap="15px" maxWidth="450px">
          <Typography variant="h3" fontSize="31px" lineHeight="35px">
            Полностью интегрированный набор платежных продуктов
          </Typography>
          <Typography
            variant="h6"
            fontSize="19px"
            color="primary.dark"
            lineHeight="32px"
          >
            Мы объединяем все, что требуется для создания веб-сайтов и
            приложений, которые принимают платежи и отправляют выплаты по всему
            миру. Продукты Stripe позволяют осуществлять платежи онлайн и лично
            розничным продавцам, компаниям, занимающимся подпиской, программным
            платформам и маркетплейсам, а также всему, что находится между ними.
          </Typography>
        </Stack>
      </Box>

      <Box display="flex" gap="100px">
        <Stack direction="column" gap="15px" maxWidth="450px">
          <Typography variant="h3" fontSize="31px" lineHeight="35px">
            Полностью интегрированный набор платежных продуктов
          </Typography>
          <Typography
            variant="h6"
            fontSize="19px"
            color="primary.dark"
            lineHeight="32px"
          >
            Мы объединяем все, что требуется для создания веб-сайтов и
            приложений, которые принимают платежи и отправляют выплаты по всему
            миру. Продукты Stripe позволяют осуществлять платежи онлайн и лично
            розничным продавцам, компаниям, занимающимся подпиской, программным
            платформам и маркетплейсам, а также всему, что находится между ними.
          </Typography>
        </Stack>

        <Box>
          <Image
            src="/images/payment-example-2.png"
            alt="payment example"
            width={650}
            height={300}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AboutProducts;
