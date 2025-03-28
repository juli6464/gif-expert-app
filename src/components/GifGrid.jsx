import PropTypes from 'prop-types'
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    const {images, isLoading} =  useFetchGifs(category)
    console.log({isLoading})


    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && ('Cargando...')
            }
            
            <div className="card-grid">
                {
                    images.map( (image) => (
                        <GifItem 
                        key={ image.id } 
                        { ...image}
                        />
                    ))
                }
            </div>
        </>
    )
}


GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}