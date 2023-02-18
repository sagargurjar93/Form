import React, { useEffect, useState } from 'react'
import Png from './Png.png'
import './App.css'
import { FormControl, Paper, TextField , FormLabel, RadioGroup, FormControlLabel, Radio, Input, Button } from '@mui/material'
import { Stack, Box} from '@mui/system'
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { ThemeContext } from "./context/ThemeContext";
import { useContext } from 'react'
import ThemeButton from './context/ThemeButton';




function First() {
  const { darkMode } = useContext(ThemeContext);


  const [age, setAge] = React.useState('');

  const Other =  (event) =>{
    
  }

  const handleChange2 = (event) => {
    setAge(event.target.value);
  };

    const [value, setValue] = useState(null)
      
    
      const handleChange = (newValue) => {
        setValue(newValue);
      };

      const [pin,setpin] = useState("")
      console.log(pin)

      function handlePinChange(e){
        setpin(e.target.value)
          fetch(`https://api.postalpincode.in/pincode/${pin}`)
          .then(response => response.json()).then( data=> {
            console.log("Data", data)
          }).catch(e =>{
            console.log(e)
          })
    
      }

     

    

  return (
    <div className={darkMode ? "canvas-dark" : "canvas"}>
        <img className='png' src={Png}></img>
        <h1 className='h'>GICSEH</h1>
        <hr/>
        <Paper>
        <Stack spacing={2} >
        <h2>Registration from</h2>
        <FormLabel id='job-experience-group-label'>
                <h3>Name</h3></FormLabel>
        <Stack direction="row" spacing={2}>
        <TextField label="First name"  /> <TextField label="Middle name" /> <TextField label="Last name" />
        </Stack>
        <Box>
            <FormControl>
            <FormLabel id='job-experience-group-label'>
                <h3>Gender</h3>
            </FormLabel>
            <RadioGroup
               row
               aria-labelledby='gender-group-label'
               name='gender-group'>
                <FormControlLabel
                labelPlacement='start'
                value='Male'
                control={<Radio size='small' color='secondary' />}
                label='Male'
                />
                <FormControlLabel
                labelPlacement='start'
                value='Female'
                control={<Radio size='small' color='secondary' />}
                label='Female'
                />
                <FormControlLabel
                labelPlacement='start'
                value='Other'
                control={<Radio size='small' color='secondary' />}
                label='Other'
                />
               </RadioGroup>
            </FormControl>
        </Box>
        <FormLabel><h3>Date of Birth</h3></FormLabel>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DesktopDatePicker
          label="Date of Birth"
          inputFormat="DD/MM/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>

        <FormLabel><h3>Mobile</h3></FormLabel>
        <TextField label="Number"/>
        <FormLabel><h3>Father name</h3></FormLabel>    
        <TextField label="Father name" />
        <FormLabel><h3>Mother name</h3></FormLabel>
        <TextField label="Mother name" />
        
        <FormLabel><h3>Address</h3></FormLabel>
        <TextField onChange={handlePinChange}  label="Pin code"/>
        <TextField  label="District"/>
        <TextField label="State"/>
        {/* <FormLabel><h3>Pin Code</h3></FormLabel>
        <TextField label="pin"/> */}

      <FormControl>
        <InputLabel id="demo-simple-select-label">Course</InputLabel>
          <Select
         labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
           label="Age"
           onChange={handleChange2}
                          >
         <MenuItem value={"HTML"}>HTML</MenuItem>
          <MenuItem value={"CSS"}>CSS</MenuItem>
         <MenuItem value={"JavaScript"}>JavaScript</MenuItem>
         <MenuItem value={"React.js"}>React.js</MenuItem>
         <MenuItem onChange={Other} value={"Other"}>Other</MenuItem>
          </Select>
          <br/>
          <TextField/>
          </FormControl>
        
        <Button variant="contained" color="success">Submite</Button>
        </Stack>
        </Paper>

        {/* <ThemeButton/> */}
    </div>
  )
}

export default First