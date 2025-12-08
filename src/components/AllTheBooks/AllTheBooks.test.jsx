
import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"

import AllTheBooks from "./AllTheBooks"
import booksData from "../../data/books.json"

describe("AllTheBooks", () => {
    it("renderizza una card per ogni libro", async () => {

        render(
            <MemoryRouter>
                <AllTheBooks searchQuery="" />
            </MemoryRouter>
        )

        const cards = await screen.findAllByTestId("book-card")

        expect(cards).toHaveLength(booksData.length)
    })
})
