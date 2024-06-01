import { Box, Stack, Typography } from "@mui/material";

const How: React.FC = () => {
  return (
    <Box
      component="section"
      display="flex"
      flexDirection="column"
      gap="130px"
      px="50px"
    >
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
          <Typography variant="h6" fontSize="17px" lineHeight="29px">
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
          <Typography variant="h6" fontSize="17px" lineHeight="29px">
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
          <Typography variant="h6" fontSize="17px" lineHeight="29px">
            Пройдите быструю и простую регистрацию на нашей платформе.
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default How;
