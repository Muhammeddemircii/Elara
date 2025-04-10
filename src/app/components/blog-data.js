import React from 'react';

const BlogData = () => {
    const blogs = [
        {
            id: 1,
            title: "Design your apps in your own way",
            image: "/images/blog/01.jpg",
            category: "UI/UX Design",
            date: "13th August, 2019",
            description: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century."
        },
        {
            id: 2,
            title: "How apps is changing the IT world",
            image: "/images/blog/02.jpg",
            category: "Digital Marketing",
            date: "12th August, 2019",
            description: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century."
        },
        {
            id: 3,
            title: "Smartest Applications for Business",
            image: "/images/blog/03.jpg",
            category: "Development",
            date: "11th August, 2019",
            description: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century."
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
                <div key={blog.id} className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
                    <img src={blog.image} alt={blog.title} className="w-full" />
                    <div className="content p-6">
                        <span className="text-slate-400 text-sm">{blog.category}</span>
                        <h5 className="mt-2 text-xl font-semibold">{blog.title}</h5>
                        <p className="text-slate-400 mt-3">{blog.description}</p>
                        <div className="mt-4">
                            <span className="text-slate-400 text-sm">{blog.date}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BlogData; 