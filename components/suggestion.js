import { useState, useEffect } from "react"
import faker from 'faker'

function suggestion() {
    const [suggestion, setSuggestions] = useState([]);

    useEffect(() => {
       const suggestions = [...Array(5)].map((_, i)=>({
           ...faker.helpers.contextualCard(),
           id: i
       }))

       setSuggestions(suggestions)
    }, [])

    return (
        <div className="mt-4 ml-10">
            <div className="flex justify-between text-sm mb-5">
                <h3 className="text-sm font-semibold text-gray-400" >Suggestin for you</h3>
                <button className="text-gray-600 font-semibold"> See all</button>
            </div>
            {
                suggestion.map(profile =>(
                    <div key={profile.id} className="flex items-center justify-between mt-3" >
                        <img src={profile.avatar} alt="" className="w-10 h-10 rounded-full p-[2px] border" />
                        <div className="flex-1 ml-4">
                            <h2 className="font-semibold text-sm" >{profile.username}</h2>
                            <h3 className="text-xs text-gray-400">Works at {profile.company.name}</h3>
                        </div>
                        <button className="text-blue-400 text-sm font-semibold">Follow</button>
                    </div>
                ))
            }
        </div>
    )
}

export default suggestion
