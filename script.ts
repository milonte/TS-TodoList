$( function() { 

    let TodoList = new List( { name: "TodoList", elements: [] } );

    function Drawlist(target_list :Liste) :void {
        $("#list").html("");
    
        target_list.elements.forEach( function(elem) {
            let check_elem = $("<input type='checkbox'>");
            let div_elem = $("<div class='elem'></div>");
            let del_elem = $("<button class='del_elem'>X</button>");
            div_elem.append(check_elem);
            div_elem.append(elem);
            div_elem.append(del_elem);
            $("#list").append(div_elem);  });
    
        $(".del_elem").click(function(e) {
            if (e.target.parentElement) {
                let target :string = String(e.target.parentElement.childNodes[1].textContent);
                TodoList.delElement(target);
                Drawlist(target_list); } });   
    }

    $("#input_element").keypress(function(key) {
        if(key.which===13) {
            let input :string = String($("#input_element").val());
            TodoList.addElement(input);
            $("#input_element").val("");
            Drawlist(TodoList); } 
    });


    Drawlist(TodoList);




});