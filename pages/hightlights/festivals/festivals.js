import data from "./data"
import Card from "../Card"
import Back from "../../back"
export default function Festivals() {
    return (
        <div>
            <Back />
            <h1 className="font-semibold text-teal-600 text-5xl relative top-16 tracking-wide italic m-auto" style={{width:"35%"}}>Traditional Festivals</h1>
            {
                data.map(festivalData => {
                    return (
                        <Card 
                            description={festivalData.description}
                            image={festivalData.image}
                            activities={festivalData.activities}
                        />
                    )
                })
            }
        </div>
    )
}