var admobid = {
    banner: 'ca-app-pub-2072469724947508/4139638673',
    interstitial: 'ca-app-pub-2072469724947508/5616371879'
  };

function initApp() {
  AdMob.createBanner( {
    adId: admobid.banner,
    position: AdMob.AD_POSITION.BOTTOM_CENTER,
    overlap: false,
    offsetTopBar: false,
    bgColor: 'white',
	orientationRenew: true
  } );

  AdMob.prepareInterstitial({
    adId: admobid.interstitial,
    autoShow: true
  });
}

function showInterstitialOnPage() {
  AdMob.prepareInterstitial({
    adId: admobid.interstitial,
    autoShow: true
  });
}

if(( /(android)/i.test(navigator.userAgent) )) {
    document.addEventListener('deviceready', initApp, false);
} else {
    initApp();
}
