let boardWrap = document.getElementById('boardWrap');

for (let i=0;i<64;i++){
    let tile = document.createElement('div');
    tile.classList='tile';
    boardWrap.appendChild(tile);
}