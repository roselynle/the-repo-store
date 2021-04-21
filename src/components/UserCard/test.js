import { screen } from "@testing-library/react";
import UserCard from '.';

describe('UserCard', () => {
    const mockUser = {
        name: "test-user", description: "test", 
        forks_count: 2, stargazers_count:6, watchers_count:0
    }

    beforeEach(() => {
        render(<UserCard user={mockUser}/>)
    });

    it('should have a heading with the username', () => {
        const name = screen.getByRole("heading", {name: mockUser.login})
        expect(name).toBeInTheDocument();
    });

    it('should have the users avatar', () => {
        const avatar = screen.getByAltText(mockUser.login, {exact: false});
        expect(avatar).toBeInTheDocument();
    });
});