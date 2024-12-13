import { useState } from "react";
import { Box, TextField, MenuItem, Button, Typography } from "@mui/material";

const AdoptTreeForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    region: "",
    treeType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    // You can handle the submission logic here, e.g., send data to an API
    alert(`Thank you for adopting a tree, ${formData.name}!`);
  };

  return (
    <Box sx={{ maxWidth: 500, mx: "auto", mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Adopt a Tree
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Region"
          name="region"
          value={formData.region}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Tree Type"
          name="treeType"
          value={formData.treeType}
          onChange={handleChange}
          select
          fullWidth
          margin="normal"
          required
        >
          <MenuItem value="almond">Almond</MenuItem>
          <MenuItem value="olive">Olive</MenuItem>
          <MenuItem value="cedar">Cedar</MenuItem>
          <MenuItem value="eucalyptus">Eucalyptus</MenuItem>
        </TextField>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          fullWidth
        >
          Adopt Tree
        </Button>
      </form>
    </Box>
  );
};

export default AdoptTreeForm;
