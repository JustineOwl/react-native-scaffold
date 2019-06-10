import { OnboardingActionsTypes } from '../actions/onboarding';
import { SET_SLIDE_INDEX, SET_ONBOARDING_FINISHED } from '../actions/types';

interface OnboardingStateType {
    slideIndex: number;
    onboardingFinished: boolean;
}

const initialState: OnboardingStateType = {
    slideIndex: 0,
    onboardingFinished: false
};

export default (state: OnboardingStateType = initialState, action: OnboardingActionsTypes) => {
    switch (action.type) {
        case SET_SLIDE_INDEX:
            return {
                ...state,
                slideIndex: action.payload
            };
        case SET_ONBOARDING_FINISHED:
            return {
                ...state,
                onboardingFinished: true
            };
    default:
        return state;
    }
};