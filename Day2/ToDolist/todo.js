$(function (){
    $(".btn").on("click",(e)=>{
        e.preventDefault();
      let content = $("#inputText").val();
      addList(content);
    
    });

    $(".list-group").on("click", (e) => {
        if ($(e.target).hasClass("done-icon")) {
            console.log("what is this",e.target);
          $(".task-title").parent().css("background-color","green");
        }
        if ($(e.target).hasClass("delete-icon")) {
          $(e.target).parents("li").remove();
        }
      });
    

    function addList(content){
        const html = ` <li class=" my-3 py-3 shadow list-group-item " style="width:600px;">
            
                <div class="row">
                <div class="col-8">
                <p class= "task-title">${content}</p>
                </div>
                <div class="col-2">
                    <span class="task-icon done-icon">✔️</span>
                    <span class="task-icon delete-icon">❌</span>
            </div>
            </div>   
        </li> `;

        $(".list-group").append(html);
        $(".delete-icon").on("click", (e) => {
          $(e.target).parents("li").remove();
        });
      }
});
