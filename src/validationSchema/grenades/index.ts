import * as yup from 'yup';

export const grenadeValidationSchema = yup.object().shape({
  name: yup.string().required(),
  type: yup.string().required(),
  organization_id: yup.string().nullable(),
});
