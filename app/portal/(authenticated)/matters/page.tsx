'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Search,
  Plus,
  Filter,
  Briefcase,
  Clock,
  Calendar,
  ChevronRight,
  MoreVertical,
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { matters, clients, practiceAreas, teamMembers } from '@/lib/demo-data'
import { formatDate } from '@/lib/utils'

type MatterStatus = 'all' | 'active' | 'pending' | 'closed' | 'on_hold'

export default function MattersPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState<MatterStatus>('all')
  const [practiceAreaFilter, setPracticeAreaFilter] = useState('all')

  const filteredMatters = matters.filter(matter => {
    const matchesSearch = matter.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      matter.matter_number.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === 'all' || matter.status === statusFilter
    const matchesPracticeArea = practiceAreaFilter === 'all' || matter.practice_area_id === practiceAreaFilter
    return matchesSearch && matchesStatus && matchesPracticeArea
  })

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'active': return 'default'
      case 'pending': return 'secondary'
      case 'closed': return 'outline'
      case 'on_hold': return 'destructive'
      default: return 'secondary'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500'
      case 'medium': return 'bg-yellow-500'
      case 'low': return 'bg-green-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-2xl lg:text-3xl font-semibold text-navy">Matters</h1>
          <p className="text-muted-foreground mt-1">
            Manage your cases and client matters
          </p>
        </div>
        <Button className="bg-gold hover:bg-gold-dark text-card" asChild>
          <Link href="/portal/matters/new">
            <Plus className="h-4 w-4 mr-2" />
            New Matter
          </Link>
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search matters by title or number..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-3">
              <Select value={statusFilter} onValueChange={(v) => setStatusFilter(v as MatterStatus)}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="on_hold">On Hold</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                </SelectContent>
              </Select>
              <Select value={practiceAreaFilter} onValueChange={setPracticeAreaFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Practice Area" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Practice Areas</SelectItem>
                  {practiceAreas.map(area => (
                    <SelectItem key={area.id} value={area.id}>{area.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Matters List */}
      <div className="space-y-4">
        {filteredMatters.length > 0 ? (
          filteredMatters.map((matter, idx) => {
            const client = clients.find(c => c.id === matter.client_id)
            const practiceArea = practiceAreas.find(p => p.id === matter.practice_area_id)
            const leadLawyer = teamMembers.find(t => t.id === matter.lead_lawyer_id)
            
            return (
              <motion.div
                key={matter.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <Link
                      href={`/portal/matters/${matter.id}`}
                      className="block p-6"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-4 flex-1 min-w-0">
                          {/* Priority Indicator */}
                          <div className={`w-1 h-16 rounded-full ${getPriorityColor(matter.priority)}`} />
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="font-medium text-navy text-lg truncate">
                                {matter.title}
                              </h3>
                              <Badge variant={getStatusBadgeVariant(matter.status)}>
                                {matter.status.replace('_', ' ')}
                              </Badge>
                            </div>
                            
                            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Briefcase className="h-4 w-4" />
                                {matter.matter_number}
                              </span>
                              <span>
                                {client?.company_name || client?.contact_name}
                              </span>
                              {practiceArea && (
                                <span>{practiceArea.name}</span>
                              )}
                            </div>

                            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-3 text-sm text-muted-foreground">
                              {leadLawyer && (
                                <span className="flex items-center gap-1">
                                  Lead: {leadLawyer.full_name}
                                </span>
                              )}
                              <span className="flex items-center gap-1">
                                <Calendar className="h-3.5 w-3.5" />
                                Opened {formatDate(matter.open_date ?? matter.created_at)}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-3.5 w-3.5" />
                                {matter.billable_hours || 0}h billed
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>View Details</DropdownMenuItem>
                              <DropdownMenuItem>Edit Matter</DropdownMenuItem>
                              <DropdownMenuItem>Log Time</DropdownMenuItem>
                              <DropdownMenuItem>Add Document</DropdownMenuItem>
                              <DropdownMenuItem className="text-destructive">Close Matter</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                          <ChevronRight className="h-5 w-5 text-muted-foreground" />
                        </div>
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })
        ) : (
          <Card>
            <CardContent className="p-12 text-center">
              <Briefcase className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-medium text-navy mb-2">No matters found</h3>
              <p className="text-muted-foreground mb-4">
                {searchQuery || statusFilter !== 'all' || practiceAreaFilter !== 'all'
                  ? 'Try adjusting your search or filters'
                  : 'Get started by creating your first matter'}
              </p>
              {!searchQuery && statusFilter === 'all' && practiceAreaFilter === 'all' && (
                <Button className="bg-gold hover:bg-gold-dark text-card" asChild>
                  <Link href="/portal/matters/new">
                    <Plus className="h-4 w-4 mr-2" />
                    Create Matter
                  </Link>
                </Button>
              )}
            </CardContent>
          </Card>
        )}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-semibold text-navy">
              {matters.filter(m => m.status === 'active').length}
            </p>
            <p className="text-sm text-muted-foreground">Active</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-semibold text-navy">
              {matters.filter(m => m.status === 'pending').length}
            </p>
            <p className="text-sm text-muted-foreground">Pending</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-semibold text-navy">
              {matters.filter(m => m.priority === 'high').length}
            </p>
            <p className="text-sm text-muted-foreground">High Priority</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-semibold text-navy">
              {matters.reduce((sum, m) => sum + (m.billable_hours || 0), 0)}h
            </p>
            <p className="text-sm text-muted-foreground">Total Billed</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
