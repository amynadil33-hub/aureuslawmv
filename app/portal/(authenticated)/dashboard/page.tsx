'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Briefcase,
  Clock,
  FileText,
  Calendar,
  TrendingUp,
  AlertCircle,
  ChevronRight,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Progress } from '@/components/ui/progress'
import { matters, timeEntries, teamMembers, clients } from '@/lib/demo-data'
import { formatDate, formatDateTime, getInitials } from '@/lib/utils'

// Current lawyer's data (demo)
const currentLawyerId = 'lawyer-1'
const currentLawyer = teamMembers[0]

// Filter data for current lawyer
const myMatters = matters.filter(m => m.assigned_lawyers.includes(currentLawyerId) || m.lead_lawyer_id === currentLawyerId)
const activeMatters = myMatters.filter(m => m.status === 'active')
const myTimeEntries = timeEntries.filter(t => t.lawyer_id === currentLawyerId)
const todayHours = myTimeEntries.reduce((sum, t) => sum + t.hours, 0)
const weeklyBillableTarget = 35

const stats = [
  {
    title: 'Active Matters',
    value: activeMatters.length.toString(),
    change: '+2 this month',
    trend: 'up',
    icon: Briefcase,
    href: '/portal/matters',
  },
  {
    title: 'Today\'s Hours',
    value: todayHours.toFixed(1),
    change: `${((todayHours / 8) * 100).toFixed(0)}% of daily target`,
    trend: todayHours >= 6 ? 'up' : 'down',
    icon: Clock,
    href: '/portal/time-tracking',
  },
  {
    title: 'Pending Tasks',
    value: '12',
    change: '3 due today',
    trend: 'neutral',
    icon: FileText,
    href: '/portal/tasks',
  },
  {
    title: 'Upcoming Meetings',
    value: '4',
    change: 'Next in 2 hours',
    trend: 'neutral',
    icon: Calendar,
    href: '/portal/calendar',
  },
]

const upcomingDeadlines = [
  { matter: 'Maldives Resort Development', task: 'Contract review', date: '2024-01-20', priority: 'high' },
  { matter: 'ABC Holdings Acquisition', task: 'Due diligence report', date: '2024-01-22', priority: 'high' },
  { matter: 'Island Properties Dispute', task: 'Court filing deadline', date: '2024-01-25', priority: 'medium' },
  { matter: 'Tourism License Application', task: 'Document submission', date: '2024-01-28', priority: 'low' },
]

const recentActivity = [
  { type: 'document', action: 'uploaded', item: 'Draft Agreement v2.docx', matter: 'Resort Development', time: '10 min ago' },
  { type: 'time', action: 'logged', item: '2.5 hours', matter: 'ABC Holdings', time: '1 hour ago' },
  { type: 'matter', action: 'updated', item: 'Status changed to In Review', matter: 'Island Properties', time: '2 hours ago' },
  { type: 'message', action: 'received', item: 'Client message', matter: 'Tourism License', time: '3 hours ago' },
]

export default function PortalDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-2xl lg:text-3xl font-semibold text-navy">
            Good morning, {currentLawyer.full_name.split(' ')[0]}
          </h1>
          <p className="text-muted-foreground mt-1">
            Here&apos;s what&apos;s happening with your matters today.
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" asChild>
            <Link href="/portal/time-tracking">
              <Clock className="h-4 w-4 mr-2" />
              Log Time
            </Link>
          </Button>
          <Button className="bg-gold hover:bg-gold-dark text-card" asChild>
            <Link href="/portal/matters/new">
              <Plus className="h-4 w-4 mr-2" />
              New Matter
            </Link>
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <Link href={stat.href}>
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="p-2 bg-gold/10 rounded-lg">
                      <stat.icon className="h-5 w-5 text-gold" />
                    </div>
                    {stat.trend === 'up' && <ArrowUpRight className="h-4 w-4 text-green-500" />}
                    {stat.trend === 'down' && <ArrowDownRight className="h-4 w-4 text-red-500" />}
                  </div>
                  <div className="mt-4">
                    <p className="text-3xl font-semibold text-navy">{stat.value}</p>
                    <p className="text-sm text-muted-foreground mt-1">{stat.title}</p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">{stat.change}</p>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Weekly Hours Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-medium">Weekly Billable Hours</CardTitle>
          <CardDescription>Your progress towards the {weeklyBillableTarget}-hour weekly target</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-medium text-navy">
                {(todayHours * 5).toFixed(1)} / {weeklyBillableTarget} hours
              </span>
            </div>
            <Progress value={(todayHours * 5 / weeklyBillableTarget) * 100} className="h-2" />
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Active Matters */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-lg font-medium">Active Matters</CardTitle>
                <CardDescription>Your current case assignments</CardDescription>
              </div>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/portal/matters">
                  View All <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activeMatters.slice(0, 4).map((matter) => {
                  const client = clients.find(c => c.id === matter.client_id)
                  return (
                    <Link
                      key={matter.id}
                      href={`/portal/matters/${matter.id}`}
                      className="flex items-center justify-between p-4 rounded-lg bg-stone hover:bg-stone-dark transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-navy/10 flex items-center justify-center">
                          <Briefcase className="h-5 w-5 text-navy" />
                        </div>
                        <div>
                          <p className="font-medium text-navy">{matter.title}</p>
                          <p className="text-sm text-muted-foreground">{client?.company_name || client?.contact_name}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant={matter.priority === 'high' ? 'destructive' : matter.priority === 'medium' ? 'default' : 'secondary'}>
                          {matter.priority}
                        </Badge>
                        <p className="text-xs text-muted-foreground mt-1">
                          {matter.matter_number}
                        </p>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Deadlines */}
        <div>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-lg font-medium">Upcoming Deadlines</CardTitle>
                <CardDescription>Tasks requiring attention</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingDeadlines.map((deadline, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      deadline.priority === 'high' ? 'bg-red-500' :
                      deadline.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                    }`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-navy truncate">{deadline.task}</p>
                      <p className="text-xs text-muted-foreground truncate">{deadline.matter}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {formatDate(deadline.date)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-medium">Recent Activity</CardTitle>
          <CardDescription>Your latest actions and updates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity, idx) => (
              <div key={idx} className="flex items-center gap-4 p-3 rounded-lg hover:bg-stone transition-colors">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  activity.type === 'document' ? 'bg-blue-100 text-blue-600' :
                  activity.type === 'time' ? 'bg-green-100 text-green-600' :
                  activity.type === 'matter' ? 'bg-purple-100 text-purple-600' :
                  'bg-orange-100 text-orange-600'
                }`}>
                  {activity.type === 'document' && <FileText className="h-5 w-5" />}
                  {activity.type === 'time' && <Clock className="h-5 w-5" />}
                  {activity.type === 'matter' && <Briefcase className="h-5 w-5" />}
                  {activity.type === 'message' && <AlertCircle className="h-5 w-5" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm">
                    <span className="font-medium text-navy">{activity.item}</span>
                    <span className="text-muted-foreground"> {activity.action}</span>
                  </p>
                  <p className="text-xs text-muted-foreground">{activity.matter}</p>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">{activity.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
