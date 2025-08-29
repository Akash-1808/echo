"use client";

import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import {
    CreditCardIcon,
    icons,
    InboxIcon,
    LayoutDashboardIcon,
    LibraryBigIcon,
    Mic,
    PaletteIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from "@workspace/ui/components/sidebar";
import { cn } from "@workspace/ui/lib/utils";
import { title } from "process";
import { url } from "inspector";

const customerSupportItems = [
    {
        title: "Conversations",
        url: "/conversations",
        icon: InboxIcon,
    },
    {
        title: "Knowledge Base",
        url: "/files",
        icon: LibraryBigIcon,
    },
    
];

const configurationItems = [
    {
        title: "Widget Customization",
        url: "/customization",
        icon: PaletteIcon,
    },
    {
        title: "Integrations",
        url: "/integrations",
        icon: LayoutDashboardIcon,
    },
    {
        title: "Voice Assistant",
        url: "/plugins/vapi",
        icon: Mic,
    },
];

const accountItems = [
    {
        title: "Plans & Billing",
        url: "/billing",
        icon: CreditCardIcon,
    }
]


export const DashboardSidebar = () => {

    const pathname = usePathname();

    const isActive = (url: string) => {
        if (url === "/") {
            return pathname === "/";
        }

        return pathname.startsWith(url);
    };

    return (
        <Sidebar className="group" collapsible="icon">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild size="lg">
                           
                            <OrganizationSwitcher 
                             hidePersonal
                             skipInvitationScreen
                             appearance={{
                                elements: {
                                    rootBox: "w-full! h-8!",
                                    avatarBox: "size-4! rounded-sm!",
                                    organizationSwitcherTrigger: "w-full! justify-start! group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2!",
                                    organizationPreview: "group-data-[collapsible=icon]:justify-center! gap-2!",
                                    organizationPreviewTextContainer: "group-data-[collapsible=icon]:hidden! text-xs! font-medium! text-sidebar-foreground!",
                                    organizationSwitcherTriggerIcon: "group-data-[collapsible=icon]:hidden! ml-auto! text-sidebar-foreground!"
                                }
                             }} />
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

        <SidebarContent>
            {/** <CustomerSupport /> **/}
            <SidebarGroup>

            
            <SidebarGroupLabel>Customer Support</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                    {customerSupportItems.map((i)=> (
                        <SidebarMenuItem key={i.title}>
                            <SidebarMenuButton asChild
                            tooltip={i.title}
                            isActive={isActive(i.url)}>
                                <Link href={i.url}>
                                    <i.icon className="size-4" />
                                    <span>{i.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
            
            </SidebarGroup> 

                    <SidebarGroup>

            {/** Configuration  */}
            <SidebarGroupLabel>Configuration</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                    {configurationItems.map((i)=> (
                        <SidebarMenuItem key={i.title}>
                            <SidebarMenuButton asChild
                            tooltip={i.title}
                            isActive={isActive(i.url)}>
                                <Link href={i.url}>
                                    <i.icon className="size-4" />
                                    <span>{i.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
            
            </SidebarGroup> 

            <SidebarGroup>

            {/** Account  */}
            <SidebarGroupLabel>Account</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                    {accountItems.map((i)=> (
                        <SidebarMenuItem key={i.title}>
                            <SidebarMenuButton asChild
                            tooltip={i.title}
                            isActive={isActive(i.url)}>
                                <Link href={i.url}>
                                    <i.icon className="size-4" />
                                    <span>{i.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
            
            </SidebarGroup> 

        </SidebarContent>
        <SidebarFooter>
            <SidebarMenu>
                <SidebarMenuItem>
                    <UserButton 
                    showName
                    appearance={{
                        elements: {
                            rootBox: "w-full! h-8!",
                            userButtonTrigger: "w-full! p-2! hover:bg-sidebar-accent! hover:text-sidebar-accent-foreground! group-data-[collapsibleicon]:size-8! group-data-[collapsible=icon]:p-2!",
                            userButtonBox: "w-full! flex-row-reverse! justify-end! gap-2! group-data-[collapsible=icon]:justify-center! text-sidebar-foreground!",
                            userButtonOuterIdentifier: "pl-0! group-data-[collapsible=icon]:hidden!",
                            avatarBox: "size-6!"
                        }
                    }}
                    />
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarFooter>
        <SidebarRail />
        </Sidebar>
    )
}