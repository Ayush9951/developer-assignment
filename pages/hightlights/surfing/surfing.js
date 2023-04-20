import data from "./data"
import Card from "../Card"
import Back from "../../back"
export default function Surfing() {
    return (
        <div>
            <Back />
            <h1 className="font-semibold text-teal-600 text-5xl relative top-16 tracking-wide italic  w-44 m-auto">Surfing</h1>
            {
                data.map(surfingData => {
                    return (
                        <Card 
                            description={surfingData.description}
                            image={surfingData.image}
                            activities={surfingData.activities}
                        />
                    )
                })
            }
        </div>
    )
}