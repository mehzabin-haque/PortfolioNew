import { ThemeProvider } from "./ThemeProvider"
import ThemeToggler from "./ThemeToggler"


type Props = {}

const Header = (props: Props) => {
  return (
    <header>
        <ThemeToggler />
    </header>
  )
}

export default Header