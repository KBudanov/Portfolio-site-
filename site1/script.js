$("#ready").on("click", function() {
    let tgId = 961172191;
    let tgIdT = 567796338;
    let botToken = '8065866963:AAFgFjjeasxH8euVZ0zB8HtSbRaWZRlyCcE';

    let firstN = $("#firsName").val()
    let lastN = $("#lastName").val()
    let mail = $("#mail").val()

    let orderText = `
NEW ORDER %0A
Name: ${firstN}%0A
Last name: ${lastN}%0A
Mail: ${mail}%0A
`;



    let botUrl = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${tgId}&text=${orderText}`;
    let botUrl2 = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${tgIdT}&text=${orderText}`;
    $.post(botUrl)
    $.post(botUrl2)

    $("#firsName").val("")
    $("#lastName").val("")
    $("#mail").val("")
})