
/*
 * GET home page.
 */

exports.index = function(req, res){
  
	if ( req.accepts('text/html') ) {
  	
  	res.render('index', { 
  		title: 'roca-expressjs',
  		header: 'ROCA Express',
  		footer: '@iancrowther',
      layout: 'layouts/default.hbs'
  	});

  } 
  else if ( req.accepts('text/x-handlebars-template') ) {

    res.render('index', { 
      layout: null // render without using a layout template
    });

  }
  else if ( req.accepts('application/json') ) {
    
    res.json({ title: 'Express' });

  }
  else {

    res.send( 406, 'Not Acceptable' );
    
  }

};