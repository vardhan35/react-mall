import React from "react";
import { shallow } from "enzyme";
import { checkPropError, findByTestAttributes } from "./../../../Utils";
import CartItem from "./";
import IMG from "./../../../public/profile.jpg";

describe("(04) Component CartItem", () => {
  describe("Checking PropTypes", () => {
    test("should Not throw Error On propTypes", () => {
      const expectedProps = {
        image: IMG,
        title: "test String",
        desc: "test String",
        emitAction: () => {},
      };
      const propsError = checkPropError(CartItem, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe("Renders AppButton", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        image: IMG,
        title: "test String",
        desc: "test String",
        emitAction: () => {},
      };
      wrapper = shallow(<CartItem {...props} />);
    });
    test("should Render CartItem without Error", () => {
      const cartItem = findByTestAttributes(wrapper, "cartItem");
      expect(cartItem.length).toBe(1);
    });
  });
});
