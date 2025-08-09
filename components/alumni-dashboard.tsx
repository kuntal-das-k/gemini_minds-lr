"use client"

import { useState } from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { DashboardOverview } from "@/components/dashboard-overview"
import { JobBoard } from "@/components/job-board"
import { ReferralSystem } from "@/components/referral-system"
import { MentorshipMatching } from "@/components/mentorship-matching"
import { ChatInterface } from "@/components/chat-interface"
import { NewsletterAnnouncements } from "@/components/newsletter-announcements"
import { Analytics } from "@/components/analytics"

export function AlumniDashboard() {
  const [activeSection, setActiveSection] = useState("overview")

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return <DashboardOverview />
      case "jobs":
        return <JobBoard />
      case "referrals":
        return <ReferralSystem />
      case "mentorship":
        return <MentorshipMatching />
      case "chat":
        return <ChatInterface />
      case "newsletter":
        return <NewsletterAnnouncements />
      case "analytics":
        return <Analytics />
      default:
        return <DashboardOverview />
    }
  }

  return (
    <SidebarProvider>
      <AppSidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-semibold">Alumni Association Platform</h1>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">{renderContent()}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}
