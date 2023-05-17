var giveMeAJoke = require('give-me-a-joke')

let protocol = (val) => {
    switch(val){
        case 1 :
            let dad = giveMeAJoke.getRandomDadJoke (joke => {
                console.log(joke);
            });
            break
        case 2 :
            let chuck = giveMeAJoke.getRandomCNJoke (function(joke) {
                console.log(joke);
            });
            break
        case 3 :
            var cat = "blonde";
            let category = giveMeAJoke.getRandomJokeOfTheDay (cat, function(joke) {
                // NOTE: The service provider has made the restriction of 5 calls an hour for RandomJokeOfTheDay
                console.log(joke);
            });
            break
        case 4 :
            // Way of calling the api: https://icanhazdadjoke.com/api#calling-the-api
            const url = 'https://icanhazdadjoke.com/';
            const getCustomJoke = async () => {
                try {
                    const response = await fetch(url, {
                        headers: {
                            'Accept': 'application/json'
                        }
                    });
                    const data = await response.json();
                    console.log(data.joke);
                } catch (error) {
                    console.log(error);
                }
            };
            getCustomJoke();
            break
        case 5 :
            process.exit()
        default:
            process.stdout.write("Invalid case")
            break
    }
        }

console.log(`\nInsert which type of Joke you want to hear:
1. Dad Joke
2. Chuck Norris
3. blondes
4. Fetch Joke
5. May be later`)

let joker = (val) => {
    protocol(parseInt(val))
}



process.stdin.on("data", joker)

// get random joke from the category
// giveMeAJoke.getRandomJokeOfTheDay (cat, function(joke) {
//     console.log(joke);
// });

