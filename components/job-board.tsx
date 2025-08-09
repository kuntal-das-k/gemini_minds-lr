"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, Building, Clock, DollarSign, Plus, Filter } from "lucide-react"

const jobs = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "Google",
    location: "Mountain View, CA",
    type: "Full-time",
    salary: "$150k - $200k",
    posted: "2 days ago",
    description: "Join our team building next-generation cloud infrastructure...",
    tags: ["React", "Node.js", "AWS"],
    referrals: 3,
  },
  {
    id: 2,
    title: "Product Manager",
    company: "Meta",
    location: "Menlo Park, CA",
    type: "Full-time",
    salary: "$140k - $180k",
    posted: "1 week ago",
    description: "Lead product strategy for our social commerce platform...",
    tags: ["Product Strategy", "Analytics", "Leadership"],
    referrals: 5,
  },
  {
    id: 3,
    title: "Data Science Intern",
    company: "Netflix",
    location: "Los Gatos, CA",
    type: "Internship",
    salary: "$8k/month",
    posted: "3 days ago",
    description: "Work on recommendation algorithms and user behavior analysis...",
    tags: ["Python", "Machine Learning", "SQL"],
    referrals: 2,
  },
  {
    id: 4,
    title: "UX Designer",
    company: "Apple",
    location: "Cupertino, CA",
    type: "Full-time",
    salary: "$120k - $160k",
    posted: "5 days ago",
    description: "Design intuitive user experiences for our mobile applications...",
    tags: ["Figma", "User Research", "Prototyping"],
    referrals: 1,
  },
]

export function JobBoard() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("all")

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = filterType === "all" || job.type.toLowerCase() === filterType
    return matchesSearch && matchesType
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Job & Internship Board</h2>
          <p className="text-muted-foreground">Discover opportunities shared by your alumni network</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Post Job
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search jobs, companies, or skills..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={filterType} onValueChange={setFilterType}>
          <SelectTrigger className="w-[180px]">
            <Filter className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Job Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="full-time">Full-time</SelectItem>
            <SelectItem value="internship">Internship</SelectItem>
            <SelectItem value="contract">Contract</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Job Listings */}
      <div className="space-y-4">
        {filteredJobs.map((job) => (
          <Card key={job.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <CardTitle className="text-xl">{job.title}</CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Building className="h-4 w-4" />
                      {job.company}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {job.posted}
                    </div>
                  </div>
                </div>
                <div className="text-right space-y-2">
                  <Badge variant="secondary">{job.type}</Badge>
                  <div className="flex items-center gap-1 text-sm font-medium">
                    <DollarSign className="h-4 w-4" />
                    {job.salary}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{job.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {job.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">{job.referrals} referrals available</span>
                  <Button size="sm">Request Referral</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
