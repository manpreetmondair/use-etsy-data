//average of price
    var totalprice = 0;
    items.forEach(average);
    function average(item){
        totalprice += item.price;
    }
        //to round to 2 decimal places
        console.log('The average price is' + ' $'+(totalprice / items.length).toFixed(2));

//an array of items that cost between $14.00 and $18.00 USD
var cheapItems = items.filter(function(item) {
    // check the condition if it is >=14 and <=18 and also currency_code
    return (item.price >= 14 && item.price <= 18 && item.currency_code === 'USD');
});
    // tilte was not working under one console so I decided to use another console to display it
    console.log('Show me how to get an array of items that cost between $14.00 and $18.00 USD')
    console.log(cheapItems)

//  find the item with a "GBP" currency code and print its name and price. 
// use of forEach to check the condition for each item
items.forEach(currencyCode);
function currencyCode(item){
    if (item.currency_code === 'GBP'){
        console.log(item.title, '£'+item.price)
    }
}

// find which items are made of wood
// Use of filter and includes to check it includes wood 
var woodItems = items.filter(function(item){
    return item.materials.includes('wood');
});
    woodItems.forEach(function(item){
        console.log(item.title + ' is made of wood.')
    })

// find which items are made of eight or more materials
// I used filter to check the condition and then forEach to display it as require in assignment
 var numberOfItems = items.filter(function(item) {
            return item.materials.length >= 8;
        });
    numberOfItems.forEach(function(item){
        console.log(item.title + ' has ' + item.materials.length + ' materials:'+('\n')+ item.materials.join('\n'))// \n is used for new line 
    })

//  how to calculate how many items were made by their sellers
var seller = items.filter(function(item){ 
    return item.who_made.includes('i_did');
});
console.log(seller.length + ' were made by their sellers')


