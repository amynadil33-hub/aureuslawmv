import Link from 'next/link'
import { Shield } from 'lucide-react'
import { login } from './actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

type LoginPageProps = {
  searchParams?: Promise<{ error?: string }>
}

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const params = await searchParams

  return (
    <main className="min-h-screen bg-navy-dark flex items-center justify-center p-8">
      <div className="w-full max-w-md">
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
                Secure Access
              </span>
            </div>
          </Link>
        </div>

        <div className="bg-card rounded-xl p-8 shadow-xl">
          <div className="text-center mb-8">
            <h1 className="font-serif text-2xl font-semibold text-navy mb-2">
              Admin Sign In
            </h1>
            <p className="text-muted-foreground">
              Sign in with your administrator credentials.
            </p>
          </div>

          {params?.error && (
            <div className="bg-destructive/10 border border-destructive/20 text-destructive rounded-lg p-3 mb-6 text-sm">
              {params.error}
            </div>
          )}

          <form action={login} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="admin@aureuslaw.mv"
                autoComplete="email"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                required
              />
            </div>

            <Button type="submit" className="w-full bg-gold hover:bg-gold/90 text-navy font-medium">
              Sign In
            </Button>
          </form>
        </div>
      </div>
    </main>
  )
}
