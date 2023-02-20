import { useState } from 'react';
// next
import Head from 'next/head';
// @mui
import { Container, ToggleButton, ToggleButtonGroup } from '@mui/material';
// layouts
import DashboardLayout from '../../layouts/dashboard';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// components
import { useSettingsContext } from '../../components/settings';
import CustomBreadcrumbs from '../../components/custom-breadcrumbs';

// ----------------------------------------------------------------------

PermissionDeniedPage.getLayout = (page: React.ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
);

// ----------------------------------------------------------------------

export default function PermissionDeniedPage() {
  const { themeStretch } = useSettingsContext();

  const [role, setRole] = useState('admin');

  const handleChangeRole = (event: React.MouseEvent<HTMLElement>, newRole: string | null) => {
    if (newRole !== null) {
      setRole(newRole);
    }
  };

  return (
    <>
      <Head>
        <title> Other Cases: Permission Denied | Minimal UI</title>
      </Head>

      <Container maxWidth={themeStretch ? false : 'lg'}>
        <CustomBreadcrumbs
          heading="Permission Denied"
          links={[
            {
              name: 'Dashboard',
              href: PATH_DASHBOARD.root,
            },
            {
              name: 'Permission Denied',
            },
          ]}
        />

        <ToggleButtonGroup
          exclusive
          value={role}
          onChange={handleChangeRole}
          color="primary"
          sx={{ mb: 5 }}
        >
          <ToggleButton value="admin" aria-label="admin role">
            isAdmin
          </ToggleButton>

          <ToggleButton value="user" aria-label="user role">
            isUser
          </ToggleButton>
        </ToggleButtonGroup>
      </Container>
    </>
  );
}
