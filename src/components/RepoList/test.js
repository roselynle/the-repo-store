import { screen, within, act, waitFor } from "@testing-library/react";
import axios from 'axios';
jest.mock('axios');

import RepoList from ".";

jest.spyOn(global.console, 'error')

describe('RepoList', () => {
    describe('on successful fetch', () => {
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

        const mockUser = { login: "test_name", html_url: "htmlURL", avatar_url: "avatarURL" }
        const mockUsername = "test_name";

        beforeEach(() => {
            jest.resetAllMocks()
            axios.get
                .mockResolvedValueOnce({ data: mockUser })
                .mockResolvedValueOnce({ data: mockRepos })

            render(<RepoList username={mockUsername} />);
        })

        it('should GET user profile and repos from the github api', async () => {
            const promise = Promise.resolve();
            expect(axios.get).toHaveBeenCalledTimes(2);
            expect(axios.get).toHaveBeenNthCalledWith(1, expect.stringMatching(/users\/test_name/));
            expect(axios.get).toHaveBeenNthCalledWith(2, expect.stringMatching(/users\/test_name\/repos/));
            await act(() => promise)
        });

        it('should render the profile and repos to the page', async () => {
            const username = await waitFor(() => screen.getByText(mockUser.login));
            expect(username).toBeInTheDocument();

            mockRepos.forEach(repo => {
                const repoHeading = screen.getByRole('heading', { name: repo.name })
                expect(repoHeading).toBeInTheDocument();
            })

        });
    });

    describe('on unsuccessful fetch', () => {
        const mockUsername = "bad_test_name";

        it('should not render a profile or repos', async () => {
            axios.get.mockRejectedValue(new Error('Not Found'))
            render(<RepoList username={mockUsername} />);
            const username = await waitFor(() => screen.queryByText(mockUsername));
            expect(username).toBeNull();
        });
    });

});


