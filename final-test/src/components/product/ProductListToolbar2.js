import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  TableCell,
  Table,
  TableHead,
  TableRow,
} from '@material-ui/core';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { AppContext } from "../../Context";

const ProductListToolbar2 = (props) => {
  const navigate = useNavigate();
  const myFunction2 = () => { setYear(''); setMonth(''); };
  const { setMonth, setYear } = useContext(AppContext);
  return (
    <Formik
      initialValues={{
        password: '',
        month: '',
      }}
      validationSchema={Yup.object().shape({
        password: Yup.string().max(255).required('Password is required')
      })}
      onSubmit={(value) => {
        setMonth(value.password);
        setYear(value.month);
      }}
    >
      {({
        handleBlur,
        handleChange,
        handleSubmit,
        values,
        touched,
        errors,
      }) => (
        <form onSubmit={handleSubmit}>
          <Box {...props}>
            <Box
              sx={{
                display: 'flexen',
              }}
            >
            </Box>
            <Box sx={{ mt: 3 }}>
              <Card>
                <CardContent>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell style={{ width: '240px' }}>
                          <Box >
                            <TextField
                              width='40px'
                              label="輸入年份"
                              margin="normal"
                              name="password"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              type="text"
                              value={values.password}
                              variant="outlined"
                            />
                          </Box>
                        </TableCell>
                        <TableCell style={{ width: '120px' }}>
                          <TextField
                            error={Boolean(touched.month && errors.month)}
                            fullWidth
                            helperText={touched.month && errors.month}
                            select
                            SelectProps={{
                              native: true
                            }}
                            placeholder="Id"
                            name="month"
                            value={values.month}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            
                          >
                            <option>月份</option>
                            <option value='01'>1月</option>
                            <option value='02'>2月</option>
                            <option value='03'>3月</option>
                            <option value='04'>4月</option>
                            <option value='05'>5月</option>
                            <option value='06'>6月</option>
                            <option value='07'>7月</option>
                            <option value='08'>8月</option>
                            <option value='09'>9月</option>
                            <option value='10'>10月</option>
                            <option value='11'>11月</option>
                            <option value='12'>12月</option>
                          </TextField>
                        </TableCell>
                        <TableCell style={{ width: '120px' }}>
                          <Button
                            color="primary"
                            variant="contained"
                            style={{ backgroundColor: 'green' }}
                            type="submit"
                            variant="contained"
                          >
                            <img
                              src=
                              "/static/images/icon/serch.png"
                              width="22px"
                            />
                            查詢                         
                          </Button>
                        </TableCell>
                        <TableCell>
                          <Button
                            color="secondary"
                            variant="contained"
                            style={{ backgroundColor: 'red' }}
                            onClick={myFunction2}
                          >
                            <img
                              src=
                              "/static/images/icon/reset.png"
                              width="22px"
                            />
                            重置                            
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                  </Table>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </form>
      )
      }
    </Formik >
  );
}

export default ProductListToolbar2;
