// var list= new Array(1,2,3);
// var list = [1,2,3];

// var object = new Object();
// var object = {};

// var waterBottle = {
//     isFull: false,     //Properties stores a value
//     oz: 16,
//     drink: function(){  // methods stores function
//     return 'drank';
//     }
// };
// var Array = {
//     length: 15,

// }
// function drink(){
//     return 'drank';
// 
// drink: drink and call this in function
// console.log(waterBottle.oz)
// console.log(waterBottle.isFull)
// console.log(waterBottle.drink())
// ARRAYS

// var movies = [
//     'pulp Fiction',
//     'Frozen',
//     'The Goonies',
//     'Trools',
// ]
// console.log(movies);
// console.log(movies.length);

// console.log(movies[0].toUpperCase());
// movies[1] = 'Wall-E';
// console.log(movies);

// console.log(movies.pop());    //pop the last item of an array
// console.log(movies);

// console.log(movies.slice(1));

// var emailAddress = 'mosdba.manba@gmail.com';
// var domainName = emailAddress.split('@').pop();
// console.log(domainName);



// var movies = [
//       {
//          title: 'pulp Fiction',
//          year: 1996
//       },
//       {
//             title: 'Frozen',
//             year: 2014
//       },
//       {
//              title: 'Trools',
//              year: 2015
//       },
//       {
//            title: 'The Goonies' ,
//            year: 1986
//       }
// ];
// for(var i=0; i< movies.length; i++){
//     var movieTitle = movies[i].title;
//     console.log(movieTitle);
// }

// movies.forEach(function(movie) {
//     console.log(movie);
//     console.log(movie.title);
//     console.log(movie.year);
// });


// OR
// movies.forEach(logMovie); 
// function logMovie(movie) {
//     console.log(movie);
//     console.log(movie.title);
//     console.log(movie.year);
// }

// var prices = [12, 54, 12.68, 12.78, 12.00]
// var total = 0;
// prices.forEach(showPrices);

// function showPrices(price){
//     total += price;
// }

// console.log(total);
// OR DO BY USING THIS PURE FUNCTION
// var total = prices.reduce(function(prev, next){
//           return prev + next;
// }, 0);  //0 is starting point

// console.log(total);


// var movies = [
//       {
//          title: 'pulp Fiction',
//          year: 1996
//       },
//       {
//             title: 'Frozen',
//             year: 2014
//       },
//       {
//              title: 'Trools',
//              year: 2015
//       },
//       {
//            title: 'The Goonies' ,
//            year: 1986
//       }
// ];

// var movieTitles = [];
// movies.forEach(Function(movie) {
//     movieTitles.push(movie.title);
// });
// console.log(movieTitles);

// var movieYears = getMovieYears(movie);

// function getMovieYears(listOfMovies) {
//     return listOfMovies.map(function(movie){
//         return movie.year;
//     });
// }
// console.log(movieYears);

// var names = ['Bart', 'Homer', 'Morty'];
// var serachTerm = 'bart';

// names.filter(function(name){
//     return name.toLowerCase() === includessearchTerm.toLowerCase();
//     return name.toLowerCase() === searchTerm.toLowerCase();
// });
// console.log(matches);
var songs =[ 
    {
        title: 'My Short',
        year: 2015,
        performace: 'Hamilton',
    },
    {
        title: 'Satisfied',
        year: 2014,
        performace: 'Amgelica Schuylier',
    },
   ];

var songTitles = getSongTitles(songs);
// ['My Short', 'Satisfied'];

function getSongTitles(songList){
    return songList.map(function(song){
        return song.title;
    });
}

console.log(songTitles);
