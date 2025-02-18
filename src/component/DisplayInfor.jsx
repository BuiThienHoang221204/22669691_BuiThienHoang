import React from "react";

const DisplayInfor = (props) => {
    return (
        <div>
            <h2>Danh sách người dùng</h2>
            <ul>
                {/* props.listUser chứa danh sách người dùng được truyền từ Mycomponent */}
                {props.listUser.map(user => ( // lặp qua từng phần tử trong mảng listUser
                    <li key={user.id}> {/*React yêu cầu mỗi phần tử trong danh sách phải có một key duy nhất*/ }
                        {user.name} - {user.age} tuổi
                        <br />
                        <button onClick={() => props.handleDelete(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DisplayInfor;
