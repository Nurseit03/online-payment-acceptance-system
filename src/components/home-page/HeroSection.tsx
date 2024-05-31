import { Box, Stack, Typography } from "@mui/material";
import Button from "@/components/ui/Button";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <Box component="section" display="flex" gap="20px">
      <Box display="flex" flexDirection="column" gap={4}>
        <Box>
          <Typography variant="h2" fontSize={77} color="primary.dark">
            Легкие
          </Typography>
          <Typography variant="h2" fontSize={77} color="primary.dark">
            и безопасные
          </Typography>
          <Typography variant="h2" fontSize={77} color="primary.light">
            онлайн-платежи
          </Typography>
        </Box>

        <Box>
          <Typography variant="h3" fontSize={16} color="primary.dark">
            Миллионы компаний всех размеров используют Наш сервис онлайн и лично
            для приема платежей, отправки выплат, автоматизации финансовых
            процессов и увеличения доходов.
          </Typography>
        </Box>

        <Box>
          <Button
            sx={{
              borderRadius: "12px",
              px: "40px",
              boxShadow: "0px 4px 41px 0px rgba(112, 10, 160, 0.4)",
            }}
          >
            Начать сейчас
          </Button>
        </Box>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        sx={{
          boxShadow: `
        0px 2.73px 39.2px 0px rgba(105, 12, 255, 0.2196),
        0px 6.36px 68.5px 0px rgba(105, 12, 255, 0.3172),
        0px 11.42px 103.5px 0px rgba(105, 12, 255, 0.18),
        0px 19px 65.7px 0px rgba(105, 12, 255, 0.459),
        0px -25px 107.4px 0px rgba(105, 12, 255, 0.04),
        0px 10px 112.8px 0px rgba(105, 12, 255, 0),
        0px 64px 71.5px 0px rgba(255, 70, 12, 0.26)
      `,
          borderRadius: "23px",
        }}
      >
        <Image
          src="/images/dashboard.png"
          alt="Dasboard"
          width={861}
          height={600}
          style={{ borderRadius: "23px" }}
        />

        <Image
          src="/images/payment-example.png"
          alt="Payment example"
          width={210}
          height={417}
          style={{
            position: "absolute",
            borderRadius: "25px",
            right: "34%",
            bottom: "11.7%",
            boxShadow: `
    0px 2.77px 2.21px 0px rgba(0, 0, 0, 0.0478),
    0px 6.65px 5.32px 0px rgba(0, 0, 0, 0.0687),
    0px 12.52px 10.02px 0px rgba(0, 0, 0, 0.085),
    0px 22.34px 17.87px 0px rgba(0, 0, 0, 0.1013),
    0px 41.78px 33.42px 0px rgba(0, 0, 0, 0.1222),
    0px 100px 80px 0px rgba(0, 0, 0, 0.17),
  `,
          }}
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
