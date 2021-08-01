var i = 0;
function update()
{
    i++;
    var number_of_family_members_in_array= 4;
    if(i> number_of_family_members_in_array);
    {
        i = 0
    }
    var updatedImage= images[i];
    var updatedName= names[i];
    document.getElementById("main_img").src = updatedImage;
    document.getElementById("member_name").innerHTML = updatedName;
}