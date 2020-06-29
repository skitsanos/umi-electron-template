export const session = {
    initialState:
        localStorage.getItem('session') !== null
            ? JSON.parse(localStorage.getItem('session'))
            : {
                user: null,
                isLoggedIn: false
            },

    logout: s => () =>
    {
        const {setState} = s;

        setState({
            isLoggedIn: false,
            user: null
        });
    },

    login: s => payload =>
    {
        const {setState} = s;

        setState(payload);
    }
};