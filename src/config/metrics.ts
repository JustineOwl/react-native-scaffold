import { Platform, Dimensions } from 'react-native';

// TODO: Check in F8 if they have some better way
export const getStatusBarHeight = (): number => {
    if (Platform.OS === 'ios') {
        return 20;
    }

    return 24;
};

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
