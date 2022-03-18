import GA4 from "react-ga4";

export const initGA = (id) => {
  if (process.env.NODE_ENV === "development") {
    GA4.initialize([{
      trackingId: id,
      gaOptions: {
        anonymizeIp: true,
      }
    }]);
    GA4.send("pageview")
  }  

  if (process.env.NODE_ENV === "production") {
    GA4.initialize([{
      trackingId: id,
      gaOptions: {
        anonymizeIp: true,
      }
    }]);
    GA4.send("pageview")
  }
};
