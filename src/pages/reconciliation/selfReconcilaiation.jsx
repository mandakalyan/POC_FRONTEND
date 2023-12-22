import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CircularProgress from '@mui/material/CircularProgress'; 
import "./reconciliation.css"
import { ReconcilitionService } from '../../services/ReconciliationService';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';




const MyButtonSelf = () => {
  const [open, setOpen] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);
  const [loading, setLoading] = useState(false); 

  

  const callApi = () => {
    setLoading(true);
    ReconcilitionService.SelfReconciliate()
      .then(data => {
        setApiResponse(data); 
        setOpen(true); 
      })
      .catch(error => 
       { console.error(error);
      setLoading(false);
       })
      .finally(() => {
        setLoading(false); 
      });
  };

  const handleClose = () => {
    setOpen(false);

  };
  
  


  // const renderGrid = () => {
  //   if (!apiResponse) {
  //     return null; 
  //   }

  //   return (
  //     <div className="grid-container">
  //       {Object.entries(apiResponse).map(([key, value]) => (
  //         <div key={key} className="grid-item">
  //           <div className="grid-key">{key}:</div>
  //           <div className="grid-value">{value}</div>
  //         </div>
  //       ))}
  //     </div>
  //   );
  // };
  const renderGrid = () => {
    if (!apiResponse) {
      return null;
    }
  
    return (
      <TableContainer component={Paper}>
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
            
              <TableRow >
                <TableCell>{apiResponse.employeeId}</TableCell>
                <TableCell>{apiResponse.firstName}</TableCell>
                <TableCell>{apiResponse.lastName}</TableCell>
                <TableCell>{apiResponse.status}</TableCell>
                <TableCell> {apiResponse.differenceInHours}</TableCell>
              </TableRow>
          
          </TableBody>
        </Table>
      </TableContainer>
    );
  };
  
  



 
  return (
    <div>
      <Button className="self-reconciliation-button" variant="contained" color="primary" onClick={callApi}>
      {loading ? ( // Display loading indicator if loading is true
          <CircularProgress size={24} color="inherit" />
        ) : (
          'Self Reconciliate'
        )}
      </Button>
       <Dialog open={open} onClose={handleClose} > 
        <DialogTitle>Reconciliation Report</DialogTitle>
        <DialogContent > 
        {renderGrid()}
      
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <Button color="primary" >
            Download Report
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MyButtonSelf;
