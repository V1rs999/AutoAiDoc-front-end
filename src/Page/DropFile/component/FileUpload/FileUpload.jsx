import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
const FileUpload = () => {
  const url = "https://localhost:7189/DropFile";
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setUploadedFiles(acceptedFiles);
      const formData = new FormData();
      acceptedFiles.forEach((file) => {
        formData.append("formFile", file); // Use the same key as expected in the controller
      });
      axios
        .post(url, formData)
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.error("Error uploading files:", error);
        });
    },
    multiple: false,
  });
  return (
    <div className="drag-and-drop-div" {...getRootProps()}>
      <input className="drag-and-drop-input" {...getInputProps()} />
      <p className="drag-and-drop-title">
        Drag and drop files here or click to browse.
      </p>
      <ul>
        {uploadedFiles.map((file) => (
          <li key={file.name}>{file.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default FileUpload;
