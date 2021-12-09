// responsive header 
import $ from 'jquery';
$(document).ready(function () {
    $('.mobile-menu-icon').click(function () {
        $('.header').toggleClass('open');
    });
});