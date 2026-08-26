'use client'

import { useState, useRef } from 'react'
import { Upload, X, File, CheckCircle, AlertCircle } from 'lucide-react'
import { Button } from '@workspace/ui/components/button'
import { DocumentIntelligenceAPI } from '@workspace/api-client'

interface DocumentUploaderProps {
  onUploadComplete?: () => void;
}

const api = new DocumentIntelligenceAPI({ baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1' })

export function DocumentUploader({ onUploadComplete }: DocumentUploaderProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [status, setStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0])
      setStatus('idle')
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0])
      setStatus('idle')
    }
  }

  const handleUpload = async () => {
    if (!file) return
    
    setIsUploading(true)
    setStatus('uploading')
    setUploadProgress(0)
    
    try {
      await api.client.documents.uploadDocument(file, (progressEvent: any) => {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / (progressEvent.total || file.size))
        setUploadProgress(percentCompleted)
      })
      
      setStatus('success')
      if (onUploadComplete) {
        onUploadComplete()
      }
      
      // Reset after 3 seconds
      setTimeout(() => {
        setFile(null)
        setStatus('idle')
        setUploadProgress(0)
      }, 3000)
    } catch (err: any) {
      console.error('Upload failed:', err)
      setStatus('error')
      setErrorMessage(err.response?.data?.detail || 'Failed to upload document')
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div className="w-full">
      {!file ? (
        <div
          className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
            isDragging 
              ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/20' 
              : 'border-zinc-300 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-900/50'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx,.txt"
          />
          <div className="flex flex-col items-center justify-center space-y-4 cursor-pointer">
            <div className="p-4 bg-blue-100 text-blue-600 rounded-full dark:bg-blue-900 dark:text-blue-300">
              <Upload className="h-8 w-8" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold">Click to upload or drag and drop</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                PDF, DOCX, or TXT (max. 10MB)
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-zinc-100 text-zinc-600 rounded-lg dark:bg-zinc-800 dark:text-zinc-400">
                <File className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-medium text-sm line-clamp-1">{file.name}</h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  {(file.size / (1024 * 1024)).toFixed(2)} MB
                </p>
              </div>
            </div>
            
            {status === 'idle' && (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setFile(null)}
                className="text-zinc-500 hover:text-red-500"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
          
          {status === 'uploading' && (
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-xs font-medium">
                <span>Uploading...</span>
                <span>{uploadProgress}%</span>
              </div>
              <div className="w-full bg-zinc-200 rounded-full h-2 dark:bg-zinc-800">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                  style={{ width: `${uploadProgress}%` }}
                />
              </div>
            </div>
          )}
          
          {status === 'success' && (
            <div className="mt-4 flex items-center text-sm text-green-600 dark:text-green-400">
              <CheckCircle className="h-4 w-4 mr-2" />
              Upload complete
            </div>
          )}
          
          {status === 'error' && (
            <div className="mt-4 flex items-center text-sm text-red-600 dark:text-red-400">
              <AlertCircle className="h-4 w-4 mr-2" />
              {errorMessage}
            </div>
          )}
          
          {status === 'idle' && (
            <div className="mt-4 flex justify-end">
              <Button onClick={handleUpload}>
                Upload Document
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
