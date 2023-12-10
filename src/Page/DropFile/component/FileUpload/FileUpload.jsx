import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";
import EditVin from "../../../../Component/tools/EditVin/EditVin.jsx";
import axios from "axios";
const FileUpload = () => {
  const url = "https://localhost:7189/DropFile";
  const navigate = useNavigate();
  const { userId: userId } =
    JSON.parse(localStorage.getItem("User Param")) || {};
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setUploadedFiles(acceptedFiles);
      const formData = new FormData();
      acceptedFiles.forEach((file) => {
        formData.append("formFile", file);
        formData.append("userId", userId);
      });
      axios
        .post(url, formData)
        .then((res) => {
          if (res.status === 205) EditVin();
          if (res.status === 200) navigate(`/${res.data}`);
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
