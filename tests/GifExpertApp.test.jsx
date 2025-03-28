import { render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Pruebas en gifexpertapp', () => { 
    
    test('debe mostrar el titulo de gif expert app', () => { 
        
        render(<GifExpertApp />)
        const titulo = screen.getByText('GifExpertApp')
        expect(titulo).toBeTruthy()

     })

     
 })