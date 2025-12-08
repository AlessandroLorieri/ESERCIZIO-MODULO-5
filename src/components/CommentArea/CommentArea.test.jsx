import { render, screen } from "@testing-library/react"
import CommentArea from "./CommentArea"

describe("CommentArea", () => {
    test("viene renderizzato correttamente senza asin", () => {

        render(<CommentArea asin={null} />)

        expect(screen.getByText("Recensioni")).toBeInTheDocument()

        expect(
            screen.getByText("Seleziona un libro per vedere o aggiungere recensioni.")
        ).toBeInTheDocument()
    })

    test("all'avvio non ci sono SingleComment nel DOM", () => {
        render(<CommentArea asin={null} />)

        const singleCommentNode = screen.queryByTestId("single-comment")
        expect(singleCommentNode).toBeNull()
    })

})
