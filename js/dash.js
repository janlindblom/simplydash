/* simply-dash JS functions. */

function getVPHeight() {
    return window.getSize().y;
}

function sizeBlocks() {
    var blockHeight = getVPHeight() / 2;

    $('block1').tween('height', blockHeight);
    $('block2').tween('height', blockHeight);
    $('block3').tween('height', blockHeight);
    $('block4').tween('height', blockHeight);
    $('block5').tween('height', blockHeight);
    $('block6').tween('height', blockHeight);
}
