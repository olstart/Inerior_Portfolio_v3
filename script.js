$(document).ready(function() {
    $('.portfolio-item').poptrox({
        caption: function($a) {
            return $a.find('img').attr('alt');
        }
    });
});
