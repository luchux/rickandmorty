import "/app/globals.css";
import { CharactersList } from "@/components/CharactersList/CharactersList";
import Nav from "@/components/Nav";
import NavItem from "@/components/NavItem";

const Page = () => (
  <div className="container">
    <div className="nav">
      <Nav>
        <NavItem href="/new" isActive>
          New Releases
        </NavItem>
        <NavItem href="/top">Top Rated</NavItem>
        <NavItem href="/picks">Vincent’s Picks</NavItem>
      </Nav>
    </div>
    <div className="conten">
      <CharactersList />
    </div>
  </div>
);
export default Page;
