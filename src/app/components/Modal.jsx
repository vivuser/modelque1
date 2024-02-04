import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { equipmentOptions } from '../utils/dummyData/equipmentData';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const [equipment, setEquipment]  = React.useState('');
  const [equipmentType, setEquipmentType] = React.useState('');
  const [capacity, setCapacity] = React.useState('');
  const [existingMake, setExistingMake] = React.useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleEquipmentChange = (event) => {
    setEquipment(event.target.value)
    setEquipmentType('')
  }

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Asset Register
          </Typography>
          <TextField
          label="Equipment"
          variant="outlined"
          fullWidth
          margin="normal"
          value={equipment}
          onChange={handleEquipmentChange}
          select
          >
                {equipmentOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}    
          </TextField>
          
       
          <TextField
          label="Equipment type"
          variant="outlined"
          fullWidth
          margin="normal"
          value={equipmentType}
          onChange={(e) => setEquipmentType(e.target.value)}
          select
          >
            {equipmentOptions
              .find((e) => e.value === equipment)
              ?.equipmentTypeOptions?.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                {option.label}
                </MenuItem>
              )) || <MenuItem value="N/A">N/A</MenuItem>
            }
          </TextField>

          <TextField
          label="Capacity"
          variant="outlined"
          fullWidth
          margin="normal"
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
          select
          >
            {equipmentOptions
            .find((e) => e.value === equipment)
            ?.capacity?.map((option) => (
              <MenuItem key={option.label} value={option.label}>
              {option.label}
              </MenuItem> 
            )) || <MenuItem value="N/A">N/A</MenuItem>
            }
          </TextField>
                           <TextField
          label="Existing make"
          variant="outlined"
          fullWidth
          margin="normal"
          />
        </Box>
      </Modal>
    </div>
  );
}
