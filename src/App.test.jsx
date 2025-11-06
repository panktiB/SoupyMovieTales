import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders the heading', () => {
    render(<App />)
    const heading = screen.getByText('IMDb React App')
    expect(heading).toBeInTheDocument()
  })

  it('renders the Tailwind confirmation text', () => {
    render(<App />)
    const text = screen.getByText('Tailwind is working!')
    expect(text).toBeInTheDocument()
  })

  it('applies correct CSS classes to container', () => {
    render(<App />)
    const heading = screen.getByText('IMDb React App')
    const container = heading.parentElement
    expect(container).toHaveClass(
      'min-h-screen',
      'bg-gray-900',
      'text-white',
      'p-8'
    )
  })
})
