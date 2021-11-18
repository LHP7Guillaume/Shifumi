// const play = ["pierre", "feuille", "ciseaux"];
// const myChoise = document.getElementById("myChoise");
// const combat = document.getElementById("combat")


// let myCombat = play[aleaNb(0, play.length)];
// console.log(myCombat);

// const arrayMyCombat = myCombat.split()
// console.log(arrayMyCombat)

// arrayMyCombat.forEach((element, index) => {
//     let myIndex = index;
//     let myCase = arrayMyCombat
//     combat.innerHTML += myCase;
// });

// function aleaNb(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min;
// };


const carte = document.querySelectorAll(".carte");

for (let i = 0; i < carte.length; i++) {
    carte[i].addEventListener("click", function () {

        var joueur = carte[i].id;
        var robot = carte[Math.floor(Math.random() * (carte.length ))].id;
        console.log(robot)
        console.log(joueur)
        var resultat;

        // Logique entiere du jeu
        if (joueur === robot)
            resultat = "Vous avez fait une egalité !";
        else if ((joueur == "dracofeu" && robot == "florizarre") || (joueur == "tortank" && robot == "dracofeu") || (joueur == "florizarre" && robot == "tortank"))
            resultat = "Vous avez gagné !!";
        else
            resultat = "Vous avez perdu !";


        document.getElementById('myResultat').innerHTML = `
            
            ${resultat}
        `;

        document.getElementById("carteRobot").src= `img/${robot}.png`

    })
}