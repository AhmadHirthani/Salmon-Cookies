"use strict";
let salesProfiles = document.getElementById('salesProfiles');

const SeattleStore = {
    Location: "Seattle",
    minCustumerPerHour: 23,
    maxCustumerPerHour: 65,
    averageCookiesPerCustomer: 6.3,
    time: 'am',
    sales: function(min, max, avg) {
        min = this.minCustumerPerHour;
        max = this.maxCustumerPerHour;
        avg = this.averageCookiesPerCustomer;
        return Math.floor((Math.random() * (max - min) + min) * avg);

    },
    results: [],
    Total: 0,

    render: function() {


        let articleElement = document.createElement('article');

        salesProfiles.appendChild(articleElement);

        let h2Element = document.createElement('h2');
        h2Element.textContent = this.Location;
        articleElement.appendChild(h2Element);


        let ulElement = document.createElement('ul');
        articleElement.appendChild(ulElement);

        for (let i = 0; i < 15; i++) {
            if (i + 6 < 12) {
                let liElement = document.createElement('li');
                liElement.textContent = i + 6 + ' am: ' + this.results[i] + ' Cookies';
                ulElement.appendChild(liElement);
            } else if (i + 6 == 12) {
                let liElement = document.createElement('li');
                liElement.textContent = 12 + ' am: ' + this.results[i] + ' Cookies';
                ulElement.appendChild(liElement);
            } else {
                let liElement = document.createElement('li');
                liElement.textContent = i - 6 + ' pm: ' + this.results[i] + ' Cookies';
                ulElement.appendChild(liElement);
            }



        }
        let liElement15 = document.createElement('li');
        liElement15.textContent = "Total:  " + this.Total + "Cookies";
        ulElement.appendChild(liElement15);


    }

}


const TokyoStore = {
    Location: "Tokyo",
    minCustumerPerHour: 3,
    maxCustumerPerHour: 24,
    averageCookiesPerCustomer: 1.2,
    time: 'am',
    sales: function(min, max, avg) {
        min = this.minCustumerPerHour;
        max = this.maxCustumerPerHour;
        avg = this.averageCookiesPerCustomer;
        return Math.floor((Math.random() * (max - min) + min) * avg);

    },
    results: [],
    Total: 0,

    render: function() {


        let articleElement = document.createElement('article');

        salesProfiles.appendChild(articleElement);

        let h2Element = document.createElement('h2');
        h2Element.textContent = this.Location;
        articleElement.appendChild(h2Element);


        let ulElement = document.createElement('ul');
        articleElement.appendChild(ulElement);

        for (let i = 0; i < 15; i++) {
            if (i + 6 < 12) {
                let liElement = document.createElement('li');
                liElement.textContent = i + 6 + ' am: ' + this.results[i] + ' Cookies';
                ulElement.appendChild(liElement);
            } else if (i + 6 == 12) {
                let liElement = document.createElement('li');
                liElement.textContent = 12 + ' am: ' + this.results[i] + ' Cookies';
                ulElement.appendChild(liElement);
            } else {
                let liElement = document.createElement('li');
                liElement.textContent = i - 6 + ' pm: ' + this.results[i] + ' Cookies';
                ulElement.appendChild(liElement);
            }

        }

        let liElement15 = document.createElement('li');
        liElement15.textContent = "Total:  " + this.Total + "Cookies";
        ulElement.appendChild(liElement15);
    }

}

const DubaiStore = {
    Location: "Dubai",
    minCustumerPerHour: 11,
    maxCustumerPerHour: 38,
    averageCookiesPerCustomer: 3.7,
    time: 'am',
    sales: function(min, max, avg) {
        min = this.minCustumerPerHour;
        max = this.maxCustumerPerHour;
        avg = this.averageCookiesPerCustomer;
        return Math.floor((Math.random() * (max - min) + min) * avg);

    },
    results: [],
    Total: 0,

    render: function() {


        let articleElement = document.createElement('article');

        salesProfiles.appendChild(articleElement);

        let h2Element = document.createElement('h2');
        h2Element.textContent = this.Location;
        articleElement.appendChild(h2Element);


        let ulElement = document.createElement('ul');
        articleElement.appendChild(ulElement);

        for (let i = 0; i < 15; i++) {
            if (i + 6 < 12) {
                let liElement = document.createElement('li');
                liElement.textContent = i + 6 + ' am: ' + this.results[i] + ' Cookies';
                ulElement.appendChild(liElement);
            } else if (i + 6 == 12) {
                let liElement = document.createElement('li');
                liElement.textContent = 12 + ' am: ' + this.results[i] + ' Cookies';
                ulElement.appendChild(liElement);
            } else {
                let liElement = document.createElement('li');
                liElement.textContent = i - 6 + ' pm: ' + this.results[i] + ' Cookies';
                ulElement.appendChild(liElement);
            }

        }

        let liElement15 = document.createElement('li');
        liElement15.textContent = "Total:  " + this.Total + "Cookies";
        ulElement.appendChild(liElement15);
    }

}

