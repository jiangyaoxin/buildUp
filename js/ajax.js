$.ajax({
      url: "form.php",
      type: "POST",
      dataType:"json",
      data: dataPara,
      timeout:8000,
      contentType:'application/json',
      beforeSend:function(XMLHttpRequest){ 
        
      },  
      success: function(res){
        if(res.status == 1){
        
        }else if(res.status == 0){
          
        }
      },
      complete:function(XMLHttpRequest,textStatus) {
        if(textStatus=='timeout'){  
            
　　　　}  
      },
      error:function(XMLHttpRequest, textStatus){
        if(textStatus=='error'){
        	
        }     
      }
    });