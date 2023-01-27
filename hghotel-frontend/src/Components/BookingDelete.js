import axios from "axios";

function BookingDelete(props) {
  const server = process.env.REACT_APP_SERVER_URL;

  let delBookingCall = async () => {
    const delBooking = await axios.delete(`${server}/booking/${props.item._id}?username=${props.username}`);
    props.setRoomList(delBooking.data);
  };
  delBookingCall();
}

export default BookingDelete;
