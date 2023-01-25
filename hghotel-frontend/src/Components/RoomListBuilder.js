import axios from 'axios';

function RoomListBuilder(checkin, checkout, setRoomArray) {
    const serverlink = process.env.REACT_APP_SERVER_URL;
    const getAvailableRooms = async () => {
        const getRoomCall = await axios.get(`${serverlink}/room`);
        const allRooms = getRoomCall.data;
        let ini;
        let outi;
        let availableRooms=[];

        allRooms[0].dates.map((item, i)=>{
            if(item.date===checkin){
                ini=i;
            }
            return item
        });

        allRooms[0].dates.map((item, i)=>{
            if(item.date===checkout){
                outi=i;
            }
            return item
        });

        allRooms.map((item)=>{
            let available = true;
            for(let i=ini; i<=outi; i++){
                if(item.dates[i].isBooked){
                    available=false;
                }
            }
            if(available){
                availableRooms.push(item);
            }
            return item
        })
        setRoomArray(availableRooms);
    }
    return getAvailableRooms();
}

export default RoomListBuilder;