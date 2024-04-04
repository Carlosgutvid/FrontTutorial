import { LoanPage } from "./LoanPage";

export const LOAN_DATA: LoanPage = {
    content: [
        {
            id: 1,
            game: {
                id: 1,
                title: 'Red Dead Redemption 2',
                age: 18,
                category: {
                    id: 1,
                    name: 'Acción y aventura'
                },
                author: {
                    id: 1,
                    name: 'Rockstar Games',
                    nationality: 'Estadounidense'
                }
            },
            client: {
                id: 1,
                name: 'Jose'
            },
            startDate: new Date(2020, 7, 15),
            endDate: new Date(2021, 8, 20)
        },
        {
            id: 2,
            game: {
                id: 2,
                title: 'The Witcher 3: Wild Hunt',
                age: 18,
                category: {
                    id: 2,
                    name: 'RPG'
                },
                author: {
                    id: 2,
                    name: 'CD Projekt Red',
                    nationality: 'Polaco'
                }
            },
            client: {
                id: 2,
                name: 'Maria'
            },
            startDate: new Date(2022, 10, 1),
            endDate: new Date(2022, 10, 10)
        },
        {
            id: 3,
            game: {
                id: 3,
                title: 'God of War',
                age: 18,
                category: {
                    id: 3,
                    name: 'Acción y aventura'
                },
                author: {
                    id: 3,
                    name: 'Santa Monica Studio',
                    nationality: 'Estadounidense'
                }
            },
            client: {
                id: 3,
                name: 'Pablo'
            },
            startDate: new Date(2021, 2, 25),
            endDate: new Date(2023, 6, 5)
        },
        {
            id: 4,
            game: {
                id: 4,
                title: 'The Last of Us Part II',
                age: 18,
                category: {
                    id: 4,
                    name: 'Acción y aventura'
                },
                author: {
                    id: 4,
                    name: 'Naughty Dog',
                    nationality: 'Estadounidense'
                }
            },
            client: {
                id: 4,
                name: 'Guillermo'
            },
            startDate: new Date(2019, 5, 10),
            endDate: new Date(2023, 1, 15)
        },
        {
            id: 5,
            game: {
                id: 5,
                title: 'Horizon Zero Dawn',
                age: 16,
                category: {
                    id: 5,
                    name: 'Acción y aventura'
                },
                author: {
                    id: 5,
                    name: 'Guerrilla Games',
                    nationality: 'Neerlandés'
                }
            },
            client: {
                id: 5,
                name: 'Gonzalo'
            },
            startDate: new Date(2020, 11, 1),
            endDate: new Date(2021, 4, 20)
        }

    ],
    pageable: {
        pageSize: 5,
        pageNumber: 0,
        sort: [
            { property: "id", direction: "ASC" }
        ]
    },
    totalElements: 5
}