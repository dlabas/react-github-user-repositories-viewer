import React from 'react';

interface UserFormProps {
    user: string;
    OnUserChange: Function;
    OnUserSubmit: Function;
    OnReset: Function;
}

class UserFormComponent extends React.Component<UserFormProps, {}> {
    constructor(props: UserFormProps) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleChange(event: any) {
        this.props.OnUserChange(event);
    }

    handleSubmit(event: any) {
        this.props.OnUserSubmit(event);
    }

    handleReset(event: any) {
        this.props.OnReset(event);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    User:
                    <input type="text" value={this.props.user} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Change user" />
                <button onClick={this.handleReset}>Reset</button>
            </form>
        );
    }
}

export default UserFormComponent;