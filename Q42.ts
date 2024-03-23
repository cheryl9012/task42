// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.


function show_magicians(magiciansName : string[]): void {
    for( let magicians of magiciansName) {
        console.log(`${magicians}, The great`);
    }
}


let magicians : string[] = ["Harry Houdini", "David Copperfield", "David Blaine", "Uri Geller"];
show_magicians(magicians)