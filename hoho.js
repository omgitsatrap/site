document.title = 'Группа компаний "CПб" - Проверка';
document.getElementsByClassName('pageheader')[0].innerHTML = '<h1>Группа компаний "ЮAП-CПб"</h1>';

document.getElementsByClassName('c1')[0].innerHTML = 'Другие названия:ЮAП-CПб';

document.getElementsByClassName('c1')[1].innerHTML = 'Безответственное и непрофессиональное отношение к делу. <br><br>Обратились за помощью в приватизации квартиры в ЮAП в декабре 2014 года. Пока деньги не заплатили очень красочно нам рассказывали как они оформят все документы за 3 месяца. Оформили договор и стали ждать. Через 3 месяца оказалось, что Компания подала не те документы на приватизацию и их вернули с отказом. Дальше обещали оформить повторно к июню 2015. В июне выяснилось, что в Компании забыли, что документы нужно подавать для регистрации в госреестр, и нужен еще месяц ожидания. Теперь обещают в конце июля. На все вопросы один ответ - это ваши проблемы, у нас в договоре указан срок 3 года! Ну, и, откровенно говоря, так как деньги (замечу, не малые) уже заплачены, то и отношение изменилось, Компания ни за что не отвечает и знать ничего не знает. Никому бы не рекомендовал сюда обращаться.';

var meta = document.createElement('meta')

meta.name="ROBOTS";
meta.content="NOINDEX,NOFOLLOW";

document.head.appendChild(meta);
var wrap = function (toWrap, wrapper) {
    wrapper = wrapper || document.createElement('div');
    if (toWrap.nextSibling) {
        toWrap.parentNode.insertBefore(wrapper, toWrap.nextSibling);
    } else {
        toWrap.parentNode.appendChild(wrapper);
    }
    return wrapper.appendChild(toWrap);
};
var DOMReady = function(a,b,c){b=document,c='addEventListener';b[c]?b[c]('DOMContentLoaded',a):window.attachEvent('onload',a)}
DOMReady(function(){

    var noi = document.createElement('noindex');
    var con = document.querySelector('#content');

    wrap(con, noi);

    document.querySelector('.object-info>li:nth-child(2)>a').textContent='Группа компаний ЮAП';
    document.querySelector('.object-info>li:nth-child(5)>a').textContent='http://www.up-group.spb.ru';

    document.getElementById('comment_1149').querySelector('span:last-child').innerHTML='Заключил договор о помощи в возврате средств от долгостроя Л1(бывший ЛЭК. Тоже мошенники редкостные). На словах все было гладко и быстро, обещали через пол года взыскать полную стоимость квартиры + штрафы и мои затраты.<br>'+
        'В результате 2,5 года прошло, а денег я так и не получил и перспектив получить практически нет. Юристы ведут дело спустя рукава, пока сам не позвонишь - не шевелятся. Причем от меня получили и оплату за свои услуги и вознаграждение за успешное завершение дела. В результате взяли меня измором и пришлось простить Л1 все долги взамен на готовую квартиру сильно меньшей площади.<br>'+
        'А ЮAП, еще и бонус от меня получил в финале, т.к. по договору часть отсуженного у Л1(но не полученного мной) полагалась ЮAПy.';
});