import createDataContext from './createDataContext'

import catsApi from '../api/cat-api'

const catsReducer = (state, action) => {
    switch (action.type) {
        case 'getBreedDetails':
            return { cats: action.payload }
        case 'getCatsImage':
            return {
                ...state,
                catsImage: action.payload
            }
        default:
            return state
    }
}

const getBreedDetails = (dispatch) => async () => {
    try {
        const response = await catsApi.get('/breeds')
        console.log(response)
        const catBreedsList = response.data.map((cat) => {
            return {
                breed: cat.name,
                id: cat.id,
                description: cat.description,
                temperament: cat.temperament,
                origin: cat.origin

            }
        })

        dispatch({ type: 'getBreedDetails', payload: catBreedsList })

    } catch (err) {
        console.log('err', err)
    }
}

const getCatsImagesByBreed = (dispatch) => async (breedId, limit) => {
    try {
        const response = await catsApi.get(`/images/search?breed_ids=${breedId}&limit=100`)
        dispatch({ type: 'getCatsImage', payload: response.data })
    } catch (err) {
        console.log('err', err)
    }
}

export const { Context, Provider } = createDataContext(catsReducer, { getBreedDetails, getCatsImagesByBreed }, {
    cats: [], catsImage: []
})