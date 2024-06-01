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
      <Stack direction="row" gap="50px" justifyContent="space-around">
        <Stack
          direction="column"
          gap="10px"
          alignItems="center"
          maxWidth="25%"
          textAlign="center"
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#F64B4B",
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
              1
            </Typography>
          </Box>

          <Typography variant="h3" fontSize="21px" lineHeight="32px">
            Зарегистрируйтесь
          </Typography>
          <Typography
            variant="h6"
            fontSize="17px"
            lineHeight="29px"
            color="secondary"
          >
            Пройдите быструю и простую регистрацию на нашей платформе.
          </Typography>
        </Stack>
        <Stack
          direction="column"
          gap="10px"
          alignItems="center"
          maxWidth="25%"
          textAlign="center"
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "primary.main",
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
              2
            </Typography>
          </Box>
          <Typography variant="h3" fontSize="21px" lineHeight="32px">
            Настройте параметры
          </Typography>
          <Typography
            variant="h6"
            fontSize="17px"
            lineHeight="29px"
            color="secondary"
          >
            Настройте платежные параметры в соответствии с потребностями.
          </Typography>
        </Stack>
        <Stack
          direction="column"
          gap="10px"
          alignItems="center"
          maxWidth="25%"
          textAlign="center"
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#473BF0",
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
              3
            </Typography>
          </Box>
          <Typography variant="h3" fontSize="21px" lineHeight="32px">
            Начните пользоваться!
          </Typography>
          <Typography
            variant="h6"
            fontSize="17px"
            lineHeight="29px"
            color="secondary"
          >
            Запустите ваш сайт и начните принимать платежи от клиентов.
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default How;
