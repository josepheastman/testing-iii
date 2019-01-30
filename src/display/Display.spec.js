// Test away!
import React from "react";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";

import Display from "./Display.js";

describe("<Display />", () => {
  it("locked and closed are equal to true & have red-led class", () => {
    const { getByTestId } = render(<Display locked={true} closed={true} />);

    const closed = getByTestId("closed");
    const locked = getByTestId("locked");

    expect({ closed, locked }).toHaveClass("red-led");

    expect(locked).toHaveTextContent(/Locked/i);
    expect(closed).toHaveTextContent(/Closed/i);
  });

  it("open and unlocked are equal to true & have green-led class", () => {
    const { getByTestId } = render(<Display locked={false} closed={false} />);
    const open = getByTestId("open");
    const unlocked = getByTestId("unlocked");

    expect({ open, unlocked }).toHaveClass("green-led");
  });

  it("unmounts component after each test", () => {
    console.log(document.body.outerHTML);
  });
});
