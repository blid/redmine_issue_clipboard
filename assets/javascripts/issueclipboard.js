(function($, global) {
    'use strict';

    $(function() {
        var $header = $('#content > h2').first(),
            $title = $('.subject h3').first(),
            issue_id = $header.text().split(" ").slice(-1)[0],
            referencing_keyword = global.issueclipboard.reference_keyword,
            text = $title.text() + "\n" + referencing_keyword + " "+issue_id,
            hover_info = "Copy commit message to clipboard",
            copied_info = "Copied to clipboard",
            button =  '<a class="icon icon-copy hint--right issue-copy-button" ' +
                'data-hint="' + hover_info + '"' +
                ' data-clipboard-text="'+text+'"></a>';

        var $button = $(button).appendTo($header);

        var client = new ZeroClipboard($(".issue-copy-button")[0]);

        // hints doesn't cooperate well with zeroclipboard, so workaround
        $button.hover(function() {
            $button.addClass('hint--always');
        }, function() {
            $button.removeClass('hint--always');
            setTimeout(function() { // after transition for tooltips ends
                $button.attr('data-hint', hover_info);
            }, 200);
        });

        client.on( "ready", function( readyEvent ) {
            client.on( "aftercopy", function( event ) {
                $button.attr('data-hint', copied_info).addClass('hint--always');



            });
        } );
    });
})(jQuery, window);
