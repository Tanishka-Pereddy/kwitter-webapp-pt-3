user_name = localStorage.getItem("user_name");

function addRoom() {
    room_name = document.getElementById("room_name").value;
    localStorage.setItem("room_name", room_name);
    window.location = ""
}

function getData() {
    firebase.database().ref("/").on('value',
        function (snapshot) {
            document.getElementById("output").innerHTML =
                "";
            snapshot.forEach(function (childSnapshot) {
                childKey =
                    childSnapshot.key;
                Room_names = childKey;
                //Start code
                console.log("roomname-"+Room_name);
                row = "<div class='room_name' id = " +Room_names+"onclick =  'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
                document.getElementById("output").innerHTML += row;
                //End code
            });
        });
}
getData();