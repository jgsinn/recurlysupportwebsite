
                         	var publicToken_input = "";
                            var subDomain_input = "1";

                            checkCredentials();

                            function checkCredentials(){

                                if (publicToken_input.length == 0 || publicToken_input == false){
                                    
                                    publicToken();
                                    

                                }

                                else if (subDomain_input == ""){
                                    subDomain_input = apprise('Missing Your Subdomain! Please enter it below:', {'animate': true, 'input' : true});
                                }
    
                            }

                            function publicToken(){
                                  while (publicToken_input.length == 0 || publicToken_input == false) {
                                    publicToken_input = apprise('Missing Your API Key! Please enter it below:', { 'animate':true, 'input' : true}, function(r) {
                                        if(r)
                                            { 

                                            publicToken_input = r;

                                                // user clicked 'OK'
        
                                            }
                                        else
                                            { 

                                                // user clicked 'No'
                                            apprise('Please enter your public API Token')
                                            publicToken();

                                            }}
                                            );
                                }
                           }

                            function subDomain(){
                                while (subDomain_input.length == 0 || subDomain_input == false) {
                                    subDomain_input = apprise('Missing Your Subdomain! Please enter it below:', { 'animate':true, 'input' : true}, function(r) {
                                        if(r)
                                            { 

                                            subDomain_input = r;

                                                // user clicked 'OK'
        
                                            }
                                        else
                                            { 

                                                // user clicked 'No'
                                            apprise('Please enter your subdomain Token')
                                            publicToken();

                                            }}
                                            );
                                }
                            }