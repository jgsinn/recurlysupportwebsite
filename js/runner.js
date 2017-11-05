var APIkey_private = "";
var APIkey_public = "";
var subdomain = "";
var recurlydomain = "recurly.com"

function checkCredentials(APIkey_public, APIkey_private, subdomain){

		
		
		//privateAPI();

	  };

function privateAPI(){
       var texttest;

	swal({
  		title: 'Entesubdomain:',
  		input: 'text',
  		showCancelButton: true,
  		confirmButtonText: 'Submit',
 	 	showLoaderOnConfirm: true,
  		preConfirm: function (text) {
    return new Promise(function (resolve, reject) {
      setTimeout(function() {
        if (text.indexOf(recurlydomain) == 0) {
          reject('Please enter your subdomain without ".recurly.com"')
        } else {
          resolve()
        }
      }, 500)
    })
  },
  			allowOutsideClick: false
		}).then(function (text) {
			texttest = text;

 			 swal({
    			type: 'success',
    			title: 'Subdomain Saved!',
    			html: 'Subdomain = ' + text + '.recurly.com'
  		})
		})
                           }


function publicAPI(){
    while (APIkey_public.length == 0) {
        APIkey_public = apprise('Missing Your API Key! Please enter it below:', { 'animate':true, 'input' : true}, function(r) {
             if(r) { 
             	APIkey_public = r; // user clicked 'OK'
        
             } else { 

                 apprise('Please enter your public API Token')
                 publicAPI();

                                            }}
                                            );
                                }
                           }



function checksubdomain(){
    if (subdomain.length == 0) {
        APIkey_public = apprise('Missing Your API Key! Please enter it below:', { 'animate':true, 'input' : true}, function(r) {
             if(r) { 
             	APIkey_public = r; // user clicked 'OK'
        
             } else { 

                 apprise('Please enter your public API Token')
                 publicAPI();

                                            }}
                                            );
     } else {


     }


 }


 
                           


