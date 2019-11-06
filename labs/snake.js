/*
     A bad snake clone
   _________         _________
  /         \       /         \
 /  /~~~~~\  \     /  /~~~~~\  \
 |  |     |  |     |  |     |  |
 |  |     |  |     |  |     |  |
 |  |     |  |     |  |     |  |         /
 |  |     |  |     |  |     |  |       //
(o  o)    \  \_____/  /     \  \_____/ /
 \__/      \         /       \        /
  |         ~~~~~~~~~         ~~~~~~~~
  ^

*/


//(function () {

   const DISPLAY_CHARS = {
       VERTICAL_SEPARATOR: '|',
       HORIZONTAL_SEPARATOR: '-',
       CORNER: 'O',
       NEWLINE: '\n'
    };
    const UPDATE_INTERVAL_MS = 1000; // How often the update the render engine should update
    const pageElements = {};

    /**
     * Get references to DOM elements
     * Draw the game board
     * Set up the generator function to step the game
     * Initialize the interval mechanism
     */
    function init() {
        console.info('Drawing game board');
        pageElements.appContainer = document.querySelector('.snakepit');
        pageElements.board = document.createElement('pre');
        
        const boardChars = [
            'O----------O',
            '|          |',
            'O----------O'
        ];
        const boardContent = document.createTextNode(boardChars.join('\n'));

        pageElements.board.appendChild(boardContent);
        pageElements.appContainer.appendChild(pageElements.board);
    };


    /**
     * For the simple snake runner, given the index
     * position of the snake head, return a 
     * string rendering of where the snake is
     */
    function getSnakePos(headIndex, lineLength) {
        
    };

    function step() {

    }
    
    window.onload = function() {
        console.log('Did a thing');
        init();
    };


//})();

