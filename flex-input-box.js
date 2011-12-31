(function() {
    var replaceEmptyLine = function(string) {
        return $.map(string.split(/\n/g), function(line) {
            return line || ' ';
        }).join('\n');
    };
    
    var flexinput = window.flexinput = function(element) {
        var container = $(element);
        var textarea = container.find('textarea');
        var placeholder = $('<div></div>');

        container.css({
            position: 'relative'
        });
        
        placeholder
            .text(replaceEmptyLine(textarea.val()))
            .prependTo(container);
        
        placeholder
            .attr('style', getComputedStyle(textarea[0]).cssText)
            .css({
                width: 'auto',
                height: 'auto'
            });

        textarea.css({
            position: 'absolute'
        });
        
        
        textarea.css({
            width: placeholder.css('width'),
            height: placeholder.css('height'),
            left: placeholder.css('margin-left'),
            top: placeholder.css('margin-top')
        })
        
        var changeHandler = function(e) {
            placeholder.text(replaceEmptyLine(textarea.val()));
            
            console.log(placeholder.html());
            
            textarea.css({
                width: placeholder.css('width'),
                height: placeholder.css('height')
            })            
        };
        
        textarea.on({
            keyup: changeHandler,
            mouseup: changeHandler
        })
    };
})();
