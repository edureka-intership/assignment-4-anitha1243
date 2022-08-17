var ratingData = [
    { restaurant: 'KFC', rating: 5 },
    { restaurant: 'Burger King', rating: 4 },
    { restaurant: 'KFC', rating: 3 },
    { restaurant: 'Domino', rating: 2 },
    { restaurant: 'Subway', rating: 3 },
    { restaurant: 'Domino', rating: 1 },
    { restaurant: 'Subway', rating: 4 },
    { restaurant: 'Pizza Hut', rating: 5 }
]

//4a

var restList = [];
var restsAvgRating = [];

ratingData.map((restO, index) => {
    if (!restList.includes(restO.restaurant)) {
        restList.push(restO.restaurant);
    }
});

restList.map((restL) => {
    var rec = ratingData.filter(p => p.restaurant === restL);
    var averageRating = 0;
    rec.map(v => {
        averageRating += v.rating
    })
    restsAvgRating.push({
        restaurant: rec[0].restaurant,
        averageRating: averageRating / rec.length
    })
});

console.log("4a - Restaurants average rating");
console.log(restsAvgRating);

console.log("4b - List of all restaurants with average rating greater than or equal to 4");
console.log(restsAvgRating.filter(r => r.averageRating >= 4));