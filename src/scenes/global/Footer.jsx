import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Typography from "@mui/material/Typography";

const Footer = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

  return (
    <Box 
    sx={{
        height: '2em',
        width: '100%',
        position: 'fixed',
        bottom: 0,
        backgroundColor: colors.primary[900],
        textAlign: 'center',
    }} component="footer" variant="outline" 
    >
       <Box>
            <Typography>Valvoline Admin || © 2022 All Rights Reserved || V1.0.0 </Typography>
       </Box>

    </Box>
    
  )
}

export default Footer;