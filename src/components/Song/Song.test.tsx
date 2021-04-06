import React from "react";
import * as rctl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";
import Song from "./Song";
import { fireEvent, getByTestId, getByText } from "@testing-library/react";

describe("Songs Component", () => {
  it("should render the songs title, album name, lyrics, and ID.", async () => {
    const song = {
      title: "Doing All Right",
      album: "Queen",
      lyrics:
        "Yesterday my life was in ruin Now today I know what I'm doing Gotta feeling I should be doing all right Doing all right Where will I be this time tomorrow Jump in joy or sinking in sorrow Anyway I should be doing all right Doing all right Should be waiting for the sun Looking round to find the words to say Should be waiting for the skies to clear There a time in all the world Should be waiting for the sun And anyway I've got hide away Ah ah ah ah Yesterday my life was in ruin Now today God knows what I'm doing Anyway I should be doing all right Doing all right Doing all right",
      id: 4,
    };
    const wrapper = rctl.render(
      <Router>
        <Song song={song} />
      </Router>
    );
    const title = await wrapper.findAllByText(/doing all right/i);
    const album = wrapper.queryByText(/queen/i);
    const lyrics = wrapper.queryByText(/Yesterday my life was in ruin/i);
    const allLyrics = wrapper.queryByTestId("lyrics")?.textContent?.length;

    expect(title[0]).toBeInTheDocument();
    expect(album).toBeInTheDocument();
    expect(lyrics).toBeInTheDocument();
    expect(allLyrics).toBe(303);

    const button = wrapper.getByTestId("button");

    rctl.fireEvent(
      getByText(button, /Show more lyrics/i),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    const allLyrics2 = wrapper.queryByTestId("lyrics")?.textContent?.length;
    expect(allLyrics2).toBeGreaterThan(allLyrics as number);
  });
});
