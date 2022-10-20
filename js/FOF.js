var app = new Framework7({
    // App root element
    el: '#app',
    // ... other parameters

    routes: [


      {
        path: '/',
        url: 'index.html',
      },
      {
        path: '/index/',
        url: 'index.html',
      },
      

      {
        path: '/',
        url: 'index.html',
      },
      {
        path: '/page2/',
        url: 'pages/page2.html',
      },
      
      
    ],

   



  });
var mainView = app.views.create('.view-main')