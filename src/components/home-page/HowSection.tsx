import { Box, Stack, Typography } from "@mui/material";

const How: React.FC = () => {
  return (
    <Box component="section" display="flex" flexDirection="column" gap="130px" px="50px">
      <Stack direction="row" gap="50px" justifyContent="space-around">
        <Stack direction="column" gap="10px" alignItems="center" maxWidth="25%">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#F64B4B",
              px: "15px",
              py: "10px",
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
        <Stack direction="column" gap="10px" alignItems="center" maxWidth="25%">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "primary.main",
              px: "15px",
              py: "10px",
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
            Зарегистрируйтесь
          </Typography>
          <Typography variant="h6" fontSize="17px" lineHeight="29px">
            Пройдите быструю и простую регистрацию на нашей платформе.
          </Typography>
        </Stack>
        <Stack direction="column" gap="10px" alignItems="center" maxWidth="25%">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#473BF0",
              px: "15px",
              py: "10px",
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
            Зарегистрируйтесь
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
