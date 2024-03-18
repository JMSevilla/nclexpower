import {
  AppBar,
  Toolbar,
  Box,
  Tooltip,
  Typography,
  Button,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalculator,
  faFileLines,
  faTextSlash,
} from "@fortawesome/free-solid-svg-icons";

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
};

export const Header: React.FC<Props> = ({}) => {
  return (
    <AppBar>
      <div style={{ padding: 10, backgroundColor: "#007AB7" }}>
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box>
            <Typography fontWeight="bold">Time Remaining 04:00:00</Typography>
            <Typography fontSize={14}>Duration: 00:15 |</Typography>
          </Box>
          <Box>
            <Typography textAlign="center">QID: 291</Typography>
            <Typography>NCLEX Sample Tutor</Typography>
          </Box>
          <Box flexGrow={0}>
            <Tooltip title="3 of 5 pages">
              <Button
                sx={{ color: "white", fontSize: "small" }}
                startIcon={<FontAwesomeIcon icon={faFileLines} />}
              >
                3 of 5
              </Button>
            </Tooltip>
          </Box>
        </Toolbar>
      </div>
      <Box display={"flex"} height={35} pl={7} gap={5} bgcolor={"#86BCEA"}>
        <Button
          sx={buttonStyle}
          startIcon={<FontAwesomeIcon icon={faCalculator} fontSize={"small"} />}
        >
          Calculator
        </Button>
        <Button
          sx={buttonStyle}
          startIcon={<FontAwesomeIcon icon={faTextSlash} fontSize={"small"} />}
        >
          Clear
        </Button>
      </Box>
    </AppBar>
  );
};
