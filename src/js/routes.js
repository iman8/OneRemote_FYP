import HomePage from '../pages/home.vue';
import AboutPage from '../pages/about.vue';
import RequestAndLoad from '../pages/request-and-load.vue';
import NotFoundPage from '../pages/404.vue';
import RemotePage from '.../pages/remote.vue';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = to.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Iman',
          lastName: 'Hussain',
          about: 'Hello, i am the creator of OneRemote',
          links: [
            {
              title: 'OneRemote Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Linkedin',
              url: 'https://www.linkedin.com/in/iman-hussain8',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            props: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
    {
        path: '/remote/',
        component: RemotePage,
    },
];

export default routes;
