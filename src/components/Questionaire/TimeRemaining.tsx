import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

interface Props {
  endTime: Date;
}

export const TimeRemaining: React.FC<Props> = ({ endTime }) => {
  const calculateTimeRemaining = () => {
    const difference = endTime.getTime() - new Date().getTime();
    if (difference <= 0) {
      // Time's up
      return { remainingTime: "Time's up!", duration: "" };
    }

    const hours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    const remainingTime = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    const totalDuration = 15; // Provided duration in minutes
    const elapsedDuration = Math.floor(
      (totalDuration * 60 * 1000 - difference) / (1000 * 60)
    ); // Elapsed duration in minutes
    const remainingDuration = totalDuration - elapsedDuration; // Remaining duration in minutes

    const durationStr = `${remainingDuration.toString().padStart(2, "0")}:00`;

    return { remainingTime, duration: durationStr };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Typography variant="caption" fontWeight="bold" fontSize={16}>
        Time Remaining : 00:14:46
      </Typography>{" "}
      &nbsp; | &nbsp; <Typography variant="caption">Duration: 00:15</Typography>
    </>
  );
};
