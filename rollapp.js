// Web-based RPG dice roller.
// Paul Gorman, 2014
// http://devilghost.com/roll

var dice = {
    historyLength: 48,
    history: [],
    sides: 0,
    toHtml: function () {
        var html = '';
        for (i = 0; i < this.history.length; i++) {
            switch (i) {
                case 0:
                    html = '<span class="result0">' + this.history[0] + '</span> ';
                    break;
                case 1:
                    html = html + '<span class="result1">' + this.history[1] + '</span> ';
                    break;
                case 2:
                    html = html + '<span class="result2">' + this.history[2] + '</span> ';
                    break;
                case undefined:
                    html = html + '';
                    break;
                default:
                    html = html + this.history[i] + ' ';
            }
        }
        document.getElementById('d' + this.sides + 'results').innerHTML = html;
    },
    roll: function () {
        var r = Math.floor(Math.random() * this.sides + 1);
        this.history.unshift(r);
        if (this.history.length > this.historyLength) {
            this.history.pop();
        }
        this.toHtml(this.history);
    }
};

var d4 = Object.create(dice);
d4.history = [];
d4.sides = 4;

var d6 = Object.create(dice);
d6.history = [];
d6.sides = 6;

var d8 = Object.create(dice);
d8.history = [];
d8.sides = 8;

var d10 = Object.create(dice);
d10.history = [];
d10.sides = 10;

var d12 = Object.create(dice);
d12.history = [];
d12.sides = 12;

var d20 = Object.create(dice);
d20.history = [];
d20.sides = 20;

var d100 = Object.create(dice);
d100.history = [];
d100.sides = 100;
