import React from "react";
import { Grid, Container } from "@mui/material";
import { CSQContainer } from '@/components';

interface Props {
  node1?: React.ReactElement | React.ReactNode;
  node2?: React.ReactElement | React.ReactNode;
}

export const QContainer: React.FC<Props> = ({ node1, node2 }) => {
  return (
    <Container >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
        <Grid item xs={6}>
          {node1}
        </Grid>
        <Grid item xs={6}>
          {node2}
        </Grid>
      </Grid>
    </Container>
  );
};
