export default function consoleWelcomeMessage() {
    const nameLogoASCII = String.raw`


 ______        _   _____           _       _     _
|  ____|      | | |_   _|         (_)     | |   | |
| |__ __ _ ___| |_  | |  _ __  ___ _  __ _| |__ | |_
|  __/ _' / __| __| | | | '_ \/ __| |/ _' | '_ \| __|
| | | (_| \__ \ |_ _| |_| | | \__ \ | (_| | | | | |_
|_|  \__,_|___/\__|_____|_| |_|___/_|\__, |_| |_|\__|
                                      __/ |
                                     |___/


`

    console.log(
        `%c ${nameLogoASCII}`,
        "color: #ffa132;")
    console.log(
        "%cOlá! Seja bem vindo ao FastInsight!\nSe você encontrou algum bug, por favor, nos reporte em:\nhttps://google.com",
        "font-size:12px; color: #c2daf5;"
    )
}
