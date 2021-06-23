import {
  Box,
  Button,
  Card,
  CardContent,
  TableCell,
  Table,
  TableHead,
  TableRow,
  TextField,
} from '@material-ui/core';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { Search as SearchIcon } from 'react-feather';
import { useContext } from "react";
import { AppContext } from "../../Context";
const CustomerListToolbar = (props) => {
  const navigate = useNavigate();
  const myFunction = () => { navigate('/register'); };
  const myFunction2 = () => { setProdId(''); };
  const { setProdId } = useContext(AppContext);
  return (
    <Formik
      initialValues={{
        password: '',
      }}
      validationSchema={Yup.object().shape({
        password: Yup.string().max(255).required('Password is required')
      })}
      onSubmit={(value) => {
        setProdId(value.password);
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
          justifyContent: 'flex-end'
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
                            width='60px'
                            label="請輸入產品編號"
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
                        >
                          <img
                            src=
                            "/static/images/icon/serch.png"
                            width="22px"
                          />
                          查詢                              
                        </Button>
                      </TableCell>
                      <TableCell  >
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
</Formik>
  );
}
export default CustomerListToolbar;
