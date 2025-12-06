import Welcome from "../components/Welcome/Welcome"
import AllTheBooks from "../components/AllTheBooks/AllTheBooks"

const HomePage = ({searchQuery}) => {
    return(
        <>
        <Welcome />
        <AllTheBooks searchQuery={searchQuery}/>
        </>
    )
}

export default HomePage