export const initGA = (gtag, id) => {
  if (process.env.NODE_ENV === "production") {
    gtag('config', id, {'allow_ad_personalization_signals': true, cookie_flags: 'max-age=7200;secure;samesite=none'});
    gtag('consent', 'update', {'analytics_storage':'granted'});
    gtag('set', id, {'allow_google_signals': true});
    gtag('set', id, { 'send_page_view': true });
  }
};

export const declineGA = (gtag, id) => {
  if (process.env.NODE_ENV === "production") {
    gtag('config', id, {'allow_ad_personalization_signals': false, cookie_flags: 'max-age=7200;secure;samesite=none' });
    gtag('consent', 'update', {'analytics_storage':'denied'});
    gtag('set', id, {'allow_google_signals': false});
    gtag('set', id, { 'send_page_view': false });
    gtag('set', id, {'ads_data_redaction': true});//further redacts ads
  }
}