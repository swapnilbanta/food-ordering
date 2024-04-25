import Contact from "../Contact"
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
test("Should load contact us compoenent",()=>{
    //Render on js dom
render(<Contact/>);
const heading = screen.getByRole("heading");
//Assertion
expect(heading).toBeInTheDocument();
})

test("Should load contact us compoenent",()=>{
    //Render on js dom
render(<Contact/>);
// const button = screen.getByRole("button");
// const button = screen.getByText("Submit");
 const input = screen.getByPlaceholderText("name");

//Assertion
expect(input).toBeInTheDocument();
})

test("Should load contact us compoenent",()=>{
    //Render on js dom
render(<Contact/>);
const inputBoxes = screen.getAllByRole("textBox");
console.log(inputBoxes[0]);
//Assertion
expect(inputBoxes).toBeInTheDocument();
})