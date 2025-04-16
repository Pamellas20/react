import React, {useState} from "react";

export default function Counter(){
    const [count, setCount]= useState(0);
    return(
        <div>
            <h1 className="text-3xl">Count: {count}</h1>
            <button className="bg-green-900 text-white mx-4 p-2 mt-3" onClick={()=>{setCount(count+2);

            }}>Increase</button>
            <button className="bg-yellow-600 text-white mx-4 p-2 mt-3"onClick={()=>setCount(count-1)

            }>Reduce</button>
            <button className="bg-red-900 text-white mx-4 p-2 mt-3" onClick={()=>setCount(0)

            }>Reset</button>
            {/* Show message if count > 15 */}
            {count > 15 ? <p className="text-2xl font-bold text-green-600 mt-4">High Score</p> : null}

        </div>
    );
}