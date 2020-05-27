const Songlist = [];

export default (state = Songlist, action) => {
    switch (action.type) {
        case 'DATA_FETCH':
            return {
                ...state,AvailableSonglistlist:action.payload,
            }
        default:
            return state;
    }
}