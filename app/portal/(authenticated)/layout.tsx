'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard,
  Briefcase,
  FolderOpen,
  FileText,
  Users,
  Calendar,
  MessageSquare,
  Settings,
  LogOut,
  Menu,
  X,
  Bell,
  Search,
  ChevronDown,
  Clock,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const sidebarNavItems = [
  {
    title: 'Dashboard',
    href: '/portal/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'Matters',
    href: '/portal/matters',
    icon: Briefcase,
  },
  {
    title: 'Documents',
    href: '/portal/documents',
    icon: FolderOpen,
  },
  {
    title: 'Time Tracking',
    href: '/portal/time-tracking',
    icon: Clock,
  },
  {
    title: 'Clients',
    href: '/portal/clients',
    icon: Users,
  },
  {
    title: 'Calendar',
    href: '/portal/calendar',
    icon: Calendar,
  },
  {
    title: 'Messages',
    href: '/portal/messages',
    icon: MessageSquare,
  },
  {
    title: 'Reports',
    href: '/portal/reports',
    icon: FileText,
  },
]

// Demo user data
const currentUser = {
  name: 'Ahmed Hassan',
  email: 'ahmed.hassan@aureuslaw.mv',
  role: 'Senior Associate',
  avatar: null,
}

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-stone">
      {/* Sidebar */}
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 w-64 bg-navy transform transition-transform duration-300 lg:translate-x-0',
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between h-16 px-6 border-b border-navy-light">
            <Link href="/portal/dashboard" className="flex flex-col">
              <span className="font-serif text-xl font-semibold tracking-wide text-stone-light">
                AUREUS
              </span>
              <span className="text-[8px] tracking-[0.25em] text-gold uppercase">
                Lawyer Portal
              </span>
            </Link>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-1 text-stone-light/70 hover:text-stone-light"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
            {sidebarNavItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-gold text-navy'
                      : 'text-stone-light/70 hover:bg-navy-light hover:text-stone-light'
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {item.title}
                </Link>
              )
            })}
          </nav>

          {/* User Section */}
          <div className="p-4 border-t border-navy-light">
            <Link
              href="/portal/settings"
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                pathname === '/portal/settings'
                  ? 'bg-gold text-navy'
                  : 'text-stone-light/70 hover:bg-navy-light hover:text-stone-light'
              )}
            >
              <Settings className="h-5 w-5" />
              Settings
            </Link>
            <Link
              href="/portal/login"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-stone-light/70 hover:bg-navy-light hover:text-stone-light transition-colors"
            >
              <LogOut className="h-5 w-5" />
              Sign Out
            </Link>
          </div>
        </div>
      </aside>

      {/* Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="lg:pl-64">
        {/* Top Header */}
        <header className="sticky top-0 z-30 bg-card border-b border-border h-16">
          <div className="flex items-center justify-between h-full px-4 lg:px-6">
            {/* Mobile menu button */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 text-navy hover:bg-stone rounded-lg"
            >
              <Menu className="h-5 w-5" />
            </button>

            {/* Search */}
            <div className="hidden md:flex items-center flex-1 max-w-md ml-4 lg:ml-0">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search matters, documents, clients..."
                  className="pl-10 bg-stone border-stone-dark"
                />
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-2">
              {/* Notifications */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative">
                    <Bell className="h-5 w-5 text-navy" />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-gold rounded-full" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-80">
                  <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <div className="max-h-80 overflow-y-auto">
                    <DropdownMenuItem className="flex flex-col items-start gap-1 p-3">
                      <p className="text-sm font-medium">New document uploaded</p>
                      <p className="text-xs text-muted-foreground">
                        Contract draft added to Maldives Resort Development
                      </p>
                      <p className="text-xs text-muted-foreground">2 hours ago</p>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex flex-col items-start gap-1 p-3">
                      <p className="text-sm font-medium">Meeting reminder</p>
                      <p className="text-xs text-muted-foreground">
                        Client call with ABC Holdings in 30 minutes
                      </p>
                      <p className="text-xs text-muted-foreground">Just now</p>
                    </DropdownMenuItem>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="justify-center text-gold">
                    View all notifications
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* User Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2 px-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={currentUser.avatar || undefined} />
                      <AvatarFallback className="bg-gold text-navy text-xs">
                        {currentUser.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="hidden md:block text-left">
                      <p className="text-sm font-medium text-navy">{currentUser.name}</p>
                      <p className="text-xs text-muted-foreground">{currentUser.role}</p>
                    </div>
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/portal/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/portal/settings">Settings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/" className="text-muted-foreground">
                      Go to Public Website
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/portal/login" className="text-destructive">
                      Sign Out
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 lg:p-6">{children}</main>
      </div>
    </div>
  )
}
