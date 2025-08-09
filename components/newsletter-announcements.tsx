"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, Plus, Send, Eye, Heart, MessageCircle, Share } from "lucide-react"

const announcements = [
  {
    id: 1,
    title: "Alumni Tech Conference 2024 - Registration Open",
    content:
      "Join us for our annual tech conference featuring keynotes from industry leaders, networking sessions, and career workshops. Early bird pricing available until March 31st.",
    author: "Alumni Association",
    date: "2024-03-10",
    category: "Event",
    views: 1247,
    likes: 89,
    comments: 23,
    image: "/tech-conference.png",
  },
  {
    id: 2,
    title: "New Mentorship Program Launch",
    content:
      "We're excited to announce the launch of our enhanced mentorship program with AI-powered matching and structured learning paths. Applications are now open for both mentors and mentees.",
    author: "Career Services",
    date: "2024-03-08",
    category: "Program",
    views: 892,
    likes: 156,
    comments: 45,
    image: "/mentorship-program.png",
  },
  {
    id: 3,
    title: "Q1 Job Market Report",
    content:
      "Our latest analysis shows a 23% increase in tech job postings from alumni companies. Software engineering and data science roles are leading the growth.",
    author: "Research Team",
    date: "2024-03-05",
    category: "Report",
    views: 2156,
    likes: 234,
    comments: 67,
    image: "/job-market-report.png",
  },
]

const newsletters = [
  {
    id: 1,
    title: "Weekly Alumni Digest",
    description: "Stay updated with the latest news, job postings, and events",
    subscribers: 5420,
    frequency: "Weekly",
    lastSent: "2024-03-10",
  },
  {
    id: 2,
    title: "Career Opportunities",
    description: "Curated job postings and career advice from industry experts",
    subscribers: 3890,
    frequency: "Bi-weekly",
    lastSent: "2024-03-07",
  },
  {
    id: 3,
    title: "Event Notifications",
    description: "Never miss an alumni event or networking opportunity",
    subscribers: 4567,
    frequency: "As needed",
    lastSent: "2024-03-09",
  },
]

export function NewsletterAnnouncements() {
  const [newAnnouncement, setNewAnnouncement] = useState({
    title: "",
    content: "",
    category: "General",
  })

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Newsletter & Announcements</h2>
        <p className="text-muted-foreground">
          Stay connected with the latest news and updates from your alumni network
        </p>
      </div>

      <Tabs defaultValue="announcements" className="space-y-4">
        <TabsList>
          <TabsTrigger value="announcements">Announcements</TabsTrigger>
          <TabsTrigger value="newsletters">Newsletters</TabsTrigger>
          <TabsTrigger value="create">Create</TabsTrigger>
        </TabsList>

        <TabsContent value="announcements" className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Recent Announcements</h3>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Announcement
            </Button>
          </div>

          <div className="space-y-6">
            {announcements.map((announcement) => (
              <Card key={announcement.id} className="overflow-hidden">
                <div className="aspect-video w-full bg-muted">
                  <img
                    src={announcement.image || "/placeholder.svg"}
                    alt={announcement.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{announcement.category}</Badge>
                        <span className="text-sm text-muted-foreground">{announcement.date}</span>
                      </div>
                      <CardTitle className="text-xl">{announcement.title}</CardTitle>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Bell className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{announcement.content}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        {announcement.views}
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4" />
                        {announcement.likes}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-4 w-4" />
                        {announcement.comments}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Share className="h-4 w-4" />
                      </Button>
                      <Button size="sm">Read More</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="newsletters" className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Newsletter Management</h3>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create Newsletter
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {newsletters.map((newsletter) => (
              <Card key={newsletter.id}>
                <CardHeader>
                  <CardTitle className="text-lg">{newsletter.title}</CardTitle>
                  <CardDescription>{newsletter.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Subscribers</span>
                      <span className="font-medium">{newsletter.subscribers.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Frequency</span>
                      <span className="font-medium">{newsletter.frequency}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Last Sent</span>
                      <span className="font-medium">{newsletter.lastSent}</span>
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                        Edit
                      </Button>
                      <Button size="sm" className="flex-1">
                        <Send className="mr-2 h-4 w-4" />
                        Send
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="create" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Create New Announcement</CardTitle>
              <CardDescription>Share important updates and news with your alumni network</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Title</label>
                <Input
                  placeholder="Enter announcement title..."
                  value={newAnnouncement.title}
                  onChange={(e) => setNewAnnouncement({ ...newAnnouncement, title: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Category</label>
                <select
                  className="w-full p-2 border rounded-md"
                  value={newAnnouncement.category}
                  onChange={(e) => setNewAnnouncement({ ...newAnnouncement, category: e.target.value })}
                >
                  <option value="General">General</option>
                  <option value="Event">Event</option>
                  <option value="Program">Program</option>
                  <option value="Report">Report</option>
                  <option value="Job">Job Opportunity</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Content</label>
                <Textarea
                  placeholder="Write your announcement content..."
                  rows={6}
                  value={newAnnouncement.content}
                  onChange={(e) => setNewAnnouncement({ ...newAnnouncement, content: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Featured Image</label>
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                  <div className="mx-auto h-12 w-12 text-muted-foreground mb-4">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 48 48">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground">Click to upload or drag and drop an image</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1 bg-transparent">
                  Save Draft
                </Button>
                <Button className="flex-1">
                  <Send className="mr-2 h-4 w-4" />
                  Publish
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
