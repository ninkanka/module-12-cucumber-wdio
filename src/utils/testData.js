export const PATHS = {
    home: '/',
    login: '/auth/login',
    register: '/auth/register',
    contact: '/contact',
    cart: '/checkout',
    favorites: '/account/favorites',
};

export const USERS = {
    valid: {
        email: 'customer@practicesoftwaretesting.com',
        password: 'welcome01',
    },

    newUser: {
        firstName: 'Nina',
        lastName: 'Nina',
        dateOfBirth: '2001-12-12',
        street: 'Wieniawskiego',
        postalCode: '33-333',
        houseNumber: '12',
        city: 'Leszno',
        state: 'świętokrzyskie',
        country: 'Poland',
        phone: '555111555',
        email: `nina.${Date.now()}@gmail.com`,
        password: 'passPass1=',
    },
};

export const BUTTONS = {
    addToCart: 'add-to-cart',
    addToFavorites: 'add-to-favorites',
    compare: 'add-to-compare',
};
