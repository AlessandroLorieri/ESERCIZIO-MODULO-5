
import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import Welcome from "./Welcome"

describe("Welcome", () => {
    it("viene montato correttamente", () => {

        render(<Welcome />)

        const heading = screen.getByText("Benvenuti su EpiBooks")

        expect(heading).toBeInTheDocument()
    })
})
