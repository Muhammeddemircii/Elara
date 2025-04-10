import React from 'react';

const ComfortablePricing = () => {
    const pricingPlans = [
        {
            name: "Basic",
            price: "9",
            features: [
                "Full Access",
                "Source Files",
                "Free Appointments",
                "Enhanced Security"
            ]
        },
        {
            name: "Standard",
            price: "39",
            features: [
                "Full Access",
                "Source Files",
                "Free Appointments",
                "Enhanced Security",
                "1 Domain Free"
            ]
        },
        {
            name: "Professional",
            price: "99",
            features: [
                "Full Access",
                "Source Files",
                "Free Appointments",
                "Enhanced Security",
                "1 Domain Free",
                "Free Installment"
            ]
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingPlans.map((plan, index) => (
                <div key={index} className="pricing-plan relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
                    <div className="content p-6">
                        <h5 className="text-xl font-semibold">{plan.name}</h5>
                        <div className="mt-4">
                            <span className="text-4xl font-bold">${plan.price}</span>
                            <span className="text-slate-400">/month</span>
                        </div>
                        <ul className="mt-6 space-y-3">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-center">
                                    <i className="uil uil-check text-green-600 mr-2"></i>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <button className="mt-6 w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
                            Get Started
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ComfortablePricing; 