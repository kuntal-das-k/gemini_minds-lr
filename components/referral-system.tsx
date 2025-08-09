"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Send, Upload, CheckCircle, Clock, XCircle, FileText, Users, Zap } from "lucide-react"

const referralRequests = [
  {
    id: 1,
    jobTitle: "Senior Software Engineer",
    company: "Google",
    requester: "Alice Johnson",
    status: "pending",
    date: "2024-03-10",
    message: "I'm very interested in this role and would appreciate a referral...",
  },
  {
    id: 2,
    jobTitle: "Product Manager",
    company: "Meta",
    requester: "Bob Smith",
    status: "approved",
    date: "2024-03-08",
    message: "Looking to transition into product management...",
  },
  {
    id: 3,
    jobTitle: "Data Scientist",
    company: "Netflix",
    requester: "Carol Davis",
    status: "rejected",
    date: "2024-03-05",
    message: "Passionate about recommendation systems...",
  },
]

export function ReferralSystem() {
  const [selectedRequests, setSelectedRequests] = useState<number[]>([])

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-500" />
      case "approved":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "rejected":
        return <XCircle className="h-4 w-4 text-red-500" />
      default:
        return null
    }
  }

  const getStatusBadge = (status: string) => {
    const variants = {
      pending: "secondary",
      approved: "default",
      rejected: "destructive",
    } as const

    return <Badge variant={variants[status as keyof typeof variants]}>{status}</Badge>
  }

  const handleBulkProcess = () => {
    console.log("Processing bulk referrals:", selectedRequests)
    // Implement bulk processing logic
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Referral System</h2>
        <p className="text-muted-foreground">Manage referral requests and help fellow alumni find opportunities</p>
      </div>

      <Tabs defaultValue="requests" className="space-y-4">
        <TabsList>
          <TabsTrigger value="requests">Referral Requests</TabsTrigger>
          <TabsTrigger value="submit">Submit Request</TabsTrigger>
          <TabsTrigger value="bulk">Bulk Processing</TabsTrigger>
        </TabsList>

        <TabsContent value="requests" className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Incoming Requests</h3>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <FileText className="mr-2 h-4 w-4" />
                Export
              </Button>
              <Select>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Filter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4">
            {referralRequests.map((request) => (
              <Card key={request.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-lg">{request.jobTitle}</CardTitle>
                      <CardDescription>
                        {request.company} • Requested by {request.requester}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(request.status)}
                      {getStatusBadge(request.status)}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{request.message}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Submitted on {request.date}</span>
                    {request.status === "pending" && (
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <XCircle className="mr-2 h-4 w-4" />
                          Decline
                        </Button>
                        <Button size="sm">
                          <CheckCircle className="mr-2 h-4 w-4" />
                          Approve
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="submit" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Submit Referral Request</CardTitle>
              <CardDescription>Request a referral from alumni working at your target companies</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Job Title</label>
                  <Input placeholder="e.g., Software Engineer" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Company</label>
                  <Input placeholder="e.g., Google" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Job URL</label>
                <Input placeholder="https://..." />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea
                  placeholder="Explain why you're interested in this role and why you'd be a good fit..."
                  rows={4}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Resume</label>
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                  <Upload className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground">Click to upload or drag and drop your resume</p>
                </div>
              </div>
              <Button className="w-full">
                <Send className="mr-2 h-4 w-4" />
                Submit Request
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bulk" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Automated Bulk Referral Processing
              </CardTitle>
              <CardDescription>Process up to 50 referral requests at once with automated workflows</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <Card className="p-4">
                  <div className="text-center">
                    <Users className="mx-auto h-8 w-8 text-blue-500 mb-2" />
                    <h4 className="font-medium">Pending Requests</h4>
                    <p className="text-2xl font-bold">23</p>
                  </div>
                </Card>
                <Card className="p-4">
                  <div className="text-center">
                    <CheckCircle className="mx-auto h-8 w-8 text-green-500 mb-2" />
                    <h4 className="font-medium">Auto-Approved</h4>
                    <p className="text-2xl font-bold">12</p>
                  </div>
                </Card>
                <Card className="p-4">
                  <div className="text-center">
                    <Clock className="mx-auto h-8 w-8 text-yellow-500 mb-2" />
                    <h4 className="font-medium">Needs Review</h4>
                    <p className="text-2xl font-bold">8</p>
                  </div>
                </Card>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Bulk Action</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select action" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="approve-all">Approve All Qualified</SelectItem>
                    <SelectItem value="approve-company">Approve by Company</SelectItem>
                    <SelectItem value="approve-role">Approve by Role Type</SelectItem>
                    <SelectItem value="custom">Custom Criteria</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex gap-2">
                <Button onClick={handleBulkProcess} className="flex-1">
                  <Zap className="mr-2 h-4 w-4" />
                  Process Selected ({selectedRequests.length})
                </Button>
                <Button variant="outline">Preview Changes</Button>
              </div>

              <div className="text-sm text-muted-foreground">
                <p>• Automatically approves requests from alumni with 4+ years experience</p>
                <p>• Prioritizes requests for roles matching your expertise</p>
                <p>• Sends personalized messages to requesters</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
