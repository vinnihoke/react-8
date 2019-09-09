// React
import React, { useState } from "react";

// UI
import { Card, Icon, Avatar, Modal } from "antd";

const { Meta } = Card;

const UserCard = props => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Card
      style={{ width: "100%" }}
      cover={<img alt="example" src={props.userData.avatar_url} />}
      actions={[
        <Icon
          type="usergroup-add"
          key="user"
          onClick={() => setShowModal(!showModal)}
        />,
        <Icon type="edit" key="edit" />,
        <Icon type="ellipsis" key="ellipsis" />
      ]}
    >
      <Meta
        avatar={<Avatar src={props.userData.avatar_url} />}
        title={props.userData.name}
        description={props.userData.bio}
      />
      <Modal
        title="All Followers"
        visible={showModal}
        onOk={() => setShowModal(!showModal)}
        onCancel={() => setShowModal(!showModal)}
      ></Modal>
    </Card>
  );
};

export default UserCard;
