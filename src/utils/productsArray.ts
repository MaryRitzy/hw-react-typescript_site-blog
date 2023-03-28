export type Product = {
    id: number
    title: string
    description: string
    сategory: string
    capacity: string
    price: number
    image: string
}

const productsArray: Product[] = [
    {
        id: 1,
        title: 'Oleg Psyuk - founder of the band "Kalush"',
        description: 'This is iPhone 14 Pro',
        сategory: 'Team',
        capacity: '256',
        price: 1500,
        image:'/image/OlegKalush_card2a.jpg',
    },

    {
        id: 2,
        title: 'Kalush Orchestra won Eurovision 2022',
        description: 'Kalush Orchestra won Eurovision 2022sdfdsvfs',
        сategory: 'News',
        capacity: '128',
        price: 1200,
        image:'/image/Eurovision_card2a.jpg',
    },

    {
        id: 3,
        title: 'Schwarzenegger starred in Kalush Orchestra music video ',
        description: 'This is iPhone 12 Pro',
        сategory: 'News',
        capacity: '512',
        price: 1000,
        image:'/image/ArnoldKalush_card2a.jpg',
    },

    {
        id: 4,
        title: 'Kalush Orchestra collected 1,450 mln $ for the Armed Forces',
        description: 'This is iPhone 11 Pro',
        сategory: 'News',
        capacity: '128',
        price: 500,
        image:'/image/FundraisingKalush_card2a.jpg',
    },
    {
        id: 5,
        title: 'iPhone 8 plus',
        description: 'This 8 plus',
        сategory: 'Album',
        capacity: '256',
        price: 500,
        image:'/image/Albom2a.jpg',
    },
    
    {
        id: 6,
        title: 'iPhone X',
        description: 'This is iPhone X',
        сategory: 'Team',
        capacity: '64',
        price: 500,
        image:'/image/KylymKalush_card1a.jpg',
    },
    {
        id: 7,
        title: 'Mass demand for the business card of the Eurovision winner',
        description: 'This is iPhone X',
        сategory: 'News',
        capacity: '64',
        price: 500,
        image:'/image/CapKalush_card2a.jpg',
    },
    {
        id: 8,
        title: 'Sasha Tab is a musician and vocalist of the band Kalush Orchestra',
        description: 'This is iPhone X',
        сategory: 'Team',
        capacity: '64',
        price: 500,
        image:'/image/Sasha_card3a.jpg',
        
    },

        {
        id: 9,
        title: 'Tymofiy Muzychuk, soloist of the band Kalush Orchestra',
        description: 'This is iPhone X',
        сategory: 'Team',
        capacity: '64',
        price: 500,
        image:'/image/MuzenchkoKalush_card2a.jpg',
    },
    {
        id: 10,
        title: 'HOTIN is the debut studio album of the band KALUSH',
        description: 'This is iPhone X',
        сategory: 'Album',
        capacity: '64',
        price: 500,
        image:'/image/Albom1a.jpg',
    },
]


export const getProductsObject = (array:Product[]) => array.reduce((object, product) => ({
    ...object,
    [product.id]: product,
}),{})



export default productsArray
