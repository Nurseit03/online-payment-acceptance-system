import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import CodeDisplay from "../ui/CodeDisplay";

const AboutProducts: React.FC = () => {
  const codeBlock = `import { NextApiRequest, NextApiResponse } from "next";

    export default async function handler(req: NextApiRequest, res: NextApiResponse) {
      if (req.method !== "GET") {
        return res.status(400).json(null);
      }
    
      const response = await fetch(process.env.BACKEND_API_URL + "/ws/chats", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Cookie: req.headers["server-cookie"]?.toString() ?? "",
        },
      });
    
      if (!response.ok) {
        return res.status(response.status).json(null);
      }
    
      const responseData = await response.json();
    
      return res.status(200).json(responseData);
    }
    `;
  return (
    <Box component="section" display="flex" flexDirection="column" gap="130px">
      <Box display="flex" gap="100px" justifyContent="space-between">
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
            fontSize="17px"
            lineHeight="29px"
            color="primary.dark"
          >
            Мы объединяем все, что требуется для создания веб-сайтов и
            приложений, которые принимают платежи и отправляют выплаты по всему
            миру. Продукты Stripe позволяют осуществлять платежи онлайн и лично
            розничным продавцам, компаниям, занимающимся подпиской, программным
            платформам и маркетплейсам, а также всему, что находится между ними.
          </Typography>
        </Stack>
      </Box>

      <Box display="flex" gap="100px" justifyContent="space-between">
        <Stack direction="column" gap="15px" maxWidth="450px">
          <Typography variant="h3" fontSize="48px" lineHeight="58px">
            Самые мощные и простые в использовании API в мире
          </Typography>
          <Typography variant="h3" fontSize="21px" lineHeight="32px">
            Инструменты для каждого стека
          </Typography>
          <Typography
            variant="h6"
            fontSize="19px"
            color="primary.dark"
            lineHeight="32px"
          >
            Мы предлагаем клиентские и серверные библиотеки на всех языках - от
            React и PHP до .NET и iOS.
          </Typography>
        </Stack>

        <Box>
          <CodeDisplay language="typescript">{codeBlock}</CodeDisplay>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutProducts;
