"use client"

import { useState } from "react"
import { demoContactSubmissions } from "@/lib/demo-data"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { formatDateTime } from "@/lib/utils"
import {
  Search,
  Mail,
  Phone,
  Calendar,
  MessageSquare,
  Eye,
  CheckCircle2,
  Clock,
  Archive,
} from "lucide-react"

type InquiryStatus = "new" | "in_progress" | "resolved" | "archived"

export default function AdminInquiriesPage() {
  const [inquiries, setInquiries] = useState(demoContactSubmissions)
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [selectedInquiry, setSelectedInquiry] = useState<typeof demoContactSubmissions[0] | null>(null)

  const filteredInquiries = inquiries.filter((inquiry) => {
    const matchesSearch =
      inquiry.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inquiry.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inquiry.subject.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || inquiry.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const getStatusBadge = (status: InquiryStatus) => {
    const styles = {
      new: "border-blue-200 bg-blue-50 text-blue-700",
      in_progress: "border-yellow-200 bg-yellow-50 text-yellow-700",
      resolved: "border-green-200 bg-green-50 text-green-700",
      archived: "border-gray-200 bg-gray-50 text-gray-700",
    }
    const labels = {
      new: "New",
      in_progress: "In Progress",
      resolved: "Resolved",
      archived: "Archived",
    }
    return (
      <Badge variant="outline" className={styles[status]}>
        {labels[status]}
      </Badge>
    )
  }

  const stats = {
    new: inquiries.filter((i) => i.status === "new").length,
    inProgress: inquiries.filter((i) => i.status === "in_progress").length,
    resolved: inquiries.filter((i) => i.status === "resolved").length,
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-3xl font-semibold text-navy">Contact Inquiries</h1>
        <p className="mt-1 text-muted-foreground">
          Manage contact form submissions and client inquiries
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="flex items-center gap-4 p-4">
            <div className="rounded-full bg-blue-100 p-3">
              <Mail className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-semibold text-navy">{stats.new}</p>
              <p className="text-sm text-muted-foreground">New Inquiries</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 p-4">
            <div className="rounded-full bg-yellow-100 p-3">
              <Clock className="h-5 w-5 text-yellow-600" />
            </div>
            <div>
              <p className="text-2xl font-semibold text-navy">{stats.inProgress}</p>
              <p className="text-sm text-muted-foreground">In Progress</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 p-4">
            <div className="rounded-full bg-green-100 p-3">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-semibold text-navy">{stats.resolved}</p>
              <p className="text-sm text-muted-foreground">Resolved</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="border-b">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <CardTitle className="flex items-center gap-2 text-lg font-medium">
              <MessageSquare className="h-5 w-5 text-gold" />
              All Inquiries ({filteredInquiries.length})
            </CardTitle>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="in_progress">In Progress</SelectItem>
                  <SelectItem value="resolved">Resolved</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                </SelectContent>
              </Select>
              <div className="relative w-full sm:w-72">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search inquiries..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Contact</TableHead>
                <TableHead className="hidden md:table-cell">Subject</TableHead>
                <TableHead className="hidden lg:table-cell">Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredInquiries.map((inquiry) => (
                <TableRow key={inquiry.id}>
                  <TableCell>
                    <div className="font-medium text-navy">{inquiry.name}</div>
                    <div className="text-sm text-muted-foreground">{inquiry.email}</div>
                  </TableCell>
                  <TableCell className="hidden max-w-xs md:table-cell">
                    <span className="line-clamp-1">{inquiry.subject}</span>
                  </TableCell>
                  <TableCell className="hidden lg:table-cell">
                    <span className="text-sm text-muted-foreground">
                      {formatDateTime(inquiry.createdAt)}
                    </span>
                  </TableCell>
                  <TableCell>{getStatusBadge(inquiry.status)}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => setSelectedInquiry(inquiry)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Archive className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* View Inquiry Dialog */}
      <Dialog open={!!selectedInquiry} onOpenChange={() => setSelectedInquiry(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="font-serif text-xl text-navy">
              Inquiry Details
            </DialogTitle>
          </DialogHeader>
          {selectedInquiry && (
            <div className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Name</p>
                  <p className="font-medium text-navy">{selectedInquiry.name}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Status</p>
                  {getStatusBadge(selectedInquiry.status)}
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Email</p>
                  <a
                    href={`mailto:${selectedInquiry.email}`}
                    className="flex items-center gap-1 text-gold hover:underline"
                  >
                    <Mail className="h-4 w-4" />
                    {selectedInquiry.email}
                  </a>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Phone</p>
                  <a
                    href={`tel:${selectedInquiry.phone}`}
                    className="flex items-center gap-1 text-gold hover:underline"
                  >
                    <Phone className="h-4 w-4" />
                    {selectedInquiry.phone}
                  </a>
                </div>
                <div className="space-y-1 sm:col-span-2">
                  <p className="text-sm font-medium text-muted-foreground">Submitted</p>
                  <p className="flex items-center gap-1 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {formatDateTime(selectedInquiry.createdAt)}
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Subject</p>
                <p className="font-medium text-navy">{selectedInquiry.subject}</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Message</p>
                <div className="rounded-lg bg-stone p-4">
                  <p className="whitespace-pre-wrap text-foreground">
                    {selectedInquiry.message}
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Internal Notes</p>
                <Textarea
                  placeholder="Add notes about this inquiry..."
                  rows={3}
                />
              </div>
              <div className="flex justify-between gap-3 border-t pt-4">
                <Select defaultValue={selectedInquiry.status}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new">New</SelectItem>
                    <SelectItem value="in_progress">In Progress</SelectItem>
                    <SelectItem value="resolved">Resolved</SelectItem>
                    <SelectItem value="archived">Archived</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex gap-3">
                  <Button variant="outline" onClick={() => setSelectedInquiry(null)}>
                    Close
                  </Button>
                  <Button className="bg-gold hover:bg-gold-dark text-white">
                    Save Changes
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
