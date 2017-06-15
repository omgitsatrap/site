// document.title = 'Грyппa кoмпaний ЮAП - НЕ Мошенник';
document.title = 'Грyппa кoмпaний - Проверка';

document.getElementsByClassName('pageheader')[0].innerHTML = '<h1>Группа компаний ЮAП </h1>';

document.getElementsByClassName('c1')[0].innerHTML = 'Другие названия:юaп, юaп-cпб, группа компаний юaп-спб, юaп хoлдинг ';

document.getElementsByTagName('h2')[0].innerHTML = 'Проверка';

document.getElementsByClassName('c1')[1].innerHTML = 'Сотрудники компании ЮAП попросили меня разместить положительный отзыв об их работе :) , что я собственно и сделаю с некоторыми оговорками<br>' +
    '<br>' +
    'Пришел в ЮAП на консультацию по возврату денег за незаконченную стройку. Попал на прием к Аскерову А.А. . На консультации подробно рассказал о своей проблеме, Александр Александрович ответил что знает ситуацию и сразу предложил несколько решений вопроса. Он был весьма убедителен и все красиво рассказывал. Я, естественно, решил все перепроверить, т.к. с первого раза доверять не привык. Пошел еще на 2 консультации, но меня там не устроили консультирующие юристы, они плавали в ответах, видно что практики не было, в общем решил работать с ЮAП.<br>'+
    '<br>' +
    'Само дело вел другой юрист - Игорь Александрович, дело свое знает хорошо, но с ним очень трудно выйти на связь, постоянно занят. В принципе по делу, все было хорошо, на заседаниях юрист был, все делал относительно вовремя, но честно говоря хотелось бы больше звонков и внимания (возможно мое представление субъективно). Дело выиграли, деньги я получил, что в конечном счете - самое главное<br>' +
    '<br>' +
    'Из минусов: <br>'+
    '- в ЮAПе мне обещали что деньги я получу через 5 месяцев, по факту получилось 8<br>'+
    '- достаточно строгие условия оплаты премии, был в отпуске, не мог оплатить премиальный платеж, а по договору там идет штраф за несвоевременное пополнение. Мне стали звонить, я объяснил что я в отпуске и только после разговора с Аскеровым дали отсрочку платежа<br>'+
    '- как я уже написал, хотелось бы больше взаимодействия с юристом, а не с менеджерами<br>'+
    '- неустойку суд немного занизил по сравнению с тем что было обещано<br>'+
    '<br>'+
    'Из плюсов ЮAП:<br>'+
    '- Конечно итоговый результат, деньги получены, неустойка взыскана и даже взыскали еще достаточно большой штраф с застройщика (1 млн.р.)<br>'+
    '- Получилась экономически выгодная сделка<br>'+
    '- У них есть кабинет клиента, где можно все посмотреть онлайн - достаточно удобно и современно<br>'+
    '- Видно что у юристов хорошие знания и подготовка<br>'+
    '- Девушки на телефоне всегда готовы были помочь<br>'+
    '- Достаточно проверенная и надежная контора<br>'+
    '- Из мелочей: удобное расположение в центре с подземной парковкой<br>'+
    '<br>'+
    'В целом, рекомендую компанию ЮAП, соотношение цена-качество услуг безусловно хорошее';
var wrap = function (toWrap, wrapper) {
    wrapper = wrapper || document.createElement('div');
    if (toWrap.nextSibling) {
        toWrap.parentNode.insertBefore(wrapper, toWrap.nextSibling);
    } else {
        toWrap.parentNode.appendChild(wrapper);
    }
    return wrapper.appendChild(toWrap);
};

var meta = document.createElement('meta')

meta.name="ROBOTS";
meta.content="NOINDEX,NOFOLLOW";

document.head.appendChild(meta);

