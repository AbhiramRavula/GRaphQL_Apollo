let games = [
    {id: '1', title: 'Zelda, Tears of the Kingdom', platform: ['Switch']},
    {id: '2', title: 'Final Fantasy 7 Remake', platform: ['PS5', 'Xbox']},
    {id: '3', title: 'Elden Ring', platform: ['PS5', 'Xbox', 'PC']},
    {id: '4', title: 'Mario Kart', platform: ['Switch']},
    {id: '5', title: 'Pokemon Scarlet', platform: ['PS5', 'Xbox', 'PC']},
  ]
  
  let authors = [
    {id: '1', name: 'mario', verified: true},
    {id: '2', name: 'yoshi', verified: false},
    {id: '3', name: 'peach', verified: true},
  ]
  
  let reviews = [
    {id: '1', rating: 9, content: 'lorem ipsum', author_id: '1', game_id: '2'},
    {id: '2', rating: 10, content: 'lorem ipsum', author_id: '2', game_id: '1'},
    {id: '3', rating: 7, content: 'lorem ipsum', author_id: '3', game_id: '3'},
    {id: '4', rating: 5, content: 'lorem ipsum', author_id: '2', game_id: '4'},
    {id: '5', rating: 8, content: 'lorem ipsum', author_id: '2', game_id: '5'},
    {id: '6', rating: 7, content: 'lorem ipsum', author_id: '1', game_id: '2'},
    {id: '7', rating: 10, content: 'lorem ipsum', author_id: '3', game_id: '1'},
  ]
  
  export default { games, authors, reviews }


// let games = [
//     {
//         id: 1,
//         title: "The Legend of Zelda: Breath of the Wild",
//         platform: ["Nintendo Switch", "Wii U"],
//     },
//     {
//         id: 2,
//         title: "Super Mario Odyssey",
//         platform: ["Nintendo Switch"],
//     },
//     {
//         id: 3,
//         title: "The Witcher 3: Wild Hunt",
//         platform: ["PC", "PS4", "Xbox One", "Nintendo Switch"],
//     },
//     {
//         id: 4,
//         title: "God of War",
//         platform: ["PS4"],
//     },
//     {
//         id: 5,
//         title: "Red Dead Redemption 2",
//         platform: ["PC", "PS4", "Xbox One"],
//     },
//     {
//         id: 6,
//         title: "Dark Souls III",
//         platform: ["PC", "PS4", "Xbox One"],
//     },
//     {
//         id: 7,
//         title: "Hollow Knight",
//         platform: ["PC", "Nintendo Switch", "PS4", "Xbox One"],
//     },
//     {
//         id: 8,
//         title: "Celeste",
//         platform: ["PC", "Nintendo Switch", "PS4", "Xbox One"],
//     },
//     {
//         id: 9,
//         title: "Stardew Valley",
//         platform: ["PC", "Nintendo Switch", "PS4", "Xbox One"],
//     },
//     {
//         id: 10,
//         title: "Among Us",
//         platform: ["PC", "Nintendo Switch", "iOS", "Android"],
//     },
// ]

// let authors = [
//     {
//         id: 1,
//         name: "John Doe",
//         verified: true,
//     },
//     {
//         id: 2,
//         name: "Jane Smith",
//         verified: false,
//     },
//     {
//         id: 3,
//         name: "Alice Johnson",
//         verified: true,
//     },
//     {
//         id: 4,
//         name: "Bob Brown",
//         verified: false,
//     },
//     {
//         id: 5,
//         name: "Charlie Green",
//         verified: true,
//     },
//     {
//         id: 6,
//         name: "Diana White",
//         verified: false,
//     },
// ]

// let reviews = [
//     {
//         id: 1,
//         rating: 5,
//         content: "An amazing game with stunning graphics and gameplay.",
//         authorId: 1,
//         gameId: 1,
//     },
//     {
//         id: 2,
//         rating: 4,
//         content: "Great story and characters, but some bugs.",
//         authorId: 2,
//         gameId: 2,
//     },
//     {
//         id: 3,
//         rating: 3,
//         content: "Good game, but not as good as the previous one.",
//         authorId: 3,
//         gameId: 3,
//     },
// ]