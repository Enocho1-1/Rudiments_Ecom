import { render } from "@testing-library/react";
import { HomeCarousel } from "../HomeCarousel";

test("render home carousel",() => {
    const { getByTestId} = render(<HomeCarousel />);
    const carousel = getByTestId("carousel")
    expect(carousel).toBeTruthy()
})