export default function Navigation({ playing, pause }) {
    return (
        <div className='navmenu'>
            <br></br>
            <nav>
                <ul className='menu'>
                    <li>
                        <button onClick={pause}>
                            {playing == true ? "Pause" : "Play"}
                        </button>
                    </li>
                    <li>
                        <button>PlayList</button>
                    </li>
                    <li>
                        <button>Shuffle</button>
                    </li>
                    <li>
                        <button>Loop</button>
                    </li>
                    <li>
                        <button>Room</button>
                    </li>
                </ul>
            </nav>
            <br></br>
        </div>
    );
}
