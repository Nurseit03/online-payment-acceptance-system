import { ReactNode } from "react";
import { Box, Stack, Typography, Divider, styled } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Link from "@/components/ui/Link";

interface Icons {
  title: string;
  link: string;
  icon: ReactNode;
}

const Footer: React.FC = () => {
  const icons: Icons[] = [
    { title: "twitter", link: "twitter.com", icon: <TwitterIcon /> },
    { title: "facebook", link: "facebook.com", icon: <FacebookIcon /> },
    { title: "instagramm", link: "instagramm.com", icon: <InstagramIcon /> },
    { title: "linkedin", link: "linkedin.com", icon: <LinkedInIcon /> },
  ];

  return (
    <Box
      component="footer"
      sx={{
        borderTop: "1px solid #CDCDCD",
        paddingY: "25px",
        marginX: "10%",
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" alignItems="center" gap="5px">
          <Typography variant="h6" fontSize="15px" lineHeight="26px">
            © 2024 Copyright, All Right Reserved, Made by @Nurseit03
          </Typography>
          <FavoriteIcon fontSize="small" sx={{ color: "#F64B4B" }} />
        </Stack>

        <Stack direction="row" gap="25px">
          {icons.map((icon, index) => (
            <Link
              key={index}
              href={icon.link}
              title={icon.title}
              activeColor="#F64B4B"
              sx={{
                '&:hover': {
                  color: '#F64B4B',
                },
              }}
            >
              {icon.icon}
            </Link>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
