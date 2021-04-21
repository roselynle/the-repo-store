import { screen, within, act, waitFor } from "@testing-library/react";
import axios from 'axios';
jest.mock('axios');

import RepoList from ".";

describe('RepoList', () => {

    const mockRepos = [
        {
            name: "test-repo", description: "test",
            forks_count: 2, stargazers_count: 6, watchers_count: 0
        },
        {
            name: "test-repo-2", description: "test",
            forks_count: 3, stargazers_count: 2, watchers_count: 1
        }
    ]

    const mockUser = {
        login: "test_name", html_url: "htmlURL", avatar_url: "avatarURL"
    }

    jest.spyOn(global.console, 'error')

    beforeEach(() => {
        jest.resetAllMocks()
        axios.get
            .mockResolvedValueOnce({ data: mockUser })
            .mockResolvedValueOnce({ data: mockRepos })
    })

    it('should GET user profile and repos from the github api and render them', async () => {
        const promise = Promise.resolve();
        const mockUsername = "test_name";

        render(<RepoList username={mockUsername} />);

        expect(axios.get).toHaveBeenCalledTimes(2);
        expect(axios.get).toHaveBeenNthCalledWith(1, expect.stringMatching(/users\/test_name/));
        expect(axios.get).toHaveBeenNthCalledWith(2, expect.stringMatching(/users\/test_name\/repos/));

  
        const username = await waitFor(() => screen.getByText(mockUser.login)) ;
        expect(username).toBeInTheDocument();

        const repos = screen.queryAllByRole('listitem');
        expect(repos).toHaveLength(2);
        await act(() => promise)
    });
});


