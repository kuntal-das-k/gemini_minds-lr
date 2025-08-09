import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TrendingUp, TrendingDown, Users, CheckCircle, BarChart3, Download, Calendar } from "lucide-react"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, Line, LineChart, Pie, PieChart, Cell, ResponsiveContainer, XAxis, YAxis } from "recharts"

const referralData = [
  { month: "Jan", accepted: 45, rejected: 12, pending: 8 },
  { month: "Feb", accepted: 52, rejected: 15, pending: 6 },
  { month: "Mar", accepted: 38, rejected: 9, pending: 12 },
  { month: "Apr", accepted: 61, rejected: 18, pending: 4 },
  { month: "May", accepted: 55, rejected: 14, pending: 9 },
  { month: "Jun", accepted: 67, rejected: 11, pending: 7 },
]

const companyData = [
  { name: "Google", value: 28, color: "#4285f4" },
  { name: "Meta", value: 22, color: "#1877f2" },
  { name: "Apple", value: 18, color: "#000000" },
  { name: "Netflix", value: 15, color: "#e50914" },
  { name: "Microsoft", value: 12, color: "#00a1f1" },
  { name: "Others", value: 5, color: "#6b7280" },
]

const acceptanceRateData = [
  { week: "Week 1", rate: 78 },
  { week: "Week 2", rate: 82 },
  { week: "Week 3", rate: 75 },
  { week: "Week 4", rate: 88 },
  { week: "Week 5", rate: 85 },
  { week: "Week 6", rate: 91 },
]

export function Analytics() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Referral Analytics</h2>
          <p className="text-muted-foreground">Track referral performance and acceptance rates across your network</p>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="6months">
            <SelectTrigger className="w-[140px]">
              <Calendar className="mr-2 h-4 w-4" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1month">Last Month</SelectItem>
              <SelectItem value="3months">Last 3 Months</SelectItem>
              <SelectItem value="6months">Last 6 Months</SelectItem>
              <SelectItem value="1year">Last Year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Referrals</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">318</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
              +12% from last month
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Acceptance Rate</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">83.2%</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
              +5.1% from last month
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Response Time</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.4 days</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingDown className="mr-1 h-3 w-3 text-green-500" />
              -0.8 days from last month
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">67.8%</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
              +3.2% from last month
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Referral Trends</CardTitle>
            <CardDescription>Monthly referral outcomes over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                accepted: { label: "Accepted", color: "#22c55e" },
                rejected: { label: "Rejected", color: "#ef4444" },
                pending: { label: "Pending", color: "#f59e0b" },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={referralData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="accepted" fill="#22c55e" />
                  <Bar dataKey="rejected" fill="#ef4444" />
                  <Bar dataKey="pending" fill="#f59e0b" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Acceptance Rate Trend</CardTitle>
            <CardDescription>Weekly acceptance rate percentage</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                rate: { label: "Acceptance Rate", color: "#3b82f6" },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={acceptanceRateData}>
                  <XAxis dataKey="week" />
                  <YAxis domain={[70, 95]} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="rate"
                    stroke="#3b82f6"
                    strokeWidth={3}
                    dot={{ fill: "#3b82f6", strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Top Companies</CardTitle>
            <CardDescription>Referral distribution by company</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                value: { label: "Referrals" },
              }}
              className="h-[250px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={companyData} cx="50%" cy="50%" innerRadius={40} outerRadius={80} dataKey="value">
                    {companyData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
            <div className="mt-4 space-y-2">
              {companyData.map((company) => (
                <div key={company.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full" style={{ backgroundColor: company.color }} />
                    <span>{company.name}</span>
                  </div>
                  <span className="font-medium">{company.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Performance Insights</CardTitle>
            <CardDescription>Key insights and recommendations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
              <div>
                <h4 className="font-medium text-green-900">High Acceptance Rate</h4>
                <p className="text-sm text-green-700">
                  Your referral acceptance rate is 15% above network average. Keep up the great work!
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
              <TrendingUp className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <h4 className="font-medium text-blue-900">Growing Network</h4>
                <p className="text-sm text-blue-700">
                  Your referral network has grown by 23% this quarter. Consider expanding to new companies.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
              <BarChart3 className="h-5 w-5 text-yellow-600 mt-0.5" />
              <div>
                <h4 className="font-medium text-yellow-900">Response Time Opportunity</h4>
                <p className="text-sm text-yellow-700">
                  Faster responses (under 24 hours) show 34% higher acceptance rates.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
