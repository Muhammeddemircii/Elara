import * as Unicons from '@iconscout/react-unicons';
import MyIcon2 from '../../../public/images/icons/jeotermal.svg';
import MyIcon from '../../../public/images/icons/surdurulebilirlik.svg';
import MyIcon3 from '../../../public/images/icons/yerelUretim.svg';
import MyIcon4 from '../../../public/images/icons/yuksekKatma.svg';
import { useTranslation } from 'react-i18next';

export const useServices = () => {
    const { t } = useTranslation();
    
    return [

        {
            Icon: MyIcon,
            title: t('services.item1.title'),
            description: t('services.item1.description'),
        },
        {
            Icon: MyIcon2,
            title: t('services.item2.title'),
            description: t('services.item2.description'),
        },
        {
            Icon: MyIcon3,
            title: t('services.item3.title'),
            description: t('services.item3.description'),
        },
        {
            Icon: MyIcon4,
            title: t('services.item4.title'),
            description: t('services.item4.description'),
        }
    ];
};

export const services = [
    {
        Icon: MyIcon,
        title: 'Grow Your Business',
        description: "If the distribution of letters and 'words' is random, the reader will not be distracted from making.",
    },
    {
        Icon: MyIcon2,
        title: 'Drive More Sales',
        description: "If the distribution of letters and 'words' is random, the reader will not be distracted from making.",
    },
    {
        Icon: MyIcon3,
        title: 'Handled By Expert',
        description: "If the distribution of letters and 'words' is random, the reader will not be distracted from making.",
    },
    {
        Icon: MyIcon4,
        title: 'Increase Conversion',
        description: "If the distribution of letters and 'words' is random, the reader will not be distracted from making.",
    }
];
export  const clientData = [
    {
        name:'Thomas Israel',
        image:'/images/client/01.jpg',
        designation:'C.E.O',
        description:"I didn't know a thing about icon design until I read this book. Now I can create any icon I need in no time. Great resource!",
        name1:'Carl Oliver',
        image1:'/images/client/05.jpg',
        designation1:'C.E.O',
        description1:"There are so many things I had to do with my old software that I just don't do at all with Techwind. Suspicious but I can't say I don't love it."
    },
    {
        name:'Barbara McIntosh',
        image:'/images/client/02.jpg',
        designation:'C.E.O',
        description:"The best part about Techwind is every time I pay my employees, my bank balance doesn't go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.",
        name1:'Barbara McIntosh',
        image1:'/images/client/04.jpg',
        designation1:'C.E.O',
        description1:"I'm trying to get a hold of someone in support, I'm in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away."
    },
    {
        name:'Jill Webb',
        image:'/images/client/03.jpg',
        designation:'C.E.O',
        description:"I used to have to remit tax to the EU and with Techwind I somehow don't have to do that anymore. Nervous to travel there now though.",
        name1:'Janisha Doll',
        image1:'/images/client/06.jpg',
        designation1:'C.E.O',
        description1:"This is the fourth email I've sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important."
    },
]
export const BlogsNewsdata = [
    {
        id:1,
        image: "/images/blog/1.png",
        title: 'BÖĞÜRTLEN',
        detail: 'Blackberry',
        more: 'Sipariş Ver',
    },
    {
        id:2,
        image: "/images/blog/2.png",
        title: 'AHUDUDU',
        detail: 'Raspberry',
        more: 'Sipariş Ver',
    },
    {
        id:3,
        image: "/images/blog/3.png",
        title: 'FRENK ÜZÜMÜ',
        detail: 'Redcurrant',
        more: 'Sipariş Ver',
    },
    {
        id:4,
        image: "/images/blog/4.jpg",
        title: 'Introducing new tools for your design.',
        detail: 'The phrasal sequence of the is now so that many campaign and benefit',
        more: 'Read More',
    },
    {
        id:5,
        image: "/images/blog/5.jpg",
        title: 'The Right Hand of Business IT World',
        detail: 'The phrasal sequence of the is now so that many campaign and benefit',
        more: 'Read More',
    },
    {
        id:6,
        image: "/images/blog/6.jpg",
        title: 'Truck Side Advertising Isn It Time for action.',
        detail: 'The phrasal sequence of the is now so that many campaign and benefit',
        more: 'Read More',
    },
    {
        id:7,
        image: "/images/blog/7.jpg",
        title: 'Introducing new tools for your design.',
        detail: 'The phrasal sequence of the is now so that many campaign and benefit',
        more: 'Read More',
    },
    {
        id:8,
        image: "/images/blog/8.jpg",
        title: 'The Right Hand of Business IT World',
        detail: 'The phrasal sequence of the is now so that many campaign and benefit',
        more: 'Read More',
    },
    {
        id:9,
        image: "/images/blog/9.jpg",
        title: 'Truck Side Advertising Isn It Time for action.',
        detail: 'The phrasal sequence of the is now so that many campaign and benefit',
        more: 'Read More',
    }
]
export const MeetOursdata = [
    {
        image: "/images/client/01.jpg",
        title: 'Jack John',
        type: 'Designer'
    },
    {
        image: "/images/client/02.jpg",
        title: 'Krista John',
        type: 'Designer'
    },
    {
        image: "/images/client/03.jpg",
        title: 'Roger Jackson',
        type: 'Designer'
    },
    {
        image: "/images/client/04.jpg",
        title: 'Johnny English',
        type: 'Designer'
    },
    {
        image: "/images/client/05.jpg",
        title: 'Samuel Bales',
        type: 'Designer'
    },
    {
        image: "/images/client/06.jpg",
        title: 'Judith Grasser',
        type: 'Designer'
    },
    {
        image: "/images/client/07.jpg",
        title: 'Nina Baker',
        type: 'Designer'
    },
    {
        image: "/images/client/08.jpg",
        title: 'Avery Slade',
        type: 'Designer'
    },
]
export const Contact = [
    {
        Icon: Unicons.UilPhone ,
        title: 'Phone',
        detail: 'The phrasal sequence of the is now so that many campaign and benefit',
        type: '+152 534-468-854'
    },
    {
        Icon: Unicons.UilEnvelope,
        title: 'Email',
        detail: 'The phrasal sequence of the is now so that many campaign and benefit',
        type: 'contact@example.com'
    },
    {
        Icon: Unicons.UilMapMarker ,
        title: 'Location',
        detail: 'C/54 Northwest Freeway, Suite 558, Houston, USA 485',
        type: 'View on Google map'
    }
]