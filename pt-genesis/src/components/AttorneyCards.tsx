import React from "react";
import {
    Card,
    CardContent
} from "@/components/ui/card"

interface CardData {
    name: string;
    title: string;
    imageUrl: string;
}

const renderCard = ({ name, title, imageUrl }: CardData) => (
    <Card className="h-fit p-5 w-fit">
        <CardContent className="grid gap-5 font-semibold text-gray-600 place-items-center">
            <div className="w-full h-48 overflow-hidden">
                <img src={imageUrl} className="w-full h-full object-cover" alt={name} />
            </div>
            <div className="text-center">
                <h2 className="text-lg font-bold">{name}</h2>
                <p className="text-sm text-gray-500">{title}</p>
            </div>
        </CardContent>
    </Card>
);

const data: CardData[] = [
    {
        name: 'Frank Newman',
        title: 'CEO',
        imageUrl: 'https://www.corporatephotographerslondon.com/wp-content/uploads/2022/02/FRA-1699dark-sq.jpg'
    },
    {
        name: 'Jane Doe',
        title: 'Lawyer',
        imageUrl: 'https://www.corporatephotographerslondon.com/wp-content/uploads/2021/06/non-smiling-LinkedIn-profile-photo.jpg'
    },
    {
        name: 'Georgina Smith',
        title: 'Lawyer Civil Law',
        imageUrl: 'https://annemariesegal.com/wp-content/uploads/2017/04/adobestock_86346713-cropped-young-woman-in-suit.jpg?w=640'
    }
];

export default function AttorneyCards() {
    return (
        <div className="grid h-full mt-10 mb-10 w-full gap-4 sm:grid-cols-3 place-items-center">
            {data.map((person, index) => (
                <React.Fragment key={index}>
                    {renderCard(person)}
                </React.Fragment>
            ))}
        </div>
    )
}