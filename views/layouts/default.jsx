var React = require('react');


function DefaultLayout(props) {
  return (
    <html>
      <head>
        <title>{props.title}</title>
        <link rel="stylesheet" href='/stylesheets/style.css'></link>
        <link rel="stylesheet" href='/stylesheets/popUp.css'></link>
        <link rel="stylesheet" href='/stylesheets/menu.css'></link>
        <script src="https://kit.fontawesome.com/f22c5a81ce.js" crossorigin="anonymous"></script>
      </head>
      <body>
        

          {props.children}
          <script src="/js/index.js"></script>
          <script src="/js/popUp.js"></script>
        
      </body>
    </html>
  );
}


module.exports = DefaultLayout;
