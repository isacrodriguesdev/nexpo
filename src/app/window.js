import { Dimensions } from 'react-native';

let { height, width, scale } = Dimensions.get("window");

const paddingHorizontal = 20;

height = height;
width = width / 1000;

export { height, width, scale, paddingHorizontal };