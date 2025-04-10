import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from '@app/Dashboard/Dashboard';
import { Support } from '@app/Support/Support';
import { GeneralSettings } from '@app/Settings/General/GeneralSettings';
import { ProfileSettings } from '@app/Settings/Profile/ProfileSettings';
import { NotFound } from '@app/NotFound/NotFound';
import { SBOMsPage } from '@app/SBOMs/SBOMsPage';
import { AdvisoriesPage } from '@app/Advisories/AdvisoriesPage';
import { ImportersPage } from '@app/Importers/ImportersPage';
import { PackagesPage } from '@app/Packages/PackagesPage';
import { SearchPage } from '@app/Search/SearchPage';
import { UploadPage } from '@app/Upload/UploadPage';
import { VulnerabilitiesPage } from '@app/Vulnerabilities/VulnerabilitiesPage';

export interface IAppRoute {
  label?: string; // Excluding the label will exclude the route from the nav sidebar in AppLayout
  /* eslint-disable @typescript-eslint/no-explicit-any */
  element: React.ReactElement;
  /* eslint-enable @typescript-eslint/no-explicit-any */
  exact?: boolean;
  path: string;
  title: string;
  routes?: undefined;
}

export interface IAppRouteGroup {
  label: string;
  routes: IAppRoute[];
}

export type AppRouteConfig = IAppRoute | IAppRouteGroup;

const routes: AppRouteConfig[] = [
  {
    element: <Dashboard />,
    exact: true,
    label: 'Dashboard',
    path: '/',
    title: 'Trustify UI | Main Dashboard',
  },
  {
    element: <Support />,
    exact: true,
    label: 'Support',
    path: '/support',
    title: 'Support Page',
  },
  {
    label: 'Settings',
    routes: [
      {
        element: <GeneralSettings />,
        exact: true,
        label: 'General',
        path: '/settings/general',
        title: 'General Settings',
      },
      {
        element: <ProfileSettings />,
        exact: true,
        label: 'Profile',
        path: '/settings/profile',
        title: 'Profile Settings',
      },
    ],
  },
  {
    element: <AdvisoriesPage />,
    exact: true,
    label: 'Advisories',
    path: '/advisories',
    title: 'Advisories',
  },
  {
    element: <ImportersPage />,
    exact: true,
    label: 'Importers',
    path: '/importers',
    title: 'Importers',
  },
  {
    element: <PackagesPage />,
    exact: true,
    label: 'Packages',
    path: '/packages',
    title: 'Packages',
  },
  {
    element: <SBOMsPage />,
    exact: true,
    label: 'SBOMs',
    path: '/sboms',
    title: 'SBOMs',
  },
  {
    element: <SearchPage />,
    exact: true,
    label: 'Search',
    path: '/search',
    title: 'Search',
  },
  {
    element: <UploadPage />,
    exact: true,
    label: 'Upload',
    path: '/upload',
    title: 'Upload',
  },
  {
    element: <VulnerabilitiesPage />,
    exact: true,
    label: 'Vulnerabilities',
    path: '/vulnerabilities',
    title: 'Vulnerabilities',
  },
];

const flattenedRoutes: IAppRoute[] = routes.reduce(
  (flattened, route) => [...flattened, ...(route.routes ? route.routes : [route])],
  [] as IAppRoute[],
);

const AppRoutes = (): React.ReactElement => (
  <Routes>
    {flattenedRoutes.map(({ path, element }, idx) => (
      <Route path={path} element={element} key={idx} />
    ))}
    <Route element={<NotFound />} />
  </Routes>
);

export { AppRoutes, routes };
