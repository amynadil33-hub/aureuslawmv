'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Users,
  Briefcase,
  FileText,
  DollarSign,
  TrendingUp,
  TrendingDown,
  ArrowRight,
  Clock,
  Building2,
  Eye,
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { matters, clients, teamMembers, timeEntries, blogPosts } from '@/lib/demo-data'
import { formatDate, getInitials } from '@/lib/utils'

const stats = [
  {
    title: 'Active Matters',
    value: matters.filter(m => m.status === 'active').length.toString(),
    change: '+12%',
    trend: 'up',
    icon: Briefcase,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Total Clients',
    value: clients.length.toString(),
    change: '+5%',
    trend: 'up',
    icon: Building2,
    color: 'bg-green-100 text-green-600',
  },
  {
    title: 'Team Members',
    value: teamMembers.length.toString(),
    change: '0%',
    trend: 'neutral',
    icon: Users,
    color: 'bg-purple-100 text-purple-600',
  },
  {
    title: 'Hours This Month',
    value: timeEntries.reduce((sum, t) => sum + t.hours, 0).toFixed(0),
    change: '+8%',
    trend: 'up',
    icon: Clock,
    color: 'bg-orange-100 text-orange-600',
  },
]

const recentMatters = matters.slice(0, 5)
const recentActivity = [
  { type: 'matter', action: 'New matter created', item: 'ABC Holdings Acquisition', user: 'Ahmed Hassan', time: '2 hours ago' },
  { type: 'user', action: 'User logged in', item: 'Fatima Ali', user: 'System', time: '3 hours ago' },
  { type: 'document', action: 'Document uploaded', item: 'Contract Draft v2', user: 'Mohamed Ibrahim', time: '4 hours ago' },
  { type: 'client', action: 'New client added', item: 'Maldives Tourism Corp', user: 'Ahmed Hassan', time: '5 hours ago' },
  { type: 'post', action: 'Blog post published', item: 'Corporate Law Update 2024', user: 'Admin', time: '1 day ago' },
]

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-2xl lg:text-3xl font-semibold text-navy">
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground mt-1">
            Overview of firm operations and performance
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" asChild>
            <Link href="/admin/reports">View Reports</Link>
          </Button>
          <Button className="bg-gold hover:bg-gold-dark text-card" asChild>
            <Link href="/admin/matters/new">New Matter</Link>
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
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className={`p-2 rounded-lg ${stat.color}`}>
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <div className="flex items-center gap-1">
                    {stat.trend === 'up' && <TrendingUp className="h-4 w-4 text-green-500" />}
                    {stat.trend === 'down' && <TrendingDown className="h-4 w-4 text-red-500" />}
                    <span className={`text-sm ${stat.trend === 'up' ? 'text-green-500' : stat.trend === 'down' ? 'text-red-500' : 'text-muted-foreground'}`}>
                      {stat.change}
                    </span>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-3xl font-semibold text-navy">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.title}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Matters */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-lg font-medium">Recent Matters</CardTitle>
              <CardDescription>Latest case activity</CardDescription>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/admin/matters">
                View All <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Matter</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Lead</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentMatters.map((matter) => {
                  const client = clients.find(c => c.id === matter.client_id)
                  const lead = teamMembers.find(t => t.id === matter.lead_lawyer_id)
                  return (
                    <TableRow key={matter.id}>
                      <TableCell>
                        <Link href={`/admin/matters/${matter.id}`} className="hover:text-gold">
                          <p className="font-medium text-navy">{matter.matter_number}</p>
                          <p className="text-xs text-muted-foreground truncate max-w-[200px]">
                            {matter.title}
                          </p>
                        </Link>
                      </TableCell>
                      <TableCell className="text-sm">
                        {client?.company_name || client?.contact_name}
                      </TableCell>
                      <TableCell>
                        <Badge variant={matter.status === 'active' ? 'default' : 'secondary'}>
                          {matter.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Avatar className="h-6 w-6">
                            <AvatarFallback className="text-xs bg-navy/10 text-navy">
                              {lead ? getInitials(lead.full_name) : '?'}
                            </AvatarFallback>
                          </Avatar>
                          <span className="text-sm">{lead?.full_name.split(' ')[0]}</span>
                        </div>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-medium">Recent Activity</CardTitle>
            <CardDescription>System events and updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    activity.type === 'matter' ? 'bg-blue-100 text-blue-600' :
                    activity.type === 'user' ? 'bg-green-100 text-green-600' :
                    activity.type === 'document' ? 'bg-purple-100 text-purple-600' :
                    activity.type === 'client' ? 'bg-orange-100 text-orange-600' :
                    'bg-pink-100 text-pink-600'
                  }`}>
                    {activity.type === 'matter' && <Briefcase className="h-4 w-4" />}
                    {activity.type === 'user' && <Users className="h-4 w-4" />}
                    {activity.type === 'document' && <FileText className="h-4 w-4" />}
                    {activity.type === 'client' && <Building2 className="h-4 w-4" />}
                    {activity.type === 'post' && <Eye className="h-4 w-4" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-navy">{activity.action}</p>
                    <p className="text-xs text-muted-foreground truncate">{activity.item}</p>
                    <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Stats Row */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Published Posts</p>
                <p className="text-2xl font-semibold text-navy mt-1">
                  {blogPosts.filter(p => p.status === 'published').length}
                </p>
              </div>
              <Button size="sm" variant="outline" asChild>
                <Link href="/admin/posts">Manage</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Pending Invoices</p>
                <p className="text-2xl font-semibold text-navy mt-1">8</p>
              </div>
              <Button size="sm" variant="outline" asChild>
                <Link href="/admin/billing">View</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Website Visits</p>
                <p className="text-2xl font-semibold text-navy mt-1">2.4k</p>
              </div>
              <Button size="sm" variant="outline" asChild>
                <Link href="/admin/analytics">Details</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Contact Forms</p>
                <p className="text-2xl font-semibold text-navy mt-1">12</p>
              </div>
              <Button size="sm" variant="outline" asChild>
                <Link href="/admin/inquiries">Review</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
