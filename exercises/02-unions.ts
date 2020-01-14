interface FormState {
  email: string;
}

interface FormAction {
  // TODO
  // 1. Make string into a union so that only the
  //    strings in the switch statement are accepted
  type: string;
  // TODO
  // 2. Make the payloads into a union so that
  // .  the different values in the reducer below
  //    are allowed
  payload: any;
}

/**
 * Takes an action and returns new state based upon
 * the previous state and the passed action
 */
export function formReducer(
  state: FormState,
  action: FormAction
): FormState {
  switch (action.type) {
    case "email_change":
      return { ...state, email: action.payload.email };
    case "password_change":
      return { ...state, email: action.payload.password };
    default:
      return state;
  }
}
