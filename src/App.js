import React from 'react';
import './App.css';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TAX_RATE = 0.07;

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(Item, qty, unit) {
  const price = priceRow(qty, unit);
  return { Item, qty, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow('Spicy seasoned sea... ', 1, 1.15),
  createRow('Salted pasta with mu...', 2, 45.99),
  createRow('Spicy instant noodle...', 3, 17.99),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;



function App() {
  
  return (
    
    <div className="container">
        
        <div className='order-title'>
        <Typography variant="h4" gutterBottom component="div">
        Orders #34562
      </Typography>
        </div>
        <div className='button'>
        <Stack spacing={2} direction="row">
        
        <Button variant="contained" color='secondary'>Dine In</Button>
        <Button variant="contained">To Go</Button>
        <Button variant="contained">Delivery</Button>

        </Stack>
        </div>
        


        
        <div className='table'>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead>
         
          <TableRow >
            <TableCell>Item</TableCell>
            <TableCell align="right">Qty.</TableCell>
          
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.Item}>
              <TableCell>{row.Item}</TableCell>
              <TableCell align="right"><button>{row.qty}</button></TableCell>
              
              <TableCell align="right">{ccyFormat(row.price)}</TableCell>
            </TableRow>
          ))}

          
        </TableBody>
      </Table>
    </TableContainer>
        </div>
        <div className='action-content'>
        <TableRow>
            
            <TableCell colSpan={2}>Discount</TableCell>
            <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
          </TableRow>
          
          <TableRow>
            <TableCell colSpan={2} >Subtotal</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
          </TableRow>
          <div className='payment'>
          <Button variant="contained" >
            Complete Payment
          </Button>

          <div className='print'>
          <Button variant="contained" >
            Complete Payment with print
          </Button>
          </div>

          </div>
         
         
        </div>
        
       

    </div>
    
  );
}

export default App;
