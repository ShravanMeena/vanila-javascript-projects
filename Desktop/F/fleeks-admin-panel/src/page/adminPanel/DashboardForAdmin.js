import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import UsersList from "./UsersList";


function DashboardForAdmin() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper
            sx={{ pt: 1, pb: 1, display: "flex", flexDirection: "column" }}
          >
            <UsersList />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default function Dashboard() {
  return <DashboardForAdmin />;
}
