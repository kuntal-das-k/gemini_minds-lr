"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, Building, Star, MessageCircle, Users, Award } from "lucide-react"

const mentors = [
  {
    id: 1,
    name: "Sarah Chen",
    title: "Senior Engineering Manager",
    company: "Google",
    location: "Mountain View, CA",
    experience: "8 years",
    rating: 4.9,
    sessions: 45,
    expertise: ["Leadership", "Career Growth", "Technical Skills"],
    bio: "Passionate about helping junior engineers grow into leadership roles...",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    title: "Product Director",
    company: "Meta",
    location: "Menlo Park, CA",
    experience: "10 years",
    rating: 4.8,
    sessions: 62,
    expertise: ["Product Strategy", "Team Management", "Go-to-Market"],
    bio: "Former startup founder turned product leader, love mentoring PMs...",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Emily Johnson",
    title: "Data Science Lead",
    company: "Netflix",
    location: "Los Gatos, CA",
    experience: "6 years",
    rating: 4.7,
    sessions: 28,
    expertise: ["Machine Learning", "Analytics", "Research"],
    bio: "PhD in Statistics, specializing in recommendation systems and ML...",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    name: "David Kim",
    title: "Design Principal",
    company: "Apple",
    location: "Cupertino, CA",
    experience: "12 years",
    rating: 5.0,
    sessions: 73,
    expertise: ["UX Design", "Design Systems", "User Research"],
    bio: "Award-winning designer with experience in consumer and enterprise...",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export function MentorshipMatching() {
  const [searchTerm, setSearchTerm] = useState("")
  const [companyFilter, setCompanyFilter] = useState("all")
  const [locationFilter, setLocationFilter] = useState("all")

  const filteredMentors = mentors.filter((mentor) => {
    const matchesSearch =
      mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.expertise.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCompany = companyFilter === "all" || mentor.company === companyFilter
    const matchesLocation = locationFilter === "all" || mentor.location.includes(locationFilter)
    return matchesSearch && matchesCompany && matchesLocation
  })

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Mentorship Matching</h2>
        <p className="text-muted-foreground">
          Connect with experienced alumni for career guidance and professional development
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Available Mentors</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">247</div>
            <p className="text-xs text-muted-foreground">Across 50+ companies</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Matches</CardTitle>
            <MessageCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">+89 this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94%</div>
            <p className="text-xs text-muted-foreground">Positive feedback</p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search mentors by name, skills, or expertise..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={companyFilter} onValueChange={setCompanyFilter}>
          <SelectTrigger className="w-[180px]">
            <Building className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Company" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Companies</SelectItem>
            <SelectItem value="Google">Google</SelectItem>
            <SelectItem value="Meta">Meta</SelectItem>
            <SelectItem value="Netflix">Netflix</SelectItem>
            <SelectItem value="Apple">Apple</SelectItem>
          </SelectContent>
        </Select>
        <Select value={locationFilter} onValueChange={setLocationFilter}>
          <SelectTrigger className="w-[180px]">
            <MapPin className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Locations</SelectItem>
            <SelectItem value="Mountain View">Mountain View</SelectItem>
            <SelectItem value="Menlo Park">Menlo Park</SelectItem>
            <SelectItem value="Los Gatos">Los Gatos</SelectItem>
            <SelectItem value="Cupertino">Cupertino</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Mentor Cards */}
      <div className="grid gap-6 md:grid-cols-2">
        {filteredMentors.map((mentor) => (
          <Card key={mentor.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-start gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={mentor.avatar || "/placeholder.svg"} />
                  <AvatarFallback>
                    {mentor.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <CardTitle className="text-lg">{mentor.name}</CardTitle>
                  <CardDescription className="space-y-1">
                    <div>{mentor.title}</div>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Building className="h-3 w-3" />
                        {mentor.company}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {mentor.location}
                      </div>
                    </div>
                  </CardDescription>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    {mentor.rating}
                  </div>
                  <div className="text-xs text-muted-foreground">{mentor.sessions} sessions</div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{mentor.bio}</p>
              <div className="space-y-3">
                <div>
                  <div className="text-sm font-medium mb-2">Expertise</div>
                  <div className="flex flex-wrap gap-2">
                    {mentor.expertise.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{mentor.experience} experience</span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Message
                    </Button>
                    <Button size="sm">Request Mentorship</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
