const main = document.querySelector('main');
let html = '';

for( i = 5; i <= 100; i+= 5 ) {
    html += `<div>${i}</div>`;
}

main.innerHTML = html;
