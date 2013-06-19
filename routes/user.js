
/*
 * GET users listing.
 */

exports.list = function(req, res){
  
  if ( req.accepts('text/html') ) {
  	
  	res.render('user', { 
  		title: 'roca-expressjs',
  		header: 'ROCA Express',
  		footer: '@iancrowther',
      layout: 'layouts/default.hbs',
  		users: [{
  			'name': 'Bill',
  			'occupation': 'Time'
  		},{
  			'name': 'Ted',
  			'occupation': 'Traveller'
  		}]
  	});

  } 
  else if ( req.accepts('text/x-handlebars-template') ) {

    res.render('user', { 
      layout: null,
      users: [{
  			'name': 'Bill',
  			'occupation': 'Time'
  		},{
  			'name': 'Ted',
  			'occupation': 'Traveller'
  		}]
    });

  }
  else if ( req.accepts('application/json') ) {
    
    res.json({
    	users: [{
  			'name': 'Bill',
  			'occupation': 'Time'
  		},{
  			'name': 'Ted',
  			'occupation': 'Traveller'
  		}]
    });

  }
  else {

    res.send( 406, 'Not Acceptable' );
    
  }

};