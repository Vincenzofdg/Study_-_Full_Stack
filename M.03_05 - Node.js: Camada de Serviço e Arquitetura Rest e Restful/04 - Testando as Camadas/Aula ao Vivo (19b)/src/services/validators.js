// const runSchema = (schema) => schema.validateAsync
const runSchema = (schema) => async (value) => {
  const result = await schema.validateAsync(value);
  return result;
};

module.exports = {
  runSchema,
};