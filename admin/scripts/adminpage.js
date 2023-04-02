
// Total Users
let userCard=document.getElementById('user-card')
let totalUser=document.getElementById('user-count');
// let Userdata;

fetch('https://wild-gray-gorilla-garb.cyclic.app/user/all')
.then((res)=>{
    return res.json();
})
.then((data)=>{
    // Userdata=needData.data;
    console.log(data)
    displayUsers(data);
})
.catch((err)=>{
    console.log({'fetch-msg':err.message});
})

// getting all users

function displayUsers(data) {
    userCard.innerHTML="";
    data.forEach((element)=>{
        let card=document.createElement('div');
        card.className="block";
        let imgbx=document.createElement('div');
        imgbx.className="imgbx";
        let image=document.createElement('img');
        image.setAttribute("src",element.picture);
        imgbx.append(image);
        let details=document.createElement('div');
        details.className="details"
        let listhead=document.createElement('div');
        listhead.className="listHead"
        let name=document.createElement("h4");
        name.innerText=element.name;
        listhead.append(name);
        details.append(listhead);
        let ban=document.createElement('div');
        ban.className="ban";
        let button=document.createElement("button");
        button.setAttribute("data-id", element._id);
        button.className="ban-user"
        button.innerText="Block User";
        ban.append(button);
        card.append(imgbx,details,ban);
        userCard.append(card);
        totalUser.innerText=data.length;
    })
    let block=document.querySelectorAll(".ban-user")

    block.forEach((element)=>{
        element.addEventListener("click",(e)=>{
            let id=e.target.getAttribute("data-id");
            fetch(`https://wild-gray-gorilla-garb.cyclic.app/user/${id}`,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json"
                }
            }).then((res)=>res.json())
            .then((data)=>window.location.href ="admipage.html")
            .catch((err)=>console.log(err))
            console.log(id)
        });
    })
}
