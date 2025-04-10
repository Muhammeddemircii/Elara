import React from 'react';

const ClientsReview = () => {
    const reviews = [
        {
            id: 1,
            name: "Thomas Israel",
            position: "C.E.O",
            company: "Company",
            image: "/images/client/01.jpg",
            comment: "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today."
        },
        {
            id: 2,
            name: "Barbara McIntosh",
            position: "M.D",
            company: "Company",
            image: "/images/client/02.jpg",
            comment: "One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others."
        },
        {
            id: 3,
            name: "Carl Oliver",
            position: "P.A",
            company: "Company",
            image: "/images/client/03.jpg",
            comment: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century."
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review) => (
                <div key={review.id} className="review relative rounded-md shadow dark:shadow-gray-800 overflow-hidden p-6">
                    <div className="flex items-center mb-4">
                        <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full" />
                        <div className="ml-4">
                            <h6 className="font-semibold">{review.name}</h6>
                            <p className="text-slate-400 text-sm">{review.position} - {review.company}</p>
                        </div>
                    </div>
                    <p className="text-slate-400">{review.comment}</p>
                </div>
            ))}
        </div>
    );
};

export default ClientsReview; 