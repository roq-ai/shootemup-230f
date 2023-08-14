import * as yup from 'yup';

export const missionValidationSchema = yup.object().shape({
  name: yup.string().required(),
  reward: yup.string().required(),
  organization_id: yup.string().nullable(),
});
