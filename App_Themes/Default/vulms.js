$(document).ready(function() {
    $('#m_Chat').hide();

    $("#closeChat").click(function() {
        $('#m_Chat').hide();
    });

    jQuery.fn.extend({
        autoHeight: function() {
            function autoHeight_(element) {
                return jQuery(element).css({
                    'height': 'auto',
                    'overflow-y': 'hidden'
                }).height(element.scrollHeight);
            }
            return this.each(function() {
                autoHeight_(this).on('input', function() {
                    autoHeight_(this);
                });
            });
        }
    });

    // Initialize Textarea
    $('.textarea-autosize').autoHeight();
});