import React from "react";

const Category = () => {
  return (
    <div className="w-full lg:w-1/3 px-3">
      {/* Topics */}
      <div className="mb-4">
        <h5 className="font-bold text-lg uppercase text-gray-700 px-1 mb-2">
          Popular Topics
        </h5>
        <ul>
          {[
            { color: "bg-green-300", name: "Nutrition", count: 23 },
            { color: "bg-indigo-300", name: "Food & Diet", count: 18 },
            { color: "bg-yellow-300", name: "Workouts", count: 34 },
            { color: "bg-blue-300", name: "Immunity", count: 9 },
          ].map((topic, index) => (
            <li
              key={index}
              className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300"
            >
              <a href="#" className="flex items-center text-gray-600 cursor-pointer">
                <span className={`inline-block h-4 w-4 ${topic.color} mr-3`}></span>
                {topic.name}
                <span className="text-gray-500 ml-auto">{topic.count} articles</span>
                <i className="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Divider */}
      <div className="border border-dotted"></div>

      {/* Subscribe */}
      <div className="p-1 mt-4 mb-4">
        <h5 className="font-bold text-lg uppercase text-gray-700 mb-2">Subscribe</h5>
        <p className="text-gray-600">
          Subscribe to our newsletter. We deliver the best health-related articles to your inbox.
        </p>
        <input
          placeholder="Your email address"
          className="text-gray-700 bg-gray-100 rounded-t p-2 w-full mt-4 border outline-none"
        />
        <button className="px-4 py-2 bg-indigo-600 text-gray-200 rounded-b w-full capitalize tracking-wide">
          Subscribe
        </button>
      </div>

      {/* Divider */}
      <div className="border border-dotted"></div>
    </div>
  );
};

export default Category;
