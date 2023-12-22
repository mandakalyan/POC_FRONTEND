import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CircularProgress from '@mui/material/CircularProgress'; 
import "./reconciliation.css"
import { ReconcilitionService } from '../../services/ReconciliationService';
import { DataGrid, GridToolbarExport, GridToolbarContainer } from "@mui/x-data-grid";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { saveAs } from 'file-saver';
import { makeStyles } from '@mui/styles';



const MyButton = () => {
  const [open, setOpen] = useState(false);
  const [apiResponse, setApiResponse] = useState([]);
  const [loading, setLoading] = useState(false); 

  

//   useEffect (() =>{
//     callApi()
//   },[]);

  // Function to call your API
  const callApi = () => {
    setLoading(true);
    ReconcilitionService.Reconciliate()
      .then(data => {
        setApiResponse(data); 
        setOpen(true); 
      })
      .catch(error => 
       { console.error(error);
      setLoading(false);
       })
      .finally(() => {
        setLoading(false); // Set loading to false regardless of success or error
      });
  };

  const handleClose = () => {
    setOpen(false);

  };

  const exportVisibleDataToExcel = () => {
    //
    const table = document.querySelector('.popup-table'); 
  
    if (!table) {
      console.error('Table not found.');
      return;
    }
    const headers = [];
  const headerCells = table.querySelectorAll('thead th');
  headerCells.forEach((cell) => {
    headers.push(cell.textContent);
  });
  
  
    const data = [];
    const rows = table.querySelectorAll('tbody tr');
  
    rows.forEach((row) => {
      const rowData = [];
      const cells = row.querySelectorAll('td');
      cells.forEach((cell) => {
        rowData.push(cell.textContent);
      });
      data.push(rowData);
    });
     
    data.unshift(headers);

    // Create a CSV content string
    const csvContent = data.map((row) => row.join(',')).join('\n');
  
    // Convert the CSV content to a Blob
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
  
    // Save the Blob as a file
    saveAs(blob, 'ReconciliationFile.csv'); 
  };
  
  const useStyles = makeStyles((theme) => ({
    matchedStatus: {
      color: 'green',
    },
    notMatchedStatus: {
      color: 'red',
    },
  }));
  
  const classes = useStyles();

  
  


  
const renderGrid = () => {
    if (!apiResponse) {
      return null;
    }
  
    return (
      <TableContainer component={Paper} className='popup-table'>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Employee ID</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Difference In Hours</TableCell>

              
               
            </TableRow>
          </TableHead>
          <TableBody>
            {apiResponse.map((data, index) => (
              <TableRow key={index}>
                <TableCell>{data.employeeId}</TableCell>
                <TableCell>{data.firstName}</TableCell>
                <TableCell>{data.lastName}</TableCell>
                <TableCell  className={
                  data.status === 'Matched'
                    ? classes.matchedStatus
                    : classes.notMatchedStatus
                }>{data.status}</TableCell>
                <TableCell> {data.differenceInHours}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

 
  return (
    <div>
      <Button className="reconciliation-button" variant="contained" color="primary" onClick={callApi}>
      {loading ? ( // Display loading indicator if loading is true
          <CircularProgress size={24} color="inherit" />
        ) : (
          'Reconciliate'
        )}
      </Button>
       <Dialog open={open} onClose={handleClose} > 
        <DialogTitle>Reconciliation Report</DialogTitle>
        <DialogContent > 
        {/* <DataGrid rows={apiResponse} columns={columns} pageSize={5} disableSelectionOnClick /> */}
        {renderGrid()}
      
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <Button onClick={exportVisibleDataToExcel} color="primary" >
            Download Report
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MyButton;
