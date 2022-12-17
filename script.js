function getInfo(){
    let name = document.getElementById('name');
    let age  = document.getElementById('age');
    let date_birth = document.getElementById('date-birth')
    let show_data = document.getElementById('view');
    data = {
        name: name.value,
        age: age.value,
        birth_date: birth_date.value
    }
    alert("work")
    show_data.innerHTML = "Name: " + data.name + "</br>" + "Age: " + data.age + "</br>" + "Birthday-Date" + data.birth_date;
}
