import { screen } from "@testing-library/react";
import RepoCard from '.';

describe('RepoCard', () => {
    const mockRepo = {
        name: "test-repo", description: "test", 
        forks_count: 2, stargazers_count:6, watchers_count:0
    }

    beforeEach(() => {
        render(<RepoCard repo={mockRepo}/>)
    });

    it('should have a heading with the repo name', () => {
        const name = screen.getByRole("heading", {name: mockRepo.name})
        expect(name).toBeInTheDocument();
    });

    it('should have a description of the repo', () => {
        const desc = screen.getByText(mockRepo.description);
        expect(desc).toBeInTheDocument();
    });

    it('should have a the number of forks, stargazers and watchers of the repo', () => {
        const forks = screen.getByText(mockRepo.forks_count);
        const stars = screen.getByText(mockRepo.stargazers_count);
        const watchers = screen.getByText(mockRepo.watchers_count);

        expect(forks).toBeInTheDocument();
        expect(stars).toBeInTheDocument();
        expect(watchers).toBeInTheDocument();
    });
});