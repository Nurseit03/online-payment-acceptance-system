import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

const CustomersFeedback: React.FC = () => {
  const customersFeedback = [
    {
      title:
        "“Невероятно! Не могу поверить, что настройка нашего интернет-магазина заняла всего несколько минут. Все было просто и понятно.”",
      name: "Алексей Смирнов",
      avatarSrc: "/images/customer1.png",
    },
    {
      title:
        "“Это лучший сервис для приема онлайн-платежей. Подходит как для начинающих, так и для опытных пользователей, стремящихся к успеху.”",
      name: "Михаил Иванов",
      avatarSrc: "/images/customer2.png",
    },
    {
      title:
        "“Обязательный инструмент для любого бизнеса, который хочет принимать платежи онлайн быстро и безопасно.”",
      name: "Ирина Петрова",
      avatarSrc: "/images/customer3.png",
    },
  ];

  return (
    <Box
      component="section"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="50px"
      px="50px"
      sx={{ background: "linear-gradient(225deg, #313C59 0%, #161C2D 100%)" }}
      py="80px"
    >
      <Stack
        width="50%"
        alignSelf="center"
        textAlign="center"
        direction="column"
        gap="15px"
      >
        <Typography
          variant="h3"
          fontSize="32px"
          lineHeight="44px"
          color="white"
        >
          +1,749 команд поделились своим опытом использования нашего сервиса!
        </Typography>
        <Stack
          direction="column"
          gap="25px"
          justifyContent="center"
          alignItems="center"
        >
          {customersFeedback.map((feedback) => (
            <CustomerFeedbackItem
              avatarSrc={feedback.avatarSrc}
              feedback={feedback.title}
              name={feedback.name}
            />
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

const CustomerFeedbackItem = ({ avatarSrc, feedback, name }: any) => (
  <Stack
    direction="row"
    gap="15px"
    justifyContent="center"
    alignItems="center"
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      backgroundColor: "white",
      borderRadius: "8px",
    }}
  >
    <Box>
      <Image
        src={avatarSrc}
        alt="Avatar"
        width={111}
        height={111}
        style={{ borderRadius: "100%" }}
      />
    </Box>

    <Stack direction="column" gap="10px" textAlign="start">
      <Typography
        variant="h6"
        fontSize="21px"
        lineHeight="32px"
        color="primary.dark"
      >
        {feedback}
      </Typography>

      <Typography
        variant="h6"
        fontSize="17px"
        lineHeight="29px"
        color="secondary"
      >
        {name}
      </Typography>
    </Stack>
  </Stack>
);

export default CustomersFeedback;
