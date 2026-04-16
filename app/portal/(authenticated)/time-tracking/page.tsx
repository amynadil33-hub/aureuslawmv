'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Clock,
  Plus,
  Play,
  Pause,
  Calendar,
  Briefcase,
  Save,
  Trash2,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { timeEntries, matters, clients } from '@/lib/demo-data'
import { formatDate } from '@/lib/utils'

// Demo data
const weeklyTarget = 35
const todayEntries = timeEntries.slice(0, 4)
const weekEntries = timeEntries
const todayTotal = todayEntries.reduce((sum, t) => sum + t.hours, 0)
const weekTotal = weekEntries.reduce((sum, t) => sum + t.hours, 0)

export default function TimeTrackingPage() {
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [timerSeconds, setTimerSeconds] = useState(0)
  const [selectedMatter, setSelectedMatter] = useState('')
  const [description, setDescription] = useState('')
  const [manualHours, setManualHours] = useState('')
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const formatTimer = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600)
    const mins = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const toggleTimer = () => {
    if (!selectedMatter) {
      alert('Please select a matter first')
      return
    }
    setIsTimerRunning(!isTimerRunning)
  }

  const resetTimer = () => {
    setIsTimerRunning(false)
    setTimerSeconds(0)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-2xl lg:text-3xl font-semibold text-navy">
            Time Tracking
          </h1>
          <p className="text-muted-foreground mt-1">
            Track billable hours and manage time entries
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gold hover:bg-gold-dark text-card">
              <Plus className="h-4 w-4 mr-2" />
              Manual Entry
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle className="font-serif text-xl">Add Time Entry</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label>Matter *</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a matter" />
                  </SelectTrigger>
                  <SelectContent>
                    {matters.map(matter => (
                      <SelectItem key={matter.id} value={matter.id}>
                        {matter.matter_number} - {matter.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Date *</Label>
                  <Input type="date" defaultValue={new Date().toISOString().split('T')[0]} />
                </div>
                <div className="space-y-2">
                  <Label>Hours *</Label>
                  <Input type="number" step="0.25" min="0.25" placeholder="0.00" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Activity Type *</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select activity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="research">Legal Research</SelectItem>
                    <SelectItem value="drafting">Document Drafting</SelectItem>
                    <SelectItem value="review">Document Review</SelectItem>
                    <SelectItem value="meeting">Client Meeting</SelectItem>
                    <SelectItem value="call">Phone Call</SelectItem>
                    <SelectItem value="court">Court Appearance</SelectItem>
                    <SelectItem value="travel">Travel</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Description *</Label>
                <Textarea 
                  placeholder="Describe the work performed..."
                  rows={3}
                />
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="billable" defaultChecked className="rounded" />
                <Label htmlFor="billable" className="font-normal">Billable</Label>
              </div>
              <div className="flex justify-end gap-3 pt-4">
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button className="bg-gold hover:bg-gold-dark text-card">
                  <Save className="h-4 w-4 mr-2" />
                  Save Entry
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid sm:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Today</p>
                <p className="text-3xl font-semibold text-navy mt-1">{todayTotal.toFixed(1)}h</p>
              </div>
              <div className="p-3 bg-gold/10 rounded-lg">
                <Clock className="h-6 w-6 text-gold" />
              </div>
            </div>
            <Progress value={(todayTotal / 8) * 100} className="h-2 mt-4" />
            <p className="text-xs text-muted-foreground mt-2">
              {((todayTotal / 8) * 100).toFixed(0)}% of 8h daily target
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">This Week</p>
                <p className="text-3xl font-semibold text-navy mt-1">{weekTotal.toFixed(1)}h</p>
              </div>
              <div className="p-3 bg-navy/10 rounded-lg">
                <Calendar className="h-6 w-6 text-navy" />
              </div>
            </div>
            <Progress value={(weekTotal / weeklyTarget) * 100} className="h-2 mt-4" />
            <p className="text-xs text-muted-foreground mt-2">
              {((weekTotal / weeklyTarget) * 100).toFixed(0)}% of {weeklyTarget}h weekly target
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Billable Rate</p>
                <p className="text-3xl font-semibold text-navy mt-1">92%</p>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <Briefcase className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <Progress value={92} className="h-2 mt-4" />
            <p className="text-xs text-muted-foreground mt-2">
              {weekTotal * 0.92}h billable this week
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Timer */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-medium">Timer</CardTitle>
          <CardDescription>Track time in real-time while working</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
            {/* Timer Display */}
            <div className="flex items-center gap-6">
              <div className="text-5xl font-mono font-semibold text-navy">
                {formatTimer(timerSeconds)}
              </div>
              <div className="flex gap-2">
                <Button
                  size="lg"
                  onClick={toggleTimer}
                  className={isTimerRunning ? 'bg-orange-500 hover:bg-orange-600' : 'bg-green-500 hover:bg-green-600'}
                >
                  {isTimerRunning ? (
                    <><Pause className="h-5 w-5 mr-2" /> Pause</>
                  ) : (
                    <><Play className="h-5 w-5 mr-2" /> Start</>
                  )}
                </Button>
                {timerSeconds > 0 && (
                  <Button size="lg" variant="outline" onClick={resetTimer}>
                    Reset
                  </Button>
                )}
              </div>
            </div>

            {/* Timer Form */}
            <div className="flex-1 grid sm:grid-cols-2 gap-4 w-full">
              <div className="space-y-2">
                <Label>Matter</Label>
                <Select value={selectedMatter} onValueChange={setSelectedMatter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a matter" />
                  </SelectTrigger>
                  <SelectContent>
                    {matters.filter(m => m.status === 'active').map(matter => (
                      <SelectItem key={matter.id} value={matter.id}>
                        {matter.matter_number} - {matter.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Description</Label>
                <Input
                  placeholder="What are you working on?"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>

            {timerSeconds > 0 && (
              <Button className="bg-gold hover:bg-gold-dark text-card">
                <Save className="h-4 w-4 mr-2" />
                Save Entry
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Recent Entries */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-medium">Recent Time Entries</CardTitle>
          <CardDescription>Your logged time for this week</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Matter</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Hours</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {timeEntries.map((entry) => {
                  const matter = matters.find(m => m.id === entry.matter_id)
                  return (
                    <TableRow key={entry.id}>
                      <TableCell className="whitespace-nowrap">
                        {formatDate(entry.date)}
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium text-navy">{matter?.matter_number}</p>
                          <p className="text-xs text-muted-foreground truncate max-w-[200px]">
                            {matter?.title}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell className="max-w-[300px]">
                        <p className="truncate">{entry.description}</p>
                        <p className="text-xs text-muted-foreground">{entry.activity_type}</p>
                      </TableCell>
                      <TableCell className="font-medium">
                        {entry.hours.toFixed(2)}h
                      </TableCell>
                      <TableCell>
                        <Badge variant={entry.is_billable ? 'default' : 'secondary'}>
                          {entry.is_billable ? 'Billable' : 'Non-billable'}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
