'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

import { Button } from '@workspace/ui/components/button'
import { Input } from '@workspace/ui/components/input'
import { Label } from '@workspace/ui/components/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@workspace/ui/components/card'

import { DocumentIntelligenceAPI } from '@workspace/api-client'
import { useAuthStore } from '@/lib/store/auth'
import { setAuthToken, setRefreshToken } from '@/app/actions/auth'

const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(1, { message: 'Password is required' }),
})

type LoginFormValues = z.infer<typeof loginSchema>

// Setup the API client instance pointing to our backend
// In a real app this might be exported from a central lib
const api = new DocumentIntelligenceAPI({ baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1' })

export default function LoginPage() {
  const router = useRouter()
  const { setUser } = useAuthStore()
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema)
  })

  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true)
    setError(null)
    
    try {
      const response = await api.client.auth.login(data)
      
      // Save tokens to cookies via Server Action
      await setAuthToken(response.access_token)
      await setRefreshToken(response.refresh_token)
      
      // Update global state
      setUser(response.user)
      
      // Redirect to dashboard
      router.push('/dashboard')
    } catch (err: any) {
      setError(err.response?.data?.detail || 'Invalid email or password. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex h-screen w-full items-center justify-center bg-zinc-50 dark:bg-zinc-950 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold tracking-tight">Sign in</CardTitle>
          <CardDescription>
            Enter your email and password to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                {...register('email')}
              />
              {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="/forgot-password" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400">
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                {...register('password')}
              />
              {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
            </div>
            
            {error && <div className="p-3 text-sm text-white bg-red-500/90 rounded-md">{error}</div>}
            
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Signing in...' : 'Sign In'}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-sm text-center text-zinc-500 dark:text-zinc-400">
            Don't have an account?{' '}
            <Link href="/register" className="font-semibold text-zinc-900 hover:underline dark:text-zinc-50">
              Sign up
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
