$(document).ready(function () {
	// Add entries modal
	$('.add-entries-btn').click(function () {
		$('.add-modal-main').fadeIn();
	});
	$('.close-btn, .add-modal-main').click(function () {
		$('.add-modal-main').fadeOut();
	});
	$('.add-modal').click(function (event) {
		event.stopPropagation();
	});
	// Edit entries modal
	$('.edit-icon').click(function () {
		$('.edit-modal-main').fadeIn();
	});
	$('.close-btn, .add-modal-main').click(function () {
		$('.edit-modal-main').fadeOut();
	});
	$('.add-modal').click(function (event) {
		event.stopPropagation();
	});
	// Dashboard sidebar mobile
	$('.menu-icon').click(function () {
		$('main').toggleClass('open-menu');
	});
	$('.ds-leftbar-main').click(function () {
		$('main').removeClass('open-menu');
	});
	$(".leftbar").click(function (event) {
		event.stopPropagation();
	});

});