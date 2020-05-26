export const removeItem = (itemType, id) => (
    {
        type: 'REMOVE_ITEM',
        payload: {
            itemType,
            id
        }
    }
)

export const addItem = (itemType, itemContent) => (
    {
        type: 'ADD_ITEM',
        payload: {
            itemType,
            itemContent
        }
    }
) 