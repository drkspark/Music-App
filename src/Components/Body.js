import Navigation_menu from "./navigation_menu";
import Card from "./card";
export default function Body() {
    return (
        <div>
        <div className='body'>
            <Navigation_menu />
            </div>
            <div className='effects'>
                <br></br>
                <Card />
            </div>
        </div>
    );
}
