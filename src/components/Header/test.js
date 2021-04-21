import { screen } from "@testing-library/react";
import Header from '.';

describe('Header', () => {
    beforeEach(() => {
        render(<Header />)
    });
    it('should contain a logo', () => {
        expect(screen.getByAltText('logo', {exact:false})).toBeInTheDocument()
    });

    it('should contain a heading with the title', () => {
        expect(screen.getByRole('heading', {name: 'Your Repo Story'})).toBeInTheDocument()
    });
});
