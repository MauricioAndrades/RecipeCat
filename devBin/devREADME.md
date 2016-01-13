# Monday 1/11

### Api's
https://spoonacular.com/food-api

    -big oven api
    -pearson api

### example Codepen HTML:CSS
http://codepen.io/arbaoui_mehdi/pen/JfpEm

### pivotal tracker instructional video
https://www.pivotaltracker.com/help/gettingstarted

### jade converter
http://naltatis.github.io/jade-syntax-docs/
http://html2jade.org/

## AppFunctionality:

Step: 1 read through API's and determine app functionality.

        1. User needs to signup
            - dev needs to create server
            - dev needs to create db
            - dev needs oath/secure login
        2. User needs to login
            - dev needs to compare pw to hash
            - etc
            
        3. User needs to look up recipes
                - dev needs to create input form.
                - dev needs to pull data from api
                - dev needs inject data back into front-end using template lenguage.
            + User can 'click' on recipe and expand ingrident list:
            + User can 'browse' saved recipes.
            + User can modify recipes, or make notes.
            + User can share a recipe
            + User can add his/her own recipe.

        4. User needs to save recipes
            - dev to create db for recipes:
                + what reciped {fields} are we gonna save?/ what json object do we get back.

# Tuesday 1/12

##### todo
    - client side: 
        + add css reset
        + add boilerplate
        + finish wireframe
        + convert all functionality to stories

    - server side:
        + choose API
        + create dbs for login and signup


```shell
    
    # code that creates secret crypto key inside .env file
    echo SECRET=$(node -e "require('crypto').randomBytes(48, function(ex, buf) { console.log(buf.toString('hex')) });") >> .env

    # command to launch app properly in devmode
    exdebug='DEBUG=express:* nodemon ./bin/www'

```

#install jade global

`$ jade [options] [dir|file ...]`

-add all require packages for newly installed npm.
-merge all commands into readme.

-h, --help             output usage information
-V, --version          output the version number
-O, --obj <path|str>   JavaScript options object or JSON file containing it
-o, --out <dir>        output the compiled html to <dir>
-p, --path <path>      filename used to resolve includes
-P, --pretty           compile pretty html output
-c, --client           compile function for client-side runtime.js
-n, --name <str>       the name of the compiled template (requires --client)
-D, --no-debug         compile without debugging (smaller functions)
-w, --watch            watch files for changes and automatically re-render
-E, --extension <ext>  specify the output file extension
--name-after-file      name the template after the last section of the file path
                       (requires --client and overriden by --name)
--doctype <str>        specify the doctype on the command line (useful if it
                       is not specified by the template)

```js

$(document).ready( function(){
   // sample jsonp request to get latest tweet 
   $.ajax({
      dataType: 'jsonp'
      ,url: '/ingredients'
      ,data: { screen_name: 'mike_more', count: 1 }
      ,success: function(json) {
         // display the tweet text on success
         alert( json[0].text );
      }
      ,error: function( jqXHR, textStatus, errorThrown ){
         // display error status on failure
         alert( 'error: ' + textStatus );
      }
      ,timeout:5000
      ,retryMax: 2
   });
});

```

// register AJAX prefilter : options, original options
```js
    $.ajaxPrefilter(function( options, originalOptions, jqXHR ) {

   // retry not set or less than 2 : retry not requested
   if( !originalOptions.retryMax || !originalOptions.retryMax >=2 ) return;
   // no timeout was setup
   if( !originalOptions.timeout >0 ) return;

   if( originalOptions.retryCount ) {
      // increment retry count each time
      originalOptions.retryCount++;
   }else{
      // init the retry count if not set
      originalOptions.retryCount = 1;
      // copy original error callback on first time
      originalOptions._error = originalOptions.error;
   };

   // overwrite error handler for current request
   options.error = function( _jqXHR, _textStatus, _errorThrown ){
      // retry max was exhausted or it is not a timeout error
      if( originalOptions.retryCount >= originalOptions.retryMax || _textStatus!='timeout' ){
         // call original error handler if any
         if( originalOptions._error ) originalOptions._error( _jqXHR, _textStatus, _errorThrown );
         return;
      };
      // Call AJAX again with original options
      $.ajax( originalOptions);
   };
});
```