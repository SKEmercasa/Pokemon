import { ButtonBlockMenu } from "./menuBlocks/ButtonBlockMenu";
import { BotBlockMenu } from "./menuBlocks/BotBlockMenu";
import { MidBlockMenu } from "./menuBlocks/MidBlockMenu";
import { NoneBlockMenu } from "./menuBlocks/NoneBlockMenu";
import { TopBlockMenu } from "./menuBlocks/TopBlockMenu";
import { Route } from "react-router";

export const DinamicMenu = () => {
    return (
        <div className='Menu'>
            <Route exact path={['/', '/editor']} render={TopBlockMenu} />
            <Route exact path={['/', '/editor']} render={MidBlockMenu} />
            <Route exact path='/' render={NoneBlockMenu} />

            <Route path='/collection' render={ButtonBlockMenu} />

            <Route path='/editor' render={BotBlockMenu} />
        </div>
    )
}