/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
  {
    path: '/app/dashboard', // the url
    icon: 'HomeIcon', // the component being exported from icons/index.js
    name: 'Dashboard', // name that appear in Sidebar
  },
  {
    path: '/app/forms',
    icon: 'AnalyticsIcon',
    name: 'Analytics',
  },
  {
    path: '/app/cards',
    icon: 'CardsIcon',
    name: 'Code',
  },
  {
    path: '/app/charts',
    icon: 'ChartsIcon',
    name: 'Token',
  },
  {
    path: '/app/buttons',
    icon: 'ButtonsIcon',
    name: 'Reports',
  },
  {
    path: '/app/modals',
    icon: 'ModalsIcon',
    name: 'Watchdog',
  },
  {
    path: '/app/tables',
    icon: 'TablesIcon',
    name: 'Attacks',
  },
  {
    path: '/app/sure',
    icon: 'PagesIcon',
    name: 'Bounty',
    // routes: [
    //   // submenu
    //   {
    //     path: '/login',
    //     name: 'Login',
    //   },
    //   {
    //     path: '/create-account',
    //     name: 'Create account',
    //   },
    //   {
    //     path: '/forgot-password',
    //     name: 'Forgot password',
    //   },
    //   {
    //     path: '/app/404',
    //     name: '404',
    //   },
    //   {
    //     path: '/app/blank',
    //     name: 'Blank',
    //   },
    // ],
  },
]

export default routes
