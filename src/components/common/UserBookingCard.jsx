import { Avatar, Stack, Typography, colors, Box } from '@mui/material'
import React from 'react'
import MPaper from './MPaper'   
import { images } from '../../assets'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';

const UserBookingCard = () => {
  return (
    <MPaper title="Latest booking">
        <Stack spacing={3}>
            {/* user info */}
            <Stack direction="row" spacing={2}>
                <Avatar alt="user" src={images.useProfile} />
                <Stack justifyContent="space-between">
                    <Typography variant="subtitle2">
                        Tuat Tran
                    </Typography>
                    <Typography variant="caption" color={colors.grey[500]}>
                        02 sep 2023 09:50
                    </Typography>
                </Stack>
            </Stack>
            {/* user info */}

            {/* booking info */}
            <Stack direction="row" alignItems="center" spacing={5} sx={{ color: colors.grey[600] }}>
                <Stack direction="row" spacing={1} alignItems="center">
                    <CalendarMonthOutlinedIcon  fontSize="small" />
                    <Typography varint="body2" fontWeight={600}>
                        5 days 4 nights
                    </Typography>
                </Stack>        
                <Stack direction="row" spacing={1} alignItems="center">
                    <PeopleAltOutlinedIcon  fontSize="small" />
                    <Typography varint="body2" fontWeight={600}>
                        5 - 6 guests
                    </Typography>
                </Stack>        
            </Stack>
            {/* booking info */}

            {/* images */}
            <Box sx={{
                pt: "100%",
                position: "relative",
                "& img": {
                    position: "absolute",
                    top: 0,
                    height: "100%",
                    width: "100%",
                    boderRadius: 8
                }
            }}>
                 <img src={images.bookingImage} alt="booking" />
            </Box>
            {/* images */}
        </Stack>
    </MPaper>
  )
}

export default UserBookingCard