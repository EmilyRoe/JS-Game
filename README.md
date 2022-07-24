# JS-Game

## About

This is an interactive obstacle jumping game using JavaScript, HTML and CSS. The user uses the up key on their keyboard to jump over the approaching obstables. With each successful jump the user gains a point. If the user fails to jump they lose a point. If their score reaches -2 they lose the game and a message to restart the game appears. 

## Functionality

The initiateAvatar positions the avatar at the left side of the game container and this position is used to determine whether the user scores points or not, whilst the moveAvatarUp function gives the user the ability to make the avatar jump using the up arrow. 

Using the generateObstacle function the cat image appears at the right side of the game container and with a setInterval this moves across the screen. The removeObstacle function deletes the obstacle from the screen once it hits a certain point after the avatar. 

decreaseScore is used to deduct points when the obstacle reaches and certain point and the avator is at position zero. The checkForGameOver function monitors the score and when it hits -2 removes the hidden styling and the game over and restart button appear.  

## Technology

- Javascript
- HTML
- CSS

## Future Developments

- Add an up button for iPhone users to play with a touch screen
- Testing

## Links

### Github Repo

https://github.com/EmilyRoe/JS-Game

### Deployed App

https://emilyroe.github.io/JS-Game/
