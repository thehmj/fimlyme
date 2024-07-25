import {Dimensions,PixelRatio} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export const GetWidth = prop => {
  return windowWidth * prop;
};
export const GetHight = prop => {
  return windowHeight * prop;
};
export const GetFont = prop => {
  return windowWidth * prop;
};

export const perHeight = prop => {
  return (windowHeight/100) * prop;
};

export const perWidth = prop => {
  return (windowWidth/100) * prop;
};

export const relativeWidth = (value) => {
  return (windowWidth * value) / 432;
};

export const relativeHeight = (value) => {
  return (windowHeight * value) / 732;
};

export const minofHeight = (value) => {
  return Math.min(relativeHeight(value),value);
};

export const minofWidth = (value) => {
  return Math.min(relativeWidth(value),value);
};

export const maxofHeight = (value) => {
  return Math.max(relativeHeight(value),value);
};

export const maxofWidth = (value) => {
  return Math.max(relativeWidth(value),value);
};

export const minScreen = (value) => {
  return Math.min(relativeWidth(value),relativeHeight(value));
};


export const maxScreen = (value) => {
  return Math.max(relativeWidth(value),relativeHeight(value));
};

export const responsiveFontSize = (size) => {
  const fontScale = PixelRatio.get();
  const fontRatio = PixelRatio.getFontScale();
  // console.log(fontScale);
  return (size * fontScale) / (fontRatio * 2.5);
};