var admobid = {};
if( /(android)/i.test(navigator.userAgent) ) { 
  admobid = {
    banner: 'ca-app-pub-2072469724947508/4200565074',
    interstitial: 'ca-app-pub-2072469724947508/6203518674'
  };
}

function initApp() {
  if (AdMob) AdMob.createBanner( {
    adId: admobid.banner,
    position: AdMob.AD_POSITION.BOTTOM_CENTER,
    overlap: false,
    offsetTopBar: false,
    bgColor: 'white',
	orientationRenew: true
  } );

  if (AdMob) AdMob.prepareInterstitial({
    adId: admobid.interstitial,
    autoShow: true
  });
}

if(( /(android)/i.test(navigator.userAgent) )) {
    document.addEventListener('deviceready', initApp, false);
} else {
    initApp();
}
