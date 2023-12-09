import {Container, TextField, Typography} from "@mui/material";
import {FormContainer} from "./style";
import {LoadingButton} from "@mui/lab";


function Auth() {
  return (
    <Container>
      <Typography variant={"h3"}>
        Авторизация
      </Typography>
      <FormContainer>
        <TextField
          variant={"standard"}
          label="Email"
        />
        <TextField
          variant={"standard"}
          label="Пароль"
        />
        <LoadingButton variant="contained">
          Войти
        </LoadingButton>
      </FormContainer>
    </Container>
  )
}

export { Auth }