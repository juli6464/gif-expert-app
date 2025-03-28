import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

jest.mock('../../src/hooks/useFetchGifs')

describe('pruebas en GifGrid', () => { 

    const category = 'One Punch'

    test('debe mostrar el loading', () => { 
        
        useFetchGifs.mockReturnValue({
            images: [], 
            isLoading: true
        })

        render(<GifGrid category={ category } />)
        expect(screen.getByText('Cargando...'))
        expect(screen.getByText(category))

     })

     test('mostrar items cuando carga imgs con useFetchGifs', () => { 

        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://one-punch.com/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://dragon-ball.com/goku.jpg'
            }
    ]

        useFetchGifs.mockReturnValue({
            images: gifs, 
            isLoading: false
        })
        render(<GifGrid category={ category } />)
        expect(screen.getAllByRole('img').length).toBe(2)

      })
 })