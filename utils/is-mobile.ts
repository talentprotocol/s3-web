export const isDevice = (userAgent: string) => {
  const isAndroid = () => Boolean(userAgent.match(/Android/i));
  const isIos = () => Boolean(userAgent.match(/iPhone|iPad|iPod/i));
  const isOpera = () => Boolean(userAgent.match(/Opera Mini/i));
  const isWindows = () => Boolean(userAgent.match(/IEMobile/i));
  const isSafari = () => Boolean(userAgent.match(/Safari/i) && !userAgent.match(/Chrom/i));
  const isSSR = () => Boolean(userAgent.match(/SSR/i));
  const isMobile = () =>
    Boolean(isAndroid() || isIos() || isOpera() || isWindows());
  // const isDesktop = () => Boolean(!isMobile() && !isSSR())
  return { 
    isMobile: isMobile(), 
    isSafari: isSafari(),
    isAndroid: isAndroid()
  }
};
