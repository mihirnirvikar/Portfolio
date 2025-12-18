import { Header } from './Header.jsx';
import { Navbar } from './Navbar.jsx';
import { About } from './About.jsx';

export const Body = () => {
    return (
        <div>
            <Header />
            <Navbar />

            <hr />
            <About />
            
        </div>
    )
}