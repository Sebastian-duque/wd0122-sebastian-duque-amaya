fetch("users.json").then(
    res=>{
        res.json().then(
            data=>{
                console.log(data);
                if(data.length > 0){
                    var temp = "";

                    data.forEach((u)=>{
                        temp +="<tr>";
                        temp +="<td>"+u.id+"</td>";
                        temp +="<td>"+u.username+"</td>";
                        temp +="<td>"+u.firstName+"</td>";
                        temp +="<td>"+u.lastName+"</td>";
                        temp +="<td>"+u.gender+"</td>";
                        temp +="<td>"+u.email+"</td></tr>";
                    })
                    document.getElementById("data").innerHTML = temp;
                }
            }
        )
    }
)