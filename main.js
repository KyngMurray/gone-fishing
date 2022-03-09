const prompt = require("prompt-sync")({sigint: true});
let fish = ([
    {name: 'Banjo Catfish ', weight: 5.55, price: 10.23},
    {name: 'Fluke Fish ', weight: 3.33, price: 5.32},
    {name: 'Yellowfin Tuna ', weight: 4.44, price: 8.88},
    {name: 'Albacore Tuna ', weight: 2.22, price: 3.23},
    {name: 'Salmon ', weight: 8.88, price: 23.23},
    {name: 'King Fish ', weight: 7.77, price: 13.13},
    {name: 'Sucker Fish', weight: 6.66, price: 11.11},
    {name: 'Anchovies ', weight: 1.11, price: .99},
]);
 let stats = {
    fishCount: 0,
    fishWeight: 0,
    fishPrice: 0
}
let caught = []
let random = Math.floor(Math.random() * fish.length)
let fishing = fish[random]
let time = 6
console.log(' ')
console.log('Welcome to Kyng\'s Deep Sea Fishing...Where we go DEEP!')
console.log('Our Hours are from 6am-12pm. We also have a limit of 10lbs per Customer. ')
console.log(' ')
while (time < 12) {
    console.log(' ');
    console.log('===============================================================')
    console.log(' ')
    console.log(`The Time is ${time}:00am. So Far You\'ve Caught: `)
    console.log(`${stats.fishCount} FISH, ${stats.fishWeight} LBS, $${stats.fishPrice}`)
    console.log(' ')
    console.log('===============================================================')
    console.log(' ')
    random = Math.floor(Math.random() * fish.length)
    fishing = fish[random]
    console.log(' ')
    console.log('Congrats! Look what you\'ve got on your Line!: ')
    console.log(' ')
    console.log(`${fishing.name}, ${fishing.weight} LBS, $${fishing.price}`)
    console.log(' ')
    time += 1;
    // edits - Remember if something needs to be checked everytime, always ask for it at the beginning -- In this case, i must have it check the weight 1st.
    if (stats.fishWeight + fishing.weight <= 10){
        console.log(' ');
        console.log('[C]atch or [R]elease?');
        console.log(' ');
        let action = prompt();
        if (action === 'c' || action === 'C') {
            caught.push(fishing);
            // edits - dont have to use for loop -- just add the last index of caught to each element.
            stats.fishCount = caught.length;
            stats.fishWeight += caught[caught.length-1].weight;
            stats.fishPrice += caught[caught.length-1].price;
            
        } else if (action === 'r' || action === 'R') {
            console.log(' ');
            console.log('You\'ve Released this Fish. There are Plenty Fish In The Sea, If you have Time/Space, Grab Another! ');
        }
        
    } else {
        console.log(' ');
        console.log('TOO DEEP! Remember we have a 10 LB Limit. Adding this Fish would put you Over the Limit. ')
        console.log('Keep on fishing!')
        prompt('Press any key to continue ')
        console.log('');
    }
    
}
console.log(' ');
console.log('The time is 12:00pm. Times up!');
console.log(' ');
console.log(`You caught ${stats.fishCount} fish:`);
console.log('------------------------------------');
console.log(' ');
for (i = 0; i < caught.length; i++) {
    console.log('[' + [i + 1]+ '] ' + caught[i].name + ', ' + caught[i].weight + ' LBS' + ', $' + caught[i].price)
} 
console.log(' ');
console.log(`Total weight: ${stats.fishWeight} & Total value: ${stats.fishPrice}`)
console.log(' ');
console.log(' ');