import { getComponentPartsList } from "../../../common/loaders/IconsLoader"

const componentParts = getComponentPartsList()



const defaultFilter = {
  name: "",
  sorterKey: "Name",
  sorterIncrease: false,
  params: [],
  types: Object.fromEntries(componentParts.map(x => [x.type, true])),
  limitKey: 0,
}


const FilterReducer = (state = { filter: defaultFilter, params: {} }, action = {}) => {
  switch (action.type) {
    case 'setKeySorter': {
      let filter = state.filter

      return {
        ...state,
        filter: { ...filter, sorterKey: action.payload },
      }
    }

    case 'setIsIncrease': {
      let filter = state.filter

      return {
        ...state,
        filter: { ...filter, sorterIncrease: action.payload },
      }
    }

    case 'setLimitKey': {
      let filter = state.filter

      return {
        ...state,
        filter: { ...filter, limitKey: action.payload },
      }
    }

    case 'setupParams': {

      return {
        ...state,
        params: action.payload
      }
    }

    case 'setParams': {
      let filter = state.filter

      return {
        ...state,
        filter: { ...filter, params: action.payload },
      }
    }


    case 'setName': {
      let filter = state.filter

      return {
        ...state,
        filter: { ...filter, name: action.payload },
      }
    }

    case 'setTypes': {
      let filter = state.filter

      return {
        ...state,
        filter: { ...filter, types: action.payload },
      }
    }
    default: {
      return { ...state }
    }
  }
}

export default FilterReducer


