import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../App.jsx'

// Basic app rendering
describe('Basic App Rendering', () => {
  it('renders app and children components', () => {
    render(<App />)
    // confirm menu is rendered
    expect(screen.getByText(/3View.js/i)).toBeInTheDocument()
    // confirm canvas is rendered
    expect(screen.getByTestId('canvas')).toBeInTheDocument()
  })
})

// Test initial model loading state

// Default model loading

// URL state updates

// URL update functionality

// Invalid URL handling