const ParisStore = {
    Location: "Paris",
    minCustumerPerHour: 20,
    maxCustumerPerHour: 38,
    averageCookiesPerCustomer: 2.3,
    time: 'am',
    sales: function(min, max, avg) {
        min = this.minCustumerPerHour;
        max = this.maxCustumerPerHour;
        avg = this.averageCookiesPerCustomer;
        return Math.floor((Math.random() * (max - min) + min) * avg);

    },
    results: [],
    Total: 0,

    render: function() {


        let articleElement = document.createElement('article');

        salesProfiles.appendChild(articleElement);

        let h2Element = document.createElement('h2');
        h2Element.textContent = this.Location;
        articleElement.appendChild(h2Element);


        let ulElement = document.createElement('ul');
        articleElement.appendChild(ulElement);

        for (let i = 0; i < 15; i++) {
            if (i + 6 < 12) {
                let liElement = document.createElement('li');
                liElement.textContent = i + 6 + ' am: ' + this.results[i] + ' Cookies';
                ulElement.appendChild(liElement);
            } else if (i + 6 == 12) {
                let liElement = document.createElement('li');
                liElement.textContent = 12 + ' am: ' + this.results[i] + ' Cookies';
                ulElement.appendChild(liElement);
            } else {
                let liElement = document.createElement('li');
                liElement.textContent = i - 6 + ' pm: ' + this.results[i] + ' Cookies';
                ulElement.appendChild(liElement);
            }

        }
        let liElement15 = document.createElement('li');
        liElement15.textContent = "Total:  " + this.Total + "Cookies";
        ulElement.appendChild(liElement15);

    }

}

const LimaStore = {
    Location: "Lima",
    minCustumerPerHour: 2,
    maxCustumerPerHour: 16,
    averageCookiesPerCustomer: 4.6,
    time: 'am',
    sales: function(min, max, avg) {
        min = this.minCustumerPerHour;
        max = this.maxCustumerPerHour;
        avg = this.averageCookiesPerCustomer;
        return Math.floor((Math.random() * (max - min) + min) * avg);

    },
    results: [],
    Total: 0,

    render: function() {


        let articleElement = document.createElement('article');

        salesProfiles.appendChild(articleElement);

        let h2Element = document.createElement('h2');
        h2Element.textContent = this.Location;
        articleElement.appendChild(h2Element);


        let ulElement = document.createElement('ul');
        articleElement.appendChild(ulElement);

        for (let i = 0; i < 15; i++) {
            if (i + 6 < 12) {
                let liElement = document.createElement('li');
                liElement.textContent = i + 6 + ' am: ' + this.results[i] + ' Cookies';
                ulElement.appendChild(liElement);
            } else if (i + 6 == 12) {
                let liElement = document.createElement('li');
                liElement.textContent = 12 + ' am: ' + this.results[i] + ' Cookies';
                ulElement.appendChild(liElement);
            } else {
                let liElement = document.createElement('li');
                liElement.textContent = i - 6 + ' pm: ' + this.results[i] + ' Cookies';
                ulElement.appendChild(liElement);
            }

        }
        let liElement15 = document.createElement('li');
        liElement15.textContent = "Total:  " + this.Total + "Cookies";
        ulElement.appendChild(liElement15);

    }

}

for (let i = 0; i < 15; i++)
    SeattleStore.results[i] = SeattleStore.sales();
for (let i = 0; i < 15; i++) {
    SeattleStore.Total += SeattleStore.results[i];
}
for (let i = 0; i < 15; i++)
    TokyoStore.results[i] = TokyoStore.sales();
for (let i = 0; i < 15; i++) {
    TokyoStore.Total += TokyoStore.results[i];
}
for (let i = 0; i < 15; i++)
    DubaiStore.results[i] = DubaiStore.sales();
for (let i = 0; i < 15; i++) {
    DubaiStore.Total += DubaiStore.results[i];
}
for (let i = 0; i < 15; i++)
    ParisStore.results[i] = ParisStore.sales();
for (let i = 0; i < 15; i++) {
    ParisStore.Total += ParisStore.results[i];
}
for (let i = 0; i < 15; i++)
    LimaStore.results[i] = LimaStore.sales();
for (let i = 0; i < 15; i++) {
    LimaStore.Total += LimaStore.results[i];
}

SeattleStore.render();
TokyoStore.render();
DubaiStore.render();
ParisStore.render();
LimaStore.render();