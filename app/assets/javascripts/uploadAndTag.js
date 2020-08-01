$(document).on("change", "#upload-field", (event) => {
    $("#slc").remove();
    $("#tag-input").remove();
    $("#tags-field").attr({"tags": "", 
                           "PosX1": "", "PosX2": "", 
                           "PosY1": "", "PosY2": ""})
    
    let thisFile = document.getElementById("upload-field").files[0];
    let reader = new FileReader();

    reader.readAsDataURL(thisFile);
    
    reader.onload = (function(){
        $("#picked-photo").css("background-image", "url(" + this.result + ")");
    }); 

    var x0, x1, y0, y1;

    $(document).on("mousedown", "#picked-photo", (ev) => {
        $("#slc").remove();
        $("#tag-input").remove();

        x0 = ev.pageX;
        y0 = ev.pageY;

        let x0Str = "" + x0 + "px";
        let y0Str = "" + y0 + "px";

        $("#picked-photo").append("<section id='slc'></section>");
        $("#slc").css({"opacity":"0.5",
                       "border":"1px solid blue",
                       "background-color":"blue"});
    
        $(document).on("mousemove", "#picked-photo", (e) => {
            x1 = e.pageX;
            y1 = e.pageY;
      
            let w, h;
      
            if(x1 < x0){
                let x1Str = "" + x1 + "px";
                $("#slc").css("left", x1Str);
                w = "" + (x0 - x1) + "px";
            } else {
                w = "" + (x1 - x0) + "px";
                $("#slc").css("left", x0Str);
            };
      
            if(y1 < y0){
                let y1Str = "" + y1 + "px";
                $("#slc").css("top", y1Str);
                h = "" + (y0 - y1) + "px";
            } else {
                h = "" + (y1 - y0) + "px";
                $("#slc").css("top", y0Str);
            };
      
            $("#slc").css({"width":w,"height":h});
        });
    });
  
    $(document).on("mouseup", (e) => {
        $("#tag-input").remove();
        
        $(document).unbind("mousemove");
        $("#slc").css({"opacity":"0.2",
                       "border":"1px dotted blue"});

        $("#picked-photo").append("<input type='text' id='tag-input'></input>");
        $("#tag-input").css({"position": "absolute",
                             "left": "" + (x1/2 + x2/2) + "px",
                             "top":  "" + (y1/2 + y2/2) + "px"});

        $(document).on("keydown", "#tag-input", (evt) => {
            let tagInput = $("#tag-input").val();
            if(evt.keyCode == 13 && tagInput == ""){
                if($("#tags-field").attr("tags") == ""){
                    $("#tags-field").attr({"tags": tagInput, 
                                           "PosX1": x1, "PosX2": x2, 
                                           "PosY1": y1, "PosY2": y2});
                } else{
                    let tags = $("#tags-field").attr("tags")  + ", " + tagInput;
                    let x1s  = $("#tags-field").attr("PosX1") + ", " + x1;
                    let x2s  = $("#tags-field").attr("PosX2") + ", " + x2;
                    let y1s  = $("#tags-field").attr("PosY1") + ", " + y1;
                    let y2s  = $("#tags-field").attr("PosY2") + ", " + y2;
                    $("#tags-field").attr({"tags": tags, 
                                           "PosX1": x1s, "PosX2": x2s, 
                                           "PosY1": y1s, "PosY2": y2s});
                }; 
            };

            $("#tag-input").remove();
        });
    });
});

