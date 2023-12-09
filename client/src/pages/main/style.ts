import { styled } from '@mui/material';

export const PageContainer = styled('div')(() => ({
  height: 'calc(100% - 50px)'
}));

export const TerminalContainer = styled('div')(() => ({
  height: '100%',
  padding: '10px 20px 20px 20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));

export const Resizeable = styled('div')(() => ({
  height: '100%',
  width: '1200px',
  resize: 'horizontal',
  overflow: 'hidden'
}));
