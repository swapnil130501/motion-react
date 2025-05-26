import { useState } from "react";

export default function Layout() {

    const songs = [
        {
            title: 'Not like us',
            artist: 'Kendric Lamar',
            image: 'https://robohash.org/1',
            desc: 'Not Like Us is a diss track written and recorded by the American rapper Kendrick Lamar amidst his highly publicized feud with the Canadian rapper Drake. Released on May 4, 2024 through Interscope Records, it broke numerous records on the streaming platform Spotify and is tied with "Up, Up and Away" as the most-awarded song in Grammy history. With widespread acclaim from music critics and fans who feel it solidified Lamars victory in his rap battle with Drake, many regard it as the best diss track in the feud and consider it to be one of the greatest diss tracks of all time'
        },
        {
            title: 'Up, Up and Away',
            artist: 'Drake',
            image: 'https://robohash.org/2',
            desc: 'Up, Up and Away is a diss track written and recorded by the Canadian rapper Drake in response to Kendrick Lamars "Not Like Us". Released on May 4, 2024 through OVO Sound, it broke numerous records on the streaming platform Spotify and is tied with "Not Like Us" as the most-awarded song in Grammy history. With widespread acclaim from music critics and fans who feel it solidified Drakes victory in his rap battle with Lamar, many regard it as the best diss track in the feud and consider it to be one of the greatest diss tracks of all time'
        },
        {
            title: 'The Real Slim Shady',
            artist: 'Eminem',
            image: 'https://robohash.org/3',
            desc: 'The Real Slim Shady is a diss track written and recorded by the American rapper Eminem in response to various rappers who had been dissing him. Released on May 4, 2024 through Aftermath Entertainment, it broke numerous records on the streaming platform Spotify and is tied with "Not Like Us" and "Up, Up and Away" as the most-awarded song in Grammy history. With widespread acclaim from music critics and fans who feel it solidified Eminems status as one of the greatest rappers of all time, many regard it as one of the greatest diss tracks of all time'
        }
    ]

    const[activeCard, setActiveCard] = useState(null);

    const onClickHandler = (card) => {
        setActiveCard(card);
    }

    return (
        <div className="min-h-screen bg-neutral-900 flex items-center justify-center py-10 relative">
            {activeCard && (
                <div className="h-[600px] w-80 rounded-2xl border border-neutral-200 p-4 fixed inset-0 z-20 m-auto">
                    <div className="flex flex-col items-center gap-4 items-start py-4">
                            <img src={activeCard.image} className="h-60 aspect-square rounded-lg"/>
                            <div className=" h-60 flex flex-col gap-2 overflow-auto">
                                <h2 className="text-white font-bold text-lg">{activeCard.title}</h2>
                                <p className="text-xs text-neutral-500">{activeCard.desc}</p>
                            </div>
                        </div>
                    </div>
            )}
            <div className="max-w-lg mx-auto flex flex-col gap-10">
                {songs.map((song, idx) => (
                    <button onClick={() => onClickHandler(song)} key={song.title} className="p-4 rounded-lg flex justify-between bg-white border border-neutral-200">
                        <div className="flex items-center gap-4">
                            <img src={song.image} className="h-20 aspect-square rounded-lg"/>
                            <div>
                                <h2 className="text-white font-bold text-lg">{song.title}</h2>
                                <p className="text-xs text-neutral-500">{song.artist}</p>
                            </div>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    )
}