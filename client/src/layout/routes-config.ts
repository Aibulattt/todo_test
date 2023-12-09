import { UserRole } from 'Models';

const routeNames = ['auth'] as const;
type RouteName = typeof routeNames[number]

interface AppRoute {
  path: string;
  label: string;
}

export const routes: Record<RouteName, AppRoute> = {
  auth: {
    path: '/login',
    label: 'Авторизация'
  }
};
