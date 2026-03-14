'use client'

import DateReserve from "@/components/DateReserve";
import { TextField, Button, Select, FormControl, MenuItem, InputLabel } from "@mui/material";

export default function Booking(){
    return (
        <main className="w-full min-h-screen flex flex-col items-center space-y-8 bg-white">
            <div className="text-4xl font-bold text-gray-800 mt-8 mb-6">
                Venue Booking
            </div>

            <form className="flex flex-col space-y-8 w-[300px]">
                <TextField
                    name="Name-Lastname"
                    label="Name-Lastname"
                    variant="standard"
                />

                <TextField
                    name="Contact-Number"
                    label="Contact-Number"
                    variant="standard"
                />

                <FormControl variant="standard">
                    <InputLabel>Venue</InputLabel>
                    <Select id="venue">

                        <MenuItem value="Bloom">
                            The Bloom Pavilion
                        </MenuItem>

                        <MenuItem value="Spark">
                            Spark Space
                        </MenuItem>

                        <MenuItem value="GrandTable">
                            The Grand Table
                        </MenuItem>

                </Select>
                </FormControl>

                <DateReserve/>

                <Button variant="contained" name="Book Venue">
                    Book Venue
                </Button>
            </form>

            
        </main>
    );
}