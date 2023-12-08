import Counter from '../components/Counter';
import React from 'react';
import {render, fireEvent, waitFor} from "@testing-library/react"


describe("Counter", () => {

  let counterComponent

  beforeEach(() => {
    counterComponent = render(<Counter/>)

  });

  it('should start the counter at zero', () => {
    const counter = counterComponent.getByTestId("counter")
    expect(counter.textContent).toEqual("0")
  });

  it("should increment counter on click", () => {
    const upButton = counterComponent.getByTestId("button-up")
    fireEvent.click(upButton)
    const counter = counterComponent.getByTestId("counter")
    expect(counter.textContent).toEqual("1")
  });

  it("should decrement counter on click", () => {
    const downButton = counterComponent.getByTestId("button-down")
    fireEvent.click(downButton)
    const counter = counterComponent.getByTestId("counter")
    expect(counter.textContent).toEqual("-1")
  });

})