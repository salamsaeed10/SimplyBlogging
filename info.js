var blogData=[]
function storeInSession() {
   localStorage.setItem("titleInfo",JSON.stringify(blogData));
   localStorage.setItem("descInfo",JSON.stringify(blogData));
   localStorage.setItem("imageInfo",JSON.stringify(blogData));


}

function addBlog () {
    var title= document.getElementById("title").value
    var desc= document.getElementById("desc").value
    var immageInfo= document.getElementById("imageId").files[0].name;
    

    console.log(title)
    console.log(desc);
    console.log(immageInfo);

    document.getElementById("titleInfo").innerHTML=title
    document.getElementById("descInfo").innerHTML=desc
    document.getElementById("imageInfo").src=immageInfo
}






