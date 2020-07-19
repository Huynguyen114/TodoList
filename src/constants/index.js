import AdminHomePage from '../containers/AdminHomePage';
import Taskboard from '../containers/Taskboard';

export const API_ENDPOINT = 'https://5e1bd634db8a52001414c6b1.mockapi.io/api';

export const STATUSES = [
  {
    value: 0,
    label: 'READY',
  },
  {
    value: 1,
    label: 'IN PROGRESS',
  },
  {
    value: 2,
    label: 'COMPLETED',
  },
];

export const STATUS_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  UPDATED: 202,
};

export const ADMIN_ROUTES = [
  {
    name: 'Trang quản trị',
    path: '/',
    exact: true,
    component: AdminHomePage,
  },
  {
    name: 'Quản lý công việc',
    path: '/task-board',
    component: Taskboard,
  },
];
