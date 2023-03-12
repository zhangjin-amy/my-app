import React, { useState } from 'react';

interface User {
    name: string;
    age: number;
}

interface UserModalProps {
    user: User;
    show: boolean;
}

const UserSon1 = (props: {user: User}) => {
    const { name, age } = props.user;
    return (
        <div style={{ background: 'green' }}>
            userSon1
            <p>name: {name}</p>
            <p>age: {age}</p>
        </div>
    )
};

const UserModal = ({ user, show }: UserModalProps) => (
    <div style={{display: show ? 'block' : 'none', background: 'red'}}>
        UserModal
        <UserSon1 user={user} />
    </div>
);

const Index1 = () => {
    const [user, setUser] = useState<User>({
        name: 'amy',
        age: 18
    });
    const [showUserModal, setshowUserModal] = useState<boolean>(false);

    const changeUser = () => {
        setUser({
            ...user,
            age: user.age + 1
        })
    }

    return (
        <div>
            <p>
                <button onClick={changeUser}>changeUser</button>
                <button onClick={() => setshowUserModal(!showUserModal)}>toggleShowUser</button>
            </p>
            <UserModal user={user} show={showUserModal} /> 
        </div>
    );
}

export default Index1;


/**
 * 孙子需要祖先组件的state,层级嵌套
 * 
 */