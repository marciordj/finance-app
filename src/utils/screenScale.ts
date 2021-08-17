import { Dimensions, PixelRatio, Platform } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const IS_ANDROID = Platform.OS === 'android';

const scale = SCREEN_WIDTH > 700 ? 1.4 : SCREEN_WIDTH / 320;

export const screenScale = (size: number) => {
  const newSize = size * (IS_ANDROID ? scale * 9 : scale * 0.95);

  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};
