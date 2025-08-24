
import { AuthGuard } from '@/modules/auth/ui/components/auth-guard'
import { OrganizationGuard } from '@/modules/auth/ui/components/organization-guard'
import { AuthLayout } from '@/modules/auth/ui/layouts/auth-layout'
import { useOrganization } from '@clerk/nextjs'
import React from 'react'

const Layout = ({children}: {children: React.ReactNode}) => {

  

  return (
    <AuthGuard>
      <OrganizationGuard>{children}</OrganizationGuard>
    </AuthGuard>
  )
}

export default Layout