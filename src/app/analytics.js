import ReactGA from 'react-ga4';

// initialize the google analytics
export const initializeAnalytics = () => {
  ReactGA.initialize('G-WT6H92QLFE');
};

// count the page view
export const logPageView = path => {
  // console.log(path);
  ReactGA.send({
    hitType: 'pageview',
    page: path,
  });
};

// log a custom event
export const logCustomEvent = (category, action, label) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};

// for using with react-ga4 package
// export const logPageView = path => {
//   if (window.gtag) {
//     console.log(path);

//     window.gtag('event', 'page_view', {
//       page_path: path,
//     });
//   }
// };
