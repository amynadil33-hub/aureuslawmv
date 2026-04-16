'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard,
  Users,
  Briefcase,
  Settings,
  LogOut,
  Menu,
  X,
  Bell,
  ChevronDown,
  Building2,
  BookOpen,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
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
    href: '/admin/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'Team Members',
    href: '/admin/team',
    icon: Users,
  },
  {
    title: 'Practice Areas',
    href: '/admin/services',
    icon: Briefcase,
  },
  {
    title: 'Blog Posts',
    href: '/admin/posts',
    icon: BookOpen,
  },
  {
    title: 'Contact Inquiries',
    href: '/admin/inquiries',
    icon: Building2,
  },
]

const currentAdmin = {
  name: 'System Admin',
  email: 'admin@aureuslaw.mv',
  role: 'Administrator',
}

export default function AdminLayout({
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
          'fixed inset-y-0 left-0 z-50 w-64 bg-navy-dark transform transition-transform duration-300 lg:translate-x-0',
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between h-16 px-6 border-b border-navy">
            <Link href="/admin/dashboard" className="flex flex-col">
              <span className="font-serif text-xl font-semibold tracking-wide text-stone-light">
                AUREUS
              </span>
              <span className="text-[8px] tracking-[0.25em] text-gold uppercase">
                Admin Panel
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
                      ? 'bg-gold text-navy-dark'
                      : 'text-stone-light/70 hover:bg-navy hover:text-stone-light'
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {item.title}
                </Link>
              )
            })}
          </nav>

          {/* Bottom Section */}
          <div className="p-4 border-t border-navy">
            <Link
              href="/admin/settings"
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                pathname === '/admin/settings'
                  ? 'bg-gold text-navy-dark'
                  : 'text-stone-light/70 hover:bg-navy hover:text-stone-light'
              )}
            >
              <Settings className="h-5 w-5" />
              Settings
            </Link>
            <Link
              href="/admin/login"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-stone-light/70 hover:bg-navy hover:text-stone-light transition-colors"
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

            <div className="hidden lg:block">
              <h1 className="font-medium text-navy">Admin Dashboard</h1>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-2">
              {/* Quick Links */}
              <Button variant="ghost" size="sm" asChild className="hidden md:inline-flex">
                <Link href="/" target="_blank">
                  View Website
                </Link>
              </Button>

              {/* Notifications */}
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5 text-navy" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-destructive rounded-full" />
              </Button>

              {/* User Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2 px-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-navy text-stone-light text-xs">
                        SA
                      </AvatarFallback>
                    </Avatar>
                    <div className="hidden md:block text-left">
                      <p className="text-sm font-medium text-navy">{currentAdmin.name}</p>
                      <p className="text-xs text-muted-foreground">{currentAdmin.role}</p>
                    </div>
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>Admin Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/admin/settings">Settings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/admin/login" className="text-destructive">
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
