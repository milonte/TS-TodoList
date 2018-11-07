$(function () {
    var TodoList = new List({ name: "TodoList" });
    function Drawlist(target_list) {
        $("#list").html("");
        target_list.elements.forEach(function (elem) {
            var check_elem = $("<input type='checkbox'>");
            var div_elem = $("<div class='elem'></div>");
            var del_elem = $("<button class='del_elem'>X</button>");
            div_elem.append(check_elem);
            div_elem.append(elem);
            div_elem.append(del_elem);
            $("#list").append(div_elem);
        });
        $(".del_elem").click(function (e) {
            var target = e.target.parentElement.childNodes[1].textContent;
            TodoList.delElement(target);
            Drawlist(target_list);
        });
    }
    $("#input_element").keypress(function (key) {
        if (key.which === 13) {
            var input = String($("#input_element").val());
            TodoList.addElement(input);
            $("#input_element").val("");
            Drawlist(TodoList);
        }
    });
    Drawlist(TodoList);
});
