"use strict";

var verb = prompt("Welcome, we're going to play a little game called Random Story. We're going to need a few parts of speech to make the story. Please provide a 'verb'");
var noun1 = prompt("Now please provide a 'noun'");
var nounProper = prompt("Next, we'll need a 'proper noun'");
var verbPast = prompt("Aren't these pop up dialog boxes annoying? I'm sure there is a better way to do this. Next we'll be looking for a 'past tense verb'");
var adjective = prompt("Last one, then we'll have a great random story for you to complete. 'Adjective' please");

document.write("<p>You think <b>", noun1, "</b> moves <b>", adjective, "</b>? You should see ice. It moves like it has a mind. Like it knows it <b>", verbPast,"</b> the world once and got a taste for murder. After the avalanche, it took us a week to <b>", verb, "</b> out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to <b>", nounProper,"</b>.</p>");