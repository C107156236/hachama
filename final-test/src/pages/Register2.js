import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography
} from '@material-ui/core';
import { AppContext } from "../Context";
import { useContext } from "react";



const Register2 = () => {
  const navigate = useNavigate();
  const { insertUser5, users2, detail } = useContext(AppContext);
  console.log();
  const myfunction = (value) => {
    insertUser5({ OId2: detail, PI2: value.email, qty: value.password, discount: value.descript });
  };
  return (
    <>
      <Helmet>
        <title>Register | Material Kit</title>
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
              email: '',
              password: '',
              descript: '',
            }}
            validationSchema={
              Yup.object().shape({
                email: Yup.string().max(255).required('產品編號需要輸入'),
                password: Yup.string().max(255).required('數量需要輸入'),
                descript: Yup.string().max(255).required('折扣需要輸入'),
              })
            }
            onSubmit={(value) => {
              myfunction(value);
              navigate('/app/products1', { replace: true });

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
                    新增訂單明細
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  select
                  SelectProps={{
                    native: true
                  }}
                  placeholder="Id"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  margin="normal"
                >
                  <option>產品編號</option>
                  {users2.map(({ PId, PN }) => {
                    return (
                      <option key={PId} value={PId}>{PId}&nbsp;&nbsp;&nbsp;{PN}</option>
                    )
                  })}
                </TextField>
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="數量"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  value={values.password}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.descript && errors.descript)}

                  fullWidth
                  helperText={touched.descript && errors.descript}

                  label="折扣"
                  margin="normal"
                  name="descript"
                  onChange={handleChange}
                  type="text"
                  value={values.descript}
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
                    新增
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

export default Register2;
