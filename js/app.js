"use strict";
let salesProfiles = document.getElementById('salesProfiles');
let time = ['Location', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let articleElement = document.createElement('article');
salesProfiles.appendChild(articleElement);
const tableEle = document.createElement('table');
articleElement.appendChild(tableEle);
let tr1 = document.createElement('tr');
tableEle.appendChild(tr1);
for (let i = 0; i < time.length; i++) {
    let th1 = document.createElement('th');
    th1.textContent = time[i];
    tr1.appendChild(th1)
}
let th1 = document.createElement('th');
th1.textContent = 'Daily Location Total';
tr1.appendChild(th1)


function store(Location, minCustumerPerHour, maxCustumerPerHour, averageCookiesPerCustomer) {
    this.Location = Location;
    this.minCustumerPerHour = minCustumerPerHour;
    this.maxCustumerPerHour = maxCustumerPerHour;
    this.averageCookiesPerCustomer = averageCookiesPerCustomer;
    this.sales = [];
    this.Total = 0;
}
store.prototype.getSales = function(min, max, avg) {
    min = this.minCustumerPerHour;
    max = this.maxCustumerPerHour;
    avg = this.averageCookiesPerCustomer;
    for (let i = 0; i < time.length - 1; i++)
        this.sales[i] = Math.floor((Math.random() * (max - min + 1) + min) * avg);
    return this.sales;
};
store.prototype.getResults = function() {
    for (let i = 0; i < time.length - 1; i++)
        this.Total += this.sales[i];
    return this.Total;
};
store.prototype.render = function() {
    let tr2 = document.createElement('tr');
    tr2.textContent = this.Location;
    tableEle.appendChild(tr2);
    for (let i = 0; i < time.length - 1; i++) {
        let td1 = document.createElement('td');
        td1.textContent = this.sales[i];
        tr2.appendChild(td1);
    }
    let td2 = document.createElement('td');
    td2.textContent = this.Total;
    tr2.appendChild(td2);

}
let Seattle = new store('Seattle', 23, 65, 6.3);
let Tokyo = new store('Tokyo', 3, 24, 1.2);
let Dubai = new store('Dubai', 11, 38, 3.7);
let Paris = new store('Paris', 20, 38, 2.3);
let Lima = new store('Lima', 2, 16, 4.6);
Seattle.getSales();
Seattle.getResults();
Seattle.render();
Tokyo.getSales();
Tokyo.getResults();
Tokyo.render();
Dubai.getSales();
Dubai.getResults();
Dubai.render();
Paris.getSales();
Paris.getResults();
Paris.render();
Lima.getSales();
Lima.getResults();
Lima.render();
let tr3 = document.createElement('tfoot');
tr3.textContent = 'Totals';
let arr = [];
tableEle.appendChild(tr3);
for (let i = 0; i < time.length - 1; i++) {
    let td1 = document.createElement('td');
    arr[i] = Seattle.sales[i] + Tokyo.sales[i] + Dubai.sales[i] + Paris.sales[i] + Lima.sales[i];
    td1.textContent = arr[i];
    tr3.appendChild(td1);
}
let td2 = document.createElement('td');
td2.textContent = Seattle.Total + Tokyo.Total + Dubai.Total + Paris.Total + Lima.Total;
tr3.appendChild(td2);
// lab 06 :
// const SeattleStore = {
//     Location: "Seattle",
//     minCustumerPerHour: 23,
//     maxCustumerPerHour: 65,
//     averageCookiesPerCustomer: 6.3,
//     time: 'am',
//     sales: function(min, max, avg) {
//         min = this.minCustumerPerHour;
//         max = this.maxCustumerPerHour;
//         avg = this.averageCookiesPerCustomer;
//         return Math.floor((Math.random() * (max - min) + min) * avg);

//     },
//     results: [],
//     Total: 0,

//     render: function() {


//         let articleElement = document.createElement('article');

//         salesProfiles.appendChild(articleElement);

//         let h2Element = document.createElement('h2');
//         h2Element.textContent = this.Location;
//         articleElement.appendChild(h2Element);


//         let ulElement = document.createElement('ul');
//         articleElement.appendChild(ulElement);

//         for (let i = 0; i < 15; i++) {
//             if (i + 6 < 12) {
//                 let liElement = document.createElement('li');
//                 liElement.textContent = i + 6 + ' am: ' + this.results[i] + ' Cookies';
//                 ulElement.appendChild(liElement);
//             } else if (i + 6 == 12) {
//                 let liElement = document.createElement('li');
//                 liElement.textContent = 12 + ' am: ' + this.results[i] + ' Cookies';
//                 ulElement.appendChild(liElement);
//             } else {
//                 let liElement = document.createElement('li');
//                 liElement.textContent = i - 6 + ' pm: ' + this.results[i] + ' Cookies';
//                 ulElement.appendChild(liElement);
//             }



//         }
//         let liElement15 = document.createElement('li');
//         liElement15.textContent = "Total:  " + this.Total + "Cookies";
//         ulElement.appendChild(liElement15);


//     }

// }


// const TokyoStore = {
//     Location: "Tokyo",
//     minCustumerPerHour: 3,
//     maxCustumerPerHour: 24,
//     averageCookiesPerCustomer: 1.2,
//     time: 'am',
//     sales: function(min, max, avg) {
//         min = this.minCustumerPerHour;
//         max = this.maxCustumerPerHour;
//         avg = this.averageCookiesPerCustomer;
//         return Math.floor((Math.random() * (max - min) + min) * avg);

//     },
//     results: [],
//     Total: 0,

//     render: function() {


//         let articleElement = document.createElement('article');

//         salesProfiles.appendChild(articleElement);

//         let h2Element = document.createElement('h2');
//         h2Element.textContent = this.Location;
//         articleElement.appendChild(h2Element);


//         let ulElement = document.createElement('ul');
//         articleElement.appendChild(ulElement);

//         for (let i = 0; i < 15; i++) {
//             if (i + 6 < 12) {
//                 let liElement = document.createElement('li');
//                 liElement.textContent = i + 6 + ' am: ' + this.results[i] + ' Cookies';
//                 ulElement.appendChild(liElement);
//             } else if (i + 6 == 12) {
//                 let liElement = document.createElement('li');
//                 liElement.textContent = 12 + ' am: ' + this.results[i] + ' Cookies';
//                 ulElement.appendChild(liElement);
//             } else {
//                 let liElement = document.createElement('li');
//                 liElement.textContent = i - 6 + ' pm: ' + this.results[i] + ' Cookies';
//                 ulElement.appendChild(liElement);
//             }

//         }

//         let liElement15 = document.createElement('li');
//         liElement15.textContent = "Total:  " + this.Total + "Cookies";
//         ulElement.appendChild(liElement15);
//     }

// }

// const DubaiStore = {
//     Location: "Dubai",
//     minCustumerPerHour: 11,
//     maxCustumerPerHour: 38,
//     averageCookiesPerCustomer: 3.7,
//     time: 'am',
//     sales: function(min, max, avg) {
//         min = this.minCustumerPerHour;
//         max = this.maxCustumerPerHour;
//         avg = this.averageCookiesPerCustomer;
//         return Math.floor((Math.random() * (max - min) + min) * avg);

//     },
//     results: [],
//     Total: 0,

//     render: function() {


//         let articleElement = document.createElement('article');

//         salesProfiles.appendChild(articleElement);

//         let h2Element = document.createElement('h2');
//         h2Element.textContent = this.Location;
//         articleElement.appendChild(h2Element);


//         let ulElement = document.createElement('ul');
//         articleElement.appendChild(ulElement);

//         for (let i = 0; i < 15; i++) {
//             if (i + 6 < 12) {
//                 let liElement = document.createElement('li');
//                 liElement.textContent = i + 6 + ' am: ' + this.results[i] + ' Cookies';
//                 ulElement.appendChild(liElement);
//             } else if (i + 6 == 12) {
//                 let liElement = document.createElement('li');
//                 liElement.textContent = 12 + ' am: ' + this.results[i] + ' Cookies';
//                 ulElement.appendChild(liElement);
//             } else {
//                 let liElement = document.createElement('li');
//                 liElement.textContent = i - 6 + ' pm: ' + this.results[i] + ' Cookies';
//                 ulElement.appendChild(liElement);
//             }

//         }

//         let liElement15 = document.createElement('li');
//         liElement15.textContent = "Total:  " + this.Total + "Cookies";
//         ulElement.appendChild(liElement15);
//     }

// }

// const ParisStore = {
//     Location: "Paris",
//     minCustumerPerHour: 20,
//     maxCustumerPerHour: 38,
//     averageCookiesPerCustomer: 2.3,
//     time: 'am',
//     sales: function(min, max, avg) {
//         min = this.minCustumerPerHour;
//         max = this.maxCustumerPerHour;
//         avg = this.averageCookiesPerCustomer;
//         return Math.floor((Math.random() * (max - min) + min) * avg);

//     },
//     results: [],
//     Total: 0,

//     render: function() {


//         let articleElement = document.createElement('article');

//         salesProfiles.appendChild(articleElement);

//         let h2Element = document.createElement('h2');
//         h2Element.textContent = this.Location;
//         articleElement.appendChild(h2Element);


//         let ulElement = document.createElement('ul');
//         articleElement.appendChild(ulElement);

//         for (let i = 0; i < 15; i++) {
//             if (i + 6 < 12) {
//                 let liElement = document.createElement('li');
//                 liElement.textContent = i + 6 + ' am: ' + this.results[i] + ' Cookies';
//                 ulElement.appendChild(liElement);
//             } else if (i + 6 == 12) {
//                 let liElement = document.createElement('li');
//                 liElement.textContent = 12 + ' am: ' + this.results[i] + ' Cookies';
//                 ulElement.appendChild(liElement);
//             } else {
//                 let liElement = document.createElement('li');
//                 liElement.textContent = i - 6 + ' pm: ' + this.results[i] + ' Cookies';
//                 ulElement.appendChild(liElement);
//             }

//         }
//         let liElement15 = document.createElement('li');
//         liElement15.textContent = "Total:  " + this.Total + "Cookies";
//         ulElement.appendChild(liElement15);

//     }

// }

// const LimaStore = {
//     Location: "Lima",
//     minCustumerPerHour: 2,
//     maxCustumerPerHour: 16,
//     averageCookiesPerCustomer: 4.6,
//     time: 'am',
//     sales: function(min, max, avg) {
//         min = this.minCustumerPerHour;
//         max = this.maxCustumerPerHour;
//         avg = this.averageCookiesPerCustomer;
//         return Math.floor((Math.random() * (max - min) + min) * avg);

//     },
//     results: [],
//     Total: 0,

//     render: function() {


//         let articleElement = document.createElement('article');

//         salesProfiles.appendChild(articleElement);

//         let h2Element = document.createElement('h2');
//         h2Element.textContent = this.Location;
//         articleElement.appendChild(h2Element);


//         let ulElement = document.createElement('ul');
//         articleElement.appendChild(ulElement);

//         for (let i = 0; i < 15; i++) {
//             if (i + 6 < 12) {
//                 let liElement = document.createElement('li');
//                 liElement.textContent = i + 6 + ' am: ' + this.results[i] + ' Cookies';
//                 ulElement.appendChild(liElement);
//             } else if (i + 6 == 12) {
//                 let liElement = document.createElement('li');
//                 liElement.textContent = 12 + ' am: ' + this.results[i] + ' Cookies';
//                 ulElement.appendChild(liElement);
//             } else {
//                 let liElement = document.createElement('li');
//                 liElement.textContent = i - 6 + ' pm: ' + this.results[i] + ' Cookies';
//                 ulElement.appendChild(liElement);
//             }

//         }
//         let liElement15 = document.createElement('li');
//         liElement15.textContent = "Total:  " + this.Total + "Cookies";
//         ulElement.appendChild(liElement15);

//     }

// }

// for (let i = 0; i < 15; i++)
//     SeattleStore.results[i] = SeattleStore.sales();
// for (let i = 0; i < 15; i++) {
//     SeattleStore.Total += SeattleStore.results[i];
// }
// for (let i = 0; i < 15; i++)
//     TokyoStore.results[i] = TokyoStore.sales();
// for (let i = 0; i < 15; i++) {
//     TokyoStore.Total += TokyoStore.results[i];
// }
// for (let i = 0; i < 15; i++)
//     DubaiStore.results[i] = DubaiStore.sales();
// for (let i = 0; i < 15; i++) {
//     DubaiStore.Total += DubaiStore.results[i];
// }
// for (let i = 0; i < 15; i++)
//     ParisStore.results[i] = ParisStore.sales();
// for (let i = 0; i < 15; i++) {
//     ParisStore.Total += ParisStore.results[i];
// }
// for (let i = 0; i < 15; i++)
//     LimaStore.results[i] = LimaStore.sales();
// for (let i = 0; i < 15; i++) {
//     LimaStore.Total += LimaStore.results[i];
// }

// SeattleStore.render();
// TokyoStore.render();
// DubaiStore.render();
// ParisStore.render();
// LimaStore.render();