import { styled } from '@mui/material';

export const StyledHeader = styled('div')(({ theme }) => ({
  backgroundColor: theme.colors.header,
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.text.primary
}));

export const Container = styled('div')(() => ({
  margin: '0 auto',
  padding: '0 20px',
  maxWidth: '1200px',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '50px',
  fontSize: '14px',
  lineHeight: '24px'
}));

export const Left = styled('div')(() => ({
  fontWeight: 700,
  height: '20px'
}));

export const Right = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '15px',
  alignItems: 'center',
  button: {
    fontWeight: 400,
    color: theme.palette.primary,
    fontSize: '14px',
    lineHeight: '24px',
    textTransform: 'none'
  }
}));
