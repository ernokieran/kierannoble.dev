const glob = require("glob");

function getDirectories(src, callback) {
    glob(src + '/**/*', callback);
};

getDirectories('C:/Source/kierannoble.dev/assets', function (err, res) {
    if (err) {
        console.log('Error', err);
    } else {
        res.map((file) => {
            let _fileName = file;
            let _fileExtension = _fileName.split('.').at(-1);
            let _isFile = _fileExtension.split("/").length == 1;


            if (_isFile) {
                if (_fileExtension == "webp") {
                    let _newFileName = `${file.split(".")[0]}.${file.split(".")[1]}-thumbnail.${file.split(".")[2]}`;

                    let _command = `ffmpeg -n -i "${_fileName}" -vf scale=-1:60 "${_newFileName}"`;
                    console.log(_command);
                }
            };



        });
    }
});
