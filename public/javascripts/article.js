requirejs.config({
    baseUrl: '../javascripts',
    paths: {
        'jquery': 'libs/jquery',
        'panelslider': 'libs/jquery.panelslider.min',
        'eventproxy': 'libs/eventproxy',
        'bootstrap': '../stylesheets/bootstrap/js/bootstrap.min',
        'toc': 'libs/jquery.tableofcontents'
    }
});

// Panel slider & menu
require(['jquery'], function ($, panelslider) {
    require(['panelslider', 'bootstrap', 'toc'], function(panelslider) {

        // Panel slider
        $('#left-panel-link').panelslider();
        $('#close-panel-bt').click(function() {
            $.panelslider.close();
        });

        // toc
        $(document).ready(function(){
            $("#toc").tableOfContents();
        });

    });
});