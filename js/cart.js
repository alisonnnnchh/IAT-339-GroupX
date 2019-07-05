$('.minus-btn').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());


    if (value > 1) {
        value = value - 1;
    } else {
        value = 0;
        confirm('Are you sure to remove this item from cart?');
    }

    $input.val(value);

});

$('.plus-btn').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());

    if (value < 20) {
        value = value + 1;
    } else {
        value = 20;
    }

    $input.val(value);
});
