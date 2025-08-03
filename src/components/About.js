import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="px-4 py-10 sm:px-8 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-gray-800">
          About Us
        </h1>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
          Welcome to <span className="font-semibold">MealMood</span>, your go-to
          food delivery app! We bring your favorite meals from the best
          restaurants straight to your doorstep — fresh, hot, and delicious.
        </p>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            🚀 Our Mission
          </h2>
          <p className="text-gray-600">
            To make food ordering fast, reliable, and joyful — whether you're
            craving a quick snack or a gourmet meal.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            💡 What We Offer
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Top-rated restaurants and cuisines near you</li>
            <li>Real-time tracking of orders</li>
            <li>Safe and secure payments</li>
            <li>Exclusive deals and discounts</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            👨‍💻 Built With
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>React & Redux</li>
            <li>Tailwind CSS</li>
            <li>Swiggy Public APIs</li>
            <li>Custom Components & Hooks</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default About;
