$("#wikiGo").on("click",function(){
$("#ulEffect").html("");
var	searchStr = $("#wikiSearch").val();
	$.getJSON("https://en.wikipedia.org/w/api.php?format=json&action=opensearch&search="+searchStr+"&limit=10&callback=?",function(data){
		
		
	for(i=0;i<data[1].length;i++){
			$("#ulEffect").append("<a href='"+data[3][i]+"'target='_blank'><li class='liEffect'><h3 id='listTitle'>"+data[1][i]+"</h3><p id='listBlurb'>"+data[2][i]+"</p></li></a><br/>");
	
		}
					
//$('#liEffect').fadeIn('slow');
	});

});
