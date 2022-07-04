import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

describe("List must be rendered and have a click on it must be copied", () => {

    beforeEach(() => {
        render(<App />)
    })

    test("Emoji list must be rendered", () => {
        const emojiList = screen.getAllByTestId("row")
        expect(emojiList.length).toEqual(20);
    })

    test("copy", () => {
        const emoji = screen.getAllByTestId('row')
        expect(emoji[0]).toHaveAttribute("data-clipboard-text")
    })

})