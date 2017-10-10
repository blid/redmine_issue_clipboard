(function($, global) {
    'use strict';

    function htmlEncode(value){
      var val = value
        .replace(/\"/g, '&quot;')
        .replace(/\\/g, "\\\\");
      return val;
    }

    $(function() {
        var $header = $('#content > h2').first(),
            $title = $('.subject h3').first(),
            issue_id = $header.text().split(" ").slice(-1)[0],
            referencing_keyword = global.issue_clipboard.reference_keyword,
            text = $title.text() + "\n" + referencing_keyword + " "+issue_id,
            hover_info = "Copy commit message to clipboard",
            copied_info = "Copied to clipboard",
            button =  '<a class="icon icon-copy hint--right issue-copy-button" ' +
                'data-hint="' + global.issue_clipboard.hover_info + '"' +
                ' data-clipboard-text="'+htmlEncode(text)+'"></a>';

        var $button = $(button).appendTo($header);

        var client = new Clipboard($(".issue-copy-button")[0]);

        // hints doesn't cooperate well with clipboard, so workaround
        $button.hover(function() {
            $button.addClass('hint--always');
        }, function() {
            $button.removeClass('hint--always');
            setTimeout(function() { // after transition for tooltips ends
                $button.attr('data-hint', global.issue_clipboard.hover_info);
            }, 200);
        });
        client.on("success", function( event ) {
            $button.attr('data-hint', global.issue_clipboard.copied_info).addClass('hint--always');
        });
    });
})(jQuery, window);
