import { checkPropTypes } from "prop-types";

export const findByTestAttributes = (wrapper, attr) => {
  return wrapper.find(`[data-test="${attr}"]`);
};

export const checkPropError = (component, expectedProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    expectedProps,
    "props",
    component.name
  );
  return propError;
};
