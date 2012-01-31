/* Simply Dashboard
 * 
 * Copyright (c) 2012, Jan Lindblom.
 * 
 */

/* variables */

var blocks = ['block1','block2','block3','block4','block5','block6'];

/* functions. */

function sizeBlocks() {
    var blockHeight = Math.floor((window.getSize().y / 2) - 1);

    var rowheight = Math.floor(blockHeight / 10);
    var fontheight = rowheight - 1;

    blocks.each(function(item){
        var element = document.id(item);
        element.set({
            html: 'asdf<br>asdf<br>asdf<br>asdf<br>asdf<br>asdf<br>asdf<br>asdf<br>asdf<br>asdf',
            style: 'font-size: '+fontheight+'px; line-height: '+rowheight+'px;'});
        var myFx = new Fx.Tween(item, {
            duration: 'long',
            transition: 'bounce:out',
            property: 'height'
        });
        myFx.start(blockHeight);
        
    });
}

function initDash() {
    sizeBlocks();
}
