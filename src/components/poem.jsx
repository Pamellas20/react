import React, { useState } from "react";

export default function Poem() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [favoriteColor, setFavoriteColor] = useState("");
  const [hobby, setHobby] = useState("");
  const [petName, setPetName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !address || !favoriteColor || !hobby || !petName) {
      alert("Please fill in all fields!");
      setIsSubmitted(false);
    } else {
      setIsSubmitted(true);
    }
  };

  const renderPoem = () => {
    if (!isSubmitted) {
      return (
        <p className="text-center text-rose-500 italic text-sm sm:text-base">
          Fill the form to reveal your custom poem...
        </p>
      );
    }
    return (
      <div className="bg-rose-50 p-6 rounded-xl shadow-md text-center text-gray-800 max-w-xl mx-auto mt-6 text-base sm:text-lg leading-relaxed">
        <p>
          In the land of <span className="text-rose-700 font-medium">{address}</span>,<br />
          where the sky is <span className="text-purple-500 font-medium">{favoriteColor}</span>,<br />
          Lived <span className="text-pink-700 font-medium">{firstName}</span>{" "}
          <span className="text-violet-800 font-medium">{lastName}</span>,<br />
          who adored <span className="text-rose-600 font-medium">{hobby}</span> with passion bright.<br />
          With their pet <span className="text-fuchsia-700 font-medium">{petName}</span> always near,<br />
          They danced through dreams and held joy dear.
        </p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-purple-100 py-10 px-4 flex flex-col items-center">
      <h1 className="text-3xl sm:text-4xl font-bold text-rose-700 mb-4 text-center">
        Create Your Poem
      </h1>

      {renderPoem()}

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md mt-10 bg-white shadow-xl rounded-2xl p-6 flex flex-col gap-4 border border-rose-200"
      >
        <input
          type="text"
          value={firstName}
          placeholder="First Name"
          className="p-3 border rounded-xl focus:ring-2 focus:ring-rose-300 text-sm"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          value={lastName}
          placeholder="Last Name"
          className="p-3 border rounded-xl focus:ring-2 focus:ring-rose-300 text-sm"
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          value={address}
          placeholder="Place or City"
          className="p-3 border rounded-xl focus:ring-2 focus:ring-rose-300 text-sm"
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="text"
          value={favoriteColor}
          placeholder="Favorite Color"
          className="p-3 border rounded-xl focus:ring-2 focus:ring-rose-300 text-sm"
          onChange={(e) => setFavoriteColor(e.target.value)}
        />
        <input
          type="text"
          value={hobby}
          placeholder="Hobby"
          className="p-3 border rounded-xl focus:ring-2 focus:ring-rose-300 text-sm"
          onChange={(e) => setHobby(e.target.value)}
        />
        <input
          type="text"
          value={petName}
          placeholder="Pet's Name"
          className="p-3 border rounded-xl focus:ring-2 focus:ring-rose-300 text-sm"
          onChange={(e) => setPetName(e.target.value)}
        />
        <button
          type="submit"
          className="bg-rose-600 hover:bg-rose-700 text-white font-semibold py-2 rounded-full text-sm transition-all w-16 text-center mx-auto"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
