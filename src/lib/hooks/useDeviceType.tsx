import { useMediaQuery } from 'react-responsive';

interface DeviceType {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

const useDeviceType = (): DeviceType => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1023px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

  return {
    isMobile,
    isTablet,
    isDesktop,
  };
};

export default useDeviceType;
