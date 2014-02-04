// Web-based RPG dice roller.
// Paul Gorman, 2014
// http://devilghost.com/roll

var divs = document.getElementsByTagName('div');
for (var i = 0; i < divs.length; i++) {
    if ('ontouchstart' in document.documentElement) {
        divs[i].ontouchstart = roll;
    }
    else {
        divs[i].onclick = roll;
    }
}

function roll() {
    var sides = this.getAttribute('data-sides');
    var span = document.createElement('span');
    span.innerHTML = Math.floor(Math.random() * sides + 1);
    this.insertBefore(span, this.firstChild.nextSibling);
}

function moreDice() {
    var sections = document.getElementsByTagName('section');
    for (var i = 0; i < sections.length; i++) {
        if (sections[i].style.display == 'none') {
            sections[i].style.display = 'block';
        } else {
            sections[i].style.display = 'none';
        }
    }
}
