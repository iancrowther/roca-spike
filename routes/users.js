
/*
 * GET users.
 */

var header = {
  title: 'roca-expressjs',
  heading: 'ROCA ExpressJS',
};

var users = [{
  'id': 1,
  'name': 'Bill S. Preston, Esquire',
  'occupation': 'Time Travel Agent'
},{
  'id': 2,
  'name': 'Ted "Theodore" Logan',
  'occupation': 'History Teacher'
}];

var curls = {
  all: 'curl -v localhost:3000/users',
  resource: 'curl -v -i -H "Accept: text/x-handlebars-template" localhost:3000/users',
  json: 'curl -v -i -H "Accept: application/json" localhost:3000/users'
};

var getUserById = function( id ) {

  var user = {};
  
  users.forEach( function( item ) {
    
    if ( item.id.toString() === id ) {

      user = item;

    }

  });

  return user;

}

exports.list = function(req, res){
  
  if ( req.accepts('text/html') ) {
  	
  	res.render('users', {
      model: {
        header: header,
        resource: {
          users: users,
          curls: curls
        }
      },
      layout: 'layouts/default.hbs'
  	});

  } 
  else if ( req.accepts('text/x-handlebars-template') ) {

    res.render('users', { 
      model: {
        resource: {
          users: users,
          curls: curls
        }
      },
      layout: null
    });

  }
  else if ( req.accepts('application/json') ) {
    
    res.json({
    	model: {
        resource: {
          users: users,
          curls: curls
        }
      }
    });

  }
  else {

    res.send( 406, 'Not Acceptable' );
    
  }

};

exports.user = function(req, res) {
  
  var userId = req.params.id;
  
  var user = getUserById( userId );
  
  var userCurls = {
    all: curls.all + '/' + userId,
    resource: curls.resource + '/' + userId,
    json: curls.json + '/' + userId
  };
  
  if ( req.accepts('text/html') ) {
    
    res.render('user', {
      model: {
        header: header,
        resource: {
          user: user,
          curls: userCurls
        }
      },
      layout: 'layouts/default.hbs'
    });

  } 
  else if ( req.accepts('text/x-handlebars-template') ) {

    res.render('user', { 
      model: {
        resource: {
          user: user,
          curls: userCurls
        }
      },
      layout: null
    });

  }
  else if ( req.accepts('application/json') ) {
    
    res.json({
      model: {
        resource: {
          user: user
        }
      }
    });

  }
  else {

    res.send( 406, 'Not Acceptable' );
    
  }

};
