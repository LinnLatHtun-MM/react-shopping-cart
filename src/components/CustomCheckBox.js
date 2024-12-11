import * as React from 'react';

import { grey, yellow, green, red, white } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import SquareIcon from '@mui/icons-material/Square';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function CustomCheckbox() {

    const [checkedColor, setCheckedColor] = useState('');

    const handleCheckboxChange = (color) => (event) => {
        if (event.target.checked) {
            setCheckedColor(color);
        } else if (checkedColor === color) {
            setCheckedColor('');
        }
    };

    return (
        <div>

            {/* Display message based on the checked color */}

            {checkedColor && (
                <Typography variant="h6" sx={{ mt: 2 }}>
                    {checkedColor}
                </Typography>
            )}

            <Checkbox
                {...label}
                icon={<SquareIcon></SquareIcon>}
                checked={checkedColor === 'Black'}
                sx={{
                    p: 0,
                    color: grey[800],
                    '&.Mui-checked': {
                        color: grey[600],
                    },
                    '& .MuiSvgIcon-root': { fontSize: 30 },
                }}
                onChange={handleCheckboxChange('Black')}

            />

            <Checkbox
                {...label}
                icon={<SquareIcon></SquareIcon>}
                checked={checkedColor === 'Green'}
                sx={{
                    p: 0,
                    color: green[800],
                    '&.Mui-checked': {
                        color: green[600],
                    },

                    '& .MuiSvgIcon-root': { fontSize: 30 },

                }}
                onChange={handleCheckboxChange('Green')}

            />

            <Checkbox
                {...label}
                icon={<SquareIcon></SquareIcon>}
                checked={checkedColor === 'Red'}
                sx={{
                    p: 0,
                    color: red[800],
                    '&.Mui-checked': {
                        color: red[600],
                    },
                    '& .MuiSvgIcon-root': { fontSize: 30 }
                }}

                onChange={handleCheckboxChange('Red')}
            />

            <Checkbox
                {...label}
                icon={<SquareIcon></SquareIcon>}
                checked={checkedColor === 'White'}
                sx={{
                    p: 0,
                    color: grey[100],
                    '&.Mui-checked': {
                        color: grey[100],
                    },
                    '& .MuiSvgIcon-root': { fontSize: 30 },
                }}

                onChange={handleCheckboxChange('White')}

            />
            <Checkbox
                {...label}
                icon={<SquareIcon></SquareIcon>}
                checked={checkedColor === 'Yellow'}

                sx={{
                    p: 0,
                    color: yellow[800],
                    '&.Mui-checked': {
                        color: yellow[600],
                    },
                    '& .MuiSvgIcon-root': { fontSize: 30 },
                }}

                onChange={handleCheckboxChange('Yellow')}
            />

        </div>
    );
}
