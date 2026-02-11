// FileUpload.tsx
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import {
  Box,
  Typography,
  Button,
  Stack,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface FileUploadProps {
  files: File[]; // files from parent
  setFiles: (files: File[]) => void; // function to update parent state
}

const FileUpload: React.FC<FileUploadProps> = ({ files, setFiles }) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setFiles([...files, ...acceptedFiles]);
    },
    [files, setFiles]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
    maxSize: 5 * 1024 * 1024, // 5MB
  });

  return (
    <>
   
        <Box
          {...getRootProps()}
          sx={{
            border: "2px dashed #1976d2",
            borderRadius: 2,
            padding: 4,
            textAlign: "center",
            cursor: "pointer",
            bgcolor: isDragActive ? "action.hover" : "background.paper",
            transition: "background-color 0.2s",
          }}
        >
          <input {...getInputProps()} />
          <Typography variant="body1">
            {isDragActive
              ? "Drop files here..."
              : "Drag & drop files here, or click to select"}
          </Typography>
          <Button variant="contained" sx={{ mt: 2 }}>
            Browse Files
          </Button>
        </Box>

        {files.length > 0 && (
          <Stack spacing={1} mt={2}>
            <Typography variant="subtitle1">Selected Files:</Typography>
            {files.map((file, index) => (
              <Card
                key={index}
                variant="outlined"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  p: 1,
                }}
              >
                <Typography noWrap>{file.name}</Typography>
                <IconButton
                  color="error"
                  onClick={() =>
                    setFiles(files.filter((_, i) => i !== index))
                  }
                >
                  <DeleteIcon />
                </IconButton>
              </Card>
            ))}
          </Stack>
        )}
    </>
  );
};

export default FileUpload;
