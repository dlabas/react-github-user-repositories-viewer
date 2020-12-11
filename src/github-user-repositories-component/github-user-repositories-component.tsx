import React from 'react';
import UserFormComponent from "../user-form-component/user-form-component";
import GitHubRepositoriesListComponent, {GitHubRepository} from "../github-repositories-list-component/github-repositories-list-component";

interface GitHubUserRepositoriesState {
    user: string;
    repositories: GitHubRepository[];
    error: any;
    isLoaded: boolean;
    isLoading: boolean;
}

class GitHubUserRepositoriesComponent extends React.Component<{}, GitHubUserRepositoriesState> {

    constructor({props}: { props: any }) {
        super(props);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleUserSubmit = this.handleUserSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            user: '',
            repositories: [],
            error: null,
            isLoaded: false,
            isLoading: false
        };
    }

    handleUserChange(event: any) {
        this.setState({user: event.target.value});
    }

    handleUserSubmit(event: any) {
        event.preventDefault();

        if (!this.state.user) {
            alert('Please provide a user');
        } else {
            // alert('Ein Name wurde abgeschickt: ' + this.state.user);
            this.setState({
                repositories: [],
                isLoading: true
            });

            this.loadUserRepositories();
        }
    }

    handleReset(event: any) {
        event.preventDefault();

        this.setState({
            repositories: [],
            isLoading: false,
            isLoaded: false,
            user: ''
        });
    }

    loadUserRepositories() {
        let gitHubUrl = "https://api.github.com/users/" + this.state.user + "/repos";
        fetch(gitHubUrl)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        isLoading: false,
                        repositories: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        isLoading: false,
                        error
                    });
                }
            )
    }

    render() {
        const user = this.state.user;
        const repositories = this.state.repositories;
        const isLoaded = this.state.isLoaded;
        const isLoading = this.state.isLoading;

        return (
            <div className="github-user-repositories-component">
                <div>
                    <h2>Show public GitHub repositories of an user</h2>
                </div>
                <div>
                    <UserFormComponent user={user} OnUserChange={this.handleUserChange} OnUserSubmit={this.handleUserSubmit} OnReset={this.handleReset} />
                </div>
                <div>
                    <GitHubRepositoriesListComponent user={user} repositories={repositories} isLoaded={isLoaded} isLoading={isLoading} />
                </div>
            </div>
        );
    }
}

export default GitHubUserRepositoriesComponent;