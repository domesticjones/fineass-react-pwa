import SplashImage from '../resources/img/seo/home-splash-screen.png';

export default [
  {
    path: '/',
    exact: true,
    component: () => import('../components/splash'),
    seo: {
      title: 'FineAsses - Collabaratively Manage Finances',
      description: 'Keep track of your Finest Assets alongside your special people',
      image: SplashImage,
    },
  },
];
