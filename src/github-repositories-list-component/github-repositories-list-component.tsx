import React from 'react';

export interface GitHubRepositoryOwner {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
}

export interface GitHubRepositoryPermissions {
    admin: boolean;
    push: boolean;
    pull: boolean;
}

export interface GitHubRepositoryLicense {
    key: string;
    name: string;
    spdx_id: string;
    url: string;
    node_id: string;
}

export interface GitHubRepository {
    id: number;
    node_id: string;
    name: string;
    full_name: string;
    owner: GitHubRepositoryOwner;
    private: boolean;
    html_url: string;
    description: string;
    fork: boolean;
    url: string;
    archive_url: string;
    assignees_url: string;
    blobs_url: string;
    branches_url: string;
    collaborators_url: string;
    comments_url: string;
    commits_url: string;
    compare_url: string;
    contents_url: string;
    contributors_url: string;
    deployments_url: string;
    downloads_url: string;
    events_url: string;
    forks_url: string;
    git_commits_url: string;
    git_refs_url: string;
    git_tags_url: string;
    git_url: string;
    issue_comment_url: string;
    issue_events_url: string;
    issues_url: string;
    keys_url: string;
    labels_url: string;
    languages_url: string;
    merges_url: string;
    milestones_url: string;
    notifications_url: string;
    pulls_url: string;
    releases_url: string;
    ssh_url: string;
    stargazers_url: string;
    statuses_url: string;
    subscribers_url: string;
    subscription_url: string;
    tags_url: string;
    teams_url: string;
    trees_url: string;
    clone_url: string;
    mirror_url: string;
    hooks_url: string;
    svn_url: string;
    homepage: string;
    language?: any;
    forks_count: number;
    stargazers_count: number;
    watchers_count: number;
    size: number;
    default_branch: string;
    open_issues_count: number;
    is_template: boolean;
    topics: string[];
    has_issues: boolean;
    has_projects: boolean;
    has_wiki: boolean;
    has_pages: boolean;
    has_downloads: boolean;
    archived: boolean;
    disabled: boolean;
    visibility: string;
    pushed_at: Date;
    created_at: Date;
    updated_at: Date;
    permissions: GitHubRepositoryPermissions;
    template_repository: string;
    temp_clone_token: string;
    delete_branch_on_merge: boolean;
    subscribers_count: number;
    network_count: number;
    license: GitHubRepositoryLicense;
}

interface GitHubRepositoriesListProps {
    user: string;
    repositories: GitHubRepository[];
    isLoaded: boolean;
    isLoading: boolean;
}

class GitHubRepositoriesListComponent extends React.Component<GitHubRepositoriesListProps, {}> {

    render() {
        const repositoryListItems = this.props.repositories.map((repository) =>
            <li key={repository.id}>
                <a href={repository.html_url} target="_blank" rel="noreferrer">{repository.name}</a>
                &nbsp;
                (
                    {repository.stargazers_count.toString()} Stars
                    &nbsp;/&nbsp;
                    {repository.forks_count.toString()} Forks
                )
            </li>
        );

        return (
            <div>
                {this.props.isLoading
                    ? <h3>Loading repositories...</h3>
                    : (!this.props.isLoaded
                        ? <h3>Please provide a user</h3>
                        : (this.props.repositories.length < 1
                            ? <p>Sorry, the list is empty.</p>
                            : <ul>{repositoryListItems}</ul>
                        )
                    )
                }

            </div>
        );
    }
}

export default GitHubRepositoriesListComponent;