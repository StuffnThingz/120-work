Tobin Long.50

[Sketch]

# HW-7 RESPONSE

Lines 1 - 8:
Variables for ball as an object. Defines radius, start/stop position, change of position on x and y axis, and the trail of ellipse.

Lines 10 - 13:
Setting up the canvas and background color.

( I just realized I moved the code around a little, so the lines are probably a little different then how they originally were.)

Lines 17 - 20:
Adding one to the change in position then timesing it by 1.

Lines 22 - 26:
Use of if statement saying x axis has to be greater than or equal to width of screen or x axis has to or less than or equal to zero. Use of logical operator means both have to be false in order to return a false statement, only one has to be true to return true. Line 23 would make the ball turn around I believe. Lines 25 and 26 do the same thing, but for the Y axis.

Line 29 - 30:
Defining the ball with ellipse.

Lines 33 - 35:
Use of mousePressed function so when you click the ball changes directions.
We also see the use of map function to. We see for the ball.scale, we are mapping from mouseX&Y from its current position and increaseing it from a minumum ofr .5 to a maximum of 10. (At least I hope that's what it means :/)

---
# My Sketch


First thing I did was change the canvas to the full screen, and make the ball bigger. Just thought it would make everything easier on the eyes. I also changed the color of the background, circle, and stroke to give a more videogamesque
color theme.

I then changed the mousePressed function so the min and max were 1 - 10. This seemed to increase the speed of the ball when clicked, also making the "spread" of the trail a bit.

I used the if statement so when the ball goes past half the screen it turns to blue with a red stroke. I did the same thing for the y axis so it would turn to green with a red stroke if it went past half the height of the screen. I added a little transparancy because it looked cool.
