import React from 'react';
import { Stack } from '@mui/material';
import { Circles } from 'react-loader-spinner';

const Loader = () => {
    return (
        <Stack direction="row" justifyContent="center" alignItems="center" width="100%" mt={5} >
            <Circles color="gray" />
        </Stack>
    )
}

export default Loader