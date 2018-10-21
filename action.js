/*create an array to hold any number of lists
create a list object that holds the name of the list, an array for the tasks, plus additional properties (task
completed, etc.)*/


function addList() {
    let myListName = $('.mylistinput').val();
    let numchildren = $('.container').children().length;

    $('.container').append('<div class="list" id="list' + numchildren + '"><div class="list-row"><h3' +
        ' contenteditable="true">' + myListName + '</h3><span' +
        ' class="alter-icons"><i' +
        ' class="fas handle fa-arrows-alt"></i><i class="trash far' +
        ' fa-trash-alt"></i></span></div><div class="item-add-row"><i class="fas fa-plus" data-main="list' + numchildren + '"' +
        ' onclick="addItem($(this).data(`main`))">Add new item</i><button' +
        ' class="clear-completed-items" onclick="clearCompleted(`list' + numchildren + '`)">Clear completed ' +
        ' items</button></div><div class="list-items"></div></div>');
    $('.myinput').val('');
    $('.trash').click(function () {
        $(this).parent().parent().parent().animate({
            opacity: 0,
        }, 800, function () {
            //when animation is done
            $(this).remove();
        });
    });

    $('.myinput').on('keydown', function(event){
        // console.log(event.which);
        if(event.which === 13){
            addItem();
        }
    });

    $('.container, .list-items').sortable({
        handle: '.handle'
    });
}

function clearList() {
    $('.list').animate({
        opacity: 0,
    }, 800, function () {
        $('.list').remove();
    });
}

function addItem(main) {
    $('#'+main).find('.list-items').append('<div class="item-row"><span class="item"><input type="text"' +
        ' class="myinput"><input' +
        ' class="complete" type="checkbox"></span><span><i' +
        ' class="fas handle fa-arrows-alt"></i><i class="trash far' +
        ' fa-trash-alt"></i></span>');

    $('.trash').click(function () {
        $(this).parent().parent().animate({
            opacity: 0,
        }, 800, function () {
            //when animation is done
            $(this).remove();
        });
    });
}

function clearCompleted(main) {
    $('#'+main).find('.complete').each(function() {
        if (this.checked) {
            $(this).parent().parent().remove();
        }
    });
}

$('.mylistinput').on('keydown', function(event){
    // console.log(event.which);
    if(event.which === 13){
        addList();
    }
});