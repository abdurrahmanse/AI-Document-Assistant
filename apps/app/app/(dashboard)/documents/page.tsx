'use client'

import { useState, useEffect } from 'react'
import { DocumentIntelligenceAPI, Document } from '@workspace/api-client'
import { websiteData } from '@workspace/data'
import { DocumentUploader } from '@/components/document-uploader'
import { Button } from '@workspace/ui/components/ui'
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@workspace/ui/components/ui'
import { FileText, Download, Trash2, Loader2 } from 'lucide-react'

const api = new DocumentIntelligenceAPI({ baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1' })

export default function DocumentsPage() {
  const [documents, setDocuments] = useState<Document[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchDocuments = async () => {
    try {
      setIsLoading(true)
      const data = await api.client.documents.getDocuments()
      setDocuments(data)
    } catch (error) {
      console.error('Failed to fetch documents:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchDocuments()
  }, [])

  const handleDownload = async (id: string) => {
    try {
      const { url } = await api.client.documents.getDownloadUrl(id)
      window.open(url, '_blank')
    } catch (error) {
      console.error('Failed to get download URL:', error)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this document?')) return
    
    try {
      await api.client.documents.deleteDocument(id)
      setDocuments(documents.filter(doc => doc.id !== id))
    } catch (error) {
      console.error('Failed to delete document:', error)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{websiteData.appContent.documents.title}</h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          {websiteData.appContent.documents.description}
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{websiteData.appContent.documents.upload.title}</CardTitle>
          <CardDescription>
            {websiteData.appContent.documents.upload.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DocumentUploader onUploadComplete={fetchDocuments} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{websiteData.appContent.documents.list.title}</CardTitle>
          <CardDescription>
            {websiteData.appContent.documents.list.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex justify-center p-8">
              <Loader2 className="h-8 w-8 animate-spin text-zinc-400" />
            </div>
          ) : documents.length === 0 ? (
            <div className="text-center py-12">
              <FileText className="mx-auto h-12 w-12 text-zinc-300 dark:text-zinc-600 mb-4" />
              <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">{websiteData.appContent.documents.list.empty.title}</h3>
              <p className="text-zinc-500 dark:text-zinc-400 mt-2">
                {websiteData.appContent.documents.list.empty.description}
              </p>
            </div>
          ) : (
            <div className="rounded-md border border-zinc-200 dark:border-zinc-800 divide-y divide-zinc-200 dark:divide-zinc-800">
              {documents.map((doc) => (
                <div key={doc.id} className="flex items-center justify-between p-4 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-blue-100 text-blue-600 rounded dark:bg-blue-900/50 dark:text-blue-400">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-zinc-900 dark:text-zinc-100">
                        {doc.title}
                      </h4>
                      <div className="flex space-x-4 mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                        <span>{(doc.size_bytes / (1024 * 1024)).toFixed(2)} MB</span>
                        <span className="capitalize">{doc.status.toLowerCase()}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleDownload(doc.id)}
                      disabled={doc.status !== 'READY'}
                    >
                      <Download className="h-4 w-4" />
                      <span className="sr-only">Download</span>
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleDelete(doc.id)}
                      className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30"
                    >
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
