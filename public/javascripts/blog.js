requirejs.config({
    baseUrl: '../javascripts',
    paths: {
        'jquery': 'libs/jquery',
        'panelslider': 'libs/jquery.panelslider.min',
        'eventproxy': 'libs/eventproxy',
        'bootstrap': '../stylesheets/bootstrap/js/bootstrap.min',
        'burn': 'libs/jquery.burn.min'
    }
});

// Panel slider & menu
require(['jquery'], function ($, panelslider) {
    require(['panelslider', 'burn', 'bootstrap'], function(panelslider) {

        // Panel slider
        $('#left-panel-link').panelslider();
        $('#close-panel-bt').click(function() {
            $.panelslider.close();
        });

        // burn and no burn
        $('.burn').mouseover(function(event) {
                $('.burn').burn();
            }); 
        $('.burn').mouseout(function(event) {
            $('.burn').burn(false);
        });
    });
});