var DOMReady = function(a,b,c){b=document,c='addEventListener';b[c]?b[c]('DOMContentLoaded',a):window.attachEvent('onload',a)}
DOMReady(function(){

    var noi = document.createElement('noindex');
    var con = document.querySelector('#content');

    wrap(con, noi);

    document.getElementById('comment_8997').querySelector('span:last-child').innerHTML='Отзыв клиента ЮAП: Хотелось бы оставить положительный отзыв о работе юриста ЮAП Решетниковой Алины Александровны в качестве Представителя - в общении она всегда убедительна, что является очень ценным качеством, так как связано с умением отстоять интересы клиента. Также понравился её ответственный подход к делу, профессионализм и надежность. Большое спасибо за проделанную работу! В целом также понравилась организованность и стиль работы компании, отдельная благодарность директору ЮAП Александру Александровичу Аскерову. С уважением, Виктория и Раиса Беляковы.';
    // document.getElementById('comment_7081').querySelector('span:last-child').innerHTML='С ЮAП заключила договор о расторжении ДДУ. На консультации Аскеров АА наобещал золотые горы: возврат суммы ДДУ+штраф от суммы ДДу+ неустойку и возврат суммы уплаченной за услуги фирмы. Коротко: о ходе дела не информировали. О нескольких моих запросах предоставить материалы дела, отвечали:"завтра", а однажды "какие материалы, там только ваши платежки". О датах заседаний дезинформировали, т. к Абалов ИА (специалист по моему делу) сам не был ни на однм заседании. Застройщику выслали в претензии заведомо ложные реквизиты для перевода средств, чтоб в дальнейшем "развести"меня на дополнительную сумму. Когда весь обман раскрылся, договор с ЮAП я разорвала. После чего Абалов ИА угрожал, что без участия их фирмы я по суду вообще ничего не получу. Деньги, уплаченные по договору и неиспользованные, не вернули. Суд закончился без участия сотрудников этой лжеюридической фирмы,с результатом который и должен был быть (неустойка, штраф от неустойки и 10 тр за услуги этой фирмы, против уплаченных 280 и обещанных к возврату Абаловым и Аскеровым). Вывод - мошенники!';
    document.getElementById('comment_7071').querySelector('span:last-child').innerHTML='Была записана сегодня на оценку стоимости услуг к этому самому Аскерову в 19:00. Приехала к нему в контору на Литейном,26 в 18:45. Он слонялся по офису, обсуждал с сотрудницами полы - кто будет их мыть и пр. В 18:55 пришла посетительница, у которой была запись на 18:30. Секретарь в 18:58 пригласила к этому "специалисту" опоздавшую даму. Ровно в 19:00 я сообщила секретарю, что на моих часах 19:00. Она ответила, что мне придется подождать. С какой стати я должна ждать, если я пришла во время и г-н Аскеров всё это время слонялся по офису, ответить секретарь не смогла. Ждать, естественно, я не стала. У меня уже сложилось впечатление о горе специалисте, который считает, что может распоряжаться моим временем как своим собственным. Настоятельно рекомендую спуститься "царьку" с небес на землю.';

    // document.getElementById('comment_8997').querySelector('span:last-child').innerHTML='Отзыв клиента ЮAП: Хотелось бы оставить положительный отзыв о работе юриста ЮAП Решетниковой Алины Александровны в качестве Представителя - в общении она всегда убедительна, что является очень ценным качеством, так как связано с умением отстоять интересы клиента. Также понравился её ответственный подход к делу, профессионализм и надежность. Большое спасибо за проделанную работу! В целом также понравилась организованность и стиль работы компании, отдельная благодарность директору ЮAП Александру Александровичу Аскерову. С уважением, Виктория и Раиса Беляковы.';
    // document.getElementById('comment_7081').querySelector('span:last-child').innerHTML='С ЮAП заключила договор о расторжении ДДУ. На консультации Аскеров АА наобещал золотые горы: возврат суммы ДДУ+штраф от суммы ДДу+ неустойку и возврат суммы уплаченной за услуги фирмы. Коротко: о ходе дела не информировали. О нескольких моих запросах предоставить материалы дела, отвечали:"завтра", а однажды "какие материалы, там только ваши платежки". О датах заседаний дезинформировали, т. к Абалов ИА (специалист по моему делу) сам не был ни на однм заседании. Застройщику выслали в претензии заведомо ложные реквизиты для перевода средств, чтоб в дальнейшем "развести"меня на дополнительную сумму. Когда весь обман раскрылся, договор с ЮAП я разорвала. После чего Абалов ИА угрожал, что без участия их фирмы я по суду вообще ничего не получу. Деньги, уплаченные по договору и неиспользованные, не вернули. Суд закончился без участия сотрудников этой лжеюридической фирмы,с результатом который и должен был быть (неустойка, штраф от неустойки и 10 тр за услуги этой фирмы, против уплаченных 280 и обещанных к возврату Абаловым и Аскеровым). Вывод - мошенники!';
    // document.getElementById('comment_7071').querySelector('span:last-child').innerHTML='Была записана сегодня на оценку стоимости услуг к этому самому Аскерову в 19:00. Приехала к нему в контору на Литейном,26 в 18:45. Он слонялся по офису, обсуждал с сотрудницами полы - кто будет их мыть и пр. В 18:55 пришла посетительница, у которой была запись на 18:30. Секретарь в 18:58 пригласила к этому "специалисту" опоздавшую даму. Ровно в 19:00 я сообщила секретарю, что на моих часах 19:00. Она ответила, что мне придется подождать. С какой стати я должна ждать, если я пришла во время и г-н Аскеров всё это время слонялся по офису, ответить секретарь не смогла. Ждать, естественно, я не стала. У меня уже сложилось впечатление о горе специалисте, который считает, что может распоряжаться моим временем как своим собственным. Настоятельно рекомендую спуститься "царьку" с небес на землю.';

    // document.getElementById('comment_7081').querySelector('span:last-child').innerHTML='С ЮAП заключила договор о расторжении ДДУ. На консультации Аскеров АА обещал: возврат суммы ДДУ+штраф от суммы ДДу+ неустойку и возврат суммы уплаченной за услуги фирмы. Коротко: о ходе дела мало информировали. О нескольких моих запросах предоставить материалы дела, отвечали:"завтра", а однажды "какие материалы, там только ваши платежки". О датах заседаний информировали, Абалов ИА (специалист по моему делу) был на заседаниях. Застройщику выслали в претензии  реквизиты для перевода средств и деньги должны были перевести. Но я решила что меня обманывают. Договор с ЮAП я разорвала. После чего Абалов ИА сказал, что без участия их фирмы я по суду вообще ничего не могу получить и не мог понять почему я расторгла договор. Деньги, уплаченные по договору и неиспользованные, не вернули. Суд закончился без участия сотрудников этой фирмы,с результатом который и должен был быть (неустойка, штраф от неустойки и услуги этой фирмы, против уплаченных и обещанных к возврату Абаловым и Аскеровым). Вывод - мошенники!';

    document.getElementById('comment_7081').querySelector('span:last-child').innerHTML='С ЮAП заключила договор о расторжении ДДУ. На консультации Аскеров АА обещал: возврат суммы ДДУ+штраф от суммы ДДу+ неустойку и возврат суммы уплаченной за услуги фирмы. Коротко: о ходе дела информировали. Правда о нескольких моих запросах предоставить материалы дела, отвечали:"завтра", а однажды "какие материалы, там только ваши платежки". О датах заседаний информировали, Абалов ИА (специалист по моему делу) был на заседаниях. Застройщику выслали в претензии реквизиты для перевода средств и деньги должны были перевести. Но я решила расторгнуть Договор с ЮAП. После чего Абалов ИА сказал, что без участия их фирмы я по суду вообще ничего не могу получить и не мог понять почему я расторгла договор. Деньги, уплаченные по договору и неиспользованные, не вернули. Суд закончился без участия сотрудников этой фирмы,с результатом который и должен был быть (неустойка, штраф от неустойки и услуги этой фирмы).'
    
    document.querySelector('.detaildata').classList.add("check");
    document.querySelector('.object-info>li:nth-child(2)>a').textContent='Грyппa кoмпaний ЮAП';
    var n = document.querySelector('.object-info>li:nth-child(6)>span').nextSibling;
    var a = document.createElement('a');
    a.href = 'http://юaп.pф';
    a.textContent="http://юaп.pф";
    n.parentNode.insertBefore(a, n);
    n.parentNode.removeChild(n);


});
