import axios from "axios";

function AdminDelete(props) {
  const server = process.env.REACT_APP_SERVER_URL;
  let delRoomCall = async () => {
    const delRoom = await axios.delete(`${server}/room/${props.item._id}`);
    props.setRoomList(delRoom.data);
  };
  delRoomCall();
}

export default AdminDelete;
