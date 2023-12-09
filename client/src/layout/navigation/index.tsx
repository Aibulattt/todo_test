import { ListItemText, Stack } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

import { routes } from '../routes-config';
import { StyledItemIcon, StyledMenuItem } from './style';
import {Login} from "@mui/icons-material";

interface NavItemProps {
  title: string;
  to: string;
  icon: JSX.Element;
  isActive: boolean;
}

function NavItem({ title, icon, to, isActive }: NavItemProps) {
  return (
    <Link to={to} style={{ color: 'inherit', textDecoration: 'none' }}>
      <StyledMenuItem isActive={isActive}>
        <StyledItemIcon isActive={isActive}>
          {icon}
        </StyledItemIcon>
        <ListItemText>{title}</ListItemText>
      </StyledMenuItem>
    </Link>
  );
}

function Navigation() {
  const location = useLocation();
  const isActive = (to: string) => location.pathname === to;

  return (
    <Stack
      direction="row"
      alignItems="center"
      gap="10px"
    >
        <NavItem
          title={routes.auth.label}
          to={routes.auth.path}
          icon={<Login />}
          isActive={isActive(routes.auth.path)}
        />
    </Stack>
  );

}

export {Navigation};
