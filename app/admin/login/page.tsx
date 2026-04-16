'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Eye, EyeOff, Lock, Mail, ArrowLeft, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function AdminLoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    // Simulate login
    await new Promise(resolve => setTimeout(resolve, 1000))
    router.push('/admin/dashboard')
  }

  return (
    <div className="min-h-screen bg-navy-dark flex items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/20 rounded-full mb-4">
            <Shield className="h-8 w-8 text-gold" />
          </div>
          <Link href="/" className="inline-block">
            <div className="flex flex-col items-center">
              <span className="font-serif text-2xl font-semibold tracking-wide text-stone-light">
                AUREUS
              </span>
              <span className="text-[10px] tracking-[0.3em] text-gold uppercase">
                Admin Portal
              </span>
            </div>
          </Link>
        </div>

        <div className="bg-card rounded-xl p-8 shadow-xl">
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl font-semibold text-navy mb-2">
              Admin Access
            </h2>
            <p className="text-muted-foreground">
              Sign in with your administrator credentials
            </p>
          </div>

          {error && (
            <div className="bg-destructive/10 border border-destructive/20 text-destructive rounded-lg p-3 mb-6 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="admin@aureuslaw.mv"
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  className="pl-10 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-navy hover:bg-navy-dark text-stone-light"
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Access Admin Panel'}
            </Button>
          </form>
        </div>

        <div className="text-center mt-6">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-stone-light/70 hover:text-gold transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Website
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
