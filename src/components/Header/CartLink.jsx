import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useSelector} from "react-redux";

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.gray}`,
        padding: '0 4px',
    },
}));

export default function CartLink() {
    const carts = useSelector(state => state.carts);

    return (
        <IconButton aria-label="cart">
            <StyledBadge badgeContent={carts.data.reduce((acc, rec) => {
                return acc + rec.count
            }, 0)} color="success">
                <ShoppingCartIcon />
            </StyledBadge>
        </IconButton>
    );
}