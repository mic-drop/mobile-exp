$(document).ready(() => {
    $('#square').on('click', () => {
        changeColor();
        console.log('hey');
    })
})

const changeColor = function () {
    let square = $('#square');
    console.log($(square).css('background-color'));
    if ($(square).css('background-color') === 'rgb(255, 0, 0)') {

        $(square).css('background-color', 'blue');
        return;
    }
    $(square).css('background-color', 'red');
}
