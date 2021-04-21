import SearchForm from '.';
import { screen, getByLabelText } from '@testing-library/react';



describe('App', () => {
    let setUsernameMock =jest.fn();
    beforeEach(() => {
        render(<SearchForm setUsername={setUsernameMock} />);
    });


    test("add a username when user submits it", () => {
        const nameInput = screen.getByLabelText('GitHub Username:', { exact: false });
        userEvent.type(nameInput, "Bob{enter}")
        const SearchForm = screen.getByRole('textbox', { name: 'GitHub Username:' });
        expect(SearchForm.textContent).toBe("") 
    });
    
    test("does not change form whilst a user enters their username", () => {
        const nameInput = screen.getByLabelText('GitHub Username:', { exact: false })
        userEvent.type(nameInput, "Ben")
        const SearchForm = screen.getByRole('textbox', { name: 'GitHub Username:' });
        expect(SearchForm.textContent).toBe("");
        expect(nameInput.value).toBe("Ben")
    });
    
    
    test("clears username input after submission", () => {
        const nameInput = screen.getByLabelText('GitHub Username:', { exact: false })
        userEvent.type(nameInput, "Ben{enter}")
        expect(nameInput.value).toBe("");
    });

});