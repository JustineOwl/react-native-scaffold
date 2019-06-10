import { combineReducers } from 'redux';

import OnboardingReducer from './onboarding_reducer';

export const rootReducer = combineReducers({
    onboarding: OnboardingReducer,
});

export default rootReducer;