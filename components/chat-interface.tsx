"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send, Search, Phone, Video, MoreVertical, Paperclip, Smile, Circle } from "lucide-react"

const conversations = [
  {
    id: 1,
    name: "Sarah Chen",
    lastMessage: "Thanks for the referral! I got the interview.",
    timestamp: "2m ago",
    unread: 2,
    online: true,
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: 2,
    name: "Tech Alumni Group",
    lastMessage: "New job posting at Microsoft",
    timestamp: "1h ago",
    unread: 5,
    online: false,
    avatar: "/placeholder.svg?height=32&width=32",
    isGroup: true,
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    lastMessage: "Let's schedule our mentorship session",
    timestamp: "3h ago",
    unread: 0,
    online: true,
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: 4,
    name: "Emily Johnson",
    lastMessage: "Great presentation today!",
    timestamp: "1d ago",
    unread: 0,
    online: false,
    avatar: "/placeholder.svg?height=32&width=32",
  },
]

const messages = [
  {
    id: 1,
    sender: "Sarah Chen",
    content: "Hi John! I wanted to thank you for referring me to the Google position.",
    timestamp: "10:30 AM",
    isOwn: false,
  },
  {
    id: 2,
    sender: "You",
    content: "You're welcome! How did the interview go?",
    timestamp: "10:32 AM",
    isOwn: true,
  },
  {
    id: 3,
    sender: "Sarah Chen",
    content:
      "It went really well! They were impressed with my background and the referral definitely helped get my foot in the door.",
    timestamp: "10:35 AM",
    isOwn: false,
  },
  {
    id: 4,
    sender: "You",
    content: "That's fantastic! I'm so happy to hear that. Keep me posted on the next steps.",
    timestamp: "10:37 AM",
    isOwn: true,
  },
  {
    id: 5,
    sender: "Sarah Chen",
    content: "Will do! Thanks again for being such a great mentor and helping fellow alumni. 🙏",
    timestamp: "10:40 AM",
    isOwn: false,
  },
]

export function ChatInterface() {
  const [selectedConversation, setSelectedConversation] = useState(1)
  const [newMessage, setNewMessage] = useState("")

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      console.log("Sending message:", newMessage)
      setNewMessage("")
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Real-time Chat</h2>
        <p className="text-muted-foreground">Connect and communicate with your alumni network in real-time</p>
      </div>

      <div className="grid grid-cols-12 gap-6 h-[600px]">
        {/* Conversations List */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle className="text-lg">Messages</CardTitle>
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search conversations..." className="pl-10" />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-[480px]">
              <div className="space-y-1 p-4">
                {conversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                      selectedConversation === conversation.id ? "bg-primary/10" : "hover:bg-muted/50"
                    }`}
                    onClick={() => setSelectedConversation(conversation.id)}
                  >
                    <div className="relative">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={conversation.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {conversation.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      {conversation.online && (
                        <Circle className="absolute -bottom-1 -right-1 h-3 w-3 fill-green-500 text-green-500" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium truncate">{conversation.name}</h4>
                        <span className="text-xs text-muted-foreground">{conversation.timestamp}</span>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</p>
                    </div>
                    {conversation.unread > 0 && (
                      <Badge variant="default" className="h-5 w-5 p-0 flex items-center justify-center text-xs">
                        {conversation.unread}
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Chat Area */}
        <Card className="col-span-8">
          <CardHeader className="border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">Sarah Chen</CardTitle>
                  <CardDescription>Online • Senior Engineering Manager at Google</CardDescription>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm">
                  <Phone className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Video className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-[400px] p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[70%] rounded-lg p-3 ${
                        message.isOwn ? "bg-primary text-primary-foreground" : "bg-muted"
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <span className="text-xs opacity-70 mt-1 block">{message.timestamp}</span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <div className="border-t p-4">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm">
                  <Paperclip className="h-4 w-4" />
                </Button>
                <Input
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1"
                />
                <Button variant="ghost" size="sm">
                  <Smile className="h-4 w-4" />
                </Button>
                <Button onClick={handleSendMessage} size="sm">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
