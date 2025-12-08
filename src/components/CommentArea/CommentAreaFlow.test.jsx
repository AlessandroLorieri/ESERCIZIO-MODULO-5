import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { vi } from "vitest"

import App from "../../App.jsx"
import { ThemeProvider } from "../ThemeContext/ThemeContext.jsx"
import booksData from "../../data/books.json"

const renderApp = () => {
    return render(
        <ThemeProvider>
            <App />
        </ThemeProvider>
    )
}

describe("Flusso commenti", () => {
    test("cliccando su un libro con recensioni, vengono mostrate nel DOM", async () => {
        const user = userEvent.setup()

        const firstBook = booksData[0]

        const fakeComments = [
            {
                _id: "c1",
                comment: "Recensione finta 1",
                rate: 5,
                elementId: firstBook.asin,
            },
            {
                _id: "c2",
                comment: "Recensione finta 2",
                rate: 4,
                elementId: firstBook.asin,
            },
        ]

        const originalFetch = global.fetch
        global.fetch = vi.fn().mockResolvedValue({
            ok: true,
            json: async () => fakeComments,
        })

        renderApp()

        const firstTitleNode = await screen.findByText(firstBook.title)
        const firstCard = firstTitleNode.closest(".card")

        expect(screen.queryByTestId("single-comment")).toBeNull()

        await user.click(firstCard)

        const firstCommentNode = await screen.findByText("Recensione finta 1")
        expect(firstCommentNode).toBeInTheDocument()

        global.fetch = originalFetch
    })
})
