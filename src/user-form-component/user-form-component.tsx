import React from 'react';

interface UserFormProps {
    user: string;
    OnUserChange: Function;
    OnUserSubmit: Function;
}

class UserFormComponent extends React.Component<UserFormProps, {}> {
    constructor(props: UserFormProps) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: any) {
        this.props.OnUserChange(event);
    }

    handleSubmit(event: any) {
        this.props.OnUserSubmit(event);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    User:
                    <input type="text" value={this.props.user} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Change user" />
            </form>
        );
    }
}

export default UserFormComponent;