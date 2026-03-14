"use client";

import Card from "@/components/Card";
import { useReducer } from "react";

type Action =
  | { type: "rate"; venue: string; rating: number }
  | { type: "remove"; venue: string };

function ratingReducer(state: Map<string, number>, action: Action) {
  switch (action.type) {
    case "rate": {
      const newState = new Map(state);
      newState.set(action.venue, action.rating);
      return newState;
    }

    case "remove": {
      const newState = new Map(state);
      newState.delete(action.venue);
      return newState;
    }

    default:
      return state;
  }
}

export default function CardPanel() {
  const initialState = new Map<string, number>([
    ["The Bloom Pavilion", 0],
    ["Spark Space", 0],
    ["The Grand Table", 0],
  ]);

  const [ratings, dispatch] = useReducer(ratingReducer, initialState);

  function handleRate(venue: string, rating: number) {
    dispatch({
      type: "rate",
      venue: venue,
      rating: rating ?? 0,
    });
  }

  function removeVenue(venue: string) {
    dispatch({
      type: "remove",
      venue: venue,
    });
  }

  return (
    <div>
      <div className="m-5 flex flex-row justify-around">
        <Card
          venueName="The Bloom Pavilion"
          imgSrc="/img/bloom.jpg"
          onRate={handleRate}
        />

        <Card
          venueName="Spark Space"
          imgSrc="/img/sparkspace.jpg"
          onRate={handleRate}
        />

        <Card
          venueName="The Grand Table"
          imgSrc="/img/grandtable.jpg"
          onRate={handleRate}
        />
      </div>

      <div className="ml-5 text-lg text-black">
        <h3>Venue List with Ratings : {ratings.size}</h3>

        {[...ratings.entries()].map(([venue, rating]) => (
          <div
            key={venue}
            data-testid={venue}
            onClick={() => removeVenue(venue)}
            className="cursor-pointer mt-1"
          >
            {venue} : {rating}
          </div>
        ))}
      </div>
    </div>
  );
}