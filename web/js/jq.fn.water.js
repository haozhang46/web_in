;jQuery.fn.extend({
    fmove:function(){
        // $.ajax({
        //      type: "GET",
        //      url: "js/img.json",
        //      data: "jsonp",
        //      success: function(msg){
        //         alert( "Data Saved: " + msg );
        //     }

        // });
		$w_size=$(".row").children();
        $min_s=$w_size[0];
        $w_html="<div class='w_box'>"+j+"</div>";
        for(var j=0;j<10;j++){
      	for(var i=0;i<$w_size.length;i++){
        	if($min_s.offsetHeight>$(".row").children()[i].offsetHeight){
        	$min_s=$(".row").children()[i];
            console.log(1);
        	}
    	}
    	// $min_s.html("<div class='w_box'></div>");
        $min_s.innerHTML+="<div class='w_box'>"+j+"</div>";
        // console.log($min_s.innerHTML)
      }
    	
    	
    }
})