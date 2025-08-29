
import { AuthGuard } from '@/modules/auth/ui/components/auth-guard'
import { OrganizationGuard } from '@/modules/auth/ui/components/organization-guard'
import { AuthLayout } from '@/modules/auth/ui/layouts/auth-layout'
import { DashboardLayout } from '@/modules/dashboard/ui/layouts/dashboard-layout'
import { useOrganization } from '@clerk/nextjs'
import React from 'react'

const Layout = ({children}: {children: React.ReactNode}) => {

  

  return (
    <DashboardLayout>
      {children}
    </DashboardLayout>
  )
}

export default Layout