// Récupération de toutes les grilles
let grids = document.querySelectorAll(".grid");

/*
Codes couleurs

jaune: #efec4f;
orange: #eca45c;
rouge: #e85b69;
violet: #956caf;
bleu: #427cf5;
vert: #4cee7e;
noir: #020e13;

*/

// GRILLE 1 : tout en noir
function grid1() {
    let cells = grids[0].querySelectorAll("div");

    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = "#020e13";
    }
}

//GRILLE 2 : damier vert / jaune
function grid2() {
    let cells = grids[1].querySelectorAll("div");

    let colors = [
        "#4cee7e", "#efec4f", "#4cee7e",
        "#efec4f", "#4cee7e", "#efec4f",
        "#4cee7e", "#efec4f", "#4cee7e"
    ];

    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = colors[i];
    }
}



// GRILLE 3 : deux lignes colorées
function grid3() {
    let cells = grids[2].querySelectorAll("div");

    let colors = [
        "#e85b69", "#eca45c", "#efec4f",
        "#4cee7e", "#427cf5", "#956caf",
        "", "", ""
    ];

    for (let i = 0; i < cells.length; i++) {
        if (colors[i] !== "") {
            cells[i].style.backgroundColor = colors[i];
        }
    }
}


// GRILLE 4 : centre vert, reste noir
function grid4() {
    let cells = grids[3].querySelectorAll("div");

    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = "#020e13";
    }

    cells[4].style.backgroundColor = "#4cee7e";
}


// GRILLE 5 : motif croix
function grid5() {
    let cells = grids[4].querySelectorAll("div");

    let colors = [
        "#427cf5", "#427cf5", "#427cf5",
        "#956caf", "#e85b69", "#956caf",
        "#eca45c", "#efec4f", "#eca45c"
    ];

    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = colors[i];
    }
}


// GRILLE 6 : dégradés par ligne
function grid6() {
    let cells = grids[5].querySelectorAll("div");

    // Ligne 1
    for (let i = 0; i < 3; i++) {
        cells[i].style.background = "linear-gradient(#956caf, #427cf5)";
    }

    // Ligne 2
    for (let i = 3; i < 6; i++) {
        cells[i].style.background = "linear-gradient(#4cee7e, #efec4f)";
    }

    // Ligne 3
    for (let i = 6; i < 9; i++) {
        cells[i].style.background = "linear-gradient(#eca45c, #e85b69)";
    }
}

// Appels
grid1();
grid2();
grid3();
grid4();
grid5();
grid6();