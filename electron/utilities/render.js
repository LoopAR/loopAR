const {desktopCapturer} = require("electron")

export default function handleClick(){
    console.log("hello");
    desktopCapturer.getSources({ types: ['window', 'screen'] }).then(async sources => {
        console.log(sources)
    })
}