'use client'

import { useState } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [message, setMessage] = useState('')
  const [response, setResponse] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!message.trim()) {
      return
    }

    setLoading(true)
    setError(null)
    setResponse(null)

    try {
      // Default to localhost:8000 for local development
      // In production, this should use an environment variable
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'
      
      const res = await fetch(`${apiUrl}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      })

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({ detail: 'Unknown error' }))
        throw new Error(errorData.detail || `HTTP error! status: ${res.status}`)
      }

      const data = await res.json()
      setResponse(data.reply)
      setMessage('') // Clear input after successful submission
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while sending your message')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>AI Mental Coach</h1>
        <p className={styles.subtitle}>
          A supportive mental coach to help with stress, motivation, habits, and confidence
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputContainer}>
            <textarea
              className={styles.textarea}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Share what's on your mind..."
              rows={4}
              disabled={loading}
            />
          </div>
          
          <button
            type="submit"
            className={styles.submitButton}
            disabled={loading || !message.trim()}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {error && (
          <div className={styles.error}>
            <strong>Error:</strong> {error}
          </div>
        )}

        {response && (
          <div className={styles.response}>
            <h2 className={styles.responseTitle}>Response:</h2>
            <div className={styles.responseContent}>
              {response.split('\n').map((line, index) => (
                <p key={index}>{line || '\u00A0'}</p>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

