import isPropValid from '@emotion/is-prop-valid';
import { ListItemIcon, MenuItem, styled } from '@mui/material';

export const StyledItemIcon = styled(ListItemIcon, {
  shouldForwardProp: prop => typeof prop === 'string' && isPropValid(prop)
})<{isActive?: boolean}>(({ theme, isActive }) => ({
  color: isActive ? theme.palette.primary.light : undefined
}));

export const StyledMenuItem = styled(MenuItem, {
  shouldForwardProp: prop => typeof prop === 'string' && isPropValid(prop)
})<{isActive?: boolean}>(({ theme, isActive }) => ({
  position: 'relative',
  height: '50px',
  '&::after': {
    display: isActive ? 'block' : 'none',
    content: '""',
    width: '80%',
    height: '3px',
    margin: '0 auto',
    backgroundColor: theme.palette.primary.light,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  }
}));
