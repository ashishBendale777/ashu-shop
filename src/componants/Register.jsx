import { CheckBox } from '@mui/icons-material'
import { Box, Button, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from '@mui/material'
import React from 'react'

const Register = () => {

    //handle form submition
    let handleFormData = (event) => {
        event.preventDefault()
        let formData = new FormData(event.target)
        let formDataObject = Object.fromEntries(formData.entries())
        console.log("DATA", formDataObject);
    }

    return (
        <>
            <Typography variant='h4'>Register</Typography>

            <Box component='form'
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    margin: 10
                }}
                onSubmit={handleFormData}
            >

                <TextField type='text'
                    label="First Name"
                    name='firstname'
                    variant='outlined' />

                <TextField type='text'
                    label="Last Name"
                    name='lastname'
                    variant='outlined' />

                <TextField type='email'
                    label="Email"
                    name='email'
                    variant='outlined' />


                <TextField type='tel'
                    label="Mobile Number"
                    name='mobile'
                    variant='outlined' />



                <TextField type='text'
                    label="Message"
                    variant='outlined'
                    multiline
                    name='message'
                    rows={3} />

                <TextField type='file'
                    label="Photo"
                    name='photo'
                    variant='outlined' />

                <FormGroup>
                    <RadioGroup
                        row
                        name='gender'>
                        <FormControlLabel control={<Radio />} label="Female" value="Female" />
                        <FormControlLabel control={<Radio />} label="Male" value="Male" />
                    </RadioGroup>
                </FormGroup>

                <FormControl>
                    <InputLabel>Select Course</InputLabel>
                    <Select name='course'>
                        <MenuItem value="BCA">BCA</MenuItem>
                        <MenuItem value="MCA">MCA</MenuItem>
                        <MenuItem value="Bsc">Bsc</MenuItem>
                        <MenuItem value="Msc">Msc</MenuItem>
                    </Select>
                </FormControl>

                <FormGroup>
                    <label>Hobbies</label>
                    <FormControlLabel
                        control={<input name="hobbies" type='checkbox'
                            value="Sports" />}
                        label="Sports"
                    />

                    <FormControlLabel
                        control={<input name="hobbies" type='checkbox'
                            value="Dance" />}
                        label="Dance"
                    />


                    <FormControlLabel
                        control={<input name="hobbies" type='checkbox'
                            value="Reading" />}
                        label="Reading"
                    />


                    <FormControlLabel
                        control={<input name="hobbies" type='checkbox'
                            value="Singging" />}
                        label="Singging"
                    />
                </FormGroup>

                <Button type='submit' variant='contained' color='primary'>Submit</Button>
            </Box>
        </>
    )
}

export default Register