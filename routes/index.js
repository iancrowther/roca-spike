
/*
 * GET home page.
 */

var header = {
  title: 'roca-expressjs',
  heading: 'ROCA ExpressJS',
};

var curls = {
  all: 'curl -v localhost:3000',
  resource: 'curl -v -i -H "Accept: text/x-handlebars-template" localhost:3000',
  json: 'curl -v -i -H "Accept: application/json" localhost:3000'
};

exports.index = function(req, res){
  
	if ( req.accepts('text/html') ) {
  	
  	res.render('index', { 
  		model: {
        header: header,
        resource: curls
      },
      layout: 'layouts/default.hbs'
  	});

  } 
  else if ( req.accepts('text/x-handlebars-template') ) {

    res.render('index', {
      model: {
        resource: curls
      },
      layout: null
    });

  }
  else if ( req.accepts('application/json') ) {
    
    res.json( { 
      model: {
        resource: curls
      }
    });

  }
  else {

    res.send( 406, 'Not Acceptable' );
    
  }

};
