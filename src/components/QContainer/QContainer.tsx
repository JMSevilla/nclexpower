import React from "react";
import { Grid, Container } from "@mui/material";
import { ParseRQ } from "../RegularQuestions/RegularQuestionOne/RQ/ParseRQ";
import { SsrData } from "@/core/types";
import { ParseRA } from '@/components/RegularQuestions/RegularQuestionOne/RA/ParseRA';

interface Props {
  questionaire?: SsrData["questionaire"];
  answer?: SsrData["answer"];
}

export const QContainer: React.FC<Props> = ({ questionaire, answer }) => {
  // useApiCallback, useAPI
  /**
   * const [disableNextBTN, setDisableNextBTN] = useState<boolean>(false)
   * array.some() -> returns boolean
   * const checkSelectedAnswers = array.length > 0 && array.map(... const bowelObstruction = array.some(item => item.bo ))
   * length >= 0 || length >= 3
   *
   * export const questionSchema = ({schema}) => {
   *
   * }
   */

  return (
    <Container>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <ParseRQ questionatire={questionaire ?? []} />
        </Grid>
        <Grid item xs={6}>
          <ParseRA answer={answer ?? []} />
        </Grid>
      </Grid>
    </Container>
  );
};
