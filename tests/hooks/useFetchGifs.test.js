import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('pruebas en hook useFetchGifs', () => { 

    test('debe regresar estado inicial', () => { 

        const { result } = renderHook(() => useFetchGifs('One Punch'))
        const { images, isLoading } = result.current

        expect(images.length).toBe(0)
        expect(isLoading).toBeTruthy()
     })

     test('debe retornar array de imgs y el isLoading en false', async() => { 

        const { result } = renderHook(() => useFetchGifs('One Punch'))

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        )
        const { images, isLoading } = result.current

        expect(images.length).toBeGreaterThan(0)
        expect(isLoading).toBeFalsy()
     })
 })