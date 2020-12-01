window.onload = function(){
    var user_money = document.getElementById("user_money");
    var user_age = document.getElementById("user_age");
    var user_gender = document.getElementById("user_gender");
    var itemBox = document.getElementsByClassName("itemBox")[0];
    var newData = data;
    var html = "";

    user_money.value = "0";
    user_age.value = "0";
    user_gender.value = 'no';

    user_money.addEventListener("change", function(){
        searchDataMoney(this.value);
    })
    user_age.addEventListener("change", function(){
        searchDataAge(this.value);
    })
    user_gender.addEventListener("change", function(){
        searchDataGender(this.value);
    })

    function DOMrender(arr){
        html = '';
        itemBox.innerHTML = '';

        arr.forEach(function(item){
            html+= '<ul class="content">';
            html+= '<li>' + item.name + '</li>';
            html+= '<li>' + item.money + '</li>';
            html+= '<li>' + item.age + '</li>';
            html+= '<li>' + item.gender + '</li>';
            html+= '</ul>';
        })
        itemBox.innerHTML = html;
    }

    function searchDataMoney(value){
        var num = Number(value);
        var arr = newData.filter(function(obj) {
            return obj.money > num;
        })
        DOMrender(arr);
    }
    
    function searchDataAge(value){
        var num = Number(value);
        var arr = newData.filter(function(obj) {
            return obj.age > num;
        })
        DOMrender(arr);
    }

    function searchDataGender(value){
        var arr = newData.filter(function(obj) {
            if(value === "no") {
                return obj;
            }
            return obj.gender === value;
        })
        DOMrender(arr);
    }

    DOMrender(newData);

}
