// Задание #1+2+3
let declarationBlock = document.getElementById('declaration');
let declaration = document.createElement('div');
declaration.innerHTML = '<h3>Задание #1+2+3</h3><p>Генерация шахматной доски</p><br>';
declarationBlock.appendChild(declaration);
console.log('Задание #1+2+3');
alert('Задание #1+2+3');

let whiteFigures = ['white_pawn_small.png', 'white_elephant_small.png', 'white_horse_small.png', 'white_officer_small.png', 'white_queen_small.png', 'white_king_small.png', 'white_officer_small.png', 'white_horse_small.png', 'white_elephant_small.png'];
let blackFigures = ['black_pawn_small.png', 'black_elephant_small.png', 'black_horse_small.png', 'black_officer_small.png', 'black_queen_small.png', 'black_king_small.png', 'black_officer_small.png', 'black_horse_small.png', 'black_elephant_small.png'];
let chessSymbols = ['P', 'E', 'H', 'O', 'Q', 'K', 'O', 'H', 'E'];

function drawTable(rows, columns) {
    rows = ++rows;
    columns = ++columns;
    let boardCell = document.getElementById('board');
    let cells = [];
    let columnsNames = [];
    let symbols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let i = 0;
    let j;
    let m, n, k;
    for (j = 2; j <= columns; j++) {
        columnsNames[j] = document.createElement('div');
        columnsNames[j].className = 'columns_name';
        columnsNames[j].innerHTML = '<h3>' + symbols[j-2] + '</h3>';
        columnsNames[j].id = 'iC' + j;
        columnsNames[j].style.gridRow = 1;
        columnsNames[j].style.gridColumn = j;
        boardCell.appendChild(columnsNames[j]);
    }
    for (j = 2; j <= rows; j++) {
        columnsNames[j + columns] = document.createElement('div');
        columnsNames[j + columns].className = 'rows_name';
        columnsNames[j + columns].innerHTML = '<h3>' + (j - 1) + '</h3>';
        columnsNames[j + columns].id = 'iC' + j;
        columnsNames[j + columns].style.gridRow = j;
        columnsNames[j + columns].style.gridColumn = 1;
        boardCell.appendChild(columnsNames[j+ columns]);
    }

    for (let iR = 2; iR <= rows; iR++) {
        if ((iR % 2) != 0) {
            m = 2;
            n = 3;
        }
        else {
            m = 3;
            n = 2;
        }
        for (let iC = m; iC <= columns; iC = iC + +2) {
            cells[i] = document.createElement('div');
            cells[i].className = 'white';
            // cells[i].innerHTML = '<p>iR' + (iR - 1) + 'iC' + (iC - 1) + '</p>';
            cells[i].id = 'iR' + (iR - 1) + 'iC' + (iC - 1);
            cells[i].style.gridRow = iR;
            cells[i].style.gridColumn = iC;
            boardCell.appendChild(cells[i]);
        }
        ++i;
        for (let iC = n; iC <= columns; iC = iC + +2) {
            cells[i] = document.createElement('div');
            cells[i].className = 'black';
            // cells[i].innerHTML = '<p>iR' + (iR - 1) + 'iC' + (iC - 1) + '</p>';
            cells[i].id = 'iR' + (iR - 1) + 'iC' + (iC - 1);
            cells[i].style.gridRow = iR;
            cells[i].style.gridColumn = iC;
            boardCell.appendChild(cells[i]);
        }
        ++i;
    }
    return cells;
}

function figuresPlacement(rows, columns, whatToPlace) {
    if ((rows == 8) && (columns == 8)) {
        let boardPlaceRow1;
        let boardPlaceRow2;
        if (whatToPlace == 1) {
            for (let i = 1; i <= 8; i++) {
                // расстановка белых символов
                boardPlaceRow1 = document.getElementById('iR1' + 'iC' + i);
                boardPlaceRow1.innerHTML = '<h3>' + chessSymbols[i] + '</h3>';
                boardPlaceRow1.style.color = 'white';
                boardPlaceRow1.style.textShadow = '1px 1px 2px black';
                boardPlaceRow2 = document.getElementById('iR2' + 'iC' + i);
                boardPlaceRow2.innerHTML = '<h3>' + chessSymbols[0] + '</h3>';
                boardPlaceRow2.style.color = 'white';
                boardPlaceRow2.style.textShadow = '1px 1px 2px black';
                // расстановка черных символов
                boardPlaceRow8 = document.getElementById('iR8' + 'iC' + i);
                boardPlaceRow8.innerHTML = '<h3>' + chessSymbols[i] + '</h3>';
                boardPlaceRow8.style.color = 'black';
                boardPlaceRow8.style.textShadow = '1px 1px 2px white';
                boardPlaceRow7 = document.getElementById('iR7' + 'iC' + i);
                boardPlaceRow7.innerHTML = '<h3>' + chessSymbols[0] + '</h3>';
                boardPlaceRow7.style.color = 'black';
                boardPlaceRow7.style.textShadow = '1px 1px 2px white';
            }
        }
        else {
            for (let i = 1; i <= 8; i++) {
                // расстановка белых фигур
                boardPlaceRow1 = document.getElementById('iR1' + 'iC' + i);
                boardPlaceRow1.innerHTML = '<img src=\"images/' + whiteFigures[i] + '\" alt=\"' + whiteFigures[i] + '\">';
                boardPlaceRow2 = document.getElementById('iR2' + 'iC' + i);
                boardPlaceRow2.innerHTML = '<img src=\"images/' + whiteFigures[0] + '\" alt=\"' + whiteFigures[0] + '\">';
                // расстановка черных фигур
                boardPlaceRow8 = document.getElementById('iR8' + 'iC' + i);
                boardPlaceRow8.innerHTML = '<img src=\"images/' + blackFigures[i] + '\" alt=\"' + blackFigures[i] + '\">';
                boardPlaceRow7 = document.getElementById('iR7' + 'iC' + i);
                boardPlaceRow7.innerHTML = '<img src=\"images/' + blackFigures[0] + '\" alt=\"' + blackFigures[0] + '\">';
            }
        }
    }
    else {
        alert('Доска НЕ стандартная, расставлять шахматные фигуры не хотим и не будем!');
    }
}

let numberOfRows;
let numberOfColumns;
let board;
let creativity = prompt('Хотите стандартную шахматную доску(да/нет)');
if (creativity == 'да') {
    numberOfRows = 8;
    numberOfColumns = 8;
    board = drawTable(8, 8);
}
else {
    if (creativity == 'нет') {
        alert('Да! Мы верили, что вы творческая натура!');
        numberOfRows = prompt('Задайте количество рядов доски');
        numberOfColumns = prompt('Задайте количество колонок доски');
        board = drawTable(numberOfRows, numberOfColumns);
    }
    else {
        alert('Похоже, вы не определились, да или нет:(');
    }
}

let playSymbols = prompt('А давайте буквы по доске расставим (да/нет)?');
if (playSymbols == 'да') {
    figuresPlacement(numberOfRows, numberOfColumns, 1);
}
else {
    if (playSymbols == 'нет') {
        alert('Ну.., нет так нет');
    }
    else {
        alert('Похоже, вы не определились, да или нет:(');
    }
}

let playTheGame = prompt('Может нормальные фигуры расставим (да/нет)?');
if (playTheGame == 'да') {
    figuresPlacement(numberOfRows, numberOfColumns, 2);
}
else {
    if (playTheGame == 'нет') {
        alert('Ну.., нет так нет');
    }
    else {
        alert('Похоже, вы не определились, да или нет:(');
    }
}