
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

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

describe("Se selezionato bordo rosso", () => {
    test("cliccando su un libro aggiungo bordo rosso", async () => {
        const user = userEvent.setup()
        renderApp()

        const firstTitle = booksData[0].title

        const firstTitleNode = await screen.findByText(firstTitle)

        const firstCard = firstTitleNode.closest(".card")
        expect(firstCard).not.toHaveClass("selected")

        await user.click(firstCard)

        expect(firstCard).toHaveClass("selected")
    })

    test("cliccando su un secondo libro il bordo rosso si toglie dal primo e passa al secondo", async () => {
        const user = userEvent.setup()
        renderApp()

        const firstTitle = booksData[0].title
        const secondTitle = booksData[1].title

        const firstCard = (await screen.findByText(firstTitle)).closest(".card")
        const secondCard = (await screen.findByText(secondTitle)).closest(".card")

        await user.click(firstCard)
        expect(firstCard).toHaveClass("selected")

        await user.click(secondCard)

        expect(secondCard).toHaveClass("selected")
        expect(firstCard).not.toHaveClass("selected")
    })
})
