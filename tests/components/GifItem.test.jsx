import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('pruebas en GifItem', () => { 

    const title = 'Saitama'
    const url = 'https://one-punch.com/saitama.jpg'

    test('debe hacer match con el snapshot', () => { 

        const {container} = render(<GifItem title={title} url={url} />)
        expect(container).toMatchSnapshot()
     })

     test('debe mostrar img con url y alt indicado', () => { 
        
        render(<GifItem title={title} url={url} />)
        // screen.debug()
        // expect( screen.getByRole('img').src).toBe(url)
        // expect( screen.getByRole('img').alt).toBe(url)

        const { src, alt } = screen.getByRole('img')
        expect(src).toBe(url)
        expect(alt).toBe(title)
    })

    test('debe mostrar el titulo en el componente', () => { 
        
        render(<GifItem title={title} url={url} />)
        expect(screen.getByText(title)).toBeTruthy()
     })
 })