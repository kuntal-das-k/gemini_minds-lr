"use client"

import {
  BarChart3,
  Briefcase,
  MessageCircle,
  Newspaper,
  LayoutDashboard,
  Users,
  UserCheck,
  GitBranch,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const menuItems = [
  {
    title: "Overview",
    icon: LayoutDashboard,
    id: "overview",
  },
  {
    title: "Job & Internship Board",
    icon: Briefcase,
    id: "jobs",
  },
  {
    title: "Referral System",
    icon: GitBranch,
    id: "referrals",
  },
  {
    title: "Mentorship Matching",
    icon: UserCheck,
    id: "mentorship",
  },
  {
    title: "Real-time Chat",
    icon: MessageCircle,
    id: "chat",
  },
  {
    title: "Newsletter & Announcements",
    icon: Newspaper,
    id: "newsletter",
  },
  {
    title: "Analytics",
    icon: BarChart3,
    id: "analytics",
  },
]

interface AppSidebarProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export function AppSidebar({ activeSection, setActiveSection }: AppSidebarProps) {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 py-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Users className="h-4 w-4" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Alumni Network</span>
            <span className="text-xs text-muted-foreground">University Portal</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Platform Features</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton onClick={() => setActiveSection(item.id)} isActive={activeSection === item.id}>
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex items-center gap-2 px-2 py-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg?height=32&width=32" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium">John Doe</span>
            <span className="text-xs text-muted-foreground">Class of 2020</span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
