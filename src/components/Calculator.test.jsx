import { render, screen, fireEvent } from '@testing-library/react'
import Calculator from '../pages/Calculator'

test('adds two numbers correctly', () => {
    render(<Calculator />)

    fireEvent.change(screen.getByTestId('input-a'), { target: { value: '5' } })
    fireEvent.change(screen.getByTestId('input-b'), { target: { value: '3' } })
    fireEvent.change(screen.getByTestId('operator'), { target: { value: '+' } })

    expect(screen.getByTestId('result')).toHaveValue('8')
})
