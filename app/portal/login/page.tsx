'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Eye, EyeOff, Lock, Mail, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'

export default function PortalLoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    // Simulate login - in production, this would call Supabase Auth
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Demo login - accept any credentials
    router.push('/portal/dashboard')
  }

  return (
    <div className="min-h-screen bg-navy flex">
      {/* Left Panel - Branding */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between p-12 bg-navy-dark">
        <div>
          <Link href="/" className="inline-flex items-center gap-2 text-stone-light/70 hover:text-gold transition-colors mb-12">
            <ArrowLeft className="h-4 w-4" />
            Back to Website
          </Link>
          <div className="flex flex-col">
            <span className="font-serif text-3xl font-semibold tracking-wide text-stone-light">
              AUREUS
            </span>
            <span className="text-xs tracking-[0.3em] text-gold uppercase">
              Law Firm
            </span>
          </div>
        </div>
        
        <div>
          <h1 className="font-serif text-4xl xl:text-5xl font-semibold text-stone-light mb-6 text-balance">
            Lawyer Portal
          </h1>
          <p className="text-stone-light/70 text-lg leading-relaxed max-w-md">
            Access your cases, client matters, documents, and firm resources securely from anywhere.
          </p>
        </div>

        <p className="text-stone-light/50 text-sm">
          © {new Date().getFullYear()} Aureus Law. All rights reserved.
        </p>
      </div>

      {/* Right Panel - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-8">
            <Link href="/" className="inline-block">
              <div className="flex flex-col items-center">
                <span className="font-serif text-2xl font-semibold tracking-wide text-stone-light">
                  AUREUS
                </span>
                <span className="text-[10px] tracking-[0.3em] text-gold uppercase">
                  Law Firm
                </span>
              </div>
            </Link>
          </div>

          <div className="bg-card rounded-xl p-8 shadow-xl">
            <div className="text-center mb-8">
              <h2 className="font-serif text-2xl font-semibold text-navy mb-2">
                Welcome Back
              </h2>
              <p className="text-muted-foreground">
                Sign in to access the lawyer portal
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
                    placeholder="lawyer@aureuslaw.mv"
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link 
                    href="/portal/forgot-password" 
                    className="text-sm text-gold hover:text-gold-dark transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>
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

              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm font-normal cursor-pointer">
                  Remember me for 30 days
                </Label>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gold hover:bg-gold-dark text-card"
                disabled={isLoading}
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-center text-sm text-muted-foreground">
                Having trouble signing in?{' '}
                <Link href="/contact" className="text-gold hover:text-gold-dark transition-colors">
                  Contact IT Support
                </Link>
              </p>
            </div>
          </div>

          {/* Mobile back link */}
          <div className="lg:hidden text-center mt-6">
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
    </div>
  )
}
