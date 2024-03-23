import {
  AppBar,
  Toolbar,
  Box,
  Tooltip,
  Typography,
  Button,
} from "@mui/material";
import CalculateIcon from "@mui/icons-material/Calculate";
import FormatClearIcon from "@mui/icons-material/FormatClear";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

interface Props {
  endTime?: Date;
  duration?: number;
  title?: string;
  rangeOfQuestionaires?: Array<{}>;
  icon?: any;
}

const buttonStyle = {
  backgroundColor: "transparent",
  color: "white",
  fontSize: "small",
  IconStyle: {
    pr: 2,
  },

};

const Header: React.FC<Props> = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <div style={{ padding: 10, backgroundColor: "#007AB7" }}>
          <Toolbar
            disableGutters
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Box>
              <Typography fontWeight="bold" style={{ fontFamily: 'Arial, sans-serif' }}>Time Remaining 04:00:00</Typography>
              <Typography fontSize={14} style={{ fontFamily: 'Arial, sans-serif' }}>Duration: 00:15 |</Typography>
            </Box>
            <Box>
              <Typography textAlign="center" style={{ fontFamily: 'Arial, sans-serif' }}>QID: 291</Typography>
              <Typography style={{ fontFamily: 'Arial, sans-serif' }}>NCLEX Sample Tutor</Typography>
            </Box>
            <Box flexGrow={0}>
              <Tooltip title="3 of 5 pages">
                <Button sx={{ color: "white", fontSize: "small" }}>
                  <AutoStoriesIcon fontSize="small" style={{ fontFamily: 'Arial, sans-serif' }} /> : 3 of 5
                </Button>
              </Tooltip>
            </Box>
          </Toolbar>
        </div>
        <Box display={"flex"} height={35} pl={7} gap={5} bgcolor={"#86BCEA"}>
          <Button sx={buttonStyle} style={{ fontFamily: 'Arial, sans-serif' }}>
            <CalculateIcon fontSize="medium" sx={buttonStyle.IconStyle} />
            Calculator
          </Button>

          <Button sx={buttonStyle} style={{ fontFamily: 'Arial, sans-serif' }}>
            <FormatClearIcon fontSize="medium" sx={buttonStyle.IconStyle} />
            Clear
          </Button>
        </Box>
      </AppBar>
    </Box>
  );
};

export default Header