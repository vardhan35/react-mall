import React from "react";
import { shallow } from "enzyme";
import NavBar from "./";
import { findByTestAttributes } from "./../../../Utils";

describe("(02) Navbar Component", () => {
  test("should render navBar component without Error", () => {
    const wrapper = shallow(<NavBar />);
    const navBar = findByTestAttributes(wrapper, "navBar");
    expect(navBar.length).toBe(1);
  });
});
