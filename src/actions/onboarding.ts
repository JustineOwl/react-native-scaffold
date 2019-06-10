import { SET_SLIDE_INDEX, SET_ONBOARDING_FINISHED } from './types';

export const setSlideIndex = (index: number) => {
  return <const>{
    type: SET_SLIDE_INDEX,
    payload: index
  };
};

export const setOnboardingFinished = () => {
  return <const>{
    type: SET_ONBOARDING_FINISHED
  };
};

export type OnboardingActionsTypes =
    ReturnType<typeof setSlideIndex>
  | ReturnType<typeof setOnboardingFinished>
  ;