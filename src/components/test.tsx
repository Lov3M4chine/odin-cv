import { render, screen } from '@testing-library/react'
import App from './App'

describe('<App />', () => {
  it('should render the Hello World text', () => {
    render(<App />)
    expect(screen.getByText(/hello world/i)).toBeInTheDocument()
  })
})
