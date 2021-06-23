import {
  Box,
  Button,
  Card,
  CardContent,
  TableCell,
  Table,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { useNavigate } from 'react-router-dom';


const ProductListToolbar1 = (props) => {
  const navigate = useNavigate();
  const myFunction = () => { navigate('/register2'); };
  const myFunction2 = () => { navigate('/app/products'); };
  return (

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
                      <TableCell>
                        <Button
                          style={{ backgroundColor: 'red' }}
                          variant="contained"
                          onClick={myFunction2}
                        >
                          返回
                          <img
                            src=
                            "/static/images/icon/back.png"
                            width="22px"
                          />
                        </Button>
                      </TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </CardContent>
        </Card>
      </Box>
    </Box>
  )


}

export default ProductListToolbar1;
