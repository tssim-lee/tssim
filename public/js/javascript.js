/*jshint esversion: 6 */

jQuery(document).ready(function ($) {




	$('.btn').on('click', (e) => {
		e.preventDefault();
		var data = {
			login: $('#recipient-name0').val(),
			email: $('#recipient-name').val(),
			password: $('#recipient-name1').val()

		};
		if (!data.login || !data.password || !data.email) {
			$('.modal-header h4').text(' Все поля должны быть заполнены').addClass("fff");
			setTimeout(function () {
				$('.modal-header h4').text('Регистрация').removeClass('fff');
			}, 2000);

		} else {

			var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
			if (pattern.test(data.email)) {

				$.ajax({
					type: 'POST',
					data: JSON.stringify(data),
					contentType: 'application/json',
					url: '/api/auth/post',
				}).done(function (data) {
					alert(data.login);
				});
				$('.modal').modal('hide');
			} else {
				$('#recipient-name').css({
					'border': '1px solid #ff0000'
				});
				$('.email').text('Адрес не валиден');
			}

		}

	});
	////////////////////////////////////////////////////////////////////////////////////

	$('.button').on('click', (e) => {
		/* Act on the event */
		e.preventDefault();

		$("#cont").slideToggle(1000, function () {
			$("#text2").slideToggle(1000);
		});

	});
	/* Act on the event */




	function doIt() {
		$(".obaut").slideToggle("slow");
		$(".obaut").toggleClass('active');
		return false;

	}


	// Can pass in function name
	$('#cl_obaut').on('click', (e) => {
		e.preventDefault();
		doIt();
	});
	/* Act on the event */

});