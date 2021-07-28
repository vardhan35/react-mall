import React from "react";
import { shallow } from "enzyme";
import { checkPropError, findByTestAttributes } from "./../../../Utils";
import ItemCard from "./";
import IMG from "./../../../public/profile.jpg";

describe("(03) Component ItemCard", () => {
  describe("Checking PropTypes", () => {
    test("should Not throw Error On propTypes", () => {
      const expectedProps = {
        img: IMG,
        title: "test String",
        desc: "test String",
        emitAction: () => {},
      };
      const propsError = checkPropError(ItemCard, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe("Renders AppButton", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        img: IMG,
        title: "test String",
        desc: "test String",
        emitAction: () => {},
      };
      wrapper = shallow(<ItemCard {...props} />);
    });
    test("should Render AppButton without Error", () => {
      const card = findByTestAttributes(wrapper, "itemCard");
      expect(card.length).toBe(1);
    });
  });
});
