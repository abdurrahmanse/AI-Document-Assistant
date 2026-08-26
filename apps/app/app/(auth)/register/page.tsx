'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

import { Button } from '@workspace/ui/components/ui'
import { Input } from '@workspace/ui/components/ui'
import { Label } from '@workspace/ui/components/ui'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@workspace/ui/components/ui'

import { DocumentIntelligenceAPI } from '@workspace/api-client'
import { useAuthStore } from '@/lib/store/auth'
import { setAuthToken, setRefreshToken } from '@/app/actions/auth'

const registerSchema = z.object({
  first_name: z.string().min(1, { message: 'First name is required' }),
  last_name: z.string().min(1, { message: 'Last name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters' }),
  confirm_password: z.string()
}).refine((data) => data.password === data.confirm_password, {
  message: "Passwords don't match",
  path: ["confirm_password"]
})

type RegisterFormValues = z.infer<typeof registerSchema>

const api = new DocumentIntelligenceAPI({ baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1' })

export default function RegisterPage() {
  const router = useRouter()
  const { setUser } = useAuthStore()
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema)
  })

  const onSubmit = async (data: RegisterFormValues) => {
    setIsLoading(true)
    setError(null)
    
    try {
      // 1. Register the user
      await api.client.auth.register({
        email: data.email,
        password: data.password,
        first_name: data.first_name,
        last_name: data.last_name
      })
      
      // 2. Automatically log them in
      const loginResponse = await api.client.auth.login({
        email: data.email,
        password: data.password
      })
      
      // 3. Save tokens
      await setAuthToken(loginResponse.access_token)
      await setRefreshToken(loginResponse.refresh_token)
      setUser(loginResponse.user)
      
      // 4. Redirect
      router.push('/dashboard')
    } catch (err: any) {
      setError(err.response?.data?.detail || 'An error occurred during registration. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex h-screen w-full items-center justify-center bg-zinc-50 dark:bg-zinc-950 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold tracking-tight">Create an account</CardTitle>
          <CardDescription>
            Enter your information to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first_name">First Name</Label>
                <Input
                  id="first_name"
                  placeholder="John"
                  {...register('first_name')}
                />
                {errors.first_name && <p className="text-sm text-red-500">{errors.first_name.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="last_name">Last Name</Label>
                <Input
                  id="last_name"
                  placeholder="Doe"
                  {...register('last_name')}
                />
                {errors.last_name && <p className="text-sm text-red-500">{errors.last_name.message}</p>}
              </div>
            </div>

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
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                {...register('password')}
              />
              {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirm_password">Confirm Password</Label>
              <Input
                id="confirm_password"
                type="password"
                {...register('confirm_password')}
              />
              {errors.confirm_password && <p className="text-sm text-red-500">{errors.confirm_password.message}</p>}
            </div>
            
            {error && <div className="p-3 text-sm text-white bg-red-500/90 rounded-md">{error}</div>}
            
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Creating account...' : 'Create account'}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-sm text-center text-zinc-500 dark:text-zinc-400">
            Already have an account?{' '}
            <Link href="/login" className="font-semibold text-zinc-900 hover:underline dark:text-zinc-50">
              Sign in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
