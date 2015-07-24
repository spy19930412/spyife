// page01
$(function(){
	var divi=$("#inputMoneyDiv");
    var switcha=$("#panel a");
// 	$("#panel a").click(function(){		
// 		if(divi.style.display=="block"){
// 			divi.hide();
// 		}else{
// 			divi.show();
// 		}
// 		return false;
// });
})




// page02
$('#table li').swipe(function(){
  $('.delete').hide()
  $('.delete', this).show()
})

// delete row on tapping delete button
$('.delete').tap(function(){
  $(this).parent('li').remove()
})
