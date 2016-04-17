var noun = prompt("Choose a noun");
var adjective = prompt("Choose an adjective");
var verb = prompt("Choose a verb");
alert("Let's see the story!");


//Story 1
//Slade was the coolest [noun] in town.  And all the girls would [verb] over him.  But he was too [adjective] to notice.

var story1 = "<p>Slade was the coolest " + noun;
story1 += ". And all the girls would " + verb;
story1 += " over him. But he was too " + adjective;
story1 += " to notice.</p>";

//Story 2
//Once upon a time, there was a pug named Yoshi.  Yoshi was obsessed with [noun] and loved to jump around [adjective] while [verb] with his best friend the garden gnome.

var story2 = "<p>Once upon a time, there was a pug named Yoshi.  Yoshi was obsessed with " + noun;
story2 += " and loved to jump around " + adjective;
story2 += " while " + verb;
story2 += " with his best friend the garden gnome.</p>"

//Story 3
//Vroom!  So went the [noun] [adjective] stuck [verb].

var story3 = "<p>Vroom! So went the " + noun;
story3 += " " + adjective;
story3 += " stuck " + verb + ".</p>";


var story = [story1, story2, story3];

var print_story = story[Math.floor(Math.random()*story.length)];
document.write(print_story);
