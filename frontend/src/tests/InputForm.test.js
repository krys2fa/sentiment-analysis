import { render, screen, fireEvent } from "@testing-library/react";
import InputForm from "../components/InputForm";
import axios from "axios";

// Mock the axios.post method
jest.mock("axios");

describe("InputForm Component", () => {
  test("displays positive sentiment", async () => {
    axios.post.mockResolvedValueOnce({ data: { sentiment: "positive" } });

    render(<InputForm />);

    fireEvent.change(screen.getByPlaceholderText("Enter text..."), {
      target: { value: "I love this product!" },
    });
    fireEvent.click(screen.getByText("Analyze Sentiment"));

    const sentimentText = await screen.findByText(/positive/i);
    expect(sentimentText).toBeInTheDocument();
  });

  test("displays negative sentiment", async () => {
    axios.post.mockResolvedValueOnce({ data: { sentiment: "negative" } });

    render(<InputForm />);

    fireEvent.change(screen.getByPlaceholderText("Enter text..."), {
      target: { value: "I hate this!" },
    });
    fireEvent.click(screen.getByText("Analyze Sentiment"));

    const sentimentText = await screen.findByText(/negative/i);
    expect(sentimentText).toBeInTheDocument();
  });

  test("displays neutral sentiment", async () => {
    axios.post.mockResolvedValueOnce({ data: { sentiment: "neutral" } });

    render(<InputForm />);

    fireEvent.change(screen.getByPlaceholderText("Enter text..."), {
      target: { value: "It is okay." },
    });
    fireEvent.click(screen.getByText("Analyze Sentiment"));

    const sentimentText = await screen.findByText(/neutral/i);
    expect(sentimentText).toBeInTheDocument();
  });
});
