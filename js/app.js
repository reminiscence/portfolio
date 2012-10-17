$(function(){
	var myInfo = info,
		pg = program,
		mySlide = slide,
		$content = $('#content');
		$contentBtn = $('#btn-info'),
		$listbox = $('#listbox');
	
	//초기화
	Init();

	function Init(){
		$('#title').fadeIn(1000);
		$content.html('<div id="my_Information"></div><div id="program_picture"></div>');

		$.get('./jst/info_template.jst',function(tmpl){
			$.tmpl(tmpl, myInfo).appendTo($('#my_Information'));
			$content.hide();
			$content.fadeIn(1000);
		});

		$.get('./jst/program_picture.jst', function(tmpl){
			$.tmpl(tmpl, pg).appendTo($('#program_picture'));
			$content.fadeIn(1000);
		});

		$.get('./jst/smart_book_ver_template.jst', function(tmpl){
			$.tmpl(tmpl, pg).appendTo($('#program_picture'));
			$content.fadeIn(1000);
		});

		$.get('./jst/smart_book_template.jst', function(tmpl){
			$.tmpl(tmpl, pg).appendTo($('#program_picture'));
			$content.fadeIn(1000);
		});

		$.get('./jst/exhibition_template.jst', function(tmpl){
			$.tmpl(tmpl, pg).appendTo($('#program_picture'));
			$content.fadeIn(1000);
		});

		$.get('./jst/labAct_template.jst', function(tmpl){
			$.tmpl(tmpl, pg).appendTo($('#program_picture'));
			$content.fadeIn(1000);
		});

		$.get('./jst/nxcAct_template.jst', function(tmpl){
			$.tmpl(tmpl, pg).appendTo($('#program_picture'));
			$content.fadeIn(1000);
		});
	}	

	function viewSlide(cls){
		$listbox.empty();
		var str = cls;

		$.get('./jst/'+str+'.jst', function(tmpl){
			$.tmpl(tmpl, mySlide).appendTo($listbox);
			$listbox.fadeIn(1000);			
			
			$('#closeListBox').click(function(){
				$listbox.fadeOut(1000);
			});
		});
	}

	
	$content.on('click', '.exhibition', function(e){
		var cls = $(e.currentTarget).attr('class');
		viewSlide(cls);
	});

	$content.on('click', '.scv_news_pic', function(e){
		var cls = $(e.currentTarget).attr('class');
		viewSlide(cls);
	});
	
	$content.on('click', '.smart_book', function(e){
		var cls = $(e.currentTarget).attr('class');
		viewSlide(cls);
	});
	
	$content.on('click', '.smart_book_ver', function(e){
		var cls = $(e.currentTarget).attr('class');
		viewSlide(cls);
	});

	$content.on('click', '.labAct', function(e){
		var cls = $(e.currentTarget).attr('class');
		viewSlide(cls);
	});
	
	$content.on('click', '.nxcAct', function(e){
		var cls = $(e.currentTarget).attr('class');
		viewSlide(cls);
	});
});