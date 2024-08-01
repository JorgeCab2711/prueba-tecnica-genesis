import React from "react";
import {
    Card,
    CardContent
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import stars from '@/images/stars.png'

// Define una interfaz para los datos de la tarjeta
interface CardData {
    name: string;
    title: string;
    imageUrl: string;
}

const renderCard = ({ name, title, imageUrl }: CardData) => (
    <Card className="h-fit p-5 w-fit">
        <CardContent className="grid gap-5 font-semibold text-gray-600 place-items-center">
            <img src={stars.src} className="w-1/2 h-auto" alt="Stars" />
            <p>Slate helps you see how many more days you need to work to reach your financial goal.</p>
            <div className="flex items-center">
                <Avatar className="flex-shrink-0">
                    <AvatarImage src={imageUrl} />
                    <AvatarFallback>{name[0] + name.split(' ')[1][0]}</AvatarFallback>
                </Avatar>
                <div className="ml-4 text-left">
                    <h2 className="text-lg font-bold">{name}</h2>
                    <p className="text-sm text-gray-500">{title}</p>
                </div>
            </div>
        </CardContent>
    </Card>
);

const data: CardData[] = [
    {
        name: 'Frank Newman',
        title: 'Stock Broker',
        imageUrl: 'https://www.corporatephotographerslondon.com/wp-content/uploads/2022/02/FRA-1699dark-sq.jpg'
    },
    {
        name: 'Jane Doe',
        title: 'Financial Analyst',
        imageUrl: 'https://www.corporatephotographerslondon.com/wp-content/uploads/2021/06/non-smiling-LinkedIn-profile-photo.jpg'
    },
    {
        name: 'Georgina Smith',
        title: 'Investment Banker',
        imageUrl: 'https://annemariesegal.com/wp-content/uploads/2017/04/adobestock_86346713-cropped-young-woman-in-suit.jpg?w=640'
    }
];

export default function ReviewCards() {
    return (
        <div className="grid grid-cols-1 h-auto mt-10 mb-10 w-full gap-4 sm:grid-cols-3">
            {data.map((person, index) => (
                <React.Fragment key={index}>
                    {renderCard(person)}
                </React.Fragment>
            ))}
        </div>
    )
}
