// document.getElementById('file-input').addEventListener("change", function () {
//     document.getElementById('filecount')
// });

function handleFileSelect(event) {
    //Check File API support
    if (window.File && window.FileList && window.FileReader) {

        var files = event.target.files; //FileList object
        var output = document.getElementById("result");

        document.getElementById('filecount').innerHTML = files.length + " files selected";

        // for (var i = 0; i < files.length; i++) {
        //     output.classList.remove('quote-imgs-thumbs--hidden')
        //     var file = files[i];
        //
        //     var picReader = new FileReader();
        //     picReader.addEventListener("load", function (event) {
        //         var picFile = event.target;
        //         var div = document.createElement("div");
        //         div.innerHTML = "<img class='img-preview-thumb' src='" + picFile.result + "'" + "title='" + file.name + "'/>";
        //         output.insertBefore(div, null);
        //     });
        //     //Read the image
        //     picReader.readAsDataURL(file);
        // }

        if(!!files){
            output.classList.remove('quote-imgs-thumbs--hidden');
            document.getElementById('uploadbutton').disabled = false;
            document.getElementById('removequeue').classList.remove('disabled')
        }

        for (var i=0; i<files.length;i++){
            var img = document.createElement('img');
            img.src = URL.createObjectURL(event.target.files[i]);
            img.classList.add('img-preview-thumb');
            img.classList.add('remove');
            output.appendChild(img)
        }
    } else {
        console.log("Your browser does not support File API");
    }
}

document.getElementById('files').addEventListener('change', handleFileSelect, false);