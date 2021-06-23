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
const ProductListToolbar = (props) => {
  const navigate = useNavigate();
  const myFunction = () => { navigate('/register1'); };
  const myFunction2 = () => { setStr(''); };
  const { setStr } = useContext(AppContext);
  return (
    <Formik
      initialValues={{
        password: '',
      }}
      validationSchema={Yup.object().shape({
        password: Yup.string().max(255).required('Password is required')
      })}
      onSubmit={(value) => {
        console.log(value.password)
        setStr(value.password);
      }}
    >
      {({
        handleBlur,
        handleChange,
        handleSubmit,
        values
      }) => (
        <form onSubmit={handleSubmit}>
          <Box {...props}>
            <Box
              sx={{
                display: 'flex',
              }}
            >
            </Box>
            <Box sx={{ mt: 3 }}>
              <Card>
                <CardContent>
                  <Table>
                    <TableHead>
                      <TableRow>
                      <TableCell style={{ width: '120px' }}>
                          <Button
                            color="primary"
                            variant="contained"
                            onClick={myFunction}
                          >
                          <img
                            src=
                            "/static/images/icon/add.png"
                            width="22px"
                          />
                          新增
                          </Button>
                        </TableCell>
                        <TableCell style={{ width: '260px' }}>
                          <Box>
                            <TextField
                              label="查詢訂單編號"
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

export default ProductListToolbar;
