import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { ThemeProvider } from "../ThemeContext/ThemeContext"
import App from "../../App"
import booksData from "../../data/books.json"

describe("Filtro tramite navbar", () => {
    test("scrivendo nell'input della navbar vengono filtrati i libri", async () => {
        const user = userEvent.setup()

        render(
            <ThemeProvider>
                <App />
            </ThemeProvider>
        )

        const searchInput = screen.getByPlaceholderText("Cerca per titolo...")

        const firstTitle = booksData[0].title
        const secondTitle = booksData[1].title

        await user.type(searchInput, firstTitle)

        expect(await screen.findByText(firstTitle)).toBeInTheDocument()

        expect(screen.queryByText(secondTitle)).not.toBeInTheDocument()
    })
})
