import { PokeballBlock } from "./contentBlocks/PokeballBlock";
import { ButtonBlockContent } from "./contentBlocks/ButtonBlockContent";
import { ListBlockContent } from "./contentBlocks/ListBlockContent";
import { Route } from "react-router";

export const DinamicContent = () => {
    return (
        <div className='MainContent'>
            <Route exact path={['/', '/collection']} render={PokeballBlock} />
            <Route exact path={['/', '/collection']} render={ButtonBlockContent} />

            <Route path='/editor' render={ListBlockContent} />
        </div>
    )
}