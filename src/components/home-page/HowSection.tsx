import { Box, Stack, Typography } from "@mui/material";

const How: React.FC = () => {
  return (
    <Box
      component="section"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="50px"
      px="50px"
    >
      <Stack direction="column" gap="15px" maxWidth={468} textAlign="center">
        <Typography variant="h3" fontSize="48px" lineHeight="58px">
          Как это работает?
        </Typography>
        <Typography
          variant="h6"
          fontSize="19px"
          lineHeight="32px"
          color="secondary"
        >
          С нашей интуитивно понятной системой вы можете легко интегрировать
          онлайн-платежи на ваш сайт всего в три простых шага.
        </Typography>
      </Stack>
      <Stack
        direction="row"
        gap="50px"
        justifyContent="space-around"
        position="relative"
        width="100%"
      >
        <Box
          sx={{
            position: "absolute",
            top: "17%",
            left: "12.5%",
            right: "12.5%",
            borderTop: "2px dashed #ccc",
            zIndex: 0,
          }}
        />
        <StepBox number={1} color="#F64B4B" text="Зарегистрируйтесь" description="Пройдите быструю и простую регистрацию на нашей платформе." />
        <StepBox number={2} color="#4CAF50" text="Настройте параметры" description="Настройте платежные параметры в соответствии с потребностями." />
        <StepBox number={3} color="#473BF0" text="Начните пользоваться!" description="Запустите ваш сайт и начните принимать платежи от клиентов." />
      </Stack>
    </Box>
  );
};

const StepBox = ({ number, color, text, description }: any) => (
  <Stack
    direction="column"
    gap="10px"
    alignItems="center"
    maxWidth="25%"
    textAlign="center"
    position="relative"
    zIndex={1}
  >
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: color,
        width: "73px",
        height: "73px",
        borderRadius: "100%",
      }}
    >
      <Typography
        variant="h3"
        fontSize="36px"
        lineHeight="48px"
        sx={{ color: "White" }}
      >
        {number}
      </Typography>
    </Box>
    <Typography variant="h3" fontSize="21px" lineHeight="32px">
      {text}
    </Typography>
    <Typography
      variant="h6"
      fontSize="17px"
      lineHeight="29px"
      color="secondary"
    >
      {description}
    </Typography>
  </Stack>
);

export default How;
