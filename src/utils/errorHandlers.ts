import {
  COMMON_PASSWORD,
  EMAIL_ALREADY_EXISTS,
  INVALID_PASSWORD,
  NO_ACTIVE_ACCOUNT,
  PWD_SIMILAR_TO_EMAIL,
} from '../constants/backendErrorMessages';
import {
  notifyEmailAlreadyExists,
  notifyPasswordIsTooCommon,
  notifyPasswordSimilarToEmail,
  notifySignInError,
  notifySomethingWrong,
  notifyWrongCurrentPassword,
} from './toastHelpers';

export const checkForErrorText = (data: Record<string, Array<string>>, errorText: string) => {
  return Object.values(data).some((field) => field?.includes(errorText));
};

export const checkDataFieldsForErrors = (data: Record<string, Array<string>>) => {
  if (checkForErrorText(data, NO_ACTIVE_ACCOUNT)) {
    notifySignInError();
  } else if (checkForErrorText(data, EMAIL_ALREADY_EXISTS)) {
    notifyEmailAlreadyExists();
  } else if (checkForErrorText(data, COMMON_PASSWORD)) {
    notifyPasswordIsTooCommon();
  } else if (checkForErrorText(data, PWD_SIMILAR_TO_EMAIL)) {
    notifyPasswordSimilarToEmail();
  } else if (checkForErrorText(data, INVALID_PASSWORD)) {
    notifyWrongCurrentPassword();
  } else {
    notifySomethingWrong();
  }
};
