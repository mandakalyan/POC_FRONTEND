// App.js
import React, { useState } from "react";
import axios from "axios";
import { FileService } from "../../services/UploadFiles";

function FileProcessing() {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [comparisonReport, setComparisonReport] = useState(null);

  const handleFile1Change = (event) => {
    setFile1(event.target.files[0]);
  };

  const handleFile2Change = (event) => {
    setFile2(event.target.files[0]);
  };
  const handleUpload = async () => {
    try {
      const report =  await FileService.uploadFiles(file1, file2);
      setComparisonReport(report.data);
    } catch (error) {
      // Handle error, e.g., show an error message
      console.error("Error uploading files:", error);
    }
  };

  return (
    <div>
      <h1>Excel File Comparison</h1>
      <div>
        <input type="file"  accept=".xlsx,.xls" onChange={handleFile1Change} />
        <input type="file"   accept=".xlsx,.xls" onChange={handleFile2Change} />
        <button onClick={handleUpload}>Upload & Compare</button>
      </div>
      {comparisonReport && (
        <div>
          <h3>Comparison Report</h3>
          <pre>{JSON.stringify(comparisonReport)}</pre>
        </div>
      )}
    </div>
  );
}

export default FileProcessing;
