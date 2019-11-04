let initialItems = [{
    description: "Nice boats. 50% off. wow.",
    price: 10000,
    image: "/boat.png",
    id: "asewq",
    sellerId: "ewio",
    stock: 3
}, {
    id: "wqwasq",
    description: "Lawn chairs",
    price: 50,
    image: "/lawnchair.jpg",
    sellerId: "xcvb",
    stock: 5
}]

let reviews = [{
    content: "great boat",
    itemId: "asewq",
    reviewerId: "weoi"
}, {
    content: "Love this boat",
    itemId: "asewq",
    reviewerId: "zxc"
}]

let reviewers = [{
    id: "weoi",
    name: "bob"
}, {
    id: "zxc",
    name: "sue"
}]

let initialSellers = [{
    id: "ewio",
    name: "Jack Frost",
    rating: "5 stars",
}, {
    id: "xcvb",
    name: "Hank Green",
    rating: "2 stars",
}]
export { initialItems, initialSellers, reviews, reviewers } 