'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Search,
  Plus,
  MoreVertical,
  Mail,
  Phone,
  Edit,
  Trash2,
  Eye,
  UserCheck,
  UserX,
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
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
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { teamMembers, practiceAreas } from '@/lib/demo-data'
import { getInitials } from '@/lib/utils'

export default function AdminTeamPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [positionFilter, setPositionFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')

  const normalizedTeamMembers = teamMembers.map((member) => ({
    ...member,
    position: member.role_title ?? 'Team Member',
    practice_areas: member.practice_areas ?? [],
    is_active: member.is_active ?? member.is_visible ?? true,
    image_url: member.image_url ?? member.photo_url ?? null,
  }))

  const positions = [...new Set(normalizedTeamMembers.map((t) => t.position))]

  const filteredMembers = normalizedTeamMembers.filter(member => {
    const matchesSearch =
      (member.full_name ?? '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (member.email ?? '').toLowerCase().includes(searchQuery.toLowerCase())
    const matchesPosition = positionFilter === 'all' || member.position === positionFilter
    const matchesStatus = statusFilter === 'all' || 
      (statusFilter === 'active' && member.is_active) ||
      (statusFilter === 'inactive' && !member.is_active)
    return matchesSearch && matchesPosition && matchesStatus
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-2xl lg:text-3xl font-semibold text-navy">
            Team Members
          </h1>
          <p className="text-muted-foreground mt-1">
            Manage lawyers and staff accounts
          </p>
        </div>
        <Button className="bg-gold hover:bg-gold-dark text-card" asChild>
          <Link href="/admin/team/new">
            <Plus className="h-4 w-4 mr-2" />
            Add Team Member
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
                placeholder="Search by name or email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-3">
              <Select value={positionFilter} onValueChange={setPositionFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Position" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Positions</SelectItem>
                  {positions.map(pos => (
                    <SelectItem key={pos} value={pos}>{pos}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[130px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Team Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Member</TableHead>
                  <TableHead>Position</TableHead>
                  <TableHead>Practice Areas</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredMembers.map((member, idx) => {
                  const memberPracticeAreas = practiceAreas.filter(p => 
                    (member.practice_areas ?? []).includes(p.id)
                  )
                  return (
                    <motion.tr
                      key={member.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: idx * 0.03 }}
                      className="border-b hover:bg-stone/50 transition-colors"
                    >
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={member.image_url || undefined} />
                            <AvatarFallback className="bg-navy/10 text-navy">
                              {getInitials(member.full_name)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <Link 
                              href={`/admin/team/${member.id}`}
                              className="font-medium text-navy hover:text-gold transition-colors"
                            >
                              {member.full_name}
                            </Link>
                            <p className="text-xs text-muted-foreground">{member.slug}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{member.position}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {memberPracticeAreas.slice(0, 2).map(area => (
                            <Badge key={area.id} variant="secondary" className="text-xs">
                              {area.name}
                            </Badge>
                          ))}
                          {memberPracticeAreas.length > 2 && (
                            <Badge variant="secondary" className="text-xs">
                              +{memberPracticeAreas.length - 2}
                            </Badge>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          {member.email && (
                            <a 
                              href={`mailto:${member.email}`}
                              className="flex items-center gap-1 text-xs text-muted-foreground hover:text-navy"
                            >
                              <Mail className="h-3 w-3" />
                              {member.email}
                            </a>
                          )}
                          {member.phone && (
                            <a 
                              href={`tel:${member.phone}`}
                              className="flex items-center gap-1 text-xs text-muted-foreground hover:text-navy"
                            >
                              <Phone className="h-3 w-3" />
                              {member.phone}
                            </a>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={member.is_active ? 'default' : 'secondary'}>
                          {member.is_active ? (
                            <><UserCheck className="h-3 w-3 mr-1" /> Active</>
                          ) : (
                            <><UserX className="h-3 w-3 mr-1" /> Inactive</>
                          )}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem asChild>
                              <Link href={`/admin/team/${member.id}`}>
                                <Eye className="h-4 w-4 mr-2" /> View Profile
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link href={`/admin/team/${member.id}/edit`}>
                                <Edit className="h-4 w-4 mr-2" /> Edit
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive">
                              <Trash2 className="h-4 w-4 mr-2" /> Remove
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </motion.tr>
                  )
                })}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid sm:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-semibold text-navy">{teamMembers.length}</p>
            <p className="text-sm text-muted-foreground">Total Members</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-semibold text-navy">
              {normalizedTeamMembers.filter((m) => (m.position ?? '').toLowerCase().includes('partner')).length}
            </p>
            <p className="text-sm text-muted-foreground">Partners</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-semibold text-navy">
              {normalizedTeamMembers.filter((m) => (m.position ?? '').toLowerCase().includes('associate')).length}
            </p>
            <p className="text-sm text-muted-foreground">Associates</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-semibold text-navy">
              {normalizedTeamMembers.filter((m) => m.is_active).length}
            </p>
            <p className="text-sm text-muted-foreground">Active</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
