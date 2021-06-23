import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography
} from '@material-ui/core';
import { AppContext } from "../Context";
import { useContext } from "react";

const Login = () => {
  const navigate = useNavigate();
  const { users, setUseravatar } = useContext(AppContext);
  let a = 0;
  let b = 0;
  return (
    <>
      <Helmet>
        <title>Login | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center'
        }}
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              email: '1',
              password: '02-7613571',
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string().max(255).required('帳號需要輸入'),
              password: Yup.string().max(255).required('密碼需要輸入')
            })}
            onSubmit={(value) => {
              for (let i = 0; i < users.length; i++) {
                if (users[i].id === value.email) {
                  a = a + 1;
                  b = i;
                }
              }
              if (users[b].phone === value.password) {

                a = a + 1
              }
              if (a === 2) {
                setUseravatar({ id: value.email, name: users[b].user_name, job: users[b].user_email, dn: users[b].DeptName })
                navigate('/app/dashboard', { replace: true });

              }
              else {

                window.alert("輸入錯誤的帳號密碼");
                window.location.reload(false);
              }
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (
              <form onSubmit={handleSubmit}>
                <Box sx={{ mb: 3 }}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    登入
                  </Typography>
                </Box>
                <TextField
                  fullWidth
                  label="帳號"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  value={values.email}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="密碼"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  value={values.password}
                  variant="outlined"
                />
                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    登入
                  </Button>
                </Box>
                
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};
export default Login;
