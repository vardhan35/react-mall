import React from "react";
import { shallow } from "enzyme";
import AppButton from "./";
import { findByTestAttributes, checkPropError } from "./../../../Utils";

describe("(01) AppButton Component", () => {
  describe("Prop Types", () => {
    test("Checking propTypes", () => {
      const expectedProps = {
        buttonText: "Test String",
        emitAction: () => {},
      };
      const propsError = checkPropError(AppButton, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe("Renders AppButton", () => {
    let wrapper;
    let mockFunc;
    beforeEach(() => {
      mockFunc = jest.fn();
      const props = {
        buttonText: "Test String",
        emitAction: mockFunc,
      };
      wrapper = shallow(<AppButton {...props} />);
    });
    test("should Render AppButton without Error", () => {
      const button = findByTestAttributes(wrapper, "appButton");
      expect(button.length).toBe(1);
    });
    test("should Emit Action without Error", () => {
      const button = findByTestAttributes(wrapper, "appButton");
      button.simulate("click");
      const callback = mockFunc.mock.calls.length;
      expect(callback).toBe(1);
    });
  });
